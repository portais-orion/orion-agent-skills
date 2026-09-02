# ORION-CI-001

## Título

Executar gates de qualidade e segurança antes de promover mudança protegida.

## Nível

REQUIRED

## Motivação

Release não pode depender somente de check local ou deploy em `main`.

## Problema que resolve

Tipagem, regressão, segredo, dependência vulnerável ou checkout errado chegam ao ambiente de entrega sem bloqueio reprodutível.

## Exemplo correto

Em PR protegido: instalação congelada, lint sem escrita, typecheck, testes por risco, build, SAST/SCA/secret scan; deploy promove artefato imutável já validado.

## Exemplo incorreto

Pipeline que faz `git pull` em host e deploya diretamente após push.

## Como detectar

Ler workflow e verificar gatilhos, jobs obrigatórios, permissões mínimas e passagem de artefato.

## Automação

YES.

## Exceções

Somente artefato sem produção, com ADR expirável.

## ADR

Obrigatório.

## Referências

[NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final).

## Finding ID

Exemplo: `APPX-CI-001`; `standardId: ORION-CI-001`.
