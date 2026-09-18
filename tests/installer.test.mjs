import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { buildInstallCommand } = require('../bin/install.js');

const fakePackageDir = 'C:/projetos/orion-agent-skills';

// Cenário 1: Sem argumentos (deve rodar interativo sem --list e sem -g)
{
  const { cmd, hasGlobalFlag, filteredArgs } = buildInstallCommand(fakePackageDir, []);
  assert.equal(hasGlobalFlag, false);
  assert.deepEqual(filteredArgs, []);
  assert.equal(cmd, `npx skills@latest add "${fakePackageDir}"`);
  assert.doesNotMatch(cmd, /--list/);
  assert.doesNotMatch(cmd, /\s-g\b/);
  assert.doesNotMatch(cmd, /--global/);
}

// Cenário 2: Tentativa de passar flag global -g ou --global deve ser filtrada
{
  const { cmd: cmdShort, hasGlobalFlag: hasShort } = buildInstallCommand(fakePackageDir, ['-g', '--skill', 'pre-deploy-check']);
  assert.equal(hasShort, true);
  assert.doesNotMatch(cmdShort, /\s-g\b/);
  assert.match(cmdShort, /--skill pre-deploy-check/);

  const { cmd: cmdLong, hasGlobalFlag: hasLong } = buildInstallCommand(fakePackageDir, ['--global', '-y']);
  assert.equal(hasLong, true);
  assert.doesNotMatch(cmdLong, /--global/);
  assert.match(cmdLong, /-y/);
}

// Cenário 3: Passagem de argumentos específicos de skill e automação
{
  const { cmd, filteredArgs } = buildInstallCommand(fakePackageDir, ['--skill', '*', '-y']);
  assert.deepEqual(filteredArgs, ['--skill', '*', '-y']);
  assert.equal(cmd, `npx skills@latest add "${fakePackageDir}" --skill * -y`);
}

console.log('Contrato do instalador local: OK');

