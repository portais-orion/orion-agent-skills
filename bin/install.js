#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const readline = require('readline');

const packageDir = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const argsString = args.join(' ');

function run(isGlobal) {
  let cmd = `npx skills@latest add "${packageDir}"`;
  
  if (isGlobal && !args.includes('-g') && !args.includes('--global')) {
    cmd += ' -g';
  }
  
  if (argsString.trim().length > 0) {
    cmd += ` ${argsString}`;
  } else {
    // Se o usuário não passar argumentos, abrimos o modo interativo por padrão
    cmd += ` --list`;
  }
  
  console.log(`\n> Executando: ${cmd}\n`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (error) {
    process.exit(error.status || 1);
  }
}

// Pula a pergunta caso esteja automatizando (-y, --yes) ou já tenha pedido global explicito
if (args.includes('-y') || args.includes('--yes') || args.includes('-g') || args.includes('--global')) {
  run(args.includes('-g') || args.includes('--global'));
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\n🌟 Instalador Orion Agent Skills');
  console.log('💡 Recomendamos a instalação LOCAL para que as regras sejam commitadas no repositório do projeto e fiquem padronizadas para todo o time.\n');
  
  rl.question('Deseja instalar (L)ocalmente ou (G)lobalmente? [L/g]: ', (answer) => {
    rl.close();
    const isGlobal = answer.trim().toLowerCase() === 'g';
    run(isGlobal);
  });
}
