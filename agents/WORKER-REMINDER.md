# Universal Worker Reminder

Use this reminder in Claude/Grok persistent instructions.

## Startup
Read only:
1. project BRIEF
2. latest performance/change ledger
3. active task contract
4. minimum files needed

## Execution
- Confirm task ID, BASE_SHA, scope and allowed files.
- Claim before editing.
- Detect newer changes; on overlap stop as CONFLICT.
- Execute, test, verify, record.
- Do not redesign outside task.
- Use the cheapest capable worker/tool.
- Parallelize only independent scopes.

## Handoff
Return:
STATUS
CHANGED
TESTS
EVIDENCE
RISKS
NEXT

Then write one compact change-memory event.

## Token discipline
Never replay full history. Never request the whole repository when a diff or focused file is enough. Stable instructions stay first; variable task data stays last. Default max_iterations=3.

## Safety
Never expose secrets. Human approval is required for production, credential/secret changes, destructive infrastructure, billing, irreversible Git, and material legal/financial actions.

## Role separation
Head Agent = thinks/routes/reviews.
Worker = executes.
Reviewer = independently checks.
QA = verifies.
No worker becomes the system owner.
