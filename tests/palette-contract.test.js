const fs = require('node:fs');
const assert = require('node:assert/strict');
const main = fs.readFileSync('main.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const expected = ['st-le','st-mi','st-ac','st-so','st-te','st-fo','st-lt','st-tr','st-pr','st-de','st-ex','st-im','st-wa','st-qu','st-su','st-co','st-sc','st-no','st-nu','st-qt','st-fa','st-ar','st-ct','st-ca','st-rs','st-da','st-pe','st-ev','st-td','st-ri'];
for (const name of expected) {
  assert.ok(main.includes("['" + name + "'"), 'missing JS registry entry: ' + name);
  assert.ok(css.includes('.' + name), 'missing CSS selector: ' + name);
}
for (const role of ['en','letter','ipa','translation','term','definition','focus','secondary','soft','heading','ink']) {
  assert.ok(main.includes("'" + role + "'"), 'missing role key: ' + role);
  assert.ok(css.includes('--esds-' + role), 'missing CSS variable: ' + role);
}
assert.ok(main.includes('palette.roles.letter = isHexColor(palette.roles.en)'), 'legacy letter migration missing');
assert.ok(main.includes("schemaVersion: 4, type: 'esds-palette'"), 'palette JSON export schema missing');
console.log('ESDS palette contract checks passed: 30 classes, 11 roles, legacy letter migration, schema-4 export.');
