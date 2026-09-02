# Orion Engineering Standards

Fonte canônica de política técnica da Orion. Cada arquivo `ORION-*.md` contém regra humana; `../machine-readable/` contém a representação estruturada equivalente.

`ORION-*` identifica Standard. Finding usa `<SIGLA-SISTEMA>-<CATEGORIA>-<NNN>` e aponta para `standardId`; nunca reutiliza ID de Standard. Exemplo: `APPX-SEC-001` referencia `ORION-SEC-001`. Nunca reutilize um Finding ID de auditoria histórica (ex.: `SF-SEC-003` pertence ao snapshot `ORION ENGINEERING AUDIT — BASELINE 2026-09` do sistema superfood) — cada execução de auditoria cria seus próprios IDs para o target atual.

Níveis: `REQUIRED`, `RECOMMENDED`, `OPTIONAL`, `CONTEXTUAL`, `FORBIDDEN`. Exceção a regra `REQUIRED` exige ADR, responsável e expiração.
