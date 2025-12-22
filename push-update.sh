#!/bin/bash
git add .
git commit -m "Mainframe Auto-Update: $(date)"
git push origin main --force
echo "🚀 CODE SYNCED TO GITHUB"
