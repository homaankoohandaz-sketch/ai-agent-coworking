# Worker Adapter Contract

Every real adapter must implement:

```
discover() -> capability declaration
health() -> health/availability
execute(task, scoped_context) -> result
cancel(task_id) -> acknowledgement
```

The adapter must never receive credentials outside its declared scope.

The result must contain:
status, evidence, artifacts, warnings, changed_resources and next_action.

Adapters are replaceable. The orchestrator must not depend on provider-specific response formats.
