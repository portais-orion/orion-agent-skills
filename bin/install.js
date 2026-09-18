#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

function buildInstallCommand(packageDir, rawArgs = []) {
  const hasGlobalFlag = rawArgs.includes('-g') || rawArgs.includes('--global');
  const filteredArgs = rawArgs.filter(arg => arg !== '-g' && arg !== '--global');
  let cmd = `npx skills@latest add "${packageDir}"`;

  if (filteredArgs.length > 0) {
    cmd += ` ${filteredArgs.join(' ')}`;
  }

  return { cmd, hasGlobalFlag, filteredArgs };
}

if (require.main === module) {
  const packageDir = path.resolve(__dirname, '..');
  const rawArgs = process.argv.slice(2);
  const { cmd, hasGlobalFlag } = buildInstallCommand(packageDir, rawArgs);

  console.log('\n🌟 Instalador Orion Agent Skills');
  if (hasGlobalFlag) {
    console.log('⚠️  Aviso: Instalação global desativada. As skills Orion são instaladas exclusivamente no escopo local do projeto.');
  }
  console.log(`📁 Instalando localmente no projeto: ${process.cwd()}\n`);
  console.log(`> Executando: ${cmd}\n`);

  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (error) {
    process.exit(error.status || 1);
  }
}

module.exports = { buildInstallCommand };
