# @skills-portais-orion/skills 🚀

Biblioteca Orion de conhecimento técnico e comportamentos reutilizáveis para agentes de IA (Claude Code, Codex, Cursor, etc).

Em vez de copiar e colar prompts pela empresa toda, centralizamos nosso **Golden Path** e as **Regras de Engenharia** do Grupo Orion aqui.

Contém duas camadas complementares:
- 📖 **`standards/`**: Política canônica, regras de arquitetura e qualidade para desenvolvedores, agentes e CI.
- 🤖 **`skills/`**: Comportamentos e prompts de agentes prontos para uso, que aplicam os *standards* automaticamente no seu projeto.

*(Nota: Findings, evidências e scorecards não ficam neste repositório, e sim no repositório de auditoria).*

---

## 📦 Como Instalar (Uso pela equipe)

Recomendamos sempre a instalação **Local** (na raiz do repositório do seu projeto). Assim, toda a sua equipe compartilhará as mesmas regras e os agentes terão contexto comum via Git.

Vá para a pasta raiz do seu projeto e execute o instalador interativo:

```bash
npx @skills-portais-orion/skills@latest
```

O instalador vai abrir um assistente no terminal perguntando:
1. Se deseja instalar localmente (recomendado) ou globalmente.
2. Quais skills você deseja adicionar (use as setinhas do teclado e barra de espaço para selecionar).

### Atalhos e Instalação Automatizada

Se você já sabe qual skill deseja e não quer passar pelo menu interativo:

```bash
npx @skills-portais-orion/skills@latest --skill pre-deploy-check
```

Para atualizar ou instalar todas as skills de uma vez silenciosamente:
```bash
npx @skills-portais-orion/skills@latest --skill '*' -y
```

---

## 🛠️ Arquitetura e Organização

```text
standards/
  engineering/          Regras legíveis por humanos (ORION-*)
  machine-readable/     Regras estruturadas (schema YAML)
  reference-architecture/ Perfis de projetos (Backend, Mobile, etc)
  golden-path/          Guias para sistemas novos e existentes
skills/
  ...                   Skills focadas por tecnologia (React, NestJS)
  orion/                Skills focadas na Auditoria Orion Automática
```

---

## 🏗️ Como Contribuir (Time de Arquitetura/Plataforma)

Se você vai adicionar ou alterar regras neste pacote, siga o fluxo abaixo:

1. **Crie a regra**: Escreva `standards/engineering/ORION-<CATEGORIA>-NNN.md` em pt-BR.
2. **Torne a regra estruturada**: Crie a representação equivalente em `standards/machine-readable/` usando o `schema.yaml`. Declare aplicabilidade, detecção, exceções e ADR.
3. **Crie a Skill**: Adicione sua skill na pasta `skills/` garantindo um nome único, frontmatter válido e descrição explicativa. A skill **não** deve repetir o texto da regra, mas sim consultar o diretório `standards/`.
4. **Teste Localmente**: Em outro projeto na sua máquina, aponte a CLI para a sua pasta local para validar:
   ```bash
   npx skills@latest add C:/projetos/orion-agent-skills --list
   ```
5. **Valide os contratos**:
   ```bash
   npm test
   ```
6. **Publicação**: Após aprovado e "mergeado" na `main`, a publicação requer permissão na organização do NPM.
