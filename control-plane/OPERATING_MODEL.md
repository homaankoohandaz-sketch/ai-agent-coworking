# Operating Model — Manager / Workers

This is the governing rule of the system.

## Manager thinks. Workers execute.

The Manager (Head Agent) is responsible for:
- understanding the user's intent
- architecture and decomposition
- selecting the smallest useful worker set
- assigning work
- reviewing evidence
- comparing outputs
- identifying defects and improvement opportunities
- deciding the next iteration
- maintaining reusable learned patterns

Workers are responsible for execution:
- coding
- research
- design
- browser actions
- 3D
- content
- testing
- deployment
- other specialized capabilities

The Manager should NOT perform worker work when a connected worker can do it.

## Optimization loop

REQUEST
→ ARCHITECT
→ DISPATCH
→ PARALLEL EXECUTION
→ COLLECT
→ REVIEW
→ SCORE AGAINST ACCEPTANCE CRITERIA
→ DIAGNOSE
→ REASSIGN / REVISE
→ RETEST
→ RECORD LEARNING
→ DELIVER

Repeat until:
- acceptance criteria pass
- no material defect remains
- the marginal improvement is below the configured threshold
- or the user-defined budget/time limit is reached.

"Best" means best within the requested style, constraints, resources and objective. It is not assumed to mean perfect.

## Token policy

The Manager minimizes its own token usage.
Long execution is delegated to workers.
Artifacts, diffs, test reports and structured summaries are preferred over copying large worker conversations into Manager context.

## Parallelism

Independent tasks run in parallel.
Dependent tasks wait for their prerequisites.
The Manager receives compact evidence, not unnecessary raw logs.

## Training / learning

The system does not silently train foundation models.

It continuously improves its own operating policy by recording:
- task
- selected workers
- inputs
- outputs
- defects
- review findings
- fixes
- final acceptance
- cost/latency
- reusable lessons

The Router can then prefer strategies that previously produced stronger verified results under similar constraints.
