# ORION-STATIC-001

## Título

Validar dados e saídas de ferramenta estática antes de publicar.

## Nível

CONTEXTUAL

## Motivação

JSON válido não garante tipo, URL segura, renderização consistente ou exportação segura.

## Problema que resolve

URL perigosa renderizada em `href`, CSV com fórmula, schema parcial e regressão de teclado/modal sem teste.

## Exemplo correto

Aplicar JSON Schema, allowlist de protocolo, neutralização CSV e smoke browser para rota, filtro, modal e exportação.

## Exemplo incorreto

Tratar URL inválida como aviso e ainda renderizá-la.

## Como detectar

Executar schema validator, fixture maliciosa e teste de navegador.

## Automação

YES/PARTIAL.

## Exceções

Não aplicável a sistema sem publicação estática dirigida por dados.

## ADR

Não aplicável.

## Referências

[OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

## Finding ID

Exemplo: `APPX-STATIC-001`; `standardId: ORION-STATIC-001`.
