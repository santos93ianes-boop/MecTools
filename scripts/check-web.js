const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('www/index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/i);
if (!match) throw new Error('Script principal ausente em www/index.html');
new vm.Script(match[1], { filename: 'www/index.html' });
if (!html.includes('Alinhamento CENTAC')) throw new Error('Modulo CENTAC ausente');
console.log('JavaScript valido; modulo de alinhamento CENTAC encontrado.');
