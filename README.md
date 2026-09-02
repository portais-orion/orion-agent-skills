# orion-agent-skills

Biblioteca Orion de conhecimento técnico reutilizável. Contém duas camadas complementares:

- `standards/`: política canônica para pessoas, agentes e CI;
- `skills/`: comportamento de agentes que carrega os standards aplicáveis.

Não contém findings, evidências ou scorecards históricos. Eles permanecem no repositório de auditoria.

## Arquitetura

```text
standards/
  engineering/          regras humanas ORION-*
  machine-readable/     regras estruturadas e schema
  reference-architecture/ profiles e boundaries
  golden-path/          sistema novo e existente
skills/
  ...                   18 skills Orion existentes
  orion/                8 skills de auditoria Orion
```

`ORION-SEC-001` é ID de Standard. Finding usa ID distinto, por exemplo `SF-SEC-001`, e declara `standardId: ORION-SEC-001`. Severity (`CRITICAL` a `OPPORTUNITY`), priority (`P0` a `P4`) e effort (`XS` a `XL`) são campos independentes.

## Skills Orion de auditoria

- `audit-orion-codebase`: orquestradora read-only; despacha sete auditores.
- `orion-architecture`, `orion-quality`, `orion-security`, `orion-observability`, `orion-platform`, `orion-frontend`, `orion-engineering-experience`.

As skills não repetem texto de regra. Consultam `standards/engineering/` e `standards/machine-readable/`.

## Instalar

Instalador Orion, recomendado:

```bash
npx @portais-orion/skills@latest
```

Teste local/discovery:

```bash
npx skills@latest add C:/projetos/orion-agent-skills --list
```

Instalação isolada para Claude Code e Codex:

```bash
npx skills@latest add C:/projetos/orion-agent-skills --skill '*' -g -a claude-code -a codex -y
```

Use HOME isolado durante esse teste. Não publique pacote npm nesta etapa.

## Criar regra

1. Criar `standards/engineering/ORION-<CATEGORIA>-NNN.md` em pt-BR.
2. Criar representação equivalente em `standards/machine-readable/` conforme `schema.yaml`.
3. Declarar aplicabilidade, detecção, exceção e ADR.
4. Atualizar somente a skill auditora responsável; não copiar regra para ela.
5. Executar contrato, discovery e instalação isolada.

## Criar skill

Usar nome único, frontmatter válido e descrição pt-BR que explique quando usar. Não vendorizar `mattpocock/skills` ou `obra/superpowers`; são upstreams externos usados pelo `orion-skills-cli`.

## Validar

```bash
node tests/orion-library-contract.test.mjs
npx skills@latest add C:/projetos/orion-agent-skills --list
```

Nenhum push/publicação é automático.
