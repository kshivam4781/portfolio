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

If you encounter deployment issues:

1. **Test build locally first**:
   ```bash
   npm run test-build
   ```

2. **Check GitHub Actions logs**:
   - Go to your repository → Actions tab
   - Click on the failed workflow
   - Check the build logs for specific errors

3. **Common issues and solutions**:
   - **Git authentication error (128)**: Updated workflow uses proper permissions
   - **404 errors for assets**: Base path is set to `/portfolio/` for GitHub Pages
   - **Routing issues**: The `404.html` file handles SPA routing
   - **Build failures**: Check for syntax errors and missing dependencies

4. **Manual deployment**:
   ```bash
   npm run build
   npm run deploy
   ```

5. **Clear cache**: GitHub Pages may cache old versions - wait a few minutes or clear browser cache

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