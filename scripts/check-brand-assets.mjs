import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const rejected = new Map([
  ['botspot_favicon.png', '25e6cbc3bf00733c7fcda183a6ac59599a179e5885e17542dd9d9a30a3dda696'],
  ['botspot_favicon_cyan.png', '67b30824d79230981e0b963e8b787ffbe364a079f79c68c4d72ccef2c3d67de9'],
  ['botspot_favicon_rgba.png', '9c3af3140d45221a51401a7dab05ed569b1e94aade353613834b9e8ec2d00c6c'],
]);
export const badgeSha256 = '9943581cc1e858982a0e2b90b258fc0faa96937b0ae609f7b0b18f2ef96d38ba';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

export function rejectReason(filename, digest) {
  if (rejected.has(path.basename(filename))) return 'rejected flat robot filename';
  if ([...rejected.values()].includes(digest)) return 'rejected flat robot bytes, even under a different filename';
  return null;
}

export function checkBrandAssets(root) {
  const problems = [];
  function scan(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.name.startsWith('.')) continue;
      if (entry.isDirectory()) scan(file);
      else if (entry.isFile()) {
        const reason = rejectReason(file, hash(fs.readFileSync(file)));
        if (reason) problems.push(`${path.relative(root, file)}: ${reason}`);
      }
    }
  }
  scan(path.join(root, 'botspot'));
  const badge = path.join(root, 'botspot/botspot_icon_badge_rgba.png');
  if (!fs.existsSync(badge) || hash(fs.readFileSync(badge)) !== badgeSha256) {
    problems.push('The approved detailed Spot badge must remain unchanged.');
  }
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
  const problems = checkBrandAssets(root);
  if (problems.length) {
    console.error(problems.join('\n'));
    process.exitCode = 1;
  } else console.log('Brand assets verified: rejected flat robots absent; approved Spot badge unchanged.');
}
