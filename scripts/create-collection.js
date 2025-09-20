#!/usr/bin/env node
// Shim: delegate to canonical implementation in .github/scripts
require(require('path').join(__dirname, '.github', 'scripts', 'create-collection.js'));
