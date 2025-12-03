#!/bin/bash
# Script to push theme to GitHub
# Usage: ./PUSH_TO_GITHUB.sh YOUR_GITHUB_REPO_URL

if [ -z "$1" ]; then
  echo "Usage: ./PUSH_TO_GITHUB.sh https://github.com/USERNAME/REPO.git"
  exit 1
fi

REPO_URL=$1

echo "Adding remote repository..."
git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL

echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Done! Your theme is now on GitHub."
echo ""
echo "Next steps:"
echo "1. Go to Shopify Admin → Online Store → Themes"
echo "2. Click 'Add theme' → 'Connect from GitHub'"
echo "3. Select your repository and branch (main)"
echo "4. Click 'Connect theme'"

