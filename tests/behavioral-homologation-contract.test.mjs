import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const artifactPath = process.argv[2];
assert.ok(artifactPath, 'Informe o caminho do artefato de homologação.');
const report = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
const byId = Object.fromEntries(report.scenarios.map((scenario) => [scenario.id, scenario]));

for (const scenario of report.scenarios) {
  assert.equal(scenario.language, 'pt-BR', `${scenario.id}: idioma`);
  assert.equal(scenario.git.before, '', `${scenario.id}: git antes deve estar limpo`);
  assert.equal(scenario.git.after, '', `${scenario.id}: git depois deve estar limpo`);
}

const security = byId.security;
assert.ok(security.selectedAuditors.includes('orion-security'));
assert.ok(security.loadedStandards.includes('ORION-SEC-001'));
const secFinding = security.findings[0];
for (const field of ['id', 'standardId', 'severity', 'priority', 'effort', 'confidence', 'classification', 'recommendation']) {
  assert.ok(secFinding[field], `security: campo ${field}`);
}
assert.notEqual(secFinding.id, secFinding.standardId, 'IDs de finding e Standard não podem coincidir');
assert.match(secFinding.evidence[0].path, /src[\\/]routes[\\/]invoices\.js$/);

const backend = byId.backendOnly;
assert.equal(backend.auditorDisposition['orion-frontend'], 'N/A');
for (const auditor of ['orion-architecture', 'orion-quality', 'orion-security', 'orion-platform']) {
  assert.equal(backend.auditorDisposition[auditor], 'RUN', `backend-only: ${auditor}`);
}

const platform = byId.platform;
assert.ok(platform.selectedAuditors.includes('orion-platform'));
assert.ok(platform.loadedStandards.includes('ORION-DOCKER-001'));
assert.ok(platform.loadedStandards.includes('ORION-CI-001'));
assert.ok(platform.findings.every((finding) => finding.evidence.every((item) => item.path && item.lines)));

assert.equal(byId.conformant.findings.length, 0, 'projeto conforme não recebe finding inventado');

const dedup = byId.deduplication;
assert.equal(dedup.findings.length, 1, 'deduplicação mantém apenas um finding principal');
assert.equal(dedup.consolidatedReferences[0].auditor, 'orion-security');
assert.equal(dedup.consolidatedReferences[0].findingId, dedup.findings[0].id);

const validRuntimeOutcomes = ['PASS', 'FAIL', 'NÃO VALIDADO NESTE AMBIENTE'];
for (const key of ['claudeCode', 'codexCli']) {
  assert.ok(validRuntimeOutcomes.includes(report.runtimeCompatibility[key]), `runtimeCompatibility.${key} deve ser PASS, FAIL ou NÃO VALIDADO NESTE AMBIENTE`);
}
assert.ok(fs.existsSync(path.resolve(path.dirname(artifactPath), report.htmlReport)), 'relatório HTML ausente');

console.log('Contrato da homologação comportamental: OK');
