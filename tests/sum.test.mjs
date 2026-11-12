import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test("#6 AC1: sum('2', '3') returns '5.00'", () => assert.equal(sum('2', '3'), '5.00'));
