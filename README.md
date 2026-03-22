# Deepan L - Developer Portfolio

A modern, responsive, and visually stunning developer portfolio built with Vite, React, TailwindCSS, and Framer Motion. Inspired by Apple's design philosophy with minimalistic aesthetics, smooth animations, and a premium feel.

## Features

✨ **Modern Design**
- Minimalistic and clean interface
- Apple-inspired design philosophy
- Large whitespace and premium typography
- Smooth scrolling and subtle animations

🎨 **Dark/Light Mode**
- Seamless theme switching
- System preference detection
- Persistent user preference

📱 **Responsive Layout**
- Mobile-first design
- Fully responsive across all devices
- Touch-friendly navigation

⚡ **Performance**
- Lightning-fast load times with Vite
- Optimized animations with Framer Motion
- Minimal bundle size

🎭 **Smooth Animations**
- Page transitions
- Hover effects
- Scroll animations
- Interactive elements

## Tech Stack

- **Vite** - Next-generation frontend build tool
- **React 18** - UI library
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Web3Forms** - Contact form backend service
- **Vercel Analytics** - Web analytics
- **JavaScript ES6+**

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── DeploymentsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── index.js
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SectionTitle.jsx
│   ├── SkillCard.jsx
│   └── ProjectCard.jsx
├── data/
│   └── portfolio.js
├── hooks/
│   └── useDarkMode.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <https://github.com/deepan1413/portfolio_.git>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev -- --host
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Portfolio Content

Edit `src/data/portfolio.js` to update:
- Personal information
- Skills and expertise
- Projects
- Education
- Certifications
- Contact details

### Modify Colors

Update the color theme in `tailwind.config.js`:
- Primary colors for gradients
- Dark mode color palette
- Custom color schemes

### Change Typography

The portfolio uses **Inter** font by default. To change:
1. Update the Google Fonts import in `src/index.css`
2. Modify the font-family in `tailwind.config.js`

### Customize Animations

Adjust animation timings and effects in:
- Component-level animation variants
- Tailwind animation utilities in `tailwind.config.js`
- Framer Motion settings in individual components

## Color Theme

### Light Mode
- **Background**: White (#FFFFFF)
- **Text**: Dark Gray (#111827)
- **Accent**: Blue to Purple Gradient

### Dark Mode
- **Background**: Dark Gray (#111827)
- **Text**: White (#FFFFFF)
- **Accent**: Blue to Purple Gradient

## Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Components

### Navbar
- Sticky navigation with smooth animations
- Mobile-responsive menu
- Dark mode toggle
- Smooth scroll navigation

### Hero Section
- Large centered heading
- Role and tagline display
- CTA buttons (View Projects, Download Resume)
- Animated background elements
- Scroll indicator

### About Section
- Professional description
- Location and availability status
- Highlight cards with hover effects

### Skills Section
- Organized skill categories
- Clean card layouts
- Animated skill tags

### Projects Section
- Project cards with descriptions
- Technology tags
- GitHub and live demo links
- Project status badges

### Education Section
- Education timeline
- School, degree, and CGPA information
- Animated timeline design

### Certifications Section
- Certificate display
- Issuer information
- Animated checkmarks
Deployments Section
- Active deployments and live links
- Google Play Console Account
- Client project deployments
- Personal portfolio deployment

### Contact Section
- Contact methods with icons
- Email, phone, GitHub, LinkedIn, Instagram
- Web3Forms integrated contact form
- Real-time form submission with feedback
- Email, phone, GitHub, LinkedIn
- Interactive contact cards

### Footer
- Copyright information
- Social media links
- Contact summary

## Performance Optimization

- Lazy loading of images
- Code splitting with Vite
- Optimized animations with Framer Motion
- CSS minification with TailwindCSS
- Responsive image loading

## SEO

The portfolio includes:
- Semantic HTML structure
- Meta
## Future Enhancements

- [ ] Blog section
- [ ] Case studies
- [ ] Download resume functionality
- [ ] Contact form with backend
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Service worker for offline support

## License

This project is open source and available under the MIT License.

## Author

**Deepan L**
- Email: deepan14132002@gmail.com
- GitHub: [github.com/deepan1413](https://github.com/deepan1413)
- LinkedIn: [linkedin.com/in/deepan-l-3aabb425b](https://www.linkedin.com/in/deepan-l-3aabb425b)

## Support

For issues, questions, or suggestions, please create an issue in the repository.

---

Made with ❤️ using Vite, React, and TailwindCSS
