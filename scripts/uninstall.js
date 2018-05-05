"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var getPrcomiitPath = require('./get-precommit-path');
var precommitPath = getPrcomiitPath();
if (precommitPath && fs.existsSync(precommitPath)) {
    var data = fs.readFileSync(precommitPath, 'utf-8');
    if (data.indexOf('#precommit-eslint') !== -1) {
        fs.unlinkSync(precommitPath);
    }
}
