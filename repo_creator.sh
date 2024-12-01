#!/bin/bash

# Check if gh CLI is installed
if ! command -v gh &> /dev/null
then
    echo "Error: GitHub CLI (gh) is not installed. Please install it and try again."
    exit 1
fi

# Check if git is initialized
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    echo "Git repository initialized."
fi

# Create .gitignore if it doesn't exist and add node_modules and pycache
if [ ! -f .gitignore ]; then
    echo ".gitignore file not found, creating one..."
    touch .gitignore
fi

# Add node_modules and __pycache__ to .gitignore if not already present
if ! grep -q "node_modules" .gitignore; then
    echo "node_modules" >> .gitignore
fi

if ! grep -q "__pycache__" .gitignore; then
    echo "__pycache__" >> .gitignore
fi

# Prompt user for repository details
read -p "Enter repository name (default: current folder name): " repo_name
repo_name=${repo_name:-$(basename "$PWD")}

read -p "Enter repository description: " repo_description

read -p "Set repository visibility (public/private, default: public): " repo_visibility
repo_visibility=${repo_visibility:-public}

read -p "Do you want to push the current branch to the repository? (yes/no, default: yes): " push_branch
push_branch=${push_branch:-yes}

# Create the repository using gh CLI
echo "Creating repository '$repo_name'..."
if gh repo create "$repo_name" --description "$repo_description" --$repo_visibility --source=. --remote=origin; then
    echo "Repository '$repo_name' created successfully."

    # Optionally push the current branch
    if [ "$push_branch" = "yes" ]; then
        echo "Pushing current branch to GitHub..."
        git add .
        git commit -m "Initial commit" 2> /dev/null || echo "No changes to commit."
        git push -u origin master || echo "Error: Unable to push. Ensure the main branch exists and is configured."
    fi
else
    echo "Error: Failed to create repository. Please check your inputs and try again."
fi
