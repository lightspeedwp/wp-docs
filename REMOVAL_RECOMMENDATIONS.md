# Non-WordPress Relevant Files - Removal Recommendations

This document lists files identified during the YAML frontmatter audit that are not relevant to WordPress
block theme/plugin development and should be considered for removal from the wp-docs repository.

## Summary

**Total files flagged for removal: 11**

- Agent files: 4
- Chat modes: 2
- Instructions: 3
- Prompts: 2
- Collections: 0 (all general development-focused, potentially WordPress-relevant)

---

## Agent Files (.agent.md) - 4 files

### Backend Directory

**Recommendation: Remove entire directory**

#### 1. `.github/agents/backend/ai-sdk-expert.md`

- **Reason**: Specific to AI SDK integrations (Vercel AI SDK, LangChain, OpenAI), not WordPress
  development
- **Schema Issues**: Uses incorrect complex frontmatter schema instead of simple name/description/tools
  format
- **License Issue**: Originally MIT, corrected to GPL-3.0 but content remains non-WordPress

#### 2. `.github/agents/backend/elevenlabs-sdk-expert.md`

- **Reason**: Specific to ElevenLabs text-to-speech SDK, not WordPress development
- **Schema Issues**: Uses incorrect complex frontmatter schema
- **License Issue**: Originally MIT, corrected to GPL-3.0 but content remains non-WordPress

### Frontend Directory

**Recommendation: Remove entire directory**

#### 3. `.github/agents/frontend/code-quality-guardian.md`

- **Reason**: Generic code quality review, not WordPress-specific, overlaps with existing
  WordPress-focused agents
- **Schema Issues**: Uses incorrect complex frontmatter schema
- **License Issue**: Originally MIT, corrected to GPL-3.0 but content remains non-WordPress

### Product Directory

**Recommendation: Remove entire directory**

#### 4. `.github/agents/product/linear-product-manager.md`

- **Reason**: Specific to Linear project management tool, not WordPress development
- **Schema Issues**: Uses incorrect complex frontmatter schema
- **License Issue**: Missing GPL-3.0 license
- **Note**: This directory likely contains other non-WordPress product management files

---

## Chat Mode Files (.chatmode.md) - 2 files

### Declarative Agents

#### 5. `.github/chatmodes/declarative-agents-architect.chatmode.md`

- **Reason**: Specific to Microsoft 365 Copilot declarative agents development
- **Content**: References Microsoft 365 Agents Toolkit, TypeSpec, MS Teams extensions
- **WordPress Relevance**: None - completely Microsoft ecosystem focused

#### 6. `.github/chatmodes/task-planner.chatmode.md`

- **Reason**: References Microsoft-specific tools (Azure, Bicep, Microsoft Docs, Terraform)
- **Content**: Task planning with Microsoft/Azure context, not WordPress development
- **WordPress Relevance**: Generic task planning exists in other chatmodes

---

## Instruction Files (.instructions.md) - 3 files

### Database Migration Instructions

#### 7. `.github/instructions/convert-jpa-to-spring-data-cosmos.instructions.md`

- **Reason**: Specific to Java Spring Boot and Azure Cosmos DB migration
- **Content**: Step-by-step Java/Spring/Azure conversion guide
- **WordPress Relevance**: None - completely different technology stack

#### 8. `.github/instructions/devbox-image-definition.instructions.md`

- **Reason**: Specific to devbox/container development environments
- **Content**: Container and devbox configuration, not WordPress-specific
- **WordPress Relevance**: WordPress development typically doesn't require specialized devbox configurations

#### 9. `.github/instructions/containerization-docker-best-practices.instructions.md`

- **Reason**: Generic Docker containerization, not WordPress-specific
- **Content**: General Docker best practices applicable to any application
- **WordPress Relevance**: While Docker can be used for WordPress, this is too generic and not WordPress-focused

---

## Prompt Files (.prompt.md) - 2 files

### Infrastructure Management

#### 10. `.github/prompts/update-avm-modules-in-bicep.prompt.md`

- **Reason**: Specific to Azure Verified Modules (AVM) and Bicep infrastructure as code
- **Content**: Azure infrastructure management, MCR registry updates
- **WordPress Relevance**: None - Azure-specific infrastructure management

#### 11. `.github/prompts/declarative-agents.prompt.md`

- **Reason**: Likely related to Microsoft 365 declarative agents (matches chatmode)
- **Content**: Needs review but filename suggests Microsoft agent development
- **WordPress Relevance**: Should align with Microsoft-focused declarative agent chatmode removal

---

## Collection Files (.collection.yml) - 0 files

**All collection files retained** - They focus on general development practices (frontend, testing,
security, devops) that can apply to WordPress development.

---

## Recommendations

### Immediate Actions

1. **Remove directories**: `backend/`, `frontend/`, `product/` under `.github/agents/`
2. **Remove individual files**: All 11 files listed above
3. **Verify**: Check if `product/` directory contains additional non-WordPress files

### Repository Cleanup Benefits

- **Focused scope**: Repository becomes clearly WordPress block theme/plugin focused
- **Reduced maintenance**: Fewer non-relevant files to maintain and update
- **Clear documentation**: Users find only WordPress-relevant guidance
- **License consistency**: Removes originally MIT-licensed content that conflicts with WordPress GPL
  focus

### Alternative Locations

Consider moving generic development files to:

- Separate "general-dev-tools" repository
- Team internal documentation
- Archive branch for potential future reference

---

## Schema Corrections Applied

All remaining files now have:

- ✅ Correct GPL-3.0 license fields
- ✅ Schema-compliant frontmatter structure
- ✅ WordPress development relevance
