import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test("#19 AC1: sum('1000', '2000') returns '3,000.00'", () => assert.equal(sum('1000', '2000'), '3,000.00'));
