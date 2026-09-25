# Runtime

Only the runtime turns Task Contracts into remote work.

Planned API:
- POST /tasks
- GET /tasks/:id
- POST /tasks/:id/run
- GET /tasks/:id/status
- POST /tasks/:id/cancel
- GET /workers
- GET /workers/:id/health
- GET /artifacts/:id
- GET /health

Execution:
authenticate → load task → load policy → resolve capabilities → select worker → acquire scoped credential → execute → collect evidence → persist artifact → QA → retry/fix → finalize.
