# Worker Protocol

A worker is an execution unit, not a manager.

## Input

A worker receives a Task Contract plus only the context required for its assigned subtask.

## Output

```yaml
status: completed|failed|blocked
worker_id:
task_id:
artifacts: []
evidence: []
tests: []
defects_found: []
warnings: []
changed_resources: []
recommended_next_action:
```

## Rules

1. Execute only the assigned scope.
2. Do not silently change architecture.
3. Do not access another worker's credentials.
4. Produce artifacts and evidence.
5. Report failure precisely.
6. Never claim success without verification.
