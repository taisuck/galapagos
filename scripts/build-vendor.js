const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const nodeModulesDir = path.join(rootDir, 'node_modules');
const vendorDir = path.join(rootDir, 'src', 'vendor');

const files = [
  ['bootstrap/dist/css/bootstrap.min.css', 'bootstrap.min.css'],
  ['bootstrap/dist/css/bootstrap.min.css.map', 'bootstrap.min.css.map'],
  ['bootstrap/dist/js/bootstrap.bundle.min.js', 'bootstrap.bundle.min.js'],
  ['bootstrap/dist/js/bootstrap.bundle.min.js.map', 'bootstrap.bundle.min.js.map'],
  ['preact/dist/preact.module.js', 'preact.module.js'],
  ['preact/hooks/dist/hooks.module.js', 'preact-hooks.module.js'],
  ['htm/dist/htm.module.js', 'htm.module.js'],
  ['htm/preact/index.module.js', 'htm-preact.module.js'],
  ['@preact/signals-core/dist/signals-core.module.js', 'signals-core.module.js'],
  ['@preact/signals/dist/signals.module.js', 'signals.module.js'],
];

fs.rmSync(vendorDir, { recursive: true, force: true });
fs.mkdirSync(vendorDir, { recursive: true });

for (const [src, dest] of files) {
  const srcPath = path.join(nodeModulesDir, src);
  const destPath = path.join(vendorDir, dest);
  fs.copyFileSync(srcPath, destPath);
  console.log(`${src} -> src/vendor/${dest}`);
}
