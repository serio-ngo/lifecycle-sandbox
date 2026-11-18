import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test("#19 AC1: sum('1000', '2000') returns '3,000.00'", () => assert.equal(sum('1000', '2000'), '3,000.00'));
test("#19 AC2: sum('-1500', '0') returns '-1,500.00'", () => assert.equal(sum('-1500', '0'), '-1,500.00'));
test("#19 AC3: sum('2', '3') returns '5.00'", () => assert.equal(sum('2', '3'), '5.00'));
test("#19 AC4: sum('999.99', '0') returns '999.99'", () => assert.equal(sum('999.99', '0'), '999.99'));
test("#19 AC5: sum('1000000', '0') returns '1,000,000.00'", () => assert.equal(sum('1000000', '0'), '1,000,000.00'));
