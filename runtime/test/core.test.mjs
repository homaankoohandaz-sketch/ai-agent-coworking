import test from "node:test";
import assert from "node:assert/strict";
import { createTask, selectWorkers, transition } from "../src/core.mjs";

test("creates a normalized task", () => {
  const task = createTask({goal: "build website", required_capabilities: ["frontend"]});
  assert.equal(task.status, "QUEUED");
  assert.equal(task.goal, "build website");
});

test("selects workers by capability", () => {
  const task = createTask({goal: "code", required_capabilities: ["coding"]});
  const workers = [
    {id: "qa", capabilities: ["testing"], status: "active"},
    {id: "codex", capabilities: ["coding", "testing"], status: "active", health: "healthy"}
  ];
  assert.equal(selectWorkers(task, workers)[0].id, "codex");
});

test("rejects invalid lifecycle transitions", () => {
  const task = createTask({goal: "x"});
  assert.throws(() => transition(task, "DELIVERED"));
});
