# Hanif Studio Portfolio Website - PRD

## 1. Overview
**Purpose**: Professional portfolio website for media designer specializing in brand identity and visual product design.  
**Tagline**: "We Create Brand Identity and Visual Product Design"  
**Goals**: Showcase 15-30 projects, generate 10+ monthly leads, establish authority, 300% increase in inquiries within 6 months.

**Target Audience**: Business owners (25-50), startups, SMEs, marketing agencies, creative directors.

## 2. Tech Stack
- **Framework**: Next.js 14+ (App Router, SSR)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Language**: TypeScript
- **Images**: Next.js Image + Cloudinary/Imgix
- **Fonts**: Plus Jakarta Sans (body), Space Grotesk (headings)
- **Performance**: Lighthouse >95, Load <1.5s, TTI <2.5s

## 3. Design System

### Color Palette
```css
/* Primary Colors */
--tomato: #ED594B;
--pale-azure: #8ED5F6;
--polynesian-blue: #1E4FA3;
--chinese-violet: #845173;

/* Core Brand (From Original PRD) */
--primary-blue: #1E4BA1;
--primary-coral: #FF6B5B;
--accent-orange: #F39C54;

/* Supporting */
--secondary-blue: #3B6FB6;
--dark-navy: #0D2847;
--light-coral: #FFE5E2;
--cream: #FFFBF7;

/* Functional */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;

/* Text */
--text-primary: #0D2847;
--text-secondary: #4B5563;
--text-muted: #9CA3AF;
```

### Typography Scale
Display: 64px | H1: 48px | H2: 36px | H3: 28px | H4: 24px | Body: 16-18px | Small: 14px

### Spacing
8px grid: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Animation
- **Timing**: Micro (150-200ms), Small (300-400ms), Medium (500-600ms), Large (800-1000ms)
- **Easing**: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Principles**: 60fps, transform/opacity only, parallax, magnetic hover, stagger animations

## 4. Site Structure

### Homepage (/)
1. **Hero**: Split layout (60/40), headline, CTAs, animated visual, social proof
2. **Featured Projects**: 2x2 grid, 4-6 best projects with hover effects
3. **Services**: 3 columns - Brand Identity, Visual Product, UI/UX
4. **Process**: 5-step timeline (Discovery → Concept → Design → Refinement → Delivery)
5. **Testimonials**: Carousel with quotes, logos, ratings
6. **Client Logos**: 12-20 logos, grayscale → color on hover
7. **CTA Banner**: Gradient background, "Start Your Project"

### Portfolio (/portfolio)
- **Filter Bar**: All, Brand Identity, Packaging, Web, Logo, Print, Industry filters
- **Grid**: Masonry/uniform, 3 cols desktop → 1 mobile
- **Cards**: Image, title, client, tags, year, hover reveal

### Project Detail (/portfolio/[slug])
- Hero image/video, sidebar (client, industry, services, duration, deliverables)
- Challenge/Brief section
- Process documentation (Research → Concept → Execution)
- Gallery (mockups: cards, packaging, signage, web, social, guidelines)
- Results/Impact, related projects, next/prev navigation

### About (/about)
- Hero photo + headline
- Story (400-600 words), philosophy, values
- Skills visualization (tools: Adobe, Figma, etc.)
- Timeline, achievements, credentials
- Fun facts, CTA

### Services (/services)
- Detailed breakdowns per service (Brand Identity, Packaging, Digital, Print)
- Process deep dive, pricing packages, FAQ

### Contact (/contact)
- **Form**: Name, email, company, phone, project type, budget, timeline, message, file upload, reCAPTCHA
- Contact info, social links, alternative methods (Calendly, WhatsApp)

### Blog (/blog) - Optional
- Article grid with featured images, excerpts, read time
- Categories: Design Tips, Brand Strategy, Case Studies, Trends
- Rich post pages with social sharing

### Additional
- 404 error, Style Guide, Resources, Press pages

## 5. Key Features

### Animations
- Scroll-triggered (fade, parallax, counters, reveals, text splits)
- Custom cursor with magnetic effects
- Page transitions, micro-interactions
- Hero animations (typewriter, 3D objects, particles)

### Functionality
- Portfolio filtering/sorting (category, industry, year)
- Lightbox gallery (keyboard nav, zoom, swipe)
- Dark mode toggle (persists preference)
- Analytics (GA4, custom events, heatmaps)
- Form handling (validation, spam protection, auto-responder)

### Performance
- Image optimization (WebP/AVIF, lazy load, responsive)
- Code splitting, tree shaking, minification
- Static generation + ISR, caching, prefetching
- Skeleton screens

### SEO
- Semantic HTML, meta tags, Open Graph, Schema.org
- Keyword optimization, internal linking, sitemap, robots.txt
- Core Web Vitals optimization

## 6. Content Requirements

### Tone
Professional yet approachable, confident, creative, clear, benefit-focused, active voice, scannable.

### Assets Needed
- **Portfolio**: 12-30 projects (2400px images, mockups, before/after)
- **About**: Professional photo, bio (400-600 words), credentials
- **Copy**: Headlines, service descriptions (150-200 words), process steps, FAQs (10-15)

## 7. Technical Specs

### Browser Support
Chrome, Firefox, Safari, Edge (last 2 versions), iOS Safari, Chrome Android

### Breakpoints
Mobile: 375px | Mobile-lg: 425px | Tablet: 768px | Laptop: 1024px | Desktop: 1280px | Wide: 1536px

### Accessibility (WCAG 2.1 AA)
Semantic HTML, ARIA labels, keyboard nav, focus indicators, 4.5:1 contrast, alt text, reduced motion support

### Hosting
Vercel/Netlify/AWS Amplify, custom domain, SSL, CDN, auto deployments

### Integrations
**Essential**: GA4, Search Console, reCAPTCHA, email service  
**Optional**: Mailchimp, Calendly, Dribbble API, Instagram API, Hotjar

## 8. Success Metrics

### Performance
- LCP <2.5s, FID <100ms, CLS <0.1
- Page Load <2s, TTFB <600ms

### Engagement
- Bounce <50%, Session >2min, Pages/Session >3
- 10-15 monthly qualified inquiries
- Form conversion >10%

### SEO
- Organic traffic growth MoM
- Track 20-30 keywords, domain authority increase
- CTR improvement, coverage issues = 0

### Business
- Inquiries → Projects conversion
- Average project value tracking
- Repeat client + referral rate