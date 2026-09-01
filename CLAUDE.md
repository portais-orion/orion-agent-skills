# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`orion-agent-skills` is the central library of [Agent Skills](https://github.com/vercel-labs/skills) for
Grupo Orion. It contains **only** first-party or generalized knowledge:

1. skills authored by Orion;
2. skills extracted and generalized from Orion's own systems (80/20 rule — see below);
3. skills shared by stack/platform (NestJS+Prisma, Next.js, Expo);
4. skills specific to the Orion platform (the Design System) that are relevant across multiple
   Orion projects.

There is no build, test, or lint tooling in this repo — it is pure Markdown. Every skill is one
`SKILL.md` file inside `skills/<category>/<skill-name>/`.

## Hard rule: never vendor third-party skills

Skills from `mattpocock/skills` or `obra/superpowers` must **never** be copied, forked, or
mirrored into this repo, even "just to tweak one line" — they are consumed directly from their
upstream repos by the group installer. If a real Orion-specific adaptation is needed: (1) confirm
the adaptation is substantial enough to be a distinct skill, not a copy with the same name, (2)
give it a name that does not collide with the external source, (3) document in the `SKILL.md`
where the inspiration came from. An Orion skill sharing a name with an external skill is treated
as a bug — rename or remove it.

## The 80/20 rule for extracting a skill from a project

When generalizing a skill out of a project-specific source, keep only the part that stays true
with the product name deleted. Example already applied here: a critical-mutation skill had
generic double-tap/timeout protection (kept) and product-specific business rules — table names,
file paths, domain rules (left behind in the source project only).

Decision test for any sentence: **"does this still make sense if I delete the product name?"** —
if not, it doesn't belong here.

## Creating a new skill

1. Pick the category: `skills/<category>/<skill-name>/SKILL.md` — create a new category folder
   only if none of the existing ones fit.
2. Required frontmatter:
   ```yaml
   ---
   name: skill-name
   description: >
     State WHEN to use this skill, not just what it contains — the description is what lets an
     agent discover it at the right moment.
   ---
   ```
3. `name` must exactly match the folder name.
4. Prefer referencing the consuming project's own docs (`docs/technical/*.md` or equivalent)
   over embedding product-specific content — that's what keeps the skill generic over time.
5. Before proposing a skill, check: does this already exist in `mattpocock/skills` or
   `obra/superpowers`? If yes, don't duplicate it unless there's a real, documented Orion
   customization.
6. Test locally before pushing (see below).

## Testing a skill (the only "verification" this repo has)

Locally, before push:

```bash
npx skills@latest add /local/path/to/orion-agent-skills --list
```

Confirm the new skill appears with the expected name and description.

After push, validate against the remote repo:

```bash
npx skills@latest add portais-orion/orion-agent-skills --list
```

The same skills must appear — if they don't, the problem is in the frontmatter or folder
structure, not the content.

## Repo structure

```
skills/
├── design-system-orion/
│   ├── orion-design-system-adoption/   Migrate an existing screen to the Orion Design System
│   ├── orion-design-system-guardian/   Guard correct usage of an already-adopted Design System
│   └── new-portal/                     Bootstrap a new portal consuming Orion from the start
├── backend/                            NestJS + Prisma patterns, schema migration, JWT, outbox, audit trail, permissions
├── frontend/
│   └── nextjs-app-router-patterns/     Next.js App Router page/route conventions
├── mobile/                             Expo/RN quality, mobile security baseline, idempotent critical mutations
└── platform/                           pre-deploy gate, observability (OTEL+LGTM), feature flags (GrowthBook), multi-agent orchestration, knowledge-graph-first navigation
```

Each skill folder's name is always identical to its `SKILL.md` frontmatter `name`.

## Installation (for context — not something you run when editing this repo)

Via the group installer (bundles this repo with Matt Pocock's and Superpowers skills):

```bash
npx @portais-orion/skills@latest
```

Or standalone, via the official Agent Skills CLI:

```bash
npx skills@latest add portais-orion/orion-agent-skills --skill '*' --global --agent claude-code --agent codex --yes
```
