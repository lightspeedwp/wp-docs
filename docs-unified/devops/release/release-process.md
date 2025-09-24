# Release Process

1. Prepare `CHANGELOG.md` and bump versions.
2. Create tag `vX.Y.Z` → `release.yml` builds a clean zip and publishes a GitHub Release.
3. Attach artifacts to deployments; keep rollbacks easy (revert or previous tag).

Packaging script excludes dev files and test directories by default.
