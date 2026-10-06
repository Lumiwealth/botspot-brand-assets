import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { badgeSha256, checkBrandAssets, rejectReason, rejected } from '../scripts/check-brand-assets.mjs';

test('the usable brand repository excludes every rejected flat robot and preserves approved Spot', () => {
  assert.deepEqual(checkBrandAssets(fileURLToPath(new URL('..', import.meta.url))), []);
});

test('renaming a rejected image cannot evade the byte check', () => {
  for (const digest of rejected.values()) {
    assert.match(rejectReason('botspot/new-login-logo.png', digest), /rejected flat robot bytes/);
  }
  assert.equal(rejectReason('botspot/botspot_icon_badge_rgba.png', badgeSha256), null);
});

test('replacing a banned filename with different bytes still fails the filename check', () => {
  for (const filename of rejected.keys()) {
    assert.match(rejectReason(`botspot/${filename}`, badgeSha256), /rejected flat robot filename/);
  }
});
