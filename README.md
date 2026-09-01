# orion-agent-skills

Biblioteca central de [Agent Skills](https://github.com/vercel-labs/skills) do Grupo Orion.

## Propósito

Este repositório contém **apenas** conhecimento próprio ou generalizado do grupo:

1. skills criadas pela Orion;
2. skills extraídas e generalizadas dos nossos sistemas (aplicando a regra 80/20 — ver abaixo);
3. skills compartilhadas por stack/plataforma (NestJS+Prisma, Next.js, Expo);
4. skills específicas da plataforma Orion (o Design System) que fazem sentido para vários
   projetos do grupo.

## O que este repositório NÃO contém

Skills de terceiros (`mattpocock/skills`, `obra/superpowers`) **nunca** são copiadas para cá.
Elas continuam sendo consumidas diretamente do repositório upstream de cada autor, instaladas
junto com as skills deste repositório por [`@portais-orion/skills`](https://github.com/portais-orion/orion-skills-cli)
(o instalador do grupo). Se uma skill deste repositório tem o mesmo propósito de uma skill de
`mattpocock/skills` ou `obra/superpowers`, ela não deveria estar aqui — a menos que exista uma
customização real e documentada da Orion sobre ela (nesse caso, o nome não deve colidir com o da
fonte externa).

## Como instalar

Via o instalador do grupo (recomendado — instala isto junto com Matt Pocock e Superpowers, para
Claude Code e Codex, com um comando):

```bash
npx @portais-orion/skills@latest
```

Ou isoladamente, via o CLI oficial de Agent Skills:

```bash
npx skills@latest add portais-orion/orion-agent-skills --skill '*' --global --agent claude-code --agent codex --yes
```

## Estrutura

```
skills/
├── design-system-orion/
│   ├── orion-design-system-adoption/   Migrar uma tela existente para o Design System Orion
│   ├── orion-design-system-guardian/   Guardião de uso correto do Design System já adotado
│   └── new-portal/                     Criar um portal novo consumindo o Orion desde o início
├── backend/
│   ├── nestjs-prisma-patterns/         Estrutura de módulo NestJS + checklist de review
│   ├── prisma-schema-change/           Procedimento seguro de migração de schema
│   ├── jwt-refresh-token-pattern/      Três armadilhas do padrão JWT access+refresh
│   ├── rabbitmq-outbox-worker-pattern/ Padrão Outbox + worker assíncrono
│   ├── audit-trail-pattern/            Trilha de auditoria em duas camadas
│   └── permission-catalog-pattern/     Catálogo de permissões módulo→atividade→permissão
├── frontend/
│   └── nextjs-app-router-patterns/     Convenções de página/rota no App Router
├── mobile/
│   ├── expo-react-native-patterns/     Qualidade, acessibilidade e testes em Expo/RN
│   ├── mobile-security-baseline/       Checklist de segurança mobile
│   └── idempotent-critical-mutation/   Como proteger uma mutação irreversível na UI
└── platform/
    ├── pre-deploy-check/               Gate determinístico antes de push/deploy
    ├── observability-otel-lgtm-pattern/ Tracing, RUM, métricas e logs (OTEL + LGTM)
    ├── feature-flags-growthbook-pattern/ Nomenclatura, fallback e ciclo de vida de flags
    ├── feature-lifecycle-orchestrator-pattern/ Padrão de orquestração multi-agente
    └── knowledge-graph-first-navigation/ Navegar por grafo de conhecimento antes de grep cru
```

Cada skill é uma pasta com um único `SKILL.md`, no formato padrão de Agent Skills — o nome da
pasta é sempre igual ao `name` do frontmatter.

## Política 80/20

Quando uma skill de origem tinha 80% de conteúdo genérico e 20% específico de um projeto, só o
genérico foi trazido para cá. Exemplo real aplicado nesta biblioteca: uma skill de mutação crítica
continha regras genéricas de proteção contra duplo toque/timeout (o padrão, trazido para cá) e
regras específicas de uma operação de negócio de um produto (nomes de tabela, caminho de arquivo,
regra de domínio — que continuam só no projeto de origem). O critério de decisão foi sempre: "essa
frase ainda faz sentido se eu apagar o nome do produto?" — se não fizer, ficou de fora.

## Como criar uma skill nova

1. Escolha a categoria (`skills/<categoria>/<nome-da-skill>/SKILL.md`) — crie uma categoria nova
   se nenhuma existente couber.
2. Frontmatter obrigatório:
   ```yaml
   ---
   name: nome-da-skill
   description: >
     Explique QUANDO usar esta skill, não apenas o que ela contém — a description é o que decide
     se um agente a descobre na hora certa.
   ---
   ```
3. `name` tem que ser idêntico ao nome da pasta.
4. Escreva o procedimento em si. Prefira referenciar a documentação do próprio projeto consumidor
   (`docs/technical/*.md` ou equivalente) a incorporar conteúdo específico de um produto — isso é
   o que mantém a skill genérica com o tempo.
5. Antes de propor a skill, pergunte: isso já existe em `mattpocock/skills` ou
   `obra/superpowers`? Se sim, não duplique — a menos que exista uma customização real da Orion
   sobre ela, documentada como tal.
6. Teste localmente antes de enviar (ver abaixo).

## Como testar

Localmente, antes de dar push:

```bash
npx skills@latest add /caminho/local/para/orion-agent-skills --list
```

Confirme que a skill nova aparece na lista com o nome e a description esperados.

Depois do push, valide contra o repositório remoto:

```bash
npx skills@latest add portais-orion/orion-agent-skills --list
```

As mesmas skills devem aparecer — se não aparecerem, o problema está no frontmatter ou na
estrutura de pastas, não no conteúdo.

## Política de não vendorizar terceiros

Nunca copie, forke ou espelhe uma skill de `mattpocock/skills` ou `obra/superpowers` para dentro
deste repositório — mesmo que "só para ajustar uma linha". Se uma skill externa precisa de uma
adaptação real para o contexto Orion, o caminho correto é: (1) confirmar que a adaptação é
substancial o suficiente para justificar uma skill nova e distinta (não uma cópia com nome igual),
(2) dar um nome que não colida com o da fonte externa, (3) documentar no `SKILL.md` de onde veio a
inspiração. Uma skill Orion com o mesmo nome de uma skill externa é tratada como bug — reporte e
corrija (renomeie ou remova).
