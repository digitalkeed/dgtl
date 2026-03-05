#!/bin/bash
# Push Leart Raka portfolio to https://github.com/digitalkeed/dgtl
# Run this from your machine (Terminal) so GitHub can authenticate you.

set -e
cd "$(dirname "$0")"

echo "Remote: $(git remote get-url origin)"
echo "Branch: main"
echo ""
echo "Pushing to GitHub (you may be prompted to sign in)..."
echo ""

# GitHub repo has different history (README only); force push replaces it with this portfolio.
git push -u origin main --force

echo ""
echo "Done. If Vercel is connected to digitalkeed/dgtl, it will deploy to dgtl-five.vercel.app"
