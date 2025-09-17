# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production application 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js TypeScript configuration
- `npm run preview` - Alias for production start

### TypeScript
- TypeScript configured with relaxed settings for rapid development
- Strict mode enabled but with disabled noImplicitAny, noUnusedParameters, noUnusedLocals, and strictNullChecks
- Uses `@/*` path alias for src directory imports

## Architecture Overview

### Project Structure
This is a **cybersecurity splash page** built with Next.js 15.5.3 using modern React patterns:

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage composition
│   └── globals.css        # Global styles with CSS variables
├── components/            # React components
│   ├── ui/                # shadcn/ui component library (50+ components)
│   ├── providers.tsx      # Global providers (TanStack Query, Toast, Tooltip)
│   └── [Section]*.tsx     # Landing page sections
├── hooks/                 # Custom React hooks
└── lib/
    └── utils.ts           # Utility functions (cn helper)
```

### Tech Stack & Key Dependencies

**Core Framework:**
- Next.js 15.5.3 with App Router
- React 18.3.1 with TypeScript
- TailwindCSS with custom cybersecurity theme

**UI System:**
- **shadcn/ui**: Complete component library based on Radix UI primitives
- **Radix UI**: 30+ primitive components for accessibility and interactions
- **Lucide React**: Icon system
- **CVA (Class Variance Authority)**: Type-safe component variants

**Styling & Theming:**
- **CSS Variables**: Design token system in globals.css
- **Custom Cyber Theme**: Blue/cyan color palette with gradients
- **Dark Mode**: Configured via Tailwind class strategy
- **Animations**: Custom keyframes for fade-in and accordion effects

**State & Data:**
- **TanStack Query v5**: Server state management and caching
- **React Hook Form + Zod**: Form handling with validation
- **Sonner**: Toast notifications

**Development Tools:**
- **ESLint**: Next.js + TypeScript configuration with custom rules
- **PostCSS**: Autoprefixer integration

### Component Architecture

**Page Composition Pattern:**
The homepage (`src/app/page.tsx`) follows a section-based composition:
1. Header (navigation)
2. HeroSection (main CTA)
3. FeatureCardsSection
4. BenefitsSection  
5. ProcessSection
6. CollaborationSection
7. TestimonialSection
8. CommunitySection
9. CTASection (final call-to-action)

**Provider Hierarchy:**
```jsx
QueryClientProvider → TooltipProvider → App Content + Toast Components
```

**Styling System:**
- Uses `cn()` utility from `@/lib/utils` for conditional className merging
- CSS variables defined in globals.css for consistent theming
- Custom cybersecurity color palette with gradients and animations

### Key Patterns

**Import Style:**
- Uses `@/*` path aliases consistently
- UI components imported from `@/components/ui/[component]`
- Utilities from `@/lib/utils`
- Hooks from `@/hooks/[hook]`

**Component Structure:**
- Functional components with TypeScript
- Props interfaces defined inline or via type imports
- shadcn/ui components used as building blocks
- Custom components extend UI primitives with business logic

**Styling Approach:**
- Utility-first with TailwindCSS
- CSS-in-JS avoided in favor of utility classes
- Custom CSS variables for theme consistency
- Component variants handled via CVA

### Configuration Notes

**Next.js:**
- App Router with default configuration
- No custom rewrites or redirects
- Standard build optimization

**TypeScript:**
- Relaxed configuration for faster development
- Path mapping configured for `@/src/*`
- Preserves JSX for Next.js processing

**ESLint:**
- Custom rules: unescaped entities disabled, unused vars as warnings
- TypeScript integration with Next.js presets
- Empty object types allowed for flexibility

### Cybersecurity Theme

This project implements a cybersecurity-focused design system:
- **Colors**: Blue (#2563eb) and cyan (#06b6d4) primary palette
- **Gradients**: Dark blue to cyan gradients with overlays
- **Typography**: Professional, tech-focused messaging
- **Animations**: Subtle fade-in effects for modern feel
- **Layout**: Full-screen sections with overlay backgrounds

The design emphasizes trust, security, and professionalism appropriate for enterprise cybersecurity services.