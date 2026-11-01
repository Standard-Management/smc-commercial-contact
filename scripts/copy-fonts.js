// Copies the self-hosted fonts from the @fontsource-variable packages into assets/fonts/.
// Netlify runs this on every deploy (see netlify.toml). For a local preview, run:
//   npm install && npm run fonts
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'assets', 'fonts');

const files = [
  '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2',
  '@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2',
  '@fontsource-variable/playfair-display/files/playfair-display-latin-wght-italic.woff2'
];

fs.mkdirSync(outDir, { recursive: true });
for (const rel of files) {
  const src = path.join(root, 'node_modules', rel);
  if (!fs.existsSync(src)) {
    console.error('Missing ' + rel + '. Run "npm install" first.');
    process.exit(1);
  }
  fs.copyFileSync(src, path.join(outDir, path.basename(rel)));
}
console.log('Copied ' + files.length + ' font files to assets/fonts/');
