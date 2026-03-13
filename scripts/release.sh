#!/usr/bin/env bash

set -euo pipefail

BUMP_TYPE="${1:-patch}"
REMOTE="${2:-origin}"

case "$BUMP_TYPE" in
  patch|minor|major|prepatch|preminor|premajor|prerelease) ;;
  *)
    echo "Invalid bump type: $BUMP_TYPE"
    echo "Allowed values: patch, minor, major, prepatch, preminor, premajor, prerelease"
    exit 1
    ;;
esac

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This must be run inside a git repository."
  exit 1
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$BRANCH" != "main" ]]; then
  echo "Checkout main before releasing. Current branch: $BRANCH"
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash changes first."
  exit 1
fi

echo "Bumping version with: $BUMP_TYPE"
NEW_VERSION="$(npm version "$BUMP_TYPE" -m "chore(release): %s")"

echo "Created commit and tag: $NEW_VERSION"
echo "Pushing branch and tags to $REMOTE..."
git push "$REMOTE" "$BRANCH" --follow-tags

echo "Release pushed successfully."
