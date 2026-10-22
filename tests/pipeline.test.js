import assert from 'node:assert/strict';
import test from 'node:test';
import { getPipelineStages } from '../src/pipeline.js';

test('lista as etapas essenciais da pipeline na ordem correta', () => {
  const stages = getPipelineStages();

  assert.deepEqual(
    stages.map(({ title }) => title),
    ['Lint', 'Testes', 'Build', 'Deploy'],
  );
  assert.equal(stages.length, 4);
  assert.ok(stages.every(({ description }) => description.length > 0));
});
