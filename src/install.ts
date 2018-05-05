import * as path from 'path';
import * as fs from 'fs';

const getPrecommitPath = require('./get-precommit-path');

const data = fs.readFileSync(path.join(__dirname, './pre-commit'), 'utf-8');
const precommitPath = getPrecommitPath();

if (precommitPath) {
  fs.writeFileSync(precommitPath, data);
  fs.chmodSync(precommitPath, parseInt('0755', 8));
}
