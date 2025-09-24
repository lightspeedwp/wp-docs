# Issue Templates (Issue Forms) — YAML Frontmatter

**Location:** `.github/ISSUE_TEMPLATE/*.yml`

**Required top-level keys:**

- `name` _(string)_ — Template name (shown in picker).
- `description` _(string)_ — What this template is for.
- `body` _(array)_ — Form blocks (markdown/input/textarea/dropdown/checkboxes).

**Optional top-level keys:** `title`, `labels`, `assignees`, `projects`, `type`.

### **Full Example**

name: "🐛 Bug report" # required

description: "Report a bug to help us improve" # required

title: "[Bug]: " # optional default issue title

labels: ["bug","needs-triage"] # optional auto labels

assignees: [] # optional auto assignees

projects: ["my-org/42"] # optional projects

type: bug # optional issue type

body:

- type: markdown

  attributes:

  value: |

      ## Thanks for reporting!

      Please provide enough detail to reproduce the issue.

- type: input

  id: version

  attributes:

  label: "Version"

  description: "Which version/commit?"

  placeholder: "v1.2.3 or SHA"

  validations:

  required: true

- type: textarea

  id: repro

  attributes:

  label: "Steps to reproduce"

  placeholder: |

      1. Go to '...'

      2. Click '...'

      3. See error

  validations:

  required: true

- type: dropdown

  id: env

  attributes:

  label: "Environment"

  options: ["macOS","Windows","Linux","Other"]

  multiple: true

  validations:

  required: true

- type: checkboxes

  id: checks

  attributes:

  label: "Checks"

  options:

      - label: "I searched for duplicates"

        required: true

      - label: "I can reproduce with latest"

**Do**

- Use `|` for multiline text blocks.

- Quote strings that include `#` or `:`.

- Require only fields that truly block triage.

**Don’t**

- Overload forms with unnecessary inputs.

- Use PR-style frontmatter here.  

