#!/usr/bin/env node
// Shim: invoke canonical validator under .github/scripts
require(
    require('path').join(
        __dirname,
        '..',
        '.github',
        'scripts',
        'validate-collections.js'
    )
);
