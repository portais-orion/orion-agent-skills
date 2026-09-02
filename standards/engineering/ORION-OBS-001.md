# ORION-OBS-001

## Título

Instrumentar serviço de produção com logs estruturados, métricas, traces e health significativo.

## Nível

RECOMMENDED

## Motivação

Permite diagnosticar falha nova sem alterar código sob incidente.

## Problema que resolve

Serviço só possui log local/health superficial, sem correlação nem sinais de dependência.

## Exemplo correto

Emitir logs redigidos com correlation/trace ID, métricas RED e de dependências, traces distribuídos e readiness alinhada a dependências críticas.

## Exemplo incorreto

Usar somente `console.log` e endpoint que retorna sucesso sem verificar caminho essencial.

## Como detectar

Inspecionar instrumentação, health, coleta e documentação de alertas; validar entrega em runtime.

## Automação

PARTIAL.

## Exceções

Ferramenta estática sem processo de longa duração.

## ADR

Não aplicável.

## Referências

[OpenTelemetry](https://opentelemetry.io/docs/).

## Finding ID

Exemplo: `APPX-OBS-001`; `standardId: ORION-OBS-001`.
