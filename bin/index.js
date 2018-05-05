#!/usr/bin/env node --harmony

const eslintDiff = require('eslint-diff');

const report = eslintDiff.check({
  path: process.cwd(),
  level: eslintInit.CheckLevel.ERROR,
});

if (report.errorCount + report.warningCount > 0) {
  // format
  console.log(eslintDiff.format(result));
  process.exit(1);
}
