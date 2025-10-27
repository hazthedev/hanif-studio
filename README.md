# Hanif Studio Portfolio Website

Professional portfolio website for media designer specializing in brand identity and visual product design.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd HanifStudio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans & Space Grotesk (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── layout/         # Header, Footer components
│   ├── sections/       # Page sections
│   └── ui/             # Reusable UI components
├── styles/             # Style files
├── utils/              # Utility functions
├── types/              # TypeScript types
└── assets/             # Images, icons, etc.
```

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#1E4BA1`
- **Primary Coral**: `#FF6B5B`
- **Accent Orange**: `#F39C54`
- **Dark Navy**: `#0D2847`
- **Cream**: `#FFFBF7`

### Typography

- **Display**: Space Grotesk
- **Body**: Plus Jakarta Sans

## 🚀 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 Features Implemented

### ✅ Core Setup
- Next.js 14+ with App Router
- TypeScript configuration
- Tailwind CSS with custom design system
- Responsive design (mobile-first)

### ✅ Components
- **Header**: Navigation with mobile menu
- **Hero**: Split-layout hero section with animations
- **Footer**: Complete footer with links and social media

### ✅ Animations
- Framer Motion for smooth animations
- Scroll-triggered animations
- Hover effects and micro-interactions
- Custom animations and transitions
- **Advanced typewriter effects** with multiple variants:
  - Delete & Retype: Types text, deletes it, then types new text
  - Rotate: Smooth fade transitions between words
  - Typing: Continuous typing without deletion
  - Multiple cursor styles: Pipe (|), Underscore (_), Block (▊)
  - Customizable typing/deleting speeds and pause durations

## 🎯 Next Steps

Based on the PRD, the following features are planned:

### 📄 Pages to Implement
- [ ] Portfolio page with filtering
- [ ] Project detail pages
- [ ] About page
- [ ] Services page
- [ ] Contact page
- [ ] Blog (optional)

### 🎨 Sections to Add
- [ ] Featured Projects grid
- [ ] Services overview
- [ ] Process timeline
- [ ] Testimonials carousel
- [ ] Client logos
- [ ] CTA sections

### ⚡ Functionality
- [ ] Portfolio filtering system
- [ ] Lightbox gallery
- [ ] Contact form with validation
- [ ] Dark mode toggle
- [ ] Analytics integration
- [ ] SEO optimization

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Built with ❤️ for Hanif Studio