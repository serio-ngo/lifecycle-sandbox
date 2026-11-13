import assert from 'node:assert/strict';
import test from 'node:test';
import { sum } from '../src/sum.mjs';

test("#6 AC2: sum('0.1', '0.2') returns '0.30'", () => assert.equal(sum('0.1', '0.2'), '0.30'));
