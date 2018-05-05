"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var getPrecommitPath = require('./get-precommit-path');
var data = fs.readFileSync(path.join(__dirname, './pre-commit'), 'utf-8');
var precommitPath = getPrecommitPath();
if (precommitPath) {
    fs.writeFileSync(precommitPath, data);
    fs.chmodSync(precommitPath, parseInt('0755', 8));
}
