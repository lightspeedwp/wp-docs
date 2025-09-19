# **Copilot Space Instructions v1**

# **Build a "Copilot Space" with instructions for all frontmatter file types**

Create directories:

* .devcontainer  
* .copilot  
* .github  
* .github/agents  
* .github/chatmodes  
* .github/instructions  
* .github/prompts  
* .github/ISSUE\_TEMPLATES  
* .github/PULL\_REQUEST\_TEMPLATES  
* .github/workflows  
* .vscode  
* docs/copilot-space  
* docs/copilot-space/schemas

# **Top-level README guiding to Copilot Space**

readme \= """\# Copilot Space — Frontmatter & Agent Config Guide

This repository contains a **Copilot Space**: a self-contained set of docs, prompts, and chat modes that teach GitHub Copilot (and other agents) how to use **YAML frontmatter** across common file types.

**Start here:** `docs/copilot-space/INDEX.md`

Contents:

- Cheat sheets & examples for Issue/PR templates, Copilot instructions, prompt files, chat modes.  
- Claude subagents, AGENTS.md, CLAUDE.md, GEMINI.md conventions.  
- Ready-to-use Copilot prompt and chat mode for on-demand assistance. """

index\_md \= """\# Copilot Space Index — YAML Frontmatter Playbook

Use the links below for targeted guidance and copy-pasteable examples.

## **GitHub Templates**

- [Issue Templates (Issue Forms)](http://issue-templates.md)  
- [Pull Request Templates](http://pr-templates.md)  
- [Saved Replies (no frontmatter)](http://saved-replies.md)

## **Copilot Customisation**

- [Repo & Path Instructions (`copilot-instructions.md`, `*.instructions.md`)](http://copilot-instructions.md)  
- [Reusable Prompt Files (`*.prompt.md`)](http://prompt-files.md)  
- [Custom Chat Modes (`*.chatmode.md`)](http://chatmodes.md)  
- [AGENTS.md (universal rules)](http://agents-md.md)

## **Claude & Gemini**

- [Claude: `CLAUDE.md` & Subagents (`.github/agents/*.md`)](http://claude-agents.md)  
- [Gemini: `GEMINI.md` (conventions)](http://gemini-md.md)

## **Schemas (reference)**

- [Issue Form YAML keys](http://schemas/issue-form-schema.md)  
- [Copilot Prompt frontmatter](http://schemas/prompt-frontmatter-schema.md)  
- [Chat Mode frontmatter](http://schemas/chatmode-frontmatter-schema.md)  
- [Claude Subagent frontmatter](http://schemas/claude-subagent-schema.md) """

issue\_templates\_md \= """\# Issue Templates (Issue Forms) — YAML Frontmatter

**Location:** `.github/ISSUE_TEMPLATE/*.yml`

**Required top-level keys:**

- `name` *(string)* — Template name (shown in picker).  
- `description` *(string)* — What this template is for.  
- `body` *(array)* — Form blocks (markdown/input/textarea/dropdown/checkboxes).

**Optional top-level keys:** `title`, `labels`, `assignees`, `projects`, `type`.

### **Full Example**

name: "🐛 Bug report"                          \# required

description: "Report a bug to help us improve" \# required

title: "\[Bug\]: "                               \# optional default issue title

labels: \["bug","needs-triage"\]                 \# optional auto labels

assignees: \[\]                                  \# optional auto assignees

projects: \["my-org/42"\]                        \# optional projects

type: bug                                      \# optional issue type

body:

  \- type: markdown

    attributes:

      value: |

        \#\# Thanks for reporting\!

        Please provide enough detail to reproduce the issue.

  \- type: input

    id: version

    attributes:

      label: "Version"

      description: "Which version/commit?"

      placeholder: "v1.2.3 or SHA"

    validations:

      required: true

  \- type: textarea

    id: repro

    attributes:

      label: "Steps to reproduce"

      placeholder: |

        1\. Go to '...'

        2\. Click '...'

        3\. See error

    validations:

      required: true

  \- type: dropdown

    id: env

    attributes:

      label: "Environment"

      options: \["macOS","Windows","Linux","Other"\]

      multiple: true

    validations:

      required: true

  \- type: checkboxes

    id: checks

    attributes:

      label: "Checks"

      options:

        \- label: "I searched for duplicates"

          required: true

        \- label: "I can reproduce with latest"

**Do**

* Use `|` for multiline text blocks.

* Quote strings that include `#` or `:`.

* Require only fields that truly block triage.

**Don’t**

* Overload forms with unnecessary inputs.

* Use PR-style frontmatter here.  
   """

pr\_templates\_md \= """\# Pull Request Templates

**Location:** `.github/PULL_REQUEST_TEMPLATE/*.md` (Markdown)

PR templates **do not** support form-style YAML frontmatter. Keep the template in Markdown with headings and HTML comments for guidance.

### **Example**

Always show details  
`## Summary`  
`<!-- What & why -->`

`## Related Issues`  
`Closes #123`

`## Changes`  
`- [ ] Code`  
`- [ ] Tests`  
`- [ ] Docs`

`## Screenshots`  
`<!-- drag screenshots here -->`

`## Checklist`  
`- [ ] Read CONTRIBUTING`  
`- [ ] Ran tests`  
`- [ ] Followed style guides`

"""

saved\_replies\_md \= """\# Saved Replies (GitHub UI)

Saved replies are managed in **GitHub Settings** (Profile → Saved replies).  
 They have a **title** and **body**; there is **no file-based frontmatter**.

**Tip:** Keep replies short and customise after insertion.  
 """

copilot\_instructions\_doc \= """\# Copilot Custom Instructions

## **Repository-wide**

**File:** `.github/copilot-instructions.md`  
 Plain Markdown. No YAML required.

Use this file for always-on guidance (style, patterns, security notes).

## **Path-specific**

**Folder:** `.github/instructions/`  
 **File pattern:** `*.instructions.md` with YAML frontmatter.

Always show details  
`---`  
`applyTo: "src/**/*.{js,ts,tsx}"   # glob(s) for files this applies to`  
`description: "Frontend coding rules"  # optional tooltip/label`  
`---`  
`# Frontend Guidelines`  
`- Prefer functional components and hooks`  
`- Add tests for new components`

**Tips**

* Combine globs with commas: `applyTo: "src/**/*.ts,tests/**/*.ts"`

* Keep rules concise; whitespace is ignored by Copilot.  
   """

prompt\_files\_doc \= """\# Copilot Reusable Prompts (`*.prompt.md`)

**Folder:** `.github/prompts/`

**Frontmatter keys:**

* `description` — tooltip text for the prompt.

* `mode` — `"ask" | "edit" | "agent"`.

* `model` — model name (else use current).

* `tools` — allowed tools (agent mode).

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
 """

chatmodes\_doc \= """\# Custom Chat Modes (`*.chatmode.md`)

**Folder:** `.github/chatmodes/`

**Frontmatter keys:**

* `description` — placeholder text & hover text.

* `tools` — available tools.

* `model` — model to pin (optional).

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
 """

agents\_md\_doc \= """\# AGENTS.md (Universal Rules)

**File:** `AGENTS.md` at repo root.  
 A vendor-neutral rulebook applied by many AI tools.

**Content ideas**

* Security & privacy (no secrets)

* Style & testing expectations

* Architectural patterns to follow/avoid

* License and dependency policies  
   """

claude\_agents\_doc \= """\# Claude — `CLAUDE.md` & Subagents

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

* Single responsibility per subagent

* Restrict tools to the minimum set

* Keep the body focused and actionable  
   """

gemini\_doc \= """\# Gemini — `GEMINI.md` (Convention)

**File:** `GEMINI.md` at repo root (conventional).  
 Use as a persistent instruction file for Gemini-based tools.

**Suggested content**

* Tech stack and constraints

* Style & testing expectations

* Privacy and security notes  
   """

# **Schemas (concise)**

issue\_schema \= """\# Issue Form — Frontmatter Keys

Always show details  
`name: string                 # required`  
`description: string          # required`  
`title: string                # optional`  
`labels: [string] | string    # optional`  
`assignees: [string] | string # optional`  
`projects: [string]           # optional (OWNER/NUMBER)`  
`type: string                 # optional`  
`body:                        # required`  
  `- type: markdown|input|textarea|dropdown|checkboxes`  
    `id: string               # optional`  
    `attributes:`  
      `label: string          # required (except markdown)`  
      `description: string    # optional`  
      `placeholder: string    # optional`  
      `value: string          # optional`  
      `options: [string]      # required for dropdown/checkboxes`  
      `multiple: boolean      # dropdown only`  
      `render: string         # textarea (e.g., bash, markdown)`  
    `validations:`  
      `required: boolean`

"""

prompt\_schema \= """\# Prompt File — Frontmatter Keys

Always show details  
`description: string          # tooltip`  
`mode: ask|edit|agent         # defaults to current`  
`model: string                # optional`  
`tools: [string]              # agent-only`

"""

chatmode\_schema \= """\# Chat Mode — Frontmatter Keys

Always show details  
`description: string          # placeholder & tooltip`  
`tools: [string]              # optional tool allowlist`  
`model: string                # optional pinned model`

"""

claude\_subagent\_schema \= """\# Claude Subagent — Frontmatter Keys

Always show details  
`name: string                 # subagent handle`  
`description: string          # purpose / when to use`  
`tools: [string]              # optional tool allowlist`

"""

# **Copilot prompt to pull the guide content on demand**

## **frontmatter\_prompt \= """---**

## **description: "Frontmatter Guide: answer using docs in docs/copilot-space/\*"**

## **mode: "ask"**

## **model: ""**

## **tools: \[\]**

# **Frontmatter Guide Prompt**

When asked about YAML frontmatter or AI agent config:

* Consult the repository docs under `docs/copilot-space/`.

* Provide short, actionable answers with code blocks.

* Link to the exact doc path you used.  
   """

# **Chat mode to anchor behaviour**

## **frontmatter\_chatmode \= """---**

## **description: "Frontmatter mode: quick answers \+ examples from docs/copilot-space"**

## **tools: \["codebase"\]**

## **model: ""**

# **Frontmatter Chat Mode**

You specialise in YAML frontmatter and AI agent configuration for GitHub repos.  
 Use examples from `docs/copilot-space/` and keep responses concise for developers.  
 """

# **Instruction file to bias markdown authoring**

## **frontmatter\_instructions \= """---**

## **applyTo: "\*\*/\*.md"**

## **description: "Authoring guidance for frontmatter docs"**

# **Authoring Guidance**

* Prefer concise explanations next to examples.

* Use fenced code blocks with language identifiers.

* Include Do/Don’t lists where useful.  
   """

# **Agent example for this space**

## **space\_agent \= """---**

## **name: "frontmatter-librarian"**

## **description: "Finds and cites the correct frontmatter pattern from docs/copilot-space"**

## **tools: \["Read","Search"\]**

# **Frontmatter Librarian Agent**

* When queried, scan `docs/copilot-space/` for the most relevant example.

* Return the example with a one-paragraph explanation and a short Do/Don’t list.  
   """

# **Write files**

files \= {  
 "README.md": readme,  
 "docs/copilot-space/INDEX.md": index\_md,  
 "docs/copilot-space/issue-templates.md": issue\_templates\_md,  
 "docs/copilot-space/pr-templates.md": pr\_templates\_md,  
 "docs/copilot-space/saved-replies.md": saved\_replies\_md,  
 "docs/copilot-space/copilot-instructions.md": copilot\_instructions\_doc,  
 "docs/copilot-space/prompt-files.md": prompt\_files\_doc,  
 "docs/copilot-space/chatmodes.md": chatmodes\_doc,  
 "docs/copilot-space/agents-md.md": agents\_md\_doc,  
 "docs/copilot-space/claude-agents.md": claude\_agents\_doc,  
 "docs/copilot-space/gemini-md.md": gemini\_doc,  
 "docs/copilot-space/schemas/issue-form-schema.md": issue\_schema,  
 "docs/copilot-space/schemas/prompt-frontmatter-schema.md": prompt\_schema,  
 "docs/copilot-space/schemas/chatmode-frontmatter-schema.md": chatmode\_schema,  
 "docs/copilot-space/schemas/claude-subagent-schema.md": claude\_subagent\_schema,  
 ".github/prompts/frontmatter-guide.prompt.md": frontmatter\_prompt,  
 ".github/chatmodes/frontmatter.chatmode.md": frontmatter\_chatmode,  
 ".github/instructions/frontmatter.instructions.md": frontmatter\_instructions,  
 ".github/agents/frontmatter-librarian.md": space\_agent,  
 }

for rel, content in files.items():  
 p \= os.path.join(root, rel)  
 os.makedirs(os.path.dirname(p), exist\_ok=True)  
 with open(p, "w", encoding="utf-8", newline="\\n") as f:  
 f.write(content)

# **Optional VS Code settings to highlight markdown and enable word wrap**

vscode\_settings \= {  
 "editor.wordWrap": "on",  
 "editor.defaultFormatter": "esbenp.prettier-vscode",  
 "\[markdown\]": {  
 "editor.wordWrap": "on"  
 }  
 }  
 with open(os.path.join(root, ".vscode/settings.json"), "w", encoding="utf-8") as f:  
 json.dump(vscode\_settings, f, indent=2)

# **Zip it**

zip\_path \= "/mnt/data/copilot-space-frontmatter.zip"  
 with zipfile.ZipFile(zip\_path, "w", zipfile.ZIP\_DEFLATED) as z:  
 for base, \_, files\_in in os.walk(root):  
 for name in files\_in:  
 full \= os.path.join(base, name)  
 rel \= os.path.relpath(full, root)  
 z.write(full, arcname=os.path.join("copilot-space", rel))

zip\_path

Always show details

Alright Ash — I’ve generated a **Copilot Space** that teaches how to use every front-matter file you asked about, with docs, examples, schemas, and ready-to-run Copilot prompt/chat mode.

Download the Copilot Space

## **What’s inside**

* **docs/copilot-space/**

  * **INDEX.md** → single place to start; links to everything.

  * **issue-templates.md** → YAML Issue Forms: required/optional keys \+ full example.

  * **pr-templates.md** → PR templates (Markdown-only, no YAML forms) \+ best practice template.

  * **saved-replies.md** → explains they’re UI-managed (no frontmatter).

  * **copilot-instructions.md** → repo-wide vs path-specific instructions, `applyTo` patterns.

  * **prompt-files.md** → `.prompt.md` frontmatter (`description`, `mode`, `model`, `tools`) \+ example.

  * **chatmodes.md** → `.chatmode.md` frontmatter \+ example “Planning Mode”.

  * **agents-md.md** → how to use `AGENTS.md` as universal rules.

  * **claude-agents.md** → `CLAUDE.md` \+ **Claude subagents** YAML (`name`, `description`, `tools`) \+ example.

  * **gemini-md.md** → `GEMINI.md` convention and what to include.

  * **schemas/** (quick reference)

    * **issue-form-schema.md**, **prompt-frontmatter-schema.md**, **chatmode-frontmatter-schema.md**, **claude-subagent-schema.md**.

* **.github/**

  * **instructions/**

    * **frontmatter.instructions.md** → applies to all `*.md` (authoring guidance).

  * **prompts/**

    * **frontmatter-guide.prompt.md** → quick “Frontmatter Guide” prompt that tells Copilot to answer using the docs in `docs/copilot-space/`.

  * **chatmodes/**

    * **frontmatter.chatmode.md** → dedicated chat mode: fast answers \+ examples from this space.

  * **agents/**

    * **frontmatter-librarian.md** → Claude-style subagent with `name/description/tools`; it fetches the right example and returns a short Do/Don’t list.

* **.vscode/settings.json** → basic markdown-friendly editor defaults (wrap on).

## **How to use it**

1. **Drop the folder into any repo** (or create a new one) and commit.

2. Open Copilot Chat in VS Code:

   * Select **Frontmatter** from the chat mode dropdown (from `.github/chatmodes/frontmatter.chatmode.md`), **or**

   * Run the **Frontmatter Guide** prompt (`/frontmatter-guide`) to answer questions using the docs.

3. Edit the examples to match your stack (WordPress/JS/TS/etc.). The Issue Forms and prompt/chat mode samples are ready to copy-paste.

4. If you also use Claude/Gemini:

   * Add/trim **`AGENTS.md`**, **`CLAUDE.md`**, **`GEMINI.md`** at the repo root (or keep them in your main repo and link back here).

   * Define any project subagents in `.github/agents/`.

Want me to merge this into the previous repo template I made for you so you’ve got a single combined starter? 

