# ORION-SUPPLY-001

## Título

Usar dependências de entrega imutáveis e registrar proveniência quando suportada.

## Nível

RECOMMENDED

## Motivação

Deploy deve apontar para os mesmos bytes revisados e investigáveis.

## Problema que resolve

Tags `latest` em imagem ou action mutável alteram build sem mudança revisada.

## Exemplo correto

Fixar action em SHA comentado e imagem em digest; promover mesmo digest; gerar SBOM/proveniência quando plataforma suportar.

## Exemplo incorreto

Publicar ou implantar `latest`.

## Como detectar

Analisar workflows, Dockerfiles e Compose.

## Automação

YES.

## Exceções

Ambiente descartável de desenvolvimento local.

## ADR

Não aplicável.

## Referências

[SLSA](https://slsa.dev/spec/v1.0/).

## Finding ID

Exemplo: `APPX-SUPPLY-001`; `standardId: ORION-SUPPLY-001`.
