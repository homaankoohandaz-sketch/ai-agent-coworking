import { createTask, selectWorkers } from "./core.mjs";

export function plan(taskInput, workers) {
  const task = createTask(taskInput);
  const selected = selectWorkers(task, workers);

  return {
    task,
    manager_actions: [
      "inspect",
      "decompose",
      "dispatch",
      "collect",
      "review",
      "verify",
      "learn"
    ],
    selected_workers: selected.map(w => w.id),
    delegation_required: selected.length > 0,
    manager_execution_allowed: false
  };
}

export function shouldIterate(review) {
  if (!review?.acceptance_passed) return true;
  return Number(review.expected_improvement ?? 0) >= 0.02;
}

export function learningRecord({task, selectedWorkers, review, cost, latency, lesson}) {
  return {
    task_signature: {
      goal: task.goal,
      capabilities: task.required_capabilities ?? []
    },
    worker_selection: selectedWorkers,
    outcome: review?.acceptance_passed ? "accepted" : "needs_iteration",
    defects: review?.defects ?? [],
    fixes: review?.fixes ?? [],
    verification: review?.evidence ?? [],
    cost: cost ?? null,
    latency: latency ?? null,
    reusable_lesson: lesson ?? null
  };
}
