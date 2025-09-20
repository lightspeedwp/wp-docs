# Release Process

This document outlines the process for cutting releases in the wp-docs repository, managing semantic versioning, and maintaining the changelog.

## 1. Versioning Strategy

We follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html):

-   **Major (X.0.0)**: Breaking changes, architectural shifts, removal of deprecated features
-   **Minor (0.X.0)**: New features, substantial content additions, new instruction sets
-   **Patch (0.0.X)**: Bug fixes, typo corrections, minor clarifications, link fixes

### Examples

| Change Type                                   | Version Impact |
| --------------------------------------------- | -------------- |
| Add new block theme guidance section          | Minor          |
| Fix broken links in existing docs             | Patch          |
| Remove deprecated agent persona format        | Major          |
| Correct spelling/grammar throughout           | Patch          |
| Add comprehensive new coding standard         | Minor          |
| Change frontmatter schema (breaking existing) | Major          |

## 2. Pre-Release Checklist

Before cutting a release:

-   [ ] All planned changes merged to `main` branch
-   [ ] `CHANGELOG.md` `[Unreleased]` section populated with changes
-   [ ] Quality gates validated:
    -   [ ] No placeholder links (`REPONAME`, `repo-name`)
    -   [ ] UK English normalisation applied (`npm run lang:en-gb:apply`)
    -   [ ] Generated catalogues updated (`npm run build`)
    -   [ ] Agent persona structure validated (if linter exists)
-   [ ] Security review for any code examples or guidance changes
-   [ ] Cross-links verified (major docs reference each other correctly)

## 3. Release Workflow

### Step 1: Prepare Changelog

1. Review all changes since last release
2. Move entries from `[Unreleased]` to new version section in `CHANGELOG.md`:

    ```markdown
    ## [X.Y.Z] - 2025-MM-DD

    ### Added

    -   New documentation features...

    ### Changed

    -   Updated guidance...

    ### Fixed

    -   Corrected links...
    ```

3. Update comparison links at bottom of changelog
4. Leave `[Unreleased]` section empty with placeholder:
    ```markdown
    ## [Unreleased]

    ### Added

    -   Placeholder for upcoming features
    ```

### Step 2: Version Bump

Update version in `package.json`:

```bash
npm version [major|minor|patch] --no-git-tag-version
```

### Step 3: Commit & Tag

```bash
git add CHANGELOG.md package.json
git commit -m "Release v${VERSION}"
git tag -a "v${VERSION}" -m "Release v${VERSION}"
git push origin main --tags
```

### Step 4: GitHub Release

1. Go to [Releases](https://github.com/lightspeedwp/wp-docs/releases/new)
2. Select the new tag
3. Release title: `v${VERSION}`
4. Description: Copy from changelog (Added/Changed/Fixed sections)
5. Publish release

## 4. Post-Release Actions

-   [ ] Verify tag appears correctly
-   [ ] Check that documentation cross-references resolve
-   [ ] Update any external references to point to new tag (if applicable)
-   [ ] Consider announcement in relevant channels

## 5. Hotfix Process

For urgent fixes to released versions:

1. Create hotfix branch from release tag: `git checkout -b hotfix/v1.2.3 v1.2.2`
2. Apply minimal fix
3. Update changelog with patch entry
4. Follow release workflow (bump patch version)
5. Merge hotfix back to main if needed

## 6. Release Cadence

**Suggested Schedule:**

-   **Major releases**: As needed for breaking changes (rare)
-   **Minor releases**: Monthly or when substantial content added
-   **Patch releases**: As needed for corrections/fixes

**Triggers for releases:**

-   Accumulated 5+ substantial changelog entries in Unreleased
-   Security-relevant guidance updates
-   New major documentation sections complete
-   Community request for stable reference point

## 7. Rollback Procedure

If a release introduces issues:

1. Identify problematic changes
2. Assess impact (breaking vs. non-breaking)
3. Options:
    - **Immediate hotfix**: Create patch release with corrections
    - **Revert tag**: Delete tag and create corrected release (avoid if possible)
    - **Skip version**: Add note in next release about skipped version

## 8. Communication

### Release Notes Template

```markdown
## What's New in v${VERSION}

Brief summary of key improvements...

### 🆕 Added

-   Major new features or sections

### 📝 Changed

-   Significant updates to existing content

### 🐛 Fixed

-   Important corrections or repairs

### ⚠️ Breaking Changes (Major releases only)

-   Changes that require action from users

**Full changelog**: [v${PREV}...v${VERSION}](https://github.com/lightspeedwp/wp-docs/compare/v${PREV}...v${VERSION})
```

### Channels

-   GitHub Releases (automatic)
-   Repository README badges (if added)
-   Contributor notifications (major releases)

## 9. Automation Opportunities

**Future improvements** (not yet implemented):

-   Automated changelog generation from conventional commits
-   CI check for changelog entries on certain file changes
-   Automated cross-link validation
-   Version bump automation via GitHub Actions

## 10. Emergency Procedures

**Critical security issue in docs:**

1. Immediate hotfix release (follow hotfix process)
2. Update SECURITY.md if process needs refinement
3. Consider temporary advisory if guidance was actively harmful

**Broken automation:**

1. Manual process until automation repaired
2. Document interim steps in changelog
3. Fix automation before next regular release

---

This process evolves as the project matures. Suggest improvements through normal contribution workflow.
