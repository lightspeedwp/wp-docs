# Copilot Reusable Prompts (`*.prompt.md`)

**Folder:** `.github/prompts/`

**Frontmatter keys:**

- `description` — tooltip text for the prompt.

- `mode` — `"ask" | "edit" | "agent"`.

- `model` — model name (else use current).

- `tools` — allowed tools (agent mode).

### **Example**

Always show details  
`---`  
`description: "Refactor selected code into a documented function"`  
`mode: "edit"`  
`model: "GPT-4"`  
`tools: []`  
`---`  
`# Refactor to Function`  
`Convert the selected code into a self-contained function:`  
`- Add docstring`  
`- Preserve behaviour`

**Do** reference shared guides via Markdown links to avoid duplication.  

