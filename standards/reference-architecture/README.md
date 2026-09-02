# Orion Reference Architecture

Padroniza outcomes e boundaries; não obriga stack única. Escolha profile conforme responsabilidade e carregue somente standards aplicáveis.

Perfis: `web-portal`, `backend-api`, `integration-service`, `worker`, `mobile-app`, `static-tool`.

```mermaid
flowchart LR
  Client[Cliente] --> UI[UI / cliente]
  UI --> API[API / BFF]
  API --> UseCase[Casos de uso]
  UseCase --> Domain[Domínio e políticas]
  UseCase --> Ports[Portas]
  Ports --> Data[(Dados)]
  Ports --> Queue[Fila / outbox]
  Queue --> Worker[Worker / integração]
  API -. telemetria .-> OTel[Observabilidade]
  Worker -. telemetria .-> OTel
```

Regras de boundary: UI não persiste nem decide autorização; rota traduz transporte; caso de uso orquestra; domínio não depende de ORM/HTTP; infraestrutura implementa portas; efeito fora da transação possui estratégia de idempotência/falha.
