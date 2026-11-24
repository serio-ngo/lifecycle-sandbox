import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test("#19 AC1: sum('1000', '2000') returns '3,000.00'", () => assert.equal(sum('1000', '2000'), '3,000.00'));
test("#19 AC4: sum('999.99', '0') returns '999.99'", () => assert.equal(sum('999.99', '0'), '999.99'));
test("#19 AC5: sum('1000000', '0') returns '1,000,000.00'", () => assert.equal(sum('1000000', '0'), '1,000,000.00'));
