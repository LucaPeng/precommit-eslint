import * as fs from 'fs';

const getPrcomiitPath = require('./get-precommit-path');

const precommitPath = getPrcomiitPath();
if (precommitPath && fs.existsSync(precommitPath)) {
  const data = fs.readFileSync(precommitPath, 'utf-8');
  if (data.indexOf('#precommit-eslint') !== -1) {
    fs.unlinkSync(precommitPath);
  }
}
