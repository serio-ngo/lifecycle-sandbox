import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test("#11 AC1: sum('-0.001', '0') returns '0.00'", () => assert.equal(sum('-0.001', '0'), '0.00'));
