# Create a package.json file for the project
package_json = '''{
  "name": "meme-generator",
  "version": "1.0.0",
  "description": "A modern web application for creating and customizing memes with popular templates",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000",
    "build": "echo 'No build process needed for vanilla HTML/CSS/JS'",
    "deploy": "echo 'Deploy to your preferred hosting service'"
  },
  "keywords": [
    "meme",
    "generator",
    "html5",
    "canvas",
    "javascript",
    "web-app",
    "responsive",
    "frontend"
  ],
  "author": "Your Name",
  "license": "MIT",
  "homepage": "https://github.com/yourusername/meme-generator#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yourusername/meme-generator.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/meme-generator/issues"
  },
  "engines": {
    "node": ">=12.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}'''

# Create .gitignore file
gitignore_content = '''# Operating System Files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE/Editor Files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# Temporary folders
tmp/
temp/

# Build outputs (if any)
dist/
build/

# Local development
.cache/'''

# Save the files
with open('package.json', 'w', encoding='utf-8') as f:
    f.write(package_json)

with open('.gitignore', 'w', encoding='utf-8') as f:
    f.write(gitignore_content)

print("✅ Created package.json")
print("✅ Created .gitignore")

# Show all files created
print("\n📁 Complete project structure:")
import os
files = [f for f in os.listdir('.') if f.endswith(('.html', '.css', '.js', '.md', '.json')) or f.startswith('.git')]
for file in sorted(files):
    print(f"   {file}")
    
print("\n🚀 Your GitHub repository is ready!")
