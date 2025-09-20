// Canonical YAML parsing utilities for collection files.
// Minimal implementation tailored to simple key/value, array, and object patterns used in collection YAML.
const fs = require('fs');

function safeFileOperation(operation, filePath, defaultValue = null) {
	try {
		return operation();
	} catch (error) {
		console.error(`Error processing file ${filePath}: ${error.message}`);
		return defaultValue;
	}
}

function parseCollectionYaml(filePath) {
	return safeFileOperation(
		() => {
			const content = fs.readFileSync(filePath, 'utf8');
			const lines = content.split('\n');
			const result = {};
			let currentKey = null;
			let currentArray = null;
			let currentObject = null;

			for (let i = 0; i < lines.length; i++) {
				const line = lines[i];
				const trimmed = line.trim();
				if (!trimmed || trimmed.startsWith('#')) continue;
				const leadingSpaces = line.length - line.trimLeft().length;

				if (trimmed.startsWith('- ')) {
					if (currentKey === 'items') {
						if (!currentArray) { currentArray = []; result[currentKey] = currentArray; }
						const item = {}; currentArray.push(item); currentObject = item;
						const rest = trimmed.substring(2).trim();
						if (rest) {
							const ci = rest.indexOf(':');
							if (ci > -1) {
								const k = rest.substring(0, ci).trim();
								const v = rest.substring(ci + 1).trim();
								item[k] = v;
							}
						}
					} else if (currentKey === 'tags') {
						if (!currentArray) { currentArray = []; result[currentKey] = currentArray; }
						currentArray.push(trimmed.substring(2).trim());
					}
					continue;
				}

				if (trimmed.includes(':')) {
					const ci = trimmed.indexOf(':');
					const key = trimmed.substring(0, ci).trim();
					let value = trimmed.substring(ci + 1).trim();

						if (leadingSpaces === 0) {
							currentKey = key; currentArray = null; currentObject = null;
							if (value) {
								if (value.startsWith('[') && value.endsWith(']')) {
									const arrayContent = value.slice(1, -1);
									result[key] = arrayContent.trim() ? arrayContent.split(',').map(i => i.trim()) : [];
									currentKey = null; // done handling array
								} else {
									result[key] = value;
								}
							} else if (key === 'items' || key === 'tags') {
								result[key] = []; currentArray = result[key];
							} else if (key === 'display') {
								result[key] = {}; currentObject = result[key];
							}
						} else if (currentObject && leadingSpaces > 0) {
							currentObject[key] = value === 'true' ? true : value === 'false' ? false : value;
						} else if (currentArray && currentObject && leadingSpaces > 2) {
							currentObject[key] = value;
						}
				}
			}
			return result;
		},
		filePath,
		null
	);
}

module.exports = { parseCollectionYaml, safeFileOperation };
