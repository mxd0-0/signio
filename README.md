# Signio

🖋️ **A modern, secure digital signature platform that scales your workflow**

Signio is a comprehensive e-signature solution built with React that enables businesses to create, send, and manage digital documents with legally binding electronic signatures. From individual users to enterprise teams, Signio streamlines document workflows across any device.

## 🌟 Live Demo

**[View Live Application →](https://mxd0-0.github.io/signio/)**

## ✨ Features

### 🔐 Digital Signatures
- **Multi-device signing** - Sign documents on computers, tablets, and mobile devices
- **Multiple signature options** - Draw, upload, or type your signature
- **Legally binding** - Industry-standard security and compliance
- **Secure authentication** - Password-protected document access

### 📄 Document Management
- **Unlimited document uploads** - Support for various file formats
- **Rich media editor** - Drag-and-drop document editing interface
- **Templates** - Pre-built document templates for faster workflows
- **Content library** - Organize and reuse document content

### 🚀 Workflow Automation
- **Approval workflows** - Multi-step document approval processes
- **Bulk sending** - Send documents to multiple recipients simultaneously
- **Automated notifications** - Keep all parties informed of document status
- **Document analytics** - Track document performance and engagement

### 🔗 Integrations
- **CRM Integration** - Connect with your existing customer management systems
- **Zapier** - Automate workflows with 5000+ apps
- **Salesforce** - Native Salesforce integration for enterprise users
- **API Access** - Custom integrations with RESTful API

### 🏢 Enterprise Features
- **SSO Support** - Single sign-on for enterprise security
- **Custom branding** - White-label the platform with your brand
- **User management** - Custom user roles and permissions
- **Team workspaces** - Unlimited collaborative workspaces
- **Advanced reporting** - User performance and content analytics

## 🛠️ Tech Stack

- **Frontend**: React 19 with modern hooks and functional components
- **Build Tool**: Vite 7 for fast development and optimized production builds
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion for smooth, performant animations
- **Code Quality**: ESLint with React-specific rules
- **Deployment**: GitHub Pages with automated CI/CD

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mxd0-0/signio.git
   cd signio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code analysis |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run test:deployment` | Test GitHub Pages deployment readiness |
| `npm run validate:deployment` | Validate deployment configuration |

## 🏗️ Project Structure

```
signio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx       # Custom button component
│   │   └── BrandLogo.jsx    # Brand logo component
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Landing page hero
│   │   ├── Features.jsx     # Features showcase
│   │   ├── Pricing.jsx      # Pricing plans
│   │   ├── Advantages.jsx   # Key advantages
│   │   ├── LogoCloud.jsx    # Trusted brands
│   │   ├── CTA.jsx          # Call-to-action
│   │   └── Footer.jsx       # Site footer
│   ├── assets/              # Static assets (images, icons)
│   ├── index.css           # Global styles and Tailwind config
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── scripts/                 # Deployment and testing scripts
├── public/                  # Public assets
└── dist/                   # Production build output
```

## 💰 Pricing Plans

| Plan | Price | Key Features |
|------|-------|--------------|
| **Free eSign** | Free | Unlimited signatures, document uploads, mobile app |
| **Essentials** | $19/month | Templates, rich editor, analytics, 24/7 support |
| **Business** | $49/month | CRM integrations, custom branding, workflows, bulk send |
| **Enterprise** | $79/month | SSO, Salesforce, notary, unlimited workspaces, API |

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages when you push to the main branch.

**Setup:**
1. Ensure GitHub Pages is configured to deploy from "GitHub Actions" in repository settings
2. Push to main branch to trigger automatic deployment
3. Site will be available at: `https://mxd0-0.github.io/signio/`

### Manual Deployment

```bash
npm run deploy
```

This builds the project and deploys to the `gh-pages` branch.

### Deployment Validation

Test your deployment setup:
```bash
npm run test:deployment
npm run validate:deployment
```

## 🔧 Troubleshooting

### GitHub Pages 404 Errors

If you see 404 errors like `https://mxd0-0.github.io/src/main.jsx`, GitHub Pages is trying to serve source files instead of built files.

**Solutions:**
1. Ensure GitHub Pages is set to deploy from "GitHub Actions" in repository settings
2. Run `npm run deploy` to deploy to gh-pages branch manually
3. Check that the build process completed successfully

### Build Issues

- **Node.js version**: Ensure you're using Node.js 18+
- **Dependencies**: Delete `node_modules` and run `npm install` again
- **Cache**: Clear Vite cache with `npx vite --force`

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and ensure they follow our coding standards
4. **Run linting**: `npm run lint`
5. **Test your changes**: `npm run build` and `npm run test:deployment`
6. **Commit your changes**: `git commit -m 'Add amazing feature'`
7. **Push to the branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

### Code Style Guidelines

- Use functional components with React hooks
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write descriptive commit messages

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: [Report bugs or request features](https://github.com/mxd0-0/signio/issues)
- **Email Support**: Available for Essentials+ plan users

## 📄 License

This project is part of a portfolio demonstration. Please check with the repository owner for usage rights.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
