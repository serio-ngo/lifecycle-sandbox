import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test('adds 2 and 3', () => assert.equal(sum('2', '3'), 5));
