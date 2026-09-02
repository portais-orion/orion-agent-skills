# ORION-UI-001

## Título

Construir UI compartilhada com tokens semânticos e limites de camada explícitos.

## Nível

RECOMMENDED

## Motivação

Evita forks visuais, cores de marca em componente e código de domínio dentro de biblioteca reutilizável.

## Problema que resolve

Primitiva acoplada a portal, query ou tema de marca.

## Exemplo correto

Tokens → primitivas → blocos; componente recebe intenção semântica e não importa domínio/roteamento do consumidor.

## Exemplo incorreto

Botão reutilizável com cor hexadecimal de marca e import de query do portal.

## Como detectar

Executar purity check, procurar cor literal/import proibido e revisar fronteiras de pacote.

## Automação

YES/PARTIAL.

## Exceções

Tela isolada sem componente compartilhado.

## ADR

Não aplicável.

## Referências

Nucleo Portais — limites executáveis de UI.

## Finding ID

Exemplo: `APPX-UI-001`; `standardId: ORION-UI-001`.
