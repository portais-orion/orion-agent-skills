# ORION-API-001

## Título

Manter contrato de API validado, evolutivo e com documentação protegida fora de desenvolvimento.

## Nível

CONTEXTUAL

## Motivação

Reduz quebra de consumidor e enumeração desnecessária de superfície interna.

## Problema que resolve

Entrada sem schema, erro instável, lista ilimitada, contrato implícito ou Swagger externo sem proteção.

## Exemplo correto

Validar request/response, erro consistente, paginação para coleção não limitada, política de compatibilidade e docs autenticadas/indisponíveis conforme ambiente.

## Exemplo incorreto

Expor docs internas na mesma rota pública sem allowlist/autorização.

## Como detectar

Inspecionar borda de rota, schemas, paginação, OpenAPI e configuração de ambiente.

## Automação

PARTIAL.

## Exceções

Não aplicável a biblioteca sem API de rede.

## ADR

Obrigatório para breaking change.

## Referências

[OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

## Finding ID

Exemplo: `APPX-API-001`; `standardId: ORION-API-001`.
