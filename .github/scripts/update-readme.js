#!/usr/bin/env node
// Canonical implementation of the README generator (relocated to .github/scripts).
// Root-level stub simply requires this file for backward compatibility.
const fs = require("fs");
const path = require("path");
const { parseCollectionYaml } = require("./yaml-parser");

// Template sections for the README (same as original root implementation)
const TEMPLATES = {
	instructionsSection: `## 📋 Custom Instructions\n\nTeam and project-specific instructions to enhance GitHub Copilot's behavior for specific technologies and coding practices.`,
	instructionsUsage: `### How to Use Custom Instructions\n\n**To Install:**\n- Click the **VS Code** or **VS Code Insiders** install button for the instruction you want to use\n- Download the \`*.instructions.md\` file and manually add it to your project's instruction collection\n\n**To Use/Apply:**\n- Copy these instructions to your \`.github/copilot-instructions.md\` file in your workspace\n- Create task-specific \`.github/.instructions.md\` files in your workspace's \`.github/instructions\` folder\n- Instructions automatically apply to Copilot behavior once installed in your workspace`,
	promptsSection: `## 🎯 Reusable Prompts\n\nReady-to-use prompt templates for specific development scenarios and tasks, defining prompt text with a specific mode, model, and available set of tools.`,
	promptsUsage: `### How to Use Reusable Prompts\n\n**To Install:**\n- Click the **VS Code** or **VS Code Insiders** install button for the prompt you want to use\n- Download the \`*.prompt.md\` file and manually add it to your prompt collection\n\n**To Run/Execute:**\n- Use \`/prompt-name\` in VS Code chat after installation\n- Run the \`Chat: Run Prompt\` command from the Command Palette\n- Hit the run button while you have a prompt file open in VS Code`,
	chatmodesSection: `## 💭 Custom Chat Modes\n\nCustom chat modes define specific behaviors and tools for GitHub Copilot Chat, enabling enhanced context-aware assistance for particular tasks or workflows.`,
	chatmodesUsage: `### How to Use Custom Chat Modes\n\n**To Install:**\n- Click the **VS Code** or **VS Code Insiders** install button for the chat mode you want to use\n- Download the \`*.chatmode.md\` file and manually install it in VS Code using the Command Palette\n\n**To Activate/Use:**\n- Import the chat mode configuration into your VS Code settings\n- Access the installed chat modes through the VS Code Chat interface\n- Select the desired chat mode from the available options in VS Code Chat`,
	collectionsSection: `## 📦 Collections\n\nCurated collections of related prompts, instructions, and chat modes organized around specific themes, workflows, or use cases.`,
	collectionsUsage: `### How to Use Collections\n\n**Browse Collections:**\n- Explore themed collections that group related customizations\n- Each collection includes prompts, instructions, and chat modes for specific workflows\n- Collections make it easy to adopt comprehensive toolkits for particular scenarios\n\n**Install Items:**\n- Click install buttons for individual items within collections\n- Or browse to the individual files to copy content manually\n- Collections help you discover related customizations you might have missed`,
	agentsSection: `## 🤖 WordPress-Focused Agents\n\nSpecialized GitHub Copilot agents designed for WordPress development workflows, each focusing on specific domains like accessibility, performance, security, and block/theme development.`,
	agentsUsage: `### How to Use WordPress Agents\n\n**To Reference:**\n- Each agent defines specialized behavior for WordPress development domains\n- Agents complement the global behavioral contract defined in [\`AGENTS.md\`](../../AGENTS.md)\n- Use agents as reference for specialized WordPress workflows and best practices\n\n**To Create New Agents:**\n- Copy the [\`TEMPLATE.agent.md\`](TEMPLATE.agent.md) file to create new specialized agents\n- Follow the WordPress-focused guidelines and YAML frontmatter structure\n- Ensure new agents align with WordPress coding standards and security practices`,
};

function safeFileOperation(operation, filePath, defaultValue = null) {
	try { return operation(); } catch (error) { console.error(`Error processing file ${filePath}: ${error.message}`); return defaultValue; }
}

const LEGACY_EXT_PATTERN = /(\.prompt|\.chatmode|\.instructions|\.agent)\.md$/;
const CURRENT_EXT_PATTERN = /(\.prompts|\.chatmodes|\.instructions|\.agents)\.md$/;
const AGENT_EXT_PATTERN = /(\.agent|\.agents)\.md$/;

function extractTitle(filePath) {
	return safeFileOperation(() => {
		const content = fs.readFileSync(filePath, "utf8");
		const lines = content.split("\n");
		let inFM = false, fmDone = false;
		for (const line of lines) {
			if (line.trim() === '---') { if (!inFM) inFM = true; else if (!fmDone) fmDone = true; continue; }
			if (inFM && !fmDone && line.includes('title:')) {
				const after = line.substring(line.indexOf('title:') + 6).trim();
				return after.replace(/^['"]|['"]$/g, '');
			}
		}
		inFM = false; fmDone = false;
		if (CURRENT_EXT_PATTERN.test(filePath) || LEGACY_EXT_PATTERN.test(filePath) || AGENT_EXT_PATTERN.test(filePath)) {
			for (const line of lines) {
				if (line.trim() === '---') { if (!inFM) inFM = true; else if (inFM && !fmDone) fmDone = true; continue; }
				if (fmDone && line.startsWith('# ')) return line.substring(2).trim();
			}
			const base = path.basename(filePath).replace(/(\.prompts|\.prompt|\.chatmodes|\.chatmode|\.instructions|\.agent|\.agents)\.md$/, '');
			return base.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
		}
		for (const line of lines) if (line.startsWith('# ')) return line.substring(2).trim();
		const base = path.basename(filePath, path.extname(filePath));
		return base.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
	}, filePath, path.basename(filePath, path.extname(filePath)).replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
}

function extractDescription(filePath) {
	return safeFileOperation(() => {
		const content = fs.readFileSync(filePath, 'utf8');
		const lines = content.split('\n');
		let inFM = false, isMulti = false; const multi = [];
		for (const line of lines) {
			if (line.trim() === '---') { if (!inFM) { inFM = true; continue; } break; }
			if (inFM) {
				const ml = line.match(/^description:\s*\|\s*$/); if (ml) { isMulti = true; continue; }
				if (isMulti) {
					if (!line.startsWith('  ') || /^[a-zA-Z0-9_-]+:/.test(line)) return multi.join(' ').trim();
					multi.push(line.substring(2)); continue;
				}
				const single = line.match(/^description:\s*['"]?(.+?)['"]?\s*$/); if (single) {
					let d = single[1]; const sq = line.match(/^description:\s*'(.*?)'\s*$/); if (sq) d = sq[1].replace(/''/g, "'");
					return d;
				}
			}
		}
		if (multi.length) return multi.join(' ').trim();
		return null;
	}, filePath, null);
}

function isDeprecated(filePath) { return safeFileOperation(() => {
	const content = fs.readFileSync(filePath, 'utf8');
	return /(^|\n)deprecated:\s*true\b/i.test(content.split(/\r?\n/).slice(0,40).join('\n')); }, filePath, false); }

const vscodeInstallImage = "https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white";
const vscodeInsidersInstallImage = "https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white";
const repoBaseUrl = "https://raw.githubusercontent.com/github/awesome-copilot/main";
const AKA_INSTALL_URLS = { instructions: "https://aka.ms/awesome-copilot/install/instructions", prompt: "https://aka.ms/awesome-copilot/install/prompt", mode: "https://aka.ms/awesome-copilot/install/chatmode" };
function makeBadges(link, type) {
	const aka = AKA_INSTALL_URLS[type] || AKA_INSTALL_URLS.instructions;
	const vscodeUrl = `${aka}?url=${encodeURIComponent(`vscode:chat-${type}/install?url=${repoBaseUrl}/${link}`)}`;
	const insidersUrl = `${aka}?url=${encodeURIComponent(`vscode-insiders:chat-${type}/install?url=${repoBaseUrl}/${link}`)}`;
	return `[![Install in VS Code](${vscodeInstallImage})](${vscodeUrl})<br />[![Install in VS Code Insiders](${vscodeInsidersInstallImage})](${insidersUrl})`;
}

function generateInstructionsSection(dir, opts = {}) {
	const { linkPrefixForDisplay = "instructions" } = opts;
	if (!fs.existsSync(dir)) return "";
	const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
	let out = "| Title | Description |\n| ----- | ----------- |\n";
	for (const file of files) { const fp = path.join(dir, file); if (isDeprecated(fp)) { console.log(`Skipping deprecated instruction: ${file}`); continue; }
		const title = extractTitle(fp); const display = linkPrefixForDisplay ? encodeURI(`${linkPrefixForDisplay}/${file}`) : encodeURI(file); const raw = encodeURI(`instructions/${file}`); const desc = extractDescription(fp); const badges = makeBadges(raw, 'instructions');
		if (desc && desc !== 'null') out += `| [${title}](${display})<br />${badges} | ${desc} |\n`; else { const topic = title.split(' ').pop().replace(/s$/, ''); out += `| [${title}](${display})<br />${badges} | ${topic} specific coding standards and best practices |\n`; }
	}
	return `${TEMPLATES.instructionsSection}\n${TEMPLATES.instructionsUsage}\n\n${out}`;
}

function generatePromptsSection(dir, opts = {}) {
	const { linkPrefixForDisplay = "prompts" } = opts; if (!fs.existsSync(dir)) return "";
	const files = fs.readdirSync(dir).filter(f => f.endsWith('.prompts.md') || f.endsWith('.prompt.md')).sort();
	let out = "| Title | Description |\n| ----- | ----------- |\n";
	for (const file of files) { const fp = path.join(dir, file); if (isDeprecated(fp)) { console.log(`Skipping deprecated prompt: ${file}`); continue; }
		const title = extractTitle(fp); const display = linkPrefixForDisplay ? encodeURI(`${linkPrefixForDisplay}/${file}`) : encodeURI(file); const raw = encodeURI(`prompts/${file}`); const desc = extractDescription(fp); const badges = makeBadges(raw, 'prompt'); out += `| [${title}](${display})<br />${badges} | ${desc && desc !== 'null' ? desc : ''} |\n`; }
	return `${TEMPLATES.promptsSection}\n${TEMPLATES.promptsUsage}\n\n${out}`;
}

function generateChatModesSection(dir, opts = {}) {
	const { linkPrefixForDisplay = "chatmodes" } = opts; if (!fs.existsSync(dir)) { console.log('Chat modes directory does not exist'); return ""; }
	const files = fs.readdirSync(dir).filter(f => f.endsWith('.chatmodes.md') || f.endsWith('.chatmode.md')).sort(); let out = "| Title | Description |\n| ----- | ----------- |\n";
	for (const file of files) { const fp = path.join(dir, file); if (isDeprecated(fp)) { console.log(`Skipping deprecated chat mode: ${file}`); continue; }
		const title = extractTitle(fp); const display = linkPrefixForDisplay ? encodeURI(`${linkPrefixForDisplay}/${file}`) : encodeURI(file); const raw = encodeURI(`chatmodes/${file}`); const desc = extractDescription(fp); const badges = makeBadges(raw, 'mode'); out += `| [${title}](${display})<br />${badges} | ${desc && desc !== 'null' ? desc : ''} |\n`; }
	return `${TEMPLATES.chatmodesSection}\n${TEMPLATES.chatmodesUsage}\n\n${out}`;
}

function generateCollectionsSection(dir, opts = {}) {
	const { linkPrefixForDisplay = "collections" } = opts; if (!fs.existsSync(dir)) { console.log('Collections directory does not exist, creating it...'); fs.mkdirSync(dir, { recursive: true }); }
	const files = fs.readdirSync(dir).filter(f => f.endsWith('.collection.yml')).sort(); if (!files.length) return ""; let out = "| Name | Description | Items | Tags |\n| ---- | ----------- | ----- | ---- |\n";
	for (const file of files) { const fp = path.join(dir, file); const col = parseCollectionYaml(fp); if (!col) { console.warn(`Failed to parse collection: ${file}`); continue; }
		const id = col.id || path.basename(file, '.collection.yml'); const name = col.name || id; const desc = col.description || 'No description'; const count = col.items ? col.items.length : 0; const tags = col.tags ? col.tags.join(', ') : ''; const display = linkPrefixForDisplay ? `${linkPrefixForDisplay}/${id}.md` : `${id}.md`; out += `| [${name}](${display}) | ${desc} | ${count} items | ${tags} |\n`; }
	return `${TEMPLATES.collectionsSection}\n${TEMPLATES.collectionsUsage}\n\n${out}`;
}

function generateAgentsSection(dir, opts = {}) {
	const { linkPrefixForDisplay = "agents" } = opts;
	if (!fs.existsSync(dir)) return "";
	const files = fs.readdirSync(dir).filter(f => f.endsWith('.agent.md') && f !== 'TEMPLATE.agent.md').sort();
	let out = "| Agent | Domain | Description |\n| ----- | ------ | ----------- |\n";
	for (const file of files) {
		const fp = path.join(dir, file);
		if (isDeprecated(fp)) {
			console.log(`Skipping deprecated agent: ${file}`);
			continue;
		}
		const title = extractTitle(fp);
		const display = linkPrefixForDisplay ? encodeURI(`${linkPrefixForDisplay}/${file}`) : encodeURI(file);
		const desc = extractDescription(fp);

		// Extract domain from YAML frontmatter
		const domain = safeFileOperation(() => {
			const content = fs.readFileSync(fp, 'utf8');
			const lines = content.split('\n');
			let inFM = false;
			for (const line of lines) {
				if (line.trim() === '---') {
					if (!inFM) { inFM = true; continue; }
					break;
				}
				if (inFM) {
					const domainMatch = line.match(/^domain:\s*['"]?(.+?)['"]?\s*$/);
					if (domainMatch) return domainMatch[1];
				}
			}
			return 'wp-core';
		}, fp, 'wp-core');

		out += `| [${title}](${display}) | ${domain} | ${desc && desc !== 'null' ? desc : ''} |\n`;
	}
	return `${TEMPLATES.agentsSection}\n${TEMPLATES.agentsUsage}\n\n${out}`;
}

function generateCollectionReadme(collection, collectionId) {
	if (!collection || !collection.items) return `# ${collectionId}\n\nCollection not found or invalid.`;
	const name = collection.name || collectionId; const desc = collection.description || 'No description provided.'; const tags = collection.tags ? collection.tags.join(', ') : 'None';
	let content = `# ${name}\n\n${desc}\n\n`; if (collection.tags?.length) content += `**Tags:** ${tags}\n\n`; content += `## Items in this Collection\n\n| Title | Type | Description |\n| ----- | ---- | ----------- |\n`;
	const items = [...collection.items]; if (collection.display?.ordering === 'alpha') items.sort((a,b)=>extractTitle(path.join(__dirname,'..','..',a.path)).localeCompare(extractTitle(path.join(__dirname,'..','..',b.path))));
	for (const item of items) { const fp = path.join(__dirname, '..', '..', item.path); const title = extractTitle(fp); const d = extractDescription(fp) || 'No description'; const typeDisplay = item.kind === 'chat-mode' ? 'Chat Mode' : item.kind === 'instruction' ? 'Instruction' : 'Prompt'; const link = `../${item.path}`; const badges = makeBadges(item.path, item.kind === 'instruction' ? 'instructions' : item.kind === 'chat-mode' ? 'mode' : 'prompt'); content += `| [${title}](${link})<br />${badges} | ${typeDisplay} | ${d} |\n`; }
	if (collection.display?.show_badge) content += `\n---\n*This collection includes ${items.length} curated items for ${name.toLowerCase()}.*`;
	return content;
}

function writeFileIfChanged(filePath, content) { const exists = fs.existsSync(filePath); if (exists) { const original = fs.readFileSync(filePath, 'utf8'); if (original === content) { console.log(`${path.basename(filePath)} is already up to date. No changes needed.`); return; } } fs.writeFileSync(filePath, content); console.log(`${path.basename(filePath)} ${exists ? 'updated' : 'created'} successfully!`); }

function buildCategoryReadme(sectionBuilder, dirPath, headerLine, usageLine) { const section = sectionBuilder(dirPath); if (section && section.trim()) return section.replace(/^##\s/m, '# '); return `${headerLine}\n\n${usageLine}\n\n_No entries found yet._`; }

try {
	console.log('Generating category README files...');
	const repoRoot = path.join(__dirname, '..', '..');
	const ghBase = path.join(repoRoot, '.github');
	const instructionsDir = path.join(ghBase, 'instructions');
	const promptsDir = path.join(ghBase, 'prompts');
	const chatmodesDir = path.join(ghBase, 'chatmodes');
	const collectionsDir = path.join(ghBase, 'collections');
	const agentsDir = path.join(ghBase, 'agents');
	const targets = {
		instructions: path.join(ghBase, 'instructions', 'README.instructions.md'),
		prompts: path.join(ghBase, 'prompts', 'README.prompts.md'),
		chatmodes: path.join(ghBase, 'chatmodes', 'README.chatmodes.md'),
		collections: path.join(ghBase, 'collections', 'README.collections.md'),
		agents: path.join(ghBase, 'agents', 'README.md')
	};
	Object.values(targets).forEach(fp => fs.mkdirSync(path.dirname(fp), { recursive: true }));
	const iHead = TEMPLATES.instructionsSection.replace(/^##\s/m, '# ');
	const pHead = TEMPLATES.promptsSection.replace(/^##\s/m, '# ');
	const cHead = TEMPLATES.chatmodesSection.replace(/^##\s/m, '# ');
	const colHead = TEMPLATES.collectionsSection.replace(/^##\s/m, '# ');
	const agentsHead = TEMPLATES.agentsSection.replace(/^##\s/m, '# ');
	const instructionsReadme = buildCategoryReadme((d)=>generateInstructionsSection(d,{linkPrefixForDisplay:""}), instructionsDir, iHead, TEMPLATES.instructionsUsage);
	const promptsReadme = buildCategoryReadme((d)=>generatePromptsSection(d,{linkPrefixForDisplay:""}), promptsDir, pHead, TEMPLATES.promptsUsage);
	const chatmodesReadme = buildCategoryReadme((d)=>generateChatModesSection(d,{linkPrefixForDisplay:""}), chatmodesDir, cHead, TEMPLATES.chatmodesUsage);
	const collectionsReadme = buildCategoryReadme((d)=>generateCollectionsSection(d,{linkPrefixForDisplay:""}), collectionsDir, colHead, TEMPLATES.collectionsUsage);
	const agentsReadme = buildCategoryReadme((d)=>generateAgentsSection(d,{linkPrefixForDisplay:""}), agentsDir, agentsHead, TEMPLATES.agentsUsage);
	writeFileIfChanged(targets.instructions, instructionsReadme);
	writeFileIfChanged(targets.prompts, promptsReadme);
	writeFileIfChanged(targets.chatmodes, chatmodesReadme);
	writeFileIfChanged(targets.collections, collectionsReadme);
	writeFileIfChanged(targets.agents, agentsReadme);
	if (fs.existsSync(collectionsDir)) {
		console.log('Generating individual collection README files...');
		const collectionFiles = fs.readdirSync(collectionsDir).filter(f=>f.endsWith('.collection.yml'));
		for (const file of collectionFiles) { const fp = path.join(collectionsDir, file); const col = parseCollectionYaml(fp); if (col) { const id = col.id || path.basename(file, '.collection.yml'); const content = generateCollectionReadme(col, id); const outFile = path.join(collectionsDir, `${id}.md`); writeFileIfChanged(outFile, content); } }
	}
} catch (err) {
	console.error(`Error generating category README files: ${err.message}`);
	process.exit(1);
}

