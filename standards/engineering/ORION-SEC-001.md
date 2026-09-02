# ORION-SEC-001

## Título

Autorizar acesso a recursos e validar toda entrada não confiável.

## Nível

REQUIRED

## Motivação

Evita acesso entre tenants, IDOR e processamento de dados inválidos.

## Problema que resolve

Cliente de persistência global, download público por caminho opaco ou rota sem schema podem ignorar escopo, papel e formato esperado.

## Exemplo correto

Aplicar schema no ingresso; obter tenant e identidade da sessão; consultar recurso com predicado de tenant e política de papel antes de ler, alterar ou baixar.

## Exemplo incorreto

Receber `resourceId` e buscar com cliente global sem escopo/autorização.

## Como detectar

Revisar rotas e adaptadores de persistência; executar matriz papel × tenant × ID; procurar acesso público a recurso classificado como privado.

## Automação

PARTIAL — AST identifica rotas sem validação; teste de contrato comprova autorização.

## Exceções

Somente recurso explicitamente público, classificado e documentado.

## ADR

Obrigatório para exceção.

## Referências

[OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

## Finding ID

Exemplo: `APPX-SEC-001`; `standardId: ORION-SEC-001`.
