# ORION-DATA-001

## Título

Versionar, revisar e tornar obrigatória toda alteração de schema persistente.

## Nível

REQUIRED

## Motivação

Protege histórico, compatibilidade, rollback e integridade dos dados.

## Problema que resolve

`db push` permissivo em ambiente compartilhado e migration que pode falhar sem bloquear deploy.

## Exemplo correto

Migration imutável revisada, estratégia expand/contract, validação pós-migração e runbook de restore/rollback.

## Exemplo incorreto

Alterar schema de produção sem arquivo versionado ou com `allow_failure`.

## Como detectar

Verificar diretório de migrations, scripts e workflow de deploy.

## Automação

PARTIAL.

## Exceções

Banco efêmero de desenvolvimento local.

## ADR

Obrigatório para operação incompatível.

## Referências

[NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final).

## Finding ID

Exemplo: `APPX-DATA-001`; `standardId: ORION-DATA-001`.
