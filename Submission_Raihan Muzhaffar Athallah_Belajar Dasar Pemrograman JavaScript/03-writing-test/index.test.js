import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Tests for sum()
test('menjumlahkan 2 dan 3 menghasilkan 5', () => {
  const result = sum(2, 3);

  assert.strictEqual(result, 5);
});

test('menjumlahkan bilangan negatif dan positif menghasilkan nilai yang benar', () => {
  const result = sum(-2, 5);

  assert.strictEqual(result, 3);
});

test('menjumlahkan 0 dan 0 menghasilkan 0', () => {
  const result = sum(0, 0);

  assert.strictEqual(result, 0);
});
