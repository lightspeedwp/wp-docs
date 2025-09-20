# **YAML Frontmatter Files Types with Schema**

`A minimal, **WordPress-friendly** Copilot Space that teaches and enforces correct use of YAML frontmatter`  
`across GitHub templates and AI files. Includes docs, schemas, reusable prompts, custom chat modes,`  
`and example Claude subagents. Built to standardise WP plugin/theme workflows.`

Always show details  
`# Create a WordPress-focused Copilot Space with frontmatter docs, prompts, chat modes, and agents, then zip it`  
`import os, zipfile, json, textwrap, pathlib`

`root = "/mnt/data/copilot-space-wp"`  
`os.makedirs(root, exist_ok=True)`

`# Folders`  
`dirs = [`  
    `".github",`  
    `".github/instructions",`  
    `".github/prompts",`  
    `".github/chatmodes",`  
    `".github/agents",`  
    `".github/ISSUE_TEMPLATE",`  
    `".github/PULL_REQUEST_TEMPLATE",`  
    `"docs/copilot-space",`  
    `"docs/copilot-space/schemas",`  
    `"docs/wp-guides",`  
    `".vscode"`  
`]`  
`for d in dirs:`  
    `os.makedirs(os.path.join(root, d), exist_ok=True)`

`# ---------- Root docs ----------`  
`readme = """# Copilot Space (WordPress Edition)`

`A minimal, **WordPress-friendly** Copilot Space that teaches and enforces correct use of YAML frontmatter`  
`across GitHub templates and AI files. Includes docs, schemas, reusable prompts, custom chat modes,`  
`and example Claude subagents. Built to standardise WP plugin/theme workflows.`

`` Start here: `docs/copilot-space/INDEX.md` ``  
`"""`

`agents_md = """# AGENTS.md — Universal AI Rules (WordPress)`

``- Follow **WordPress Coding Standards** (PHPCS: `WordPress`, `WordPress-Docs`, `WordPress-Extra`).``  
`- PHP versions: prefer compatibility with current WP supported PHP (adjust per project).`  
`- Escape, sanitise, and validate all inputs; use nonces for forms; respect capabilities/roles.`  
`- I18n: wrap user-facing text in translation functions; provide text domain.`  
`- Keep changes minimal and reversible; propose diffs and tests.`  
`- Never output secrets; redact credentials and keys.`  
`"""`

`claude_md = """# CLAUDE.md — Project Instructions (WordPress)`

`Claude should:`  
`- Prefer WordPress core APIs (Options, Settings API, REST API, Transients, WP_Filesystem).`  
`- Use hooks/filters where appropriate; avoid monkey-patching core.`  
`- Generate **PHPCS-compliant** PHP and add PHPDoc for public APIs.`  
`- For JS (blocks), use @wordpress/* packages; register blocks via block.json where sensible.`  
`"""`

`gemini_md = """# GEMINI.md — Project Instructions (WordPress)`

`Gemini should follow: WordPress coding standards, security best practices (escaping/sanitising),`  
`and internationalisation. Prefer minimal dependencies and progressive enhancement.`  
`"""`

`editorconfig = """root = true`

`[*]`  
`end_of_line = lf`  
`insert_final_newline = true`  
`charset = utf-8`  
`trim_trailing_whitespace = true`

`[*.php]`  
`indent_style = tab`  
`indent_size = 4`

`[*.{js,jsx,ts,tsx,json}]`  
`indent_style = space`  
`indent_size = 2`

`[*.{css,scss,sass}]`  
`indent_style = space`  
`indent_size = 2`

`[*.md]`  
`trim_trailing_whitespace = false`  
`"""`

`gitignore = """# OS`  
`.DS_Store`  
`Thumbs.db`

`# Node/Yarn`  
`node_modules/`  
`npm-debug.log*`  
`yarn-error.log*`  
`dist/`  
`build/`  
`coverage/`

`# Composer`  
`vendor/`  
`composer.lock`

`# IDE`  
`.vscode/`  
`.idea/`

`# PHP unit caches`  
`.phpunit.result.cache`  
`"""`

`gitattributes = """* text=auto eol=lf`  
`docs/* linguist-documentation`  
`"""`

`# ---------- Docs (Copilot Space Guides) ----------`  
`index_md = """# Copilot Space Index — WordPress Frontmatter Playbook`

`This space blends **GitHub templates** and **AI instruction files** with a WordPress focus.`

`## GitHub Templates`  
`- [Issue Templates (Issue Forms)](issue-templates.md)`  
`- [Pull Request Templates](pr-templates.md)`  
`- [Saved Replies (overview)](saved-replies.md)`

`## Copilot Customisation`  
`- [Repo & Path Instructions](copilot-instructions.md)`  
`- [Reusable Prompt Files](prompt-files.md)`  
`- [Custom Chat Modes](chatmodes.md)`  
`- [AGENTS.md (universal rules)](agents-md.md)`

`## Claude & Gemini`  
`- [Claude: CLAUDE.md & Subagents](claude-agents.md)`  
`- [Gemini: GEMINI.md (convention)](gemini-md.md)`

`## Schemas`  
`- [Issue Form schema](schemas/issue-form-schema.md)`  
`- [Prompt frontmatter schema](schemas/prompt-frontmatter-schema.md)`  
`- [Chat Mode frontmatter schema](schemas/chatmode-frontmatter-schema.md)`  
`- [Claude Subagent schema](schemas/claude-subagent-schema.md)`  
`- [Prompt Collection schema (experimental)](schemas/prompt-collection-schema.md)`

`## WordPress Guides`  
`- [WordPress Coding Standards quickstart](../wp-guides/wp-coding-standards.md)`  
`- [Security checklist for WP](../wp-guides/wp-security-checklist.md)`  
`- [Block development checklist](../wp-guides/block-dev-checklist.md)`  
`"""`

`issue_templates_md = """# Issue Templates (Issue Forms) — YAML Frontmatter (WordPress)`

`` **Location:** `.github/ISSUE_TEMPLATE/*.yml` ``

``Required: `name`, `description`, `body`.``  
``Optional: `title`, `labels`, `assignees`, `projects`, `type`.``

`The examples below include common WordPress fields (WP version, PHP version, theme/plugin). See live templates in this repo.`  
`"""`

`pr_templates_md = """# Pull Request Templates (WordPress)`

`` **Location:** `.github/PULL_REQUEST_TEMPLATE/*.md` ``

`PR templates are plain Markdown (no form YAML). Use sections/checklists to enforce **WP coding standards**,`  
`testing steps, PHPCS, and i18n checks. A minimal example is provided in this repo.`  
`"""`

`saved_replies_md = """# Saved Replies`

`Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.`  
`"""`

`copilot_instructions_doc = """# Copilot Custom Instructions (WordPress)`

`## Repository-wide`  
``**File:** `.github/copilot-instructions.md` (Markdown only)``

`- Follow WordPress Coding Standards (PHPCS).`  
`- Use esc_html/esc_attr/sanitize_* appropriately; nonces for forms; capability checks.`  
`- All user-facing strings must be translatable with text domain.`  
`- Prefer core APIs over custom implementations.`

``## Path-specific (`*.instructions.md`)``  
``**Folder:** `.github/instructions/` (with YAML frontmatter)``

```` ```markdown ````  
`---`  
`applyTo: "**/*.php"`  
`description: "PHP (WordPress) rules"`  
`---`  
`- Use WP functions (get_option, update_option, wp_safe_redirect).`  
`- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.`  
`- Avoid direct DB queries; use $wpdb safely only when needed.`

"""

prompt\_files\_doc \= """\# Reusable Prompt Files (`*.prompt.md`)

**Folder:** `.github/prompts/`

Frontmatter:

* `description` — tooltip/summary

* `mode` — ask | edit | agent

* `model` — optional; uses current if omitted

* `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.  
 """

chatmodes\_doc \= """\# Custom Chat Modes (`*.chatmode.md`)

**Folder:** `.github/chatmodes/`

Frontmatter:

* `description` — shown as placeholder & tooltip

* `tools` — allowed tools

* `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

agents\_md\_doc \= """\# AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.  
 """

claude\_agents\_doc \= """\# Claude — CLAUDE.md & Subagents

**CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

**Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.  
 """

gemini\_doc \= """\# Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.  
 """

# **\---------- Schemas \----------**

issue\_schema \= """\# Issue Form — Frontmatter Keys (Reference)

Always show details  
`name: string                 # required`  
`description: string          # required`  
`title: string                # optional`  
`labels: [string] | string    # optional`  
`assignees: [string] | string # optional`  
`projects: [string]           # optional`  
`type: string                 # optional`  
`body:                        # required`  
  `- type: markdown|input|textarea|dropdown|checkboxes`  
    `id: string               # optional`  
    `attributes:`  
      `label: string          # required (except markdown)`  
      `description: string    # optional`  
      `placeholder: string    # optional`  
      `value: string          # optional`  
      `options: [string]      # dropdown/checkboxes`  
      `multiple: boolean      # dropdown only`  
      `render: string         # textarea only (e.g., bash, markdown)`  
    `validations:`  
      `required: boolean`

"""

prompt\_schema \= """\# Prompt File — Frontmatter Keys

Always show details  
`description: string`  
`mode: ask|edit|agent`  
`model: string            # optional`  
`tools: [string]          # optional`

"""

chatmode\_schema \= """\# Chat Mode — Frontmatter Keys

Always show details  
`description: string`  
`tools: [string]          # optional`  
`model: string            # optional`

"""

claude\_subagent\_schema \= """\# Claude Subagent — Frontmatter Keys

Always show details  
`name: string`  
`description: string`  
`tools: [string]          # optional`

"""

prompt\_collection\_schema \= """\# Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details  
`{`  
  `"$schema": "https://example.com/schemas/prompt-collection.schema.json",`  
  `"name": "WordPress Starters",`  
  `"description": "Reusable Copilot prompts for WP",`  
  `"prompts": [`  
    `{`  
      `"id": "wp-register-block",`  
      `"path": ".github/prompts/wp-register-block.prompt.md",`  
      `"tags": ["blocks","gutenberg"]`  
    `}`  
  `]`  
`}`

"""

# **\---------- WP Guides \----------**

wp\_coding \= """\# WordPress Coding Standards Quickstart

* Install PHPCS and WPCS rulesets.

* Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.

* Escape late, sanitise early; always validate and authorise.  
   """

wp\_security \= """\# WordPress Security Checklist

* Nonces for any state-changing actions.

* Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.

* Sanitise input: `sanitize_text_field()`, `sanitize_email()`.

* Cap checks with `current_user_can()`; never trust user input.  
   """

block\_dev \= """\# Block Development Checklist

* Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).

* Register via `register_block_type_from_metadata()`.

* Enqueue editor/front assets properly; namespace styles.

* Provide `supports` (align, color, typography) as needed.  
   """

# **\---------- .github root \----------**

copilot\_repo\_instructions \= """\# Copilot Repository Instructions (WordPress)

* Use core WP APIs; follow WPCS; propose small diffs.

* For plugins: prefix functions, classes, and filters with project slug.

* For themes: follow Template Hierarchy; enqueue assets, no direct script tags.

* I18n: load text domain; add translators' comments for placeholders.  
   """

codeowners \= """\# CODEOWNERS

* @your-team  
   """

# **\---------- Issue Templates (WP-focused) \----------**

bug\_report\_yml \= """name: "🐛 Bug report (WordPress)"  
 description: "Report a reproducible issue with the plugin/theme"  
 title: "\[Bug\]: "  
 labels: \["bug","needs-triage"\]

body:

* type: markdown  
   attributes:  
   value: |  
   Thanks\! Please fill out the details below to help us reproduce the issue.

* type: input  
   id: wp\_version  
   attributes:  
   label: "WordPress version"  
   placeholder: "e.g. 6.6.2"  
   validations:  
   required: true

* type: input  
   id: php\_version  
   attributes:  
   label: "PHP version"  
   placeholder: "e.g. 8.2"  
   validations:  
   required: true

* type: input  
   id: plugin\_theme  
   attributes:  
   label: "Affected component"  
   description: "Which plugin/theme/module?"  
   placeholder: "Plugin XYZ / Theme ABC"  
   validations:  
   required: true

* type: textarea  
   id: repro  
   attributes:  
   label: "Steps to reproduce"  
   value: |  
   1\. Go to …  
   2\. Click …  
   3\. Observe …  
   validations:  
   required: true

* type: textarea  
   id: expected  
   attributes:  
   label: "Expected behaviour"  
   validations:  
   required: true

* type: textarea  
   id: actual  
   attributes:  
   label: "Actual behaviour (include error messages/logs)"  
   validations:  
   required: true

* type: dropdown  
   id: environment  
   attributes:  
   label: "Environment"  
   options:  
   \- "Local (wp-env/Local/Valet)"  
   \- "Staging"  
   \- "Production"  
   multiple: false  
   validations:  
   required: true

* type: checkboxes  
   id: checks  
   attributes:  
   label: "Checks"  
   options:  
   \- label: "I searched for duplicate issues"  
   required: true  
   \- label: "I can reproduce with all other plugins disabled and a default theme"  
   """

feature\_request\_yml \= """name: "✨ Feature request (WordPress)"  
 description: "Suggest an improvement or new feature"  
 title: "\[Feature\]: "  
 labels: \["enhancement"\]

body:

* type: textarea  
   id: problem  
   attributes:  
   label: "Problem to solve"  
   description: "What user/customer problem does this feature address?"  
   validations:  
   required: true

* type: textarea  
   id: proposal  
   attributes:  
   label: "Proposed solution"  
   description: "Describe how it should work (include examples or prior art)"  
   validations:  
   required: true

* type: textarea  
   id: impact  
   attributes:  
   label: "Impact / Risks"  
   description: "Performance, backwards-compatibility, security, etc."  
   validations:  
   required: false  
   """

# **\---------- PR Template (WP-focused) \----------**

pr\_template \= """\#\# Summary

\<\!-- Concise description of the change and why it's needed. \--\>

## **Related Issues**

Closes \#\_\_\_

## **Changes**

* PHP follows WPCS & PHPCS passes locally

* Escaping/sanitisation/nonces/capability checks added where needed

* I18n added (text domain, translators' comments)

* Blocks registered correctly (block.json / register\_block\_type\_from\_metadata)

* Tests/docs updated (if applicable)

## **Manual QA**

1. …

2. …

3. …

## **Screenshots / GIF**

\<\!-- If UI changes, include before/after \--\>

"""

# **\---------- Instructions (applyTo) \----------**

## **php\_instructions \= """---**

## **applyTo: "\*\*/\*.php"**

## **description: "PHP (WordPress) rules"**

# **PHP (WordPress) Guidelines**

* Follow WPCS; write PHPDoc for public APIs.

* Escape output with `esc_*` and sanitise input with `sanitize_*`.

* Use nonces for forms and actions; check capabilities with `current_user_can()`.

* Use core APIs (Options, Settings API, REST API, Transients) before custom.  
   """

## **js\_instructions \= """---**

## **applyTo: "assets/\*\*/\*.{js,jsx,ts,tsx}"**

## **description: "JS/Blocks rules"**

# **JavaScript / Blocks Guidelines**

* Use @wordpress/scripts and @wordpress/\* packages.

* Prefer functional components and hooks; keep components small.

* Register blocks with block.json \+ `register_block_type_from_metadata()`.  
   """

## **css\_instructions \= """---**

## **applyTo: "assets/\*\*/\*.{css,scss,sass}"**

## **description: "Styles guidelines"**

# **CSS/Styles Guidelines**

* Namespaces/prefixes to avoid collisions.

* Prefer CSS custom properties; avoid \!important unless necessary.

* Provide editor styles for blocks where needed.  
   """

# **\---------- Prompts (WP) \----------**

## **prompt\_register\_block \= """---**

## **description: "Register a Gutenberg block from block.json and scaffold files"**

## **mode: "ask"**

## **model: ""**

## **tools: \[\]**

# **Register a Gutenberg Block**

Given a short block idea, scaffold:

* `block.json` (name, title, category, attributes, supports)

* `index.js` using @wordpress/scripts, functional component

* Register via `register_block_type_from_metadata()` in PHP

Ensure i18n, namespace prefixes, and enqueue correct editor/front assets.  
 """

## **prompt\_enqueue\_assets \= """---**

## **description: "Enqueue scripts/styles the WordPress way"**

## **mode: "ask"**

## **model: ""**

## **tools: \[\]**

# **Enqueue Assets**

Enqueue assets using `wp_enqueue_scripts` (front) and `admin_enqueue_scripts` (admin):

* Use `wp_register_script/style` and dependency arrays.

* Version assets with file modification time or build hash.

* Localise data via `wp_localize_script` (no secrets).

Return code snippets for functions.php or plugin main file.  
 """

## **prompt\_settings\_page \= """---**

## **description: "Create an admin Settings page using WordPress Settings API"**

## **mode: "ask"**

## **model: ""**

## **tools: \[\]**

# **WP Settings Page**

Create a Settings page with:

* Admin menu entry (capability check)

* Settings API: register\_setting, add\_settings\_section, add\_settings\_field

* Sanitisation callbacks; nonces

* Translatable labels using a specified text domain (placeholder: `your-text-domain`)  
   """

## **prompt\_phpdoc \= """---**

## **description: "Generate PHPDoc for public functions/classes (WPCS)"**

## **mode: "edit"**

## **model: ""**

## **tools: \[\]**

# **Generate PHPDoc**

Add concise PHPDoc blocks for public functions/classes:

* Summary one-liner; `@since` (placeholder), `@param` with types, `@return`

* Reference hooks/filters where relevant

* Do not alter behaviour  
   """

# **\---------- Chat Modes \----------**

## **chatmode\_wp \= """---**

## **description: "WordPress Mode: secure, PHPCS-compliant answers with core APIs"**

## **tools: \["codebase"\]**

## **model: ""**

# **WordPress Mode**

Answer as a seasoned WordPress engineer. Prioritise:

* Security (escaping/sanitising, nonces, caps)

* I18n (text domain)

* WPCS compliance

* Core APIs over custom re-implementation  
   """

# **\---------- Claude Subagents \----------**

## **agent\_security \= """---**

## **name: "wp-security-review"**

## **description: "Audits code for escaping/sanitisation/nonces/cap checks"**

## **tools: \["Read"\]**

# **WP Security Review Agent**

* Scan changed PHP files for unescaped output and unsanitised input.

* Verify nonces and capability checks for actions.

* Report concrete fixes with code examples.  
   """

## **agent\_performance \= """---**

## **name: "wp-performance-audit"**

## **description: "Finds obvious performance pitfalls (queries, transients, caching)"**

## **tools: \["Read"\]**

# **WP Performance Audit Agent**

* Flag N+1 DB queries, missing caching/transients, or unbounded loops.

* Suggest use of `WP_Query` args, transients, and object caching patterns.  
   """

# **\---------- Prompt Collection (experimental) \----------**

prompt\_collection \= {  
 "$schema": "https://example.com/schemas/prompt-collection.schema.json",  
 "name": "WordPress Starters",  
 "description": "Reusable Copilot prompts for common WP tasks",  
 "prompts": \[  
 {"id": "wp-register-block", "path": ".github/prompts/wp-register-block.prompt.md", "tags": \["blocks","gutenberg"\]},  
 {"id": "wp-enqueue-assets", "path": ".github/prompts/wp-enqueue-assets.prompt.md", "tags": \["assets","enqueue"\]},  
 {"id": "wp-settings-page", "path": ".github/prompts/wp-settings-page.prompt.md", "tags": \["admin","settings"\]},  
 {"id": "wp-phpdoc", "path": ".github/prompts/wp-phpdoc.prompt.md", "tags": \["phpdoc","wpcs"\]}  
 \]  
 }

# **\---------- PR Template \----------**

pr\_template \= """\#\# Summary

\<\!-- Why is this change needed? \--\>

## **Related Issues**

Closes \#\_\_\_

## **Changes**

* PHPCS passes (WPCS)

* Escaping/sanitisation/nonces/cap checks verified

* I18n (text domain, translators' comments)

* Blocks registered properly (block.json & PHP)

* Back-compat verified (PHP/WP)

* Tests/docs updated

## **QA Steps**

1. …

2. …

3. …

## **Screenshots**

"""

# **\---------- Copilot repo instructions \----------**

copilot\_repo \= """\# Copilot Instructions (WordPress)

* Generate WPCS-compliant PHP and i18n-ready strings.

* Always propose escaping/sanitising and capability checks.

* Use core WP APIs first; blocks via block.json.

* Keep diffs minimal; include PHPDoc.  
   """

# **\---------- Write files \----------**

files \= {  
 "README.md": readme,  
 "AGENTS.md": agents\_md,  
 "CLAUDE.md": claude\_md,  
 "GEMINI.md": gemini\_md,  
 ".editorconfig": editorconfig,  
 ".gitignore": gitignore,  
 ".gitattributes": gitattributes,  
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
 "docs/copilot-space/schemas/prompt-collection-schema.md": prompt\_collection\_schema,  
 "docs/wp-guides/wp-coding-standards.md": wp\_coding,  
 "docs/wp-guides/wp-security-checklist.md": wp\_security,  
 "docs/wp-guides/block-dev-checklist.md": block\_dev,  
 ".github/copilot-instructions.md": copilot\_repo\_instructions,  
 ".github/CODEOWNERS": codeowners,  
 ".github/ISSUE\_TEMPLATE/bug\_report.yml": bug\_report\_yml,  
 ".github/ISSUE\_TEMPLATE/feature\_request.yml": feature\_request\_yml,  
 ".github/PULL\_REQUEST\_TEMPLATE/pull\_request\_template.md": pr\_template,  
 ".github/instructions/php.instructions.md": php\_instructions,  
 ".github/instructions/js.instructions.md": js\_instructions,  
 ".github/instructions/css.instructions.md": css\_instructions,  
 ".github/prompts/wp-register-block.prompt.md": prompt\_register\_block,  
 ".github/prompts/wp-enqueue-assets.prompt.md": prompt\_enqueue\_assets,  
 ".github/prompts/wp-settings-page.prompt.md": prompt\_settings\_page,  
 ".github/prompts/wp-phpdoc.prompt.md": prompt\_phpdoc,  
 ".github/chatmodes/wordpress.chatmode.md": chatmode\_wp,  
 ".github/agents/wp-security-review.md": agent\_security,  
 ".github/agents/wp-performance-audit.md": agent\_performance,  
 ".github/prompts/collection.wp.json": json.dumps(prompt\_collection, indent=2),  
 }

for rel, content in files.items():  
 p \= os.path.join(root, rel)  
 os.makedirs(os.path.dirname(p), exist\_ok=True)  
 mode \= "w"  
 encoding \= "utf-8"  
 with open(p, mode, encoding=encoding, newline="\\n") as f:  
 f.write(content)

# **VSCode settings**

vscode\_settings \= {  
 "editor.wordWrap": "on",  
 "editor.defaultFormatter": "esbenp.prettier-vscode",  
 "\[markdown\]": {"editor.wordWrap": "on"}  
 }  
 with open(os.path.join(root, ".vscode/settings.json"), "w", encoding="utf-8") as f:  
 json.dump(vscode\_settings, f, indent=2)

# **Zip it**

zip\_path \= "/mnt/data/copilot-space-wordpress.zip"  
 with zipfile.ZipFile(zip\_path, "w", zipfile.ZIP\_DEFLATED) as z:  
 for base, \_, files\_in in os.walk(root):  
 for name in files\_in:  
 full \= os.path.join(base, name)  
 rel \= os.path.relpath(full, root)  
 z.write(full, arcname=os.path.join("copilot-space-wp", rel))

zip\_path

Always show details  
Result  
'/mnt/data/copilot-space-wordpress.zip'

Done, Ash — I built a **WordPress-focused Copilot Space** with correct, compliant front matter across templates and AI files, plus clear docs and a lightweight prompt-collection schema.

Download the Copilot Space (WordPress)

## **Highlights**

* **WordPress-ready**: repo/path Copilot instructions, prompts for blocks/enqueues/settings pages/PHPDoc, WP chat mode, and Claude subagents for security & performance.

* **Issue/PR templates**: proper Issue Forms YAML (WP \+ PHP env fields) and a PR checklist aligned to WPCS, i18n, and security.

* **Docs & schemas**: tutorial pages for each file type \+ schema references, including an **experimental prompt collection** (`.github/prompts/collection.wp.json`).

## **Structure (key parts)**

* `.github/`

  * `copilot-instructions.md` (repo-wide WP rules)

  * `instructions/*.instructions.md` (PHP/JS/CSS rules via `applyTo`)

  * `prompts/*.prompt.md` (WP block, enqueue, settings page, PHPDoc)

  * `prompts/collection.wp.json` (prompt bundle)

  * `chatmodes/wordpress.chatmode.md` (secure, PHPCS-compliant persona)

  * `agents/wp-security-review.md`, `wp-performance-audit.md`

  * `ISSUE_TEMPLATE/*.yml`, `PULL_REQUEST_TEMPLATE/pull_request_template.md`

* `docs/copilot-space/*` (how-to guides \+ schemas)

* `docs/wp-guides/*` (WPCS quickstart, security checklist, block dev checklist)

* Root: `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.editorconfig` tuned for WP (tabs for PHP)

If you want this merged into your template repo (with workflows, Composer/Node scaffolding, or PHPCS config out the box), I can package that next. 

