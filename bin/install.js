#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const packageDir = path.resolve(__dirname, '..');
const args = process.argv.slice(2).join(' ');

try {
  // O README recomenda usar npx @skills-portais-orion/skills@latest
  // Esse comando será o equivalente a npx skills@latest add <dir>
  let cmd = `npx skills@latest add "${packageDir}"`;
  
  if (args.trim().length > 0) {
    cmd += ` ${args}`;
  } else {
    // Se o usuário não passar argumentos, abrimos o modo interativo por padrão
    cmd += ` --list`;
  }
  
  console.log(`> Executando: ${cmd}\n`);
  execSync(cmd, { stdio: 'inherit' });
} catch (error) {
  process.exit(error.status || 1);
}

