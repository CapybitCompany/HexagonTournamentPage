import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import ttf2woff2 from 'ttf2woff2';

const files = [
  'public/Montserrat/Montserrat-VariableFont_wght.ttf',
  'public/Montserrat/Montserrat-Italic-VariableFont_wght.ttf',
  'public/Roboto/static/Roboto-Regular.ttf',
  'public/Roboto/static/Roboto-Bold.ttf',
  'public/minecraft-font/MinecraftRegular-Bmg3.otf',
  'public/minecraft-font/MinecraftBold-nMK1.otf',
  'public/minecraft-font/MinecraftItalic-R8Mo.otf',
  'public/minecraft-font/MinecraftBoldItalic-1y1e.otf',
];

for (const src of files) {
  if (!existsSync(src)) { console.log('SKIP (missing):', src); continue; }
  const out = join(dirname(src), basename(src).replace(/\.(ttf|otf)$/i, '.woff2'));
  if (existsSync(out)) { console.log('SKIP (exists):', out); continue; }
  const input = readFileSync(src);
  const output = ttf2woff2(input);
  writeFileSync(out, output);
  const pct = Math.round((output.length / input.length) * 100);
  console.log(`OK ${src} -> ${out} (${(input.length/1024).toFixed(1)}KB -> ${(output.length/1024).toFixed(1)}KB, ${pct}%)`);
}
