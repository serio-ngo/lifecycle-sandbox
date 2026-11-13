import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test("#11 AC1: sum('-0.001', '0') returns '0.00'", () => assert.equal(sum('-0.001', '0'), '0.00'));
test("#11 AC2: sum('-0.01', '0') returns '-0.01'", () => assert.equal(sum('-0.01', '0'), '-0.01'));
test("#11 AC3: sum('-2', '-3') returns '-5.00'", () => assert.equal(sum('-2', '-3'), '-5.00'));
