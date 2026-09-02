# Cenários de homologação comportamental

Fixtures sem dados reais, descartáveis. Executar `audit-orion-codebase` (ou a skill indicada) sobre cada fixture e comparar a saída com a expectativa. IDs de finding gerados aqui nunca reutilizam um ID do `ORION ENGINEERING AUDIT — BASELINE 2026-09` (`SF-*`, `PS-*`, `AUR-*`, `FOR-*`, `AM-*`, `ST-*`, `NUC-*`, `TOOL-*`).

| Cenário | Fixture | Skill | Resultado esperado |
|---|---|---|---|
| A — Security | `fixtures/backend-api` | `orion-security` (via orquestradora) | Profile `backend-api`; `orion-security` selecionado; regra `ORION-SEC-001` carregada; finding com `standardId: ORION-SEC-001`, ID próprio (nunca `SF-SEC-*`), evidência em `src/routes/invoices.js`, recomendação em pt-BR. |
| B — Backend only | `fixtures/backend-api` | `audit-orion-codebase` | Profile `backend-api`; `orion-frontend` com disposição `N/A`; demais auditores aplicáveis (`architecture`, `quality`, `security`, `platform`) com disposição `RUN`. |
| C — Platform | `fixtures/platform-risk` | `orion-platform` (via orquestradora) | Regras `ORION-DOCKER-001` e `ORION-CI-001` carregadas; porta interna exposta, tag `latest` e workflow sem gates relatados com evidência `arquivo:linha`; `standardId` presente em cada finding. |
| D — Conforme | `fixtures/conformant-api` | `audit-orion-codebase` | Projeto deliberadamente conforme a `ORION-SEC-001` (autorização por tenant/papel explícita). Zero findings reais; nenhum finding inventado para preencher o relatório. |
| E — Deduplicação | `fixtures/dedup-risk` | `audit-orion-codebase` | Mesma causa raiz (porta administrativa pública) detectada por `orion-security` e `orion-platform` → **um único** finding principal, com o auditor não-owner referenciando o ID principal em vez de criar um segundo finding. |
| F — Read only | qualquer fixture acima | `audit-orion-codebase` | `git status --porcelain` idêntico antes e depois da execução; nenhuma escrita no target. |
| G — Aplicabilidade por profile | `fixtures/backend-api`, `fixtures/mobile-app-demo`, `fixtures/static-tool-demo` | `audit-orion-codebase` | Seleção de auditores/Standards difere por profile: `backend-api` não roda `orion-frontend`; `mobile-app-demo` roda `orion-frontend` e `orion-security` (mobile security baseline); `static-tool-demo` roda `orion-frontend`/`orion-quality`/`orion-engineering-experience` e não carrega Standards de dado/fila. |

`functional-contract.test.mjs` verifica que os contratos necessários estão presentes nas skills (estrutura estática). `behavioral-homologation-contract.test.mjs` verifica um artefato JSON real produzido pela execução dos cenários A, B, C, D, E acima contra um runtime de agente (Claude Code e/ou Codex); sem agente especializado disponível, a execução sequencial de fallback descrita na orquestradora deve preservar o mesmo contrato.
