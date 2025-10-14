---
description: 'Reference documentation including schemas, API specifications, architectural decision records, and technical specifications.'
tags: ['reference', 'schemas', 'apis', 'architecture', 'specifications']
domain: 'reference'
stability: 'stable'
---

# Reference Documentation

Comprehensive reference materials including schemas, API specifications, architectural decision records, and technical specifications that support WordPress development and project governance.

## 📋 Overview

Reference documentation provides the technical specifications, schemas, and architectural decisions that underpin WordPress development practices. This section serves as the authoritative source for data structures, API contracts, and design decisions.

## 📁 Section Structure

### Schemas
**Path:** [`schemas/`](./schemas/)
- **Frontmatter Schemas**: YAML frontmatter specifications
- **theme.json Schema**: Complete theme.json reference
- **block.json Schema**: Block registration specifications
- **Composer Schema**: Package configuration schemas
- **CI/CD Schemas**: Workflow and pipeline specifications

### API Specifications
**Path:** [`apis/`](./apis/)
- **WordPress REST API**: Extended endpoint documentation
- **Custom API Endpoints**: Project-specific API specifications
- **Webhook Specifications**: Integration webhook contracts
- **GraphQL Schemas**: WordPress GraphQL specifications
- **Third-party Integrations**: External API integration specs

### Architectural Decision Records (ADRs)
**Path:** [`adrs/`](./adrs/)
- **Development Decisions**: Technology and framework choices
- **Infrastructure Decisions**: Hosting and deployment choices
- **Process Decisions**: Workflow and methodology choices
- **Tool Decisions**: Development tool selections
- **Security Decisions**: Security architecture choices

## 🔍 Schema Categories

### Configuration Schemas
- **theme.json**: Global styles and settings configuration
- **block.json**: Block registration and metadata
- **composer.json**: PHP dependency management configuration
- **package.json**: Node.js dependency and script configuration
- **tsconfig.json**: TypeScript compiler configuration

### Frontmatter Schemas
- **Prompt Frontmatter**: AI prompt metadata structure
- **Chat Mode Frontmatter**: AI chat mode configuration
- **Agent Frontmatter**: AI agent specification structure
- **Documentation Frontmatter**: Standard document metadata
- **Issue Template**: GitHub issue form structure

### Data Schemas
- **User Profiles**: WordPress user data structure
- **Content Types**: Custom post type specifications
- **Taxonomy Schemas**: Custom taxonomy definitions
- **Meta Field Schemas**: Custom field specifications
- **API Response Schemas**: REST API response formats

## 🎯 Quick Reference

### Essential Schemas
1. [`schemas/theme-json-schema.md`](./schemas/theme-json-schema.md)
2. [`schemas/block-json-schema.md`](./schemas/block-json-schema.md)
3. [`schemas/frontmatter-schemas.md`](./schemas/frontmatter-schemas.md)

### Key APIs
1. [`apis/wordpress-rest-api.md`](./apis/wordpress-rest-api.md)
2. [`apis/custom-endpoints.md`](./apis/custom-endpoints.md)
3. [`apis/webhook-specifications.md`](./apis/webhook-specifications.md)

### Important ADRs
1. [`adrs/001-block-theme-architecture.md`](./adrs/001-block-theme-architecture.md)
2. [`adrs/002-ci-cd-pipeline-design.md`](./adrs/002-ci-cd-pipeline-design.md)
3. [`adrs/003-development-environment.md`](./adrs/003-development-environment.md)

## 📊 Architectural Decision Records

### ADR Template Structure
```markdown
# ADR-XXX: [Title]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
What is the issue that we're seeing that motivates this decision?

## Decision
What is the change that we're proposing or doing?

## Consequences
What becomes easier or more difficult to do because of this change?

## Alternatives Considered
What other options did we consider?

## Implementation Notes
Any specific implementation details or constraints.
```

### Decision Categories
- **Architecture**: System design and structure decisions
- **Technology**: Tool and framework selections
- **Process**: Development workflow and methodology choices
- **Security**: Security architecture and implementation decisions
- **Performance**: Performance optimization and architecture choices

## 🔗 Cross-References

- **WordPress Development**: See [`../wordpress/`](../wordpress/) for implementation guidance
- **Standards**: Review [`../standards/`](../standards/) for quality requirements
- **Templates**: Find schema templates in [`../templates/schemas/`](../templates/schemas/)
- **AI Integration**: Check [`../ai-copilot/schemas/`](../ai-copilot/schemas/) for AI-specific schemas
- **DevOps**: Reference [`../devops/infrastructure/`](../devops/infrastructure/) for deployment schemas

## 🏷️ Content Tags

Content in this section uses these tags:
- `reference` - Reference documentation
- `schemas` - Data structure specifications
- `apis` - API specifications and contracts
- `architecture` - Architectural documentation
- `decisions` - Decision records and rationale
- `specifications` - Technical specifications
- `data-structures` - Data format definitions
- `contracts` - Interface and contract definitions
- `governance` - Project governance documentation
- `compliance` - Compliance and standards reference

## 📋 Schema Validation

### Validation Tools
- **JSON Schema**: Automated schema validation
- **YAML Lint**: YAML syntax and structure validation
- **API Testing**: Automated API contract testing
- **Documentation Testing**: Reference documentation validation
- **Compliance Checking**: Standards compliance verification

### Validation Process
1. **Schema Definition**: Create formal schema specifications
2. **Implementation**: Implement according to schema
3. **Validation**: Automated validation against schema
4. **Documentation**: Update reference documentation
5. **Maintenance**: Regular schema review and updates

## 🔄 Schema Evolution

### Versioning Strategy
- **Semantic Versioning**: Major.minor.patch version scheme
- **Backward Compatibility**: Maintain compatibility where possible
- **Deprecation Process**: Formal deprecation and migration path
- **Change Documentation**: Record all schema changes
- **Migration Guides**: Provide upgrade instructions

### Change Management
1. **Proposal**: Schema change proposal and review
2. **Impact Assessment**: Evaluate change impact
3. **Implementation**: Implement schema changes
4. **Testing**: Validate changes against existing implementations
5. **Documentation**: Update all related documentation
6. **Communication**: Notify stakeholders of changes

## 🆕 What's New

- **2025-09-24**: Consolidated reference documentation
- Enhanced schema specifications for WordPress development
- Added comprehensive ADR template and examples
- Integrated API specification standards
- Updated validation and compliance frameworks

## 🔄 Contributing Reference Documentation

When adding reference content:

1. **Accuracy**: Ensure all specifications are technically accurate
2. **Completeness**: Provide comprehensive coverage of topics
3. **Examples**: Include practical examples and use cases
4. **Validation**: Test all schemas and specifications
5. **Cross-References**: Link to related documentation
6. **Maintenance**: Plan for ongoing updates and maintenance

## 📚 External Standards

### Schema Standards
- [JSON Schema](https://json-schema.org/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [YAML Specification](https://yaml.org/spec/)
- [WordPress Schema.org Integration](https://make.wordpress.org/core/handbook/references/php-compatibility/)

### Architecture Documentation
- [ADR Templates](https://github.com/joelparkerhenderson/architecture-decision-record)
- [C4 Model](https://c4model.com/)
- [Architecture Documentation Best Practices](https://docs.arc42.org/)

---

*Authoritative reference documentation for WordPress development excellence.*
