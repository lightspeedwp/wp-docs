# Claude — `CLAUDE.md` & Subagents

## **`CLAUDE.md`**

Root-level Markdown file with persistent project instructions for Claude. No frontmatter needed.

## **Subagents**

**Folder:** `.github/agents/`  
 Each subagent is a Markdown file with YAML frontmatter:

Always show details  
`---`  
`name: "architect-review"                 # how Claude refers to this agent`  
`description: "Reviews designs and produces an ADR"`  
`tools: ["Read","Search"]                 # limit tool access (optional)`  
`---`  
`# Architect Review Agent`  
`Your task is to review specs and output an ADR (Context, Decision, Rationale, Consequences).`

**Tips**

- Single responsibility per subagent

- Restrict tools to the minimum set

- Keep the body focused and actionable  

