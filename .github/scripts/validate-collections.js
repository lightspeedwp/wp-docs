#!/usr/bin/env node
// Canonical collection validation script (relocated to .github/scripts).
const fs = require('fs');
const path = require('path');
const { parseCollectionYaml } = require('./yaml-parser');

const MAX_COLLECTION_ITEMS = 50;

function validateCollectionId(id){
	if(!id||typeof id!=="string") return 'ID is required and must be a string';
	if(!/^[a-z0-9-]+$/.test(id)) return 'ID must contain only lowercase letters, numbers, and hyphens';
	if(id.length<1||id.length>50) return 'ID must be between 1 and 50 characters';
	return null;
}
function validateCollectionName(name){
	if(!name||typeof name!=="string") return 'Name is required and must be a string';
	if(name.length<1||name.length>100) return 'Name must be between 1 and 100 characters';
	return null;
}
function validateCollectionDescription(d){
	if(!d||typeof d!=="string") return 'Description is required and must be a string';
	if(d.length<1||d.length>500) return 'Description must be between 1 and 500 characters';
	return null;
}
function validateCollectionTags(tags){
	if(tags && !Array.isArray(tags)) return 'Tags must be an array';
	if(tags && tags.length>10) return 'Maximum 10 tags allowed';
	if(tags){
		for(const tag of tags){
			if(typeof tag!=="string") return 'All tags must be strings';
			if(!/^[a-z0-9-]+$/.test(tag)) return `Tag "${tag}" must contain only lowercase letters, numbers, and hyphens`;
			if(tag.length<1||tag.length>30) return `Tag "${tag}" must be between 1 and 30 characters`;
		}
	}
	return null;
}
function validateCollectionItems(items){
	if(!items||!Array.isArray(items)) return 'Items is required and must be an array';
	if(items.length<1) return 'At least one item is required';
	if(items.length>MAX_COLLECTION_ITEMS) return `Maximum ${MAX_COLLECTION_ITEMS} items allowed`;
	for(let i=0;i<items.length;i++){
		const item=items[i];
		if(!item||typeof item!=="object") return `Item ${i+1} must be an object`;
		if(!item.path||typeof item.path!=="string") return `Item ${i+1} must have a path string`;
		if(!item.kind||typeof item.kind!=="string") return `Item ${i+1} must have a kind string`;
		if(!['prompt','instruction','chat-mode','agent'].includes(item.kind)) return `Item ${i+1} kind must be one of: prompt, instruction, chat-mode, agent`;
		const filePath = path.join(process.cwd(), item.path);
		if(!fs.existsSync(filePath)) return `Item ${i+1} file does not exist: ${item.path}`;
		// Support both legacy (.prompt.md / .chatmode.md / .agent.md) and new plural (.prompts.md / .chatmodes.md / .agents.md) extensions during migration
		if(item.kind==='prompt' && !(item.path.endsWith('.prompt.md') || item.path.endsWith('.prompts.md'))) return `Item ${i+1} kind is "prompt" but path doesn't end with .prompt.md or .prompts.md`;
		if(item.kind==='instruction' && !item.path.endsWith('.instructions.md')) return `Item ${i+1} kind is "instruction" but path doesn't end with .instructions.md`;
		if(item.kind==='chat-mode' && !(item.path.endsWith('.chatmode.md') || item.path.endsWith('.chatmodes.md'))) return `Item ${i+1} kind is "chat-mode" but path doesn't end with .chatmode.md or .chatmodes.md`;
		if(item.kind==='agent' && !(item.path.endsWith('.agent.md') || item.path.endsWith('.agents.md'))) return `Item ${i+1} kind is "agent" but path doesn't end with .agent.md or .agents.md`;
	}
	return null;
}
function validateCollectionDisplay(display){
	if(display && typeof display!=="object") return 'Display must be an object';
	if(display){
		const normalize = (val)=>{ if(typeof val!=='string') return val; const hi=val.indexOf('#'); if(hi!==-1) val=val.substring(0,hi).trim(); if((val.startsWith('"')&&val.endsWith('"'))||(val.startsWith("'")&&val.endsWith("'"))) val=val.substring(1,val.length-1); return val.trim(); };
		if(display.ordering){ const o=normalize(display.ordering); if(!['manual','alpha'].includes(o)) return "Display ordering must be 'manual' or 'alpha'"; }
		if(display.show_badge!==undefined){ const raw=normalize(display.show_badge); if(typeof raw==='string'){ if(!['true','false'].includes(raw.toLowerCase())) return 'Display show_badge must be boolean'; } else if(typeof raw!=='boolean') return 'Display show_badge must be boolean'; }
	}
	return null;
}
function validateCollectionManifest(c, fp){
	const errors=[];
	const idE=validateCollectionId(c.id); if(idE) errors.push(`ID: ${idE}`);
	const nE=validateCollectionName(c.name); if(nE) errors.push(`Name: ${nE}`);
	const dE=validateCollectionDescription(c.description); if(dE) errors.push(`Description: ${dE}`);
	const tE=validateCollectionTags(c.tags); if(tE) errors.push(`Tags: ${tE}`);
	const iE=validateCollectionItems(c.items); if(iE) errors.push(`Items: ${iE}`);
	const disE=validateCollectionDisplay(c.display); if(disE) errors.push(`Display: ${disE}`);
	return errors;
}
function validateCollections(){
	const collectionsDir = path.join(process.cwd(), '.github', 'collections');
	if(!fs.existsSync(collectionsDir)){ console.log('No collections directory found - validation skipped'); return true; }
	const collectionFiles = fs.readdirSync(collectionsDir).filter(f=>f.endsWith('.collection.yml'));
	if(!collectionFiles.length){ console.log('No collection files found - validation skipped'); return true; }
	console.log(`Validating ${collectionFiles.length} collection files...`);
	let hasErrors=false; const usedIds=new Set();
	for(const file of collectionFiles){
		const filePath = path.join(collectionsDir, file);
		console.log(`\nValidating ${file}...`);
		const collection = parseCollectionYaml(filePath);
		if(!collection){ console.error(`❌ Failed to parse ${file}`); hasErrors=true; continue; }
		const errors = validateCollectionManifest(collection, filePath);
		if(errors.length){ console.error(`❌ Validation errors in ${file}:`); errors.forEach(e=>console.error(`   - ${e}`)); hasErrors=true; } else { console.log(`✅ ${file} is valid`); }
		if(collection.id){ if(usedIds.has(collection.id)){ console.error(`❌ Duplicate collection ID "${collection.id}" found in ${file}`); hasErrors=true; } else { usedIds.add(collection.id); } }
	}
	if(!hasErrors) console.log(`\n✅ All ${collectionFiles.length} collections are valid`);
	return !hasErrors;
}

try {
	const isValid = validateCollections();
	if(!isValid){ console.error('\n❌ Collection validation failed'); process.exit(1); }
	console.log('\n🎉 Collection validation passed');
} catch(error){
	console.error(`Error during validation: ${error.message}`); process.exit(1);
}
