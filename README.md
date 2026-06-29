# Jasti Sanjay - Portfolio 🚀

A modern, responsive portfolio website showcasing my projects, skills, and achievements in AI/ML and full-stack development.

## 🌟 Live Demo

[View Portfolio](https://your-portfolio-url.com) <!-- Update with your deployed URL -->

## 📸 Preview

![Portfolio Preview](public/assets/portfolio-preview.png) <!-- Add a screenshot -->

## ✨ Features

- **🎨 Modern Design** - Clean, professional UI with dark/light theme support
- **📱 Fully Responsive** - Perfect display on all devices and screen sizes
- **⚡ Fast Performance** - Built with Next.js for optimal loading speeds
- **🎭 Smooth Animations** - Enhanced UX with Framer Motion animations
- **📊 Interactive Projects** - Detailed case studies with tabbed navigation
- **🎯 SEO Optimized** - Meta tags, Open Graph, and structured data
- **♿ Accessible** - WCAG compliant with keyboard navigation support

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Lucide React](https://lucide.dev/)** - Modern icon library

## 🏗️ Project Structure

```
portfolio/
├── 📁 data/                    # Project documentation
│   ├── README.md              # Real-Time Chat App docs
│   └── README_stock.md        # Apple Stock Prediction docs
├── 📁 public/                 # Static assets
│   ├── 📁 assets/             # Images, resume, profile photos
│   └── 📁 certificates/       # Achievement certificates
├── 📁 src/
│   ├── 📁 app/                # Next.js App Router pages
│   │   ├── 📁 projects/       # Individual project pages
│   │   │   ├── 📁 real-time-chat/
│   │   │   └── 📁 apple-stock-prediction/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Home page
│   └── 📁 components/         # Reusable UI components
│       ├── Hero.tsx           # Landing section
│       ├── About.tsx          # Personal background
│       ├── Projects.tsx       # Featured projects
│       ├── Skills.tsx         # Technical skills
│       ├── Education.tsx      # Academic background
│       ├── Certifications.tsx # Achievements showcase
│       └── Contact.tsx        # Contact information
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanjayjasti18/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```
## 📄 Portfolio Sections

### 🏠 Hero
- Professional introduction with key statistics
- Links to GitHub, LinkedIn, and LeetCode profiles
- Downloadable resume

### 👨‍💻 About
- Personal background and interests
- Technical focus areas and expertise
- Professional mission statement

### 🚀 Featured Projects

#### 💬 Real-Time Chat Application
- **Tech Stack**: React, Node.js, Socket.io, MongoDB
- **Features**: Real-time messaging, JWT authentication, group chats, image sharing
- **Highlights**: WebSocket communication, responsive design, dark/light themes
- [View Details](./src/app/projects/real-time-chat) | [Documentation](./data/README.md)

#### 📈 Apple Stock Price Prediction
- **Tech Stack**: Python, TensorFlow, LSTM, Flask, Yahoo Finance API
- **Features**: Deep learning model, real-time data, interactive visualizations
- **Highlights**: 60-day sequence modeling, next-day predictions, web interface
- [View Details](./src/app/projects/apple-stock-prediction) | [Documentation](./data/README_stock.md)

### 💻 Technical Skills
- **Programming**: Python, Java, JavaScript, HTML, CSS
- **ML/AI**: TensorFlow, Keras, LSTM, CNN, Scikit-learn
- **Backend**: Spring Boot, Flask, Node.js, Express
- **Frontend**: React, HTML, CSS, JavaScript
- **Databases**: MongoDB, MySQL
- **Tools**: VS Code, GitHub, IntelliJ IDEA, Postman

### 🎓 Education
- **Degree**: B.Tech in Artificial Intelligence & Machine Learning
- **Institution**: Vignan's Foundation for Science, Technology and Research
- **CGPA**: 7.5/10 (2023-2027)

### 🏆 Achievements
- **5th Prize** - AI Hackathon 2026 (75+ teams) - Agentic AI Club
- **110+ Problems Solved** - LeetCode competitive programming

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Update in `src/components/Contact.tsx` and `src/components/Hero.tsx`
2. **Social Links** - Modify URLs in `src/components/Hero.tsx`
3. **Resume** - Replace file in `public/assets/` and update links
4. **Profile Photo** - Add new image to `public/assets/` and update references

### Add New Projects

1. Create new folder in `src/app/projects/your-project/`
2. Add `layout.tsx` and `page.tsx` files
3. Update `src/components/Projects.tsx` to include the new project
4. Add project documentation in `data/` folder

### Modify Styling

- **Colors** - Update theme in `tailwind.config.js`
- **Fonts** - Modify in `src/app/layout.tsx`
- **Components** - Edit individual component styles

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Screens**: 1440px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus management
## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Deployment
npm run export       # Export static files
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify
1. Connect repository and set build command: `npm run build`
2. Set publish directory: `out` (if using static export)

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automated deployment

## 📈 SEO Features

- **Meta Tags** - Complete title, description, and keywords
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Enhanced Twitter link previews
- **Structured Data** - JSON-LD schema for search engines
- **Sitemap** - Auto-generated for better indexing

## 👤 Author

**Jasti Sanjay**

- 🎓 B.Tech in Artificial Intelligence & Machine Learning
- 🏫 Vignan's Foundation for Science, Technology and Research
- 📧 Email: [sanjayjasti18@gmail.com](mailto:sanjayjasti18@gmail.com)
- 📱 Phone: +91 9000459401
- 💼 LinkedIn: [jasti-sanjay](https://www.linkedin.com/in/jasti-sanjay/)
- 💻 GitHub: [@sanjayjasti18](https://github.com/sanjayjasti18)
- 🧩 LeetCode: [sanjay_jasti](https://leetcode.com/u/sanjay_jasti/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💡 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

⭐ **Star this repository if you found it helpful!**

**Built with ❤️ by Jasti Sanjay**