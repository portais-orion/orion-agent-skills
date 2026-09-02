# ORION-CI-002

## Título

Documentar gate de CI nascido de incidente real como teste de regressão permanente.

## Nível

RECOMMENDED

## Motivação

Um incidente de produção cuja causa raiz é expressável como checagem automatizável deve virar proteção permanente, não uma correção pontual esquecida.

## Problema que resolve

Corrigir um incidente ad hoc sem adicionar gate de regressão; workflow de deploy que roda independente do status do CI.

## Exemplo correto

Job de CI nomeado e permanente, referenciando o incidente em comentário; workflow de deploy depende (`workflow_run`/`needs`) do sucesso completo do workflow de CI, não apenas de sua existência.

## Exemplo incorreto

Workflow de deploy disparando independente do resultado do CI, ou correção de incidente sem checagem de regressão associada.

## Como detectar

Ler o grafo de dependência dos workflows; confirmar que o job de deploy depende do job de CI via `workflow_run` ou `needs`.

## Automação

YES.

## Exceções

Nenhuma — custo de implementação é próximo de zero uma vez que a checagem subjacente exista.

## ADR

Obrigatório para exceção.

## Referências

Origem histórica: `ORION ENGINEERING AUDIT — BASELINE 2026-09`.

## Finding ID

Exemplo: `APPX-CI-002`; `standardId: ORION-CI-002`.
