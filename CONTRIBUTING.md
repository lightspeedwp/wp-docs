<!-- lightspeedwp contributing guide -->

# Contributing to lightspeedwp

Thanks for helping accelerate high‑quality WordPress development. This project curates AI assets (prompts, instructions, chat modes) plus domain docs that make building performant, secure, accessible WordPress (plugins, block themes, blocks, patterns, headless integrations) faster and more reliable.

We welcome contributions that either:

1. Strengthen WordPress‑specific workflows (block scaffolding, theme.json optimisation, enqueue strategy, REST security, editor UX, performance, accessibility, i18n, testing)
2. Provide cross‑technology guidance that clearly benefits mixed WordPress + services stacks (e.g. performance optimisation, security hardening, DevOps)
3. Improve structure, clarity, discoverability, or consistency of existing assets

If in doubt—open a draft PR or issue with context and intent.

## How to Contribute

### Adding Instructions

Instructions are durable behavioral guardrails. For lightspeedwp they often express coding standards: WordPress PHP practices, block development patterns, performance guidelines, secure REST design, accessibility, or testing expectations.

1. **Create the file**: `instructions/<name>.instructions.md`
2. **Name**: lowercase kebab (`block-theme-accessibility.instructions.md`)
3. **Frontmatter**: MUST include `description:` (single quotes) and optionally `applyTo:` glob for scoping
4. **Structure**: Use task‑oriented sections (e.g. “Block Markup Semantics”, “Theme JSON Tokens”, “Security – REST Nonce / Capability Matrix”)
5. **Test**: Temporarily add to a sample WordPress project `.github/instructions/` and verify Copilot suggestions reflect constraints

#### Example instruction format (trimmed):

```markdown
---
description: "Instructions for customizing GitHub Copilot behavior for specific technologies and practices"
---

# Your Technology/Framework Name

## Instructions

- Provide clear, specific guidance for GitHub Copilot
- Include best practices and conventions
- Use bullet points for easy reading

## Additional Guidelines

- Any additional context or examples
```

### Adding Prompts

Prompts are single‑use or repeatable accelerators (e.g. “Generate block implementation plan”, “Audit plugin for i18n text domain gaps”, “Propose performance improvements for theme enqueue logic”).

1. **Create your prompt file**: Add a new `.prompt.md` file in the `prompts/` directory
2. **Follow the naming convention**: Use descriptive, lowercase filenames with hyphens and the `.prompt.md` extension (e.g., `react-component-generator.prompt.md`)
3. **Include frontmatter**: Add metadata at the top of your file (optional but recommended)
4. **Structure your prompt**: Provide clear context and specific instructions

#### Example prompt format:

```markdown
---
mode: "agent"
tools: ["codebase", "terminalCommand"]
description: "Brief description of what this prompt does"
---

# Prompt Title

Your goal is to...

## Specific Instructions

- Clear, actionable instructions
- Include examples where helpful
```

### Adding Chat Modes

Chat modes define a persistent persona (e.g. “Block Accessibility Auditor”, “Theme JSON Refiner”, “Security & Capability Reviewer”). Keep them focused—general multi‑role mega modes are discouraged.

1. **Create your chat mode file**: Add a new `.chatmode.md` file in the `chatmodes/` directory
2. **Follow the naming convention**: Use descriptive, lowercase filenames with hyphens and the `.chatmode.md` extension (e.g., `react-performance-expert.chatmode.md`)
3. **Include frontmatter**: Add metadata at the top of your file with required fields
4. **Define the persona**: Create a clear identity and expertise area for the chat mode
5. **Test your chat mode**: Ensure the chat mode provides helpful, accurate responses in its domain

#### Example chat mode format:

```markdown
---
description: "Brief description of the chat mode and its purpose"
model: "gpt-5"
tools: ["codebase", "terminalCommand"]
---

# Chat Mode Title

You are an expert [domain/role] with deep knowledge in [specific areas].

## Your Expertise

- [Specific skill 1]
- [Specific skill 2]
- [Specific skill 3]

## Your Approach

- [How you help users]
- [Your communication style]
- [What you prioritize]

## Guidelines

- [Specific instructions for responses]
- [Constraints or limitations]
- [Best practices to follow]
```

### Adding Collections

Collections bundle related assets. We are refocusing collections toward WordPress workflows (e.g. “Block Development Core”, “Theme Performance & UX”). Existing cross‑tech sets remain until reclassified.

1. **Create your collection manifest**: Add a new `.collection.yml` file in the `collections/` directory
2. **Follow the naming convention**: Use descriptive, lowercase filenames with hyphens (e.g., `python-web-development.collection.yml`)
3. **Reference existing items**: Collections should only reference files that already exist in the repository
4. **Test your collection**: Verify all referenced files exist and work well together

#### Creating a collection:

```bash
# Using the creation script
node create-collection.js my-collection-id

# Or using VS Code Task: Ctrl+Shift+P > "Tasks: Run Task" > "create-collection"
```

#### Example collection format:

```yaml
id: my-collection-id
name: My Collection Name
description: A brief description of what this collection provides and who should use it.
tags: [tag1, tag2, tag3] # Optional discovery tags
items:
  - path: prompts/my-prompt.prompt.md
    kind: prompt
  - path: instructions/my-instructions.instructions.md
    kind: instruction
  - path: chatmodes/my-chatmode.chatmode.md
    kind: chat-mode
display:
  ordering: alpha # or "manual" to preserve order above
  show_badge: false # set to true to show collection badge
```

#### Collection Guidelines:

- **Focus on workflows**: Group items that work together for specific use cases
- **Reasonable size**: Typically 3-10 items work well
- **Test combinations**: Ensure the items complement each other effectively
- **Clear purpose**: The collection should solve a specific problem or workflow
- **Validate before submitting**: Run `node validate-collections.js` to ensure your manifest is valid

## Submitting Your Contribution

1. **Fork this repository**
2. **Create a new branch** for your contribution
3. **Add your instruction or prompt file** following the guidelines above
4. **(If applicable) Run any catalog update script** (if/when added) – for now, manually ensure category README tables stay alphabetized where relevant
5. **Submit a pull request** with:
   - A clear title describing your contribution
   - A brief description of what your instruction/prompt does
   - Any relevant context or usage notes

**Note**: Once your contribution is merged, you'll automatically be added to our [Contributors](#contributors-) section! We use [all-contributors](https://github.com/all-contributors/all-contributors) to recognize all types of contributions to the project.

## What We Accept

We welcome contributions covering any technology, framework, or development practice that helps developers work more effectively with GitHub Copilot. This includes:

- Programming languages and frameworks
- Development methodologies and best practices
- Architecture patterns and design principles
- Testing strategies and quality assurance
- DevOps and deployment practices
- Accessibility and inclusive design
- Performance optimisation techniques

## What We Don't Accept

To maintain a safe, responsible, and constructive community, we will **not accept** contributions that:

- **Violate Responsible AI Principles**: Content that attempts to circumvent Microsoft/GitHub's Responsible AI guidelines or promotes harmful AI usage
- **Compromise Security**: Instructions designed to bypass security policies, exploit vulnerabilities, or weaken system security
- **Enable Malicious Activities**: Content intended to harm other systems, users, or organizations
- **Exploit Weaknesses**: Instructions that take advantage of vulnerabilities in other platforms or services
- **Promote Harmful Content**: Guidance that could lead to the creation of harmful, discriminatory, or inappropriate content
- **Circumvent Platform Policies**: Attempts to work around GitHub, Microsoft, or other platform terms of service

## Quality Guidelines (Detailed)

| Area                 | Expectation                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| WordPress Alignment  | If WP‑specific, mention hooks/APIs or editor concepts explicitly.                                                |
| Accessibility        | Encourage semantic markup, keyboard handling, ARIA correctness, contrast.                                        |
| Performance          | Avoid unnecessary asset loads; note script strategy (`defer`, conditional enqueues); highlight caching patterns. |
| Security             | Enforce nonces, capability checks, prepared SQL, escaping, sanitization, no direct file access.                  |
| Internationalization | Use translation functions, reference text domain usage, avoid concatenation of translatable strings.             |
| Clarity              | Actionable steps over vague philosophy; minimal fluff.                                                           |
| Scope                | One core concern per file; link out instead of duplicating large bodies.                                         |
| Examples             | Prefer short before/after or code fragments demonstrating standards.                                             |
| Neutrality           | No vendor lock‑in unless justified (explain when a non‑core dependency is recommended).                          |
| Safety               | Adhere to Responsible AI + no generation of insecure patterns.                                                   |

### Additional Prompt / Chat Mode Validation

- Run a trial with at least one real plugin or block theme scenario
- Confirm the mode/prompt guides toward standards (does not hallucinate APIs)
- Avoid over‑constraining (should not suppress productive iteration)

- **Be specific**: Generic instructions are less helpful than specific, actionable guidance
- **Test your content**: Ensure your instructions or prompts work well with GitHub Copilot
- **Follow conventions**: Use consistent formatting and naming
- **Keep it focused**: Each file should address a specific technology, framework, or use case
- **Write clearly**: Use simple, direct language
- **Promote best practices**: Encourage secure, maintainable, and ethical development practices

## Tagging (Planned)

We plan to introduce lightweight tags to improve discoverability:

- `wp-block`, `wp-theme`, `wp-rest`, `wp-admin`, `i18n`, `a11y`, `perf`, `security`, `generic`

Until tags are formalized, mention intended scope in the first heading paragraph.

## Install Badge Namespace

Install badges still reference the original upstream namespace. They remain valid. Migration to a dedicated lightspeedwp namespace (or dual source) will be communicated in a future update.

## Contributors Recognition

This project uses [all-contributors](https://github.com/all-contributors/all-contributors) to recognize contributors. When you make a contribution, you'll automatically be recognized in our contributors list!

We welcome contributions of all types, including:

- 📝 Documentation improvements
- 💻 Code contributions
- 🐛 Bug reports and fixes
- 🎨 Design improvements
- 💡 Ideas and suggestions
- 🤔 Answering questions
- 📢 Promoting the project

Your contributions help make this resource better for the entire GitHub Copilot community!

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Licence

By contributing you agree your submission is MIT Licensed (unless a file explicitly states otherwise) and that you have rights to all contributed content.

---

Built with accessibility, security, and performance in mind—still manually test and review output.

## Language Style (UK English)

Repository prose adopts UK English spelling (colour, behaviour, optimisation). Use `npm run lang:en-gb` (dry run) before committing large doc changes; apply with `npm run lang:en-gb:apply`. See `docs/language-style.md` for rules & exceptions (API identifiers, proper nouns remain unchanged).
