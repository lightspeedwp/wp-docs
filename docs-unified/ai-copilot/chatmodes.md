# Custom Chat Modes (`*.chatmode.md`)

**Folder:** `.github/chatmodes/`

**Frontmatter keys:**

- `description` — placeholder text & hover text.

- `tools` — available tools.

- `model` — model to pin (optional).

### **Example**

Always show details  
`---`  
`description: "Plan features without writing code; output an implementation plan."`  
`tools: ["search","codebase"]`  
`model: "GPT-4"`  
`---`  
`# Planning Mode`  
`- No source code in answers`  
`- Provide: Overview, Requirements, Plan, Risks, Tests`

**Tip:** Name the file to reflect the mode: `planning.chatmode.md` → mode **Planning**.  

