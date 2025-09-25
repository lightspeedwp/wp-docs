#!/usr/bin/env node
/**
 * Migration script: Renames legacy Copilot asset extensions to new plural forms.
 *  - .prompt.md   -> .prompts.md (creates new file, leaves legacy file as deprecated stub)
 *  - .chatmode.md -> .chatmodes.md (optional phase when --chatmodes flag supplied)
 *
 * Idempotent: safe to re-run; skips files already migrated.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const promptsDir = path.join(repoRoot, '.github', 'prompts');
const chatmodesDir = path.join(repoRoot, '.github', 'chatmodes');
const agentsDir = path.join(repoRoot, '.github', 'agents');

const args = process.argv.slice(2);
const migrateChatmodes = args.includes('--chatmodes');
const migrateAgents = args.includes('--agents');

function migrate(dir, legacyExt, newExt) {
	if (!fs.existsSync(dir)) { console.log(`Directory not found: ${dir} (skipped)`); return; }
	const files = fs.readdirSync(dir).filter(f => f.endsWith(legacyExt));
	if (!files.length) { console.log(`No *${legacyExt} files found in ${dir}`); return; }
	for (const file of files) {
		const legacyPath = path.join(dir, file);
		const base = file.substring(0, file.length - legacyExt.length);
		const newFile = base + newExt;
		const newPath = path.join(dir, newFile);
		if (!fs.existsSync(newPath)) {
			const content = fs.readFileSync(legacyPath, 'utf8');
			fs.writeFileSync(newPath, content, 'utf8');
			console.log(`Created new file: ${path.relative(repoRoot, newPath)}`);
		} else {
			console.log(`New file already exists (skip create): ${newFile}`);
		}
		// Replace legacy file with deprecation stub if not already marked deprecated
		const legacyContent = fs.readFileSync(legacyPath, 'utf8');
		if (/deprecated:\s*true/.test(legacyContent.split(/\r?\n/).slice(0, 40).join('\n'))) {
			console.log(`Legacy already deprecated: ${file}`);
			continue;
		}
		const stub = `---\nlicense: 'GPL-3.0'\ndeprecated: true\nreplacement: ${newFile}\ndescription: 'Deprecated – use ${newFile} instead.'\n---\n\nThis file has been migrated to **${newFile}**. Update any references.\n`;
		fs.writeFileSync(legacyPath, stub, 'utf8');
		console.log(`Replaced legacy with deprecation stub: ${file}`);
	}
}

console.log('Starting Copilot asset extension migration...');
migrate(promptsDir, '.prompt.md', '.prompts.md');
if (migrateChatmodes) migrate(chatmodesDir, '.chatmode.md', '.chatmodes.md');
if (migrateAgents) migrate(agentsDir, '.agent.md', '.agents.md');
console.log('Migration complete.');
