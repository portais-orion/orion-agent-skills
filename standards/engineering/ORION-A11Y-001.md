# ORION-A11Y-001

## Título

Preservar semântica, foco e interação acessível em componentes e fluxos críticos.

## Nível

RECOMMENDED

## Motivação

Defeito em componente reutilizável propaga barreira para todos os consumidores.

## Problema que resolve

Controle interativo aninhado, modal sem trap/restauração de foco ou violação a11y apenas informativa.

## Exemplo correto

Controles irmãos válidos; modal posiciona/trava/restaura foco; testes de teclado/a11y bloqueiam regressão nova.

## Exemplo incorreto

`button` dentro de `button` ou `aria-modal` sem gerenciamento de foco.

## Como detectar

Lint/a11y test, teste de teclado e validação com leitor de tela para fluxo crítico.

## Automação

PARTIAL.

## Exceções

Não aplicável a elemento não interativo.

## ADR

Waiver temporário exige ADR e expiração.

## Referências

[WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Finding ID

Exemplo: `APPX-A11Y-001`; `standardId: ORION-A11Y-001`.
