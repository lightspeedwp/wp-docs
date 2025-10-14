#!/usr/bin/env node
/*
 * Agent File Linter
 * Validates presence and basic structure of AGENTS.md, AGENT.md.template, and directory-level AGENT.md files.
 * Future extension: enforce tagging frontmatter once taxonomy lands.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '../..');
const errors = [];
const warnings = [];

function exists(rel) {
    return fs.existsSync(path.join(repoRoot, rel));
}
function read(rel) {
    return fs.readFileSync(path.join(repoRoot, rel), 'utf8');
}

// 1. Check global files
['AGENTS.md', 'AGENT.md.template'].forEach((f) => {
    if (!exists(f)) errors.push(`Missing required root file: ${f}`);
});

// 2. Basic structure checks for AGENTS.md if present
if (exists('AGENTS.md')) {
    const content = read('AGENTS.md');
    const requiredHeadings = [
        '# Copilot Agents Guide',
        '## 1. Mission Alignment',
        '## 11. Directory-Level AGENT.md Files',
    ];
    requiredHeadings.forEach((h) => {
        if (!content.includes(h))
            errors.push(`AGENTS.md missing heading fragment: ${h}`);
    });
}

// 3. Discover directory-level AGENT.md files
function walk(dir, relBase = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
        if (e.name.startsWith('.')) continue; // skip hidden
        const abs = path.join(dir, e.name);
        const rel = path.relative(repoRoot, abs);
        if (e.isDirectory()) {
            // Skip node_modules or build artifacts if appear later
            if (['node_modules', 'dist', 'build'].includes(e.name)) continue;
            walk(abs, rel);
        } else if (e.isFile() && e.name === 'AGENT.md') {
            validateAgentFile(rel);
        }
    }
}

function validateAgentFile(relPath) {
    const content = read(relPath);
    // Minimal required local headings
    const fragments = ['# ', '## 1. Scope', '## 2. Primary Objectives'];
    fragments.forEach((f) => {
        if (!content.includes(f))
            errors.push(`${relPath} missing section fragment: ${f}`);
    });
    // Encourage link back to global
    if (!content.includes('AGENTS.md'))
        warnings.push(
            `${relPath} should reference global AGENTS.md for inheritance.`
        );
    if (content.length > 12000)
        warnings.push(
            `${relPath} unusually large (>12KB) — consider refactoring.`
        );
}

walk(repoRoot);

// 4. Future Tagging Placeholder: detect frontmatter once tags introduced
// (Currently just note if frontmatter block exists to avoid premature enforcement.)
function detectFrontmatter(rel) {
    const content = read(rel).trimStart();
    return content.startsWith('---');
}
if (exists('AGENTS.md') && detectFrontmatter('AGENTS.md')) {
    warnings.push(
        'AGENTS.md has frontmatter; tagging enforcement not yet active.'
    );
}

// Output
if (errors.length) {
    console.error('\nAgent Linter: FAILED');
    errors.forEach((e) => console.error('ERROR:', e));
} else {
    console.log('\nAgent Linter: PASSED (no structural errors)');
}
if (warnings.length) {
    console.log('\nWarnings:');
    warnings.forEach((w) => console.log('WARN:', w));
}

process.exit(errors.length ? 1 : 0);
