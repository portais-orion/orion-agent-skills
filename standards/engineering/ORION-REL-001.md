# ORION-REL-001

## Título

Garantir idempotência e reconciliação de comando remoto crítico.

## Nível

REQUIRED

## Motivação

Timeout ou queda de rede não pode duplicar nem perder operação de negócio.

## Problema que resolve

Estado local terminal antes de confirmação remota, retry cego ou comando sem chave de correlação.

## Exemplo correto

Persistir comando/outbox com chave idempotente, estado de tentativa e correlação; concluir somente após confirmação; reconciliar resultado desconhecido.

## Exemplo incorreto

Marcar operação concluída localmente e remover da fila após falha de upload.

## Como detectar

Seguir máquina de estados, timeout, retry e contrato servidor/cliente.

## Automação

PARTIAL.

## Exceções

Operação estritamente de leitura.

## ADR

Não aplicável para regra; exigido se consistência escolhida for eventual.

## Referências

Padrão Outbox Orion.

## Finding ID

Exemplo: `APPX-REL-001`; `standardId: ORION-REL-001`.
