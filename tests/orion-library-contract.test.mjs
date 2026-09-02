import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const requiredSkills = [
  'audit-orion-codebase',
  'orion-architecture',
  'orion-quality',
  'orion-security',
  'orion-observability',
  'orion-platform',
  'orion-frontend',
  'orion-engineering-experience',
];
const requiredStandards = [
  'ORION-SEC-001', 'ORION-SEC-002', 'ORION-CI-001', 'ORION-CI-002', 'ORION-DATA-001',
  'ORION-REL-001', 'ORION-OBS-001', 'ORION-SUPPLY-001', 'ORION-UI-001',
  'ORION-A11Y-001', 'ORION-DOC-001', 'ORION-DX-001', 'ORION-DOCKER-001',
  'ORION-API-001', 'ORION-STATIC-001', 'ORION-GOV-001',
];

for (const dir of ['standards/engineering', 'standards/machine-readable', 'standards/reference-architecture', 'standards/golden-path']) {
  assert.ok(existsSync(join(root, dir)), `diretório ausente: ${dir}`);
}
for (const file of ['standards/finding-schema.md', 'standards/scoring.md', 'standards/report-html.md']) {
  assert.ok(existsSync(join(root, file)), `documento canônico ausente: ${file}`);
}
for (const id of requiredStandards) {
  assert.ok(existsSync(join(root, 'standards/engineering', `${id}.md`)), `standard ausente: ${id}`);
}
for (const name of requiredSkills) {
  const file = join(root, 'skills/orion', name, 'SKILL.md');
  assert.ok(existsSync(file), `skill ausente: ${name}`);
  const content = readFileSync(file, 'utf8');
  assert.match(content, new RegExp(`name: ${name}`));
  assert.match(content, /description: Use quando/);
  assert.match(content, /standards\//);
}
const schema = readFileSync(join(root, 'standards/machine-readable/schema.yaml'), 'utf8');
assert.match(schema, /severity: \{ enum: \[CRITICAL, HIGH, MEDIUM, LOW, OPPORTUNITY\] \}/);
assert.match(schema, /priority: \{ enum: \[P0, P1, P2, P3, P4\] \}/);
const finding = readFileSync(join(root, 'standards/engineering/ORION-SEC-001.md'), 'utf8');
assert.match(finding, /Finding ID/);

for (const id of requiredStandards) {
  assert.ok(existsSync(join(root, 'standards/machine-readable', `${id}.yaml`)), `machine-readable ausente: ${id}`);
}

// Regressão: o pattern do schema precisa aceitar categorias com dígito (ex.: A11Y).
const idPatternMatch = schema.match(/pattern: '(\^ORION-.*\$)'/);
assert.ok(idPatternMatch, 'schema.yaml deve declarar pattern de id');
const idPattern = new RegExp(idPatternMatch[1]);
assert.ok(idPattern.test('ORION-A11Y-001'), 'pattern de id do schema deve aceitar ORION-A11Y-001');
for (const id of requiredStandards) {
  assert.ok(idPattern.test(id), `pattern de id do schema deve aceitar ${id}`);
}

// Nenhum Standard operacional deve exemplificar Finding ID com prefixo de sistema histórico real do baseline.
const historicalPrefixes = /\b(SF|PS|AUR|FOR|AM|ST|NUC|TOOL)-[A-Z0-9]+-\d{3}\b/;
for (const id of requiredStandards) {
  const content = readFileSync(join(root, 'standards/engineering', `${id}.md`), 'utf8');
  const exampleLine = content.match(/^Exemplo:.*$/m);
  if (exampleLine) {
    assert.doesNotMatch(exampleLine[0], historicalPrefixes, `${id}: exemplo de Finding ID não deve usar prefixo de sistema histórico real`);
  }
}

console.log('Contrato da biblioteca Orion: OK');
