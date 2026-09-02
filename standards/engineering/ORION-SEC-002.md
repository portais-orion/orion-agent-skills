# ORION-SEC-002

## Título

Proibir segredo previsível, fallback de produção e bypass global de transporte seguro.

## Nível

REQUIRED

## Motivação

Configuração ausente não pode transformar instalação em acesso privilegiado ou tráfego interceptável.

## Problema que resolve

Senha de seed conhecida, `JWT_SECRET` fallback, credencial padrão ou HTTP/TLS inseguro habilitado globalmente.

## Exemplo correto

Validar configuração no boot; falhar sem segredo forte fora de teste; usar gerenciador de segredos; permitir exceção TLS/ATS somente por domínio e perfil local controlado.

## Exemplo incorreto

`secret = ENV_SECRET || 'fallback'` ou `usesCleartextTraffic=true` em build de release.

## Como detectar

Secret/config scan, política de Compose e inspeção de manifesto mobile.

## Automação

YES para padrões conhecidos; PARTIAL para classificação de perfil.

## Exceções

Fixture de teste isolada, sem artefato distribuível.

## ADR

Obrigatório para exceção de transporte local.

## Referências

[NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final).

## Finding ID

Exemplo: `APPX-SEC-002`; `standardId: ORION-SEC-002`.
