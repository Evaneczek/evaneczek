// Składa sekcje z src/sekcje w jeden plik HTML i drukuje go do PDF (Chromium).
// Użycie: node build.mjs
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require("playwright");
} catch {
  playwright = require("/opt/node22/lib/node_modules/playwright");
}

const root = dirname(fileURLToPath(import.meta.url));
const sectionsDir = join(root, "src", "sekcje");
const files = readdirSync(sectionsDir).filter((f) => f.endsWith(".html")).sort();
const body = files.map((f) => readFileSync(join(sectionsDir, f), "utf8")).join("\n");

const html = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<title>Matma na 8 · Egzamin ósmoklasisty 2027</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
${body}
</body>
</html>`;

const bookPath = join(root, "src", "ksiazka.html");
writeFileSync(bookPath, html);

mkdirSync(join(root, "dist"), { recursive: true });
const out = join(root, "dist", "Matma-na-8-egzamin-osmoklasisty-2027.pdf");

const browser = await playwright.chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(bookPath).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
await browser.close();

console.log(`Gotowe: ${out} (${files.length} sekcji)`);
