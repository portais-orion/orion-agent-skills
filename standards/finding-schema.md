# Contrato de Finding Orion

Finding representa ocorrência em sistema. Standard representa política e usa outro namespace.

```json
{
  "id": "APPX-SEC-001",
  "standardId": "ORION-SEC-001",
  "system": "app-x",
  "category": "security",
  "severity": "HIGH",
  "priority": "P1",
  "confidence": "HIGH",
  "classification": "VERIFIED",
  "evidence": [{ "path": "src/route.ts", "lines": "12-18", "note": "sem valor de segredo" }],
  "problem": "...",
  "impact": "...",
  "recommendation": "...",
  "effort": "M",
  "automaticDetection": "PARTIAL",
  "relatedFindingIds": []
}
```

Enums: severity `CRITICAL|HIGH|MEDIUM|LOW|OPPORTUNITY`; priority `P0|P1|P2|P3|P4`; effort `XS|S|M|L|XL`; confidence `HIGH|MEDIUM|LOW`; classification `VERIFIED|INFERRED|RUNTIME VALIDATION REQUIRED|ORGANIZATIONAL VALIDATION REQUIRED`.

Deduplicação: um finding principal por causa raiz/efeito/evidência. Outros auditores referenciam o ID principal. Nunca incluir valor de token, senha, chave ou certificado.

`id` é sempre gerado pela execução atual da auditoria — nunca reutiliza um Finding ID de auditoria histórica anterior (ex.: IDs do formato `SF-SEC-0NN`, `PS-*`, `AUR-*`, `FOR-*`, `AM-*`, `ST-*`, `NUC-*`, `TOOL-*` pertencem ao snapshot `ORION ENGINEERING AUDIT — BASELINE 2026-09` e não devem ser reproduzidos).
