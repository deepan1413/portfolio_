# Deepan L Portfolio - Development Guidelines

## Project Overview

This is a modern, responsive developer portfolio built with Vite, React, TailwindCSS, and Framer Motion. The portfolio showcases projects, skills, education, and contact information for Deepan L, a Flutter & MERN Stack Developer.

## Tech Stack

- **Vite 7.3.1** - Modern frontend build tool with HMR
- **React 18** - UI library with hooks
- **TailwindCSS 3** - Utility-first CSS framework with dark mode support
- **Framer Motion 11** - Production-ready animation library
- **React Icons** - Popular icon sets for React
- **Inter Font** - Modern typography via Google Fonts

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── sections/        # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── index.js
│   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   ├── Footer.jsx       # Footer with contact links
│   ├── SectionTitle.jsx # Reusable section heading component
│   ├── SkillCard.jsx    # Skill category card component
│   └── ProjectCard.jsx  # Project showcase card component
├── data/                # Static data
│   └── portfolio.js     # Portfolio content (EDIT THIS TO CUSTOMIZE)
├── hooks/               # Custom React hooks
│   └── useDarkMode.js   # Dark mode state and persistence
├── App.jsx              # Main app component
├── App.css              # App-specific styles
├── index.css            # Global styles with Tailwind
└── main.jsx             # React entry point
```

## Key Features

### Dark/Light Mode
- Implemented using custom `useDarkMode` hook
- Persists user preference in localStorage
- Respects system color scheme preference
- Smooth transitions between themes

### Animations
- Framer Motion for complex animations
- Variant-based animation patterns
- Viewport-aware animations with `whileInView`
- Hover and tap interactions

### Responsive Design
- Mobile-first approach
- TailwindCSS responsive prefixes (sm, md, lg)
- Hamburger menu for mobile navigation
- Touch-friendly interactive elements

### Accessibility
- Semantic HTML structure
- Icon labels and aria attributes
- Keyboard navigation support
- High contrast colors for readability

## Customization Guide

### 1. Update Portfolio Content

Edit `src/data/portfolio.js`:

```javascript
export const portfolio = {
  name: 'Your Name',
  role: 'Your Role',
  tagline: 'Your tagline',
  location: 'Your location',
  about: 'Your bio...',
  contact: {
    phone: '+91 ...',
    email: 'your@email.com',
    github: 'https://github.com/...',
    linkedin: 'https://linkedin.com/in/...',
  },
  skills: {
    frontend: [...],
    backend: [...],
    languages: [...],
    tools: [...],
    iot: [...],
  },
  projects: [...],
  education: [...],
  certifications: [...],
};
```

### 2. Modify Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    },
    backgroundColor: {
      // Custom backgrounds
    },
  },
}
```

Current gradient:
- Primary: Blue (#3b82f6) to Purple (#a855f7)
- Use in buttons, links, and accents

### 3. Change Typography

Update `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800');
```

Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

### 4. Add Projects

Add to `portfolio.js`:

```javascript
{
  id: 5,
  title: 'Project Title',
  description: 'Project description',
  tech: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  live: 'https://project-url.com',
  status: 'In Progress', // Optional
  image: 'icon-name', // Optional
}
```

### 5. Customize Animations

Edit animation variants in components:

```javascript
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6 },
  },
};
```

## Development Workflow

### Start Development Server

```bash
npm run dev
```

Access at http://localhost:5173

### Build for Production

```bash
npm run build
```

Output in `dist/` directory

### Preview Production Build

```bash
npm run preview
```

Preview at http://localhost:4173

## Component Guidelines

### Creating New Sections

1. Create component file in `src/components/sections/`
2. Use Framer Motion variants for animations
3. Use `SectionTitle` component for headings
4. Follow the id-based smooth scroll pattern
5. Add viewport detection with `whileInView`

Example:

```javascript
import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle';

export const NewSection = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="newsection" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Section Title" centered={true} />
          {/* Content here */}
        </motion.div>
      </div>
    </section>
  );
};
```

### Reusable Component Patterns

**Section IDs**: Use lowercase section names for smooth scrolling
```html
<section id="about">
<section id="skills">
<section id="projects">
```

**Dark Mode**: Always include dark mode classes
```jsx
className="bg-white dark:bg-dark-900 text-gray-900 dark:text-white"
```

**Motion Animations**: Use consistent patterns
```javascript
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
```

## Color Palette

### Light Mode
- Background: #FFFFFF (white)
- Text: #111827 (dark-gray)
- Borders: #E5E7EB (gray-200)
- Accent: Blue (#3B82F6) → Purple (#A855F7)

### Dark Mode
- Background: #111827 (dark-900)
- Text: #FFFFFF (white)
- Borders: #374151 (dark-700)
- Accent: Blue (#3B82F6) → Purple (#A855F7)

## Performance Tips

1. **Lazy Load Images**: Use React.lazy and Suspense
2. **Optimize Animations**: Use Framer Motion's performance best practices
3. **Code Splitting**: Vite automatically handles this
4. **Image Optimization**: Use modern formats (WebP)
5. **Minimize Bundle**: Tree-shake unused Tailwind utilities

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Common Tasks

### Add New Skill Category

1. Edit `src/data/portfolio.js`
2. Add to `skills` object:
```javascript
newCategory: ['Skill1', 'Skill2'],
```
3. Update `src/components/sections/SkillsSection.jsx`

### Update Navigation Links

Edit `src/components/Navbar.jsx`:
```javascript
const navItems = ['About', 'Skills', 'Projects', 'Education', 'Contact'];
```

### Change Section Colors

Each section uses `bg-white dark:bg-dark-900` or `bg-gray-50 dark:bg-dark-800`

Alternate between light/dark backgrounds for visual separation.

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Push to Git
# Connect repo in Vercel dashboard
```

### Netlify

```bash
npm run build
# Drag & drop dist/ folder
```

### Manual

```bash
npm run build
# Upload dist/ to web server
```

## SEO Optimization

- Update `index.html` with meta tags
- Add descriptive page titles
- Use semantic HTML headings
- Include robots.txt and sitemap

## Future Enhancements

- [ ] Blog/Articles section
- [ ] Case studies with detailed breakdowns
- [ ] Downloadable resume (PDF)
- [ ] Contact form with email backend
- [ ] Analytics integration (Google Analytics)
- [ ] Multi-language support
- [ ] Service worker for offline access

## Troubleshooting

### Animations not working?
- Check Framer Motion is installed: `npm list framer-motion`
- Verify animation variants are defined
- Ensure parent motion.div wraps children

### Dark mode not persisting?
- Check localStorage in DevTools
- Verify `useDarkMode` hook is called in App
- Check theme class is applied to html/root element

### Tailwind styles not applying?
- Rebuild with `npm run dev`
- Check class names match Tailwind utilities
- Verify `tailwind.config.js` content patterns are correct

## Additional Resources

- [Vite Documentation](https://vite.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Icons](https://react-icons.github.io/react-icons)

## Support & Contributions

For improvements or bug reports, please create a GitHub issue.

---

Last Updated: March 2026
