# HOMAAN AI AGENT COWORKING

Independent multi-agent operating layer for Hooman.

The user supplies intent and inputs. The Control Plane plans, routes, delegates, executes, verifies and returns outputs.

This repository is independent from BuildWise.

## Operating rule

REQUEST → PLAN → DISPATCH → EXECUTE → REVIEW → TEST → FIX → RETEST → VERIFY → DELIVER

No worker is the system owner.
No provider is a hard dependency.
No secret belongs in Git.

## Layers

- `control-plane/` — orchestration contracts and policies
- `agents/` — first-party worker definitions
- `skills/` — reusable capabilities
- `platforms/` — provider/platform adapters
- `connectors/` — MCP/API/CLI connector definitions
- `memory/` — memory contracts and schemas
- `projects/` — isolated project adapters
- `catalog/` — reviewed external open-source agents/tools
- `runtime/` — executable gateway and dispatcher
- `security/` — permissions, secret boundaries and approval gates
- `workflows/` — reusable automation blueprints
- `tests/` — contract, integration and end-to-end tests

## First-class workflows

1. Build a website.
2. Build an app.
3. Produce social content.
4. Build and publish an app marketplace.
5. Build future automations without redesigning the core.

## Status

Foundation only. Runtime execution is not called operational until real end-to-end tests pass.
