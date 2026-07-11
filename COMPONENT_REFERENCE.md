# Component Reference Guide

## Overview

This guide documents all new components created for the modern UI redesign of the Stamp Duty Calculator.

---

## Header Component

**File**: `components/Header.tsx`

**Purpose**: Sticky navigation header visible on all pages

### Features
- Fixed positioning with z-index
- Logo with gradient background
- Navigation links (About, Contact, Privacy)
- Mobile responsive hamburger menu
- Backdrop blur effect
- Smooth hover transitions

### Usage
```jsx
import { Header } from '@/components/Header';

export default function Page() {
  return (
    <>
      <Header />
      <main>Content</main>
    </>
  );
}
```

### Props
- None (component is self-contained)

### Styling Classes
```
sticky top-0 z-50                    - Fixed positioning
border-b border-border/40             - Bottom border
bg-background/95 backdrop-blur        - Semi-transparent with blur
supports-[backdrop-filter]:...        - Fallback styling
```

### Mobile Behavior
- Hamburger menu on screens < md
- Full navigation on larger screens
- Smooth menu animations

---

## Footer Component

**File**: `components/Footer.tsx`

**Purpose**: Page footer with links and information

### Features
- Multi-column layout for desktop
- Responsive grid for mobile
- Brand section with logo
- Quick links organized by category
- Contact information
- Copyright and disclaimer
- Sticky to bottom

### Usage
```jsx
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <main>Content</main>
      <Footer />
    </>
  );
}
```

### Props
- None (component is self-contained)

### Content Sections
1. **Brand** - Logo and tagline
2. **Quick Links** - Home, About, Contact
3. **Legal** - Privacy Policy, Terms, Disclaimer
4. **Contact** - Email and availability

### Responsive Behavior
- 1 column on mobile
- 4 columns on desktop (md and above)
- Stacked layout maintains readability

---

## State Card Component

**File**: `components/StateCard.tsx`

**Purpose**: Card display for individual states in the directory

### Features
- Link wrapper for navigation
- State name display
- Stamp duty rate
- Registration rate
- Special concession badges
- Hover animations with gradient overlay
- Icon indicating interactivity

### Usage
```jsx
import { StateCard } from '@/components/StateCard';

export default function StateDirectory() {
  return (
    <StateCard
      state="Maharashtra"
      slug="maharashtra"
      stampDutyRate={5}
      registrationRate={1}
      womenConcession={1}
      jointOwnershipConcession={true}
    />
  );
}
```

### Props
```typescript
interface StateCardProps {
  state: string;                      // State name
  slug: string;                       // URL slug
  stampDutyRate: number;              // Stamp duty percentage
  registrationRate: number;           // Registration percentage
  womenConcession?: number;           // Women discount percentage (optional)
  jointOwnershipConcession?: boolean; // Joint ownership available (optional)
}
```

### Visual Elements
- State name with primary text color
- Arrow icon for navigation hint
- Rate values in bold foreground color
- Green badge for women concession
- Orange badge for joint ownership

### Interactions
- Smooth scale on hover (`hover:-translate-y-1`)
- Shadow elevation on hover
- Border color transition to primary
- Gradient overlay fade in

---

## Feature Card Component

**File**: `components/FeatureCard.tsx`

**Purpose**: Display feature highlights with icons

### Features
- Icon with gradient background
- Title and description text
- Hover animation
- Consistent styling across sections
- Visual depth with shadows

### Usage
```jsx
import { FeatureCard } from '@/components/FeatureCard';
import { Zap } from 'lucide-react';

export default function Features() {
  return (
    <FeatureCard
      icon={<Zap className="w-6 h-6 text-primary" />}
      title="Instant Results"
      description="Get accurate calculations in real-time without delays."
    />
  );
}
```

### Props
```typescript
interface FeatureCardProps {
  icon: React.ReactNode;    // Icon component
  title: string;            // Feature title
  description: string;      // Feature description
}
```

### Visual Elements
- 12x12 icon container with gradient
- Title with primary hover color
- Description in muted foreground
- Smooth transitions on hover

### Responsive Behavior
- Single column on mobile
- Adapts to grid layout in parent component
- Maintains proportions on all screens

---

## Stats Section Component

**File**: `components/StatsSection.tsx`

**Purpose**: Display key statistics with visual impact

### Features
- Large gradient-text numbers
- Icon support for visual enhancement
- Responsive grid layout
- Hover effects on stat cards
- Clean, scannable design

### Usage
```jsx
import { StatsSection } from '@/components/StatsSection';
import { Search } from 'lucide-react';

export default function Stats() {
  return (
    <StatsSection
      stats={[
        {
          value: '31+',
          label: 'States & UTs',
          icon: <Search className="w-6 h-6 text-primary" />,
        },
        {
          value: 'Instant',
          label: 'Real-time Results',
          icon: <Zap className="w-6 h-6 text-accent" />,
        },
      ]}
    />
  );
}
```

### Props
```typescript
interface StatItemProps {
  value: string | number;   // Stat value
  label: string;            // Stat label
  icon?: React.ReactNode;   // Optional icon
}

interface StatsSectionProps {
  stats: StatItemProps[];   // Array of stats
}
```

### Layout
- 1 column on mobile
- 3 columns on desktop (md+)
- Auto-responsive grid

### Visual Elements
- Large gradient text for numbers
- Small label below
- Optional icon above value
- Icon with gradient background
- Border and hover effects

---

## Layout Wrapper Pattern

**File**: All modernized pages

**Purpose**: Consistent layout structure across all pages

### Pattern
```jsx
<div className="flex flex-col min-h-screen">
  <Header />
  
  <main className="flex-1">
    {/* Page content */}
  </main>
  
  <Footer />
</div>
```

### Benefits
- Sticky footer at bottom
- Header always on top
- Content fills available space
- Consistent layout structure

---

## Color & Styling Utilities

### Primary Gradient
```jsx
className="bg-gradient-to-r from-primary to-accent text-white"
```

### Card Styling
```jsx
className="rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
```

### Text Hierarchy
```jsx
// Heading
className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight"

// Body
className="text-lg text-muted-foreground leading-relaxed"

// Small
className="text-sm text-muted-foreground"
```

### Hover Effects
```jsx
className="hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
```

---

## Icon System

All icons use lucide-react. Import pattern:

```jsx
import { Zap, CheckCircle, Gift, Search, ArrowRight, ArrowLeft, Info, Mail, MessageSquare, Lock, Shield, AlertCircle } from 'lucide-react';
```

### Icon Usage in Components
```jsx
<Zap className="w-6 h-6 text-primary" />
```

### Common Sizes
- Small: `w-4 h-4`
- Medium: `w-5 h-5` (standard)
- Large: `w-6 h-6`
- Extra Large: `w-8 h-8`

---

## Color Application Examples

### Primary Actions
```jsx
<button className="bg-gradient-to-r from-primary to-accent text-white">
  Button
</button>
```

### Secondary Information
```jsx
<div className="bg-secondary/20 border border-secondary/60 text-secondary-foreground">
  Information
</div>
```

### Muted Background
```jsx
<section className="bg-muted/30 py-16">
  Content
</section>
```

### Borders and Dividers
```jsx
<div className="border-b border-border" />
```

---

## Responsive Design Patterns

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Centered content with responsive padding */}
</div>
```

### Grid Layouts
```jsx
// 1 col mobile, 2 col tablet, 3 col desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Spacing
```jsx
<section className="py-12 sm:py-16 border-b border-border">
  {/* Section with responsive vertical padding */}
</section>
```

---

## Accessibility Features

### Semantic HTML
```jsx
<header>Navigation</header>
<main>Main content</main>
<footer>Footer</footer>
```

### ARIA Labels
```jsx
<button aria-label="Toggle menu">Menu</button>
<div role="region" aria-label="Main content">
```

### Focus Indicators
```jsx
className="focus:ring-2 focus:ring-primary/50 focus:outline-none"
```

### Alt Text
```jsx
<img alt="Description" src="..." />
```

---

## Component Composition

### Example: Full Page
```jsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeatureCard } from '@/components/FeatureCard';
import { Zap } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Zap className="w-6 h-6 text-primary" />}
                title="Feature"
                description="Description"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
```

---

## Customization Examples

### Change Button Colors
```jsx
// Default
className="bg-gradient-to-r from-primary to-accent text-white"

// Secondary
className="bg-secondary/20 text-secondary-foreground border border-secondary/40"

// Muted
className="bg-muted text-muted-foreground"
```

### Adjust Card Sizes
```jsx
// Small
className="p-4 rounded-lg"

// Medium
className="p-6 rounded-lg"

// Large
className="p-8 rounded-xl"
```

### Modify Icon Containers
```jsx
// Small
className="w-8 h-8 rounded-md bg-primary/20"

// Large
className="w-12 h-12 rounded-lg bg-primary/20"
```

---

## Performance Tips

1. **Use `'use client'` only when needed** - Components with state/events
2. **Keep components focused** - Single responsibility principle
3. **Leverage CSS classes** - More efficient than inline styles
4. **Import icons selectively** - Only what you use
5. **Optimize images** - Use Next.js Image component

---

## Testing Components

### Testing StateCard
```jsx
<StateCard
  state="Test State"
  slug="test-state"
  stampDutyRate={5}
  registrationRate={1}
  womenConcession={0.5}
  jointOwnershipConcession={true}
/>
```

### Testing FeatureCard
```jsx
<FeatureCard
  icon={<CheckCircle className="w-6 h-6 text-primary" />}
  title="Test Feature"
  description="Test description"
/>
```

### Testing StatsSection
```jsx
<StatsSection
  stats={[
    { value: '100', label: 'Test', icon: <Zap className="w-6 h-6 text-primary" /> },
  ]}
/>
```

---

## Migration Guide

If migrating from old components to new ones:

1. Replace old styled divs with component imports
2. Update props to match component interface
3. Update parent grid/layout classes
4. Test responsive behavior
5. Verify accessibility

### Before
```jsx
<div className="p-6 border rounded">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### After
```jsx
<FeatureCard
  icon={<Icon />}
  title="Title"
  description="Description"
/>
```

---

This component system provides a solid foundation for building beautiful, responsive interfaces consistently across the entire application.
