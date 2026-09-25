# Control Plane Architecture

## Flow

User → Head Agent → Task Contract → Orchestrator → Worker Mesh → QA → Artifact → Verification → User

## Head Agent

- understand intent
- classify request
- load memory
- discover capabilities
- build task graph
- route to workers
- review evidence
- trigger fixes/retries
- verify acceptance criteria
- deliver

## Orchestrator

Maintains task graph, dependencies, queue, retries, timeouts, leases, artifacts and audit events.

## Worker mesh

Capabilities:
research, architecture, coding, UI/UX, browser, image, video, audio, 3D, CAD/GIS, data, SEO, content, marketing, publishing, QA, security, automation.

Providers are replaceable adapters.

## Provider selection

quality + availability + task fit + latency + cost + permission scope.

## Memory

Git = canonical rules/decisions.
Database = operational state.
Graph/vector = semantic context.

## Human gates

Production publishing, destructive infrastructure, financial actions, credential changes and public social publishing require explicit approval unless pre-authorized.

## Failure

FAIL → DIAGNOSE → FIX/ALTERNATE → RETEST → VERIFY.
