import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Tests for sum(): valid input, invalid types, and negative numbers
test('mengembalikan hasil penjumlahan jika kedua parameter berupa angka positif', () => {
  const result = sum(2, 3);

  assert.strictEqual(result, 5);
});

test('mengembalikan hasil penjumlahan yang benar jika kedua parameter bernilai 0', () => {
  const result = sum(0, 0);

  assert.strictEqual(result, 0);
});

test('mengembalikan 0 jika parameter pertama bukan bertipe number', () => {
  const result = sum('2', 3);

  assert.strictEqual(result, 0);
});

test('mengembalikan 0 jika parameter kedua bukan bertipe number', () => {
  const result = sum(2, '3');

  assert.strictEqual(result, 0);
});

test('mengembalikan 0 jika parameter pertama bernilai negatif', () => {
  const result = sum(-2, 3);

  assert.strictEqual(result, 0);
});

test('mengembalikan 0 jika parameter kedua bernilai negatif', () => {
  const result = sum(2, -3);

  assert.strictEqual(result, 0);
});
