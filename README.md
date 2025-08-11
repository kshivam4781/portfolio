# Shivam Singh - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- Modern React with Vite
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- 3D graphics with Three.js
- SEO optimized
- Performance optimized

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

3. **Deploy manually (optional)**
   ```bash
   npm run deploy
   ```

### Automatic Deployment

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

### Troubleshooting GitHub Pages Issues

If you encounter 404 errors on GitHub Pages:

1. **Check the base path**: Ensure `vite.config.js` has `base: './'`
2. **Verify file paths**: All asset references should use relative paths (`./` instead of `/`)
3. **Clear cache**: GitHub Pages may cache old versions - wait a few minutes or clear browser cache
4. **Check branch**: Ensure GitHub Pages is set to deploy from the `gh-pages` branch
5. **Rebuild and redeploy**:
   ```bash
   npm run build
   npm run deploy
   ```

Common issues and solutions:
- **404 errors for assets**: Use relative paths in `index.html` and `manifest.json`
- **Routing issues**: The `404.html` file handles SPA routing
- **Build failures**: Check for syntax errors and missing dependencies

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Dependencies and scripts
```

## 🎨 Customization

- Update personal information in component files
- Modify colors in `tailwind.config.js`
- Add new sections by creating components in `src/components/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

- **Name**: Shivam Singh
- **Role**: Full Stack Developer & SAP Consultant
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn] 