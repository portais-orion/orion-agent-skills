# ORION-DOCKER-001

## Título

Executar perfil containerizado com imagem e rede seguras por padrão.

## Nível

CONTEXTUAL

## Motivação

Container não deve expor serviço interno, iniciar com segredo default ou produzir artefato não reproduzível.

## Problema que resolve

Imagem mutável, processo root, porta de banco/storage publicada e credencial fallback.

## Exemplo correto

Imagem mínima pinada, usuário não-root, healthcheck, secrets validados, dependências em rede privada e só edge público publicado.

## Exemplo incorreto

Compose de produção publica Postgres/MinIO/dashboard sem controle de borda.

## Como detectar

Analisar Dockerfile/Compose, portas, `USER`, imagem/digest, healthcheck e defaults.

## Automação

YES/PARTIAL.

## Exceções

Não aplicável a perfil sem container.

## ADR

Obrigatório para publicar serviço interno.

## Referências

[NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final).

## Finding ID

Exemplo: `APPX-PLAT-001`; `standardId: ORION-DOCKER-001`.
