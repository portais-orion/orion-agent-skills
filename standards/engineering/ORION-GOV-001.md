# ORION-GOV-001

## Título

Evitar bus factor 1 em sistema crítico de produção.

## Nível

RECOMMENDED (candidato a REQUIRED em versão futura para sistemas acima de um limiar de uso/criticidade)

## Motivação

Um sistema em uso ativo de produção não deve depender de uma única pessoa para todo o histórico de commits, revisão de PR e conhecimento operacional — a vantagem técnica de um sistema não sobrevive à saída ou indisponibilidade de quem o conhece sozinho.

## Problema que resolve

Repositório com bus factor 1 (100% ou quase 100% dos commits de um único autor), sem `CODEOWNERS` e sem segundo revisor obrigatório em branch protegida.

## Exemplo correto

Ao menos dois mantenedores com contexto de incidente; `CODEOWNERS` definido; branch protection exigindo aprovação de outra pessoa antes de merge na branch principal.

## Exemplo incorreto

Repositório crítico com 100% dos commits de uma única pessoa, sem `CODEOWNERS` e sem evidência de segundo revisor.

## Como detectar

Distribuição de autoria via `git shortlog -sne` cruzada com presença de `CODEOWNERS` e configuração de branch protection.

## Automação

YES — totalmente automatizável.

## Exceções

Permitida quando o sistema não está em uso ativo de produção ou não há mais de um colaborador disponível na organização para o perfil técnico exigido; exige ADR.

## ADR

Obrigatório para exceção.

## Referências

Origem histórica: `ORION ENGINEERING AUDIT — BASELINE 2026-09`.

## Finding ID

Exemplo: `APPX-GOV-001`; `standardId: ORION-GOV-001`.
