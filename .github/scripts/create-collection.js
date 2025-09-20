#!/usr/bin/env node
// Canonical create-collection script (relocated to .github/scripts)
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function prompt(q){ return new Promise(res=> rl.question(q, res)); }

function parseArgs(){
	const args = process.argv.slice(2);
	const out={ id: undefined, tags: undefined };
	for(let i=0;i<args.length;i++){
		const a=args[i];
		if(a==='--id'||a==='-i'){ out.id=args[++i]; }
		else if(a.startsWith('--id=')){ out.id=a.split('=')[1]; }
		else if(a==='--tags'||a==='-t'){ out.tags=args[++i]; }
		else if(a.startsWith('--tags=')){ out.tags=a.split('=')[1]; }
		else if(!a.startsWith('-') && !out.id){ out.id=a; }
		else if(!a.startsWith('-') && out.id && !out.tags){ out.tags=a; }
	}
	if(Array.isArray(out.tags)) out.tags=out.tags.join(',');
	return out;
}

async function createCollectionTemplate(){
	try {
		console.log('🎯 Collection Creator');
		console.log('This tool will help you create a new collection manifest.\n');
		const parsed = parseArgs();
		let collectionId = parsed.id || await prompt('Collection ID (lowercase, hyphens only): ');
		if(!collectionId){ console.error('❌ Collection ID is required'); process.exit(1); }
		if(!/^[a-z0-9-]+$/.test(collectionId)){ console.error('❌ Collection ID must contain only lowercase letters, numbers, and hyphens'); process.exit(1); }
		const collectionsDir = path.join(process.cwd(), 'collections');
		const filePath = path.join(collectionsDir, `${collectionId}.collection.yml`);
		if(fs.existsSync(filePath)){ console.log(`⚠️  Collection ${collectionId} already exists at ${filePath}`); console.log('💡 Please edit that file instead or choose a different ID.'); process.exit(1); }
		if(!fs.existsSync(collectionsDir)) fs.mkdirSync(collectionsDir, { recursive: true });
		const defaultName = collectionId.split('-').map(w=> w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
		let collectionName = await prompt(`Collection name (default: ${defaultName}): `); if(!collectionName.trim()) collectionName=defaultName;
		const defaultDescription = `A collection of related prompts, instructions, and chat modes for ${collectionName.toLowerCase()}.`;
		let description = await prompt(`Description (default: ${defaultDescription}): `); if(!description.trim()) description=defaultDescription;
		let tagInput = parsed.tags || await prompt('Tags (comma-separated, or press Enter for defaults): ');
		let tags = [];
		if(tagInput && tagInput.toString().trim()) tags = tagInput.toString().split(',').map(t=>t.trim()).filter(Boolean); else tags = collectionId.split('-').slice(0,3);
		const template = `id: ${collectionId}\nname: ${collectionName}\ndescription: ${description}\ntags: [${tags.join(', ')}]\nitems:\n  # Add your collection items here\n  # Example:\n  # - path: prompts/example.prompt.md\n  #   kind: prompt\n  # - path: instructions/example.instructions.md\n  #   kind: instruction\n  # - path: chatmodes/example.chatmode.md\n  #   kind: chat-mode\ndisplay:\n  ordering: alpha # or "manual" to preserve the order above\n  show_badge: false # set to true to show collection badge on items\n`;
		fs.writeFileSync(filePath, template);
		console.log(`✅ Created collection template: ${filePath}`);
		console.log('\n📝 Next steps:');
		console.log("1. Edit the collection manifest to add your items");
		console.log("2. Update the name, description, and tags as needed");
		console.log("3. Run 'node validate-collections.js' to validate");
		console.log("4. Run 'node update-readme.js' to generate documentation");
		console.log('\n📄 Collection template contents:');
		console.log(template);
	} catch(error){
		console.error(`❌ Error creating collection template: ${error.message}`);
		process.exit(1);
	} finally { rl.close(); }
}

createCollectionTemplate();
