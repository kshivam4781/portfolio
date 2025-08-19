#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to GitHub Pages using gh-pages
    echo "🌐 Deploying to GitHub Pages..."
    npx gh-pages -d dist
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "Your site should be available at: https://kshivam4781.github.io/portfolio/"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
