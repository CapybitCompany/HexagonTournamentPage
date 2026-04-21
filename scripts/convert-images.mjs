import { readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import sharp from 'sharp';

const ROOTS = ['public/images/Archive', 'public/images/Welcome', 'public/images/About', 'public/images/contact'];
const EXT = new Set(['.jpg', '.jpeg', '.png']);

function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (EXT.has(extname(name).toLowerCase())) out.push(p);
  }
  return out;
}

let totalSrc = 0, totalOut = 0, count = 0;
for (const root of ROOTS) {
  for (const src of walk(root)) {
    const out = src.replace(/\.(jpe?g|png)$/i, '.webp');
    if (existsSync(out)) continue;
    const input = statSync(src).size;
    await sharp(src).webp({ quality: 82, effort: 5 }).toFile(out);
    const output = statSync(out).size;
    totalSrc += input; totalOut += output; count++;
    const pct = Math.round((output / input) * 100);
    console.log(`${relative('.', src)} -> .webp (${(input/1024).toFixed(0)}KB -> ${(output/1024).toFixed(0)}KB, ${pct}%)`);
  }
}
console.log(`\nTotal: ${count} images, ${(totalSrc/1024/1024).toFixed(2)}MB -> ${(totalOut/1024/1024).toFixed(2)}MB (${Math.round(totalOut/totalSrc*100)}%)`);
