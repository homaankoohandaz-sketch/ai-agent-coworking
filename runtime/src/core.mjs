export const TERMINAL_STATES = new Set(["VERIFIED", "DELIVERED"]);

export function createTask(input) {
  if (!input?.goal) throw new Error("goal is required");
  return {
    task_id: input.task_id ?? crypto.randomUUID(),
    project_id: input.project_id ?? "default",
    goal: input.goal,
    inputs: input.inputs ?? [],
    constraints: input.constraints ?? [],
    acceptance_criteria: input.acceptance_criteria ?? [],
    required_capabilities: input.required_capabilities ?? [],
    preferred_workers: input.preferred_workers ?? [],
    artifacts_required: input.artifacts_required ?? [],
    approval_policy: input.approval_policy ?? {},
    status: "QUEUED"
  };
}

export function selectWorkers(task, workers) {
  const required = new Set(task.required_capabilities ?? []);
  return workers
    .filter(w => w.status !== "disabled")
    .map(w => ({
      worker: w,
      score: scoreWorker(w, required, task.preferred_workers ?? [])
    }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.worker);
}

function scoreWorker(worker, required, preferred) {
  const caps = new Set(worker.capabilities ?? []);
  let score = 0;
  for (const cap of required) if (caps.has(cap)) score += 10;
  if (preferred.includes(worker.id)) score += 5;
  if (worker.health === "healthy") score += 2;
  return score;
}

export function canTransition(from, to) {
  const allowed = {
    QUEUED: ["PLANNING", "CANCELLED"],
    PLANNING: ["DISPATCHED", "BLOCKED"],
    DISPATCHED: ["RUNNING", "BLOCKED"],
    RUNNING: ["REVIEW", "BLOCKED"],
    REVIEW: ["QA", "BLOCKED"],
    QA: ["RETEST", "VERIFIED", "BLOCKED"],
    RETEST: ["QA", "REVIEW", "BLOCKED"],
    BLOCKED: ["PLANNING", "DISPATCHED", "CANCELLED"],
    VERIFIED: ["DELIVERED"],
    DELIVERED: [],
    CANCELLED: []
  };
  return allowed[from]?.includes(to) ?? false;
}

export function transition(task, to) {
  if (!canTransition(task.status, to)) {
    throw new Error(`invalid transition: ${task.status} -> ${to}`);
  }
  return { ...task, status: to };
}
