import test from "node:test";
import assert from "node:assert/strict";
import { plan, shouldIterate, learningRecord } from "../src/manager.mjs";

test("manager delegates instead of executing worker work", () => {
  const result = plan(
    {goal: "build a website", required_capabilities: ["coding"]},
    [{id: "codex", capabilities: ["coding"], status: "active", health: "healthy"}]
  );
  assert.deepEqual(result.selected_workers, ["codex"]);
  assert.equal(result.manager_execution_allowed, false);
});

test("manager continues when acceptance fails", () => {
  assert.equal(shouldIterate({acceptance_passed: false}), true);
});

test("manager stops when accepted and improvement is below threshold", () => {
  assert.equal(shouldIterate({acceptance_passed: true, expected_improvement: 0.01}), false);
});

test("manager records learning", () => {
  const r = learningRecord({
    task: {goal: "x", required_capabilities: ["coding"]},
    selectedWorkers: ["codex"],
    review: {acceptance_passed: true, defects: [], fixes: [], evidence: ["test-pass"]},
    lesson: "Use smaller components."
  });
  assert.equal(r.outcome, "accepted");
  assert.equal(r.reusable_lesson, "Use smaller components.");
});
