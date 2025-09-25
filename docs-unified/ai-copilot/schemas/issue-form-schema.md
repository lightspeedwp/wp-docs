# Issue Form — Frontmatter Keys

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
