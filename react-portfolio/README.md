# Modern React Portfolio - Tony Oganda

A modern, interactive portfolio website built with React, featuring a bubble-based UI design with smooth animations and a glassmorphism aesthetic.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue)
![Styled Components](https://img.shields.io/badge/Styled%20Components-5.3.9-pink)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-purple)

## ✨ Features

- **Modern Bubble UI**: Glassmorphism design with rounded edges and soft shadows
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Elements**: Hover effects, click animations, and micro-interactions
- **Performance Optimized**: Efficient rendering with React best practices
- **Accessible**: Built with accessibility in mind
- **SEO Friendly**: Optimized for search engines

## 🚀 Technologies Used

- **React 18.2** - Modern React with hooks and concurrent features
- **Styled Components** - CSS-in-JS styling solution
- **Framer Motion** - Production-ready motion library for React
- **React Intersection Observer** - Trigger animations on scroll
- **React Spring** - Spring-physics based animations
- **Modern CSS** - CSS Grid, Flexbox, and custom properties

## 📦 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TonyAGI/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Modern navigation with mobile menu
│   ├── Hero.jsx            # Hero section with animated elements
│   ├── About.jsx           # About section with stats cards
│   ├── Experience.jsx      # Skills and experience showcase
│   ├── Projects.jsx        # Project cards with hover effects
│   ├── Contact.jsx         # Contact information and social links
│   └── BubbleBackground.jsx # Animated background bubbles
├── styles/
│   └── GlobalStyles.css    # Global styles and CSS variables
├── App.jsx                 # Main application component
└── index.js               # Application entry point
```

## 🎨 Customization

### Colors and Themes

Edit the CSS custom properties in `src/styles/GlobalStyles.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  --accent-gradient: linear-gradient(135deg, #45b7d1 0%, #96ceb4 100%);
  /* Add your custom colors here */
}
```

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name and title
   - Profile image path
   - Social media links
   - Resume file path

2. **About Section** (`src/components/About.jsx`):
   - Personal description
   - Experience details
   - Education information

3. **Experience Section** (`src/components/Experience.jsx`):
   - Skills and proficiency levels
   - Technology stack

4. **Projects Section** (`src/components/Projects.jsx`):
   - Project information
   - GitHub links
   - Project images

5. **Contact Section** (`src/components/Contact.jsx`):
   - Email address
   - Social media profiles

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation links in `Navigation.jsx`

## 🌟 Key Features Explained

### Bubble Background
Animated floating bubbles create depth and visual interest without being distracting.

### Glassmorphism Design
All cards and components use:
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders
- Soft shadows

### Smooth Animations
- Page load animations
- Scroll-triggered animations
- Hover and click effects
- Smooth page transitions

### Mobile-First Responsive Design
- Mobile navigation menu
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔧 Build and Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

### Deployment Options

**Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

**Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

**GitHub Pages**
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tony Oganda**
- GitHub: [@TonyAGI](https://github.com/TonyAGI)
- LinkedIn: [Tony Oganda](https://linkedin.com/in/tony-oganda-38a9b025b)
- Email: tonyoganda9@gmail.com

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Styled Components](https://styled-components.com/) for component styling
- [React](https://reactjs.org/) for the amazing framework
- Design inspiration from modern UI/UX trends

---

⭐ If you found this project helpful, please give it a star!