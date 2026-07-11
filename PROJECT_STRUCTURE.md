# Stamp Duty Calculator India - Project Structure

## Overview
A static, no-backend web app for calculating stamp duty and registration charges for property purchases across all Indian states and union territories. Built with Next.js 16 App Router and Tailwind CSS.

## Directory Structure

```
project-root/
├── app/
│   ├── layout.tsx                          # Root layout with global metadata
│   ├── page.tsx                            # Home/landing page with state directory
│   ├── stamp-duty-calculator/
│   │   └── [state]/
│   │       └── page.tsx                    # Dynamic state calculator pages (31 pre-rendered)
│   ├── about/
│   │   └── page.tsx                        # About page
│   ├── privacy-policy/
│   │   └── page.tsx                        # Privacy policy page
│   ├── contact/
│   │   └── page.tsx                        # Contact page
│   └── globals.css                         # Global Tailwind styles
├── components/
│   ├── StampDutyCalculator.tsx             # Client-side calculator widget
│   └── ui/
│       └── button.tsx                      # shadcn/ui button component
├── data/
│   └── stampDutyRates.ts                   # Central data file with all state rates & concessions
├── lib/
│   └── utils.ts                            # Utility functions (cn() for Tailwind classes)
├── public/
│   └── sitemap.xml                         # XML sitemap for SEO (31 state pages included)
├── next.config.mjs                         # Next.js configuration
├── tailwind.config.ts                      # Tailwind CSS configuration
├── tsconfig.json                           # TypeScript configuration
├── package.json                            # Project dependencies
└── components.json                         # shadcn/ui configuration
```

## Key Files Explained

### Data Layer
**`data/stampDutyRates.ts`**
- Central source of truth for all state data
- Contains 31 entries (28 states + Delhi, Puducherry, Chandigarh, Ladakh, J&K)
- TypeScript interface `StampDutyState` defines structure:
  - `state`: Full state name
  - `slug`: URL-friendly identifier
  - `stampDutyRate`: Percentage (e.g., 5)
  - `registrationRate`: Percentage (e.g., 1)
  - `womenConcession?`: Optional discount for women buyers
  - `jointOwnershipConcession?`: Optional discount for joint ownership
  - `notes?`: Additional information

### Pages

**`app/page.tsx` (Home)**
- Landing page with feature highlights
- Alphabetically organized state directory
- Links to all calculator pages
- Footer with navigation to info pages

**`app/stamp-duty-calculator/[state]/page.tsx` (Dynamic State Pages)**
- 31 pre-rendered static pages (one per state/UT)
- Uses `generateStaticParams()` for static generation
- Unique H1: "Stamp Duty Calculator [State] 2026"
- Custom meta tags and Open Graph for each state
- Includes FAQ schema (JSON-LD) for SEO
- Embeds `StampDutyCalculator` component
- Information cards explaining stamp duty and registration details
- Placeholder div for AdSense (id="ad-slot")

**`app/about/page.tsx`**
- Information about the calculator
- Disclaimer about accuracy
- Mission and features overview

**`app/privacy-policy/page.tsx`**
- Privacy policy for AdSense compliance
- Explains data collection (minimal - client-side only)
- Analytics disclaimer

**`app/contact/page.tsx`**
- Contact form placeholder (static form)
- Quick links section
- Support email placeholder

### Components

**`components/StampDutyCalculator.tsx` (Client Component)**
- Interactive calculator widget
- Inputs: property value, buyer category (if applicable)
- Real-time calculations on input change (no submit button)
- Outputs formatted in INR currency
- Shows applicable concessions when applicable
- Responsive design with clean card layout

### SEO & Metadata

**`public/sitemap.xml`**
- Includes home page, info pages, and all 31 state calculator pages
- Helps search engines index all pages
- Set priority and change frequency for each URL

**Dynamic Open Graph & Meta Tags**
- Each state page has:
  - Unique title with state name and year
  - Relevant description and keywords
  - og:type, og:url, og:title, og:description

**FAQ Schema (JSON-LD)**
- Added to each state page
- 3 sample questions about that state's stamp duty
- Helps Google display rich snippets

## Design & Styling

- **Framework**: Tailwind CSS v4 with `@import "tailwindcss"`
- **Color Scheme**: Professional blue accents (#0066FF), clean grays
- **Layout**: Mobile-first, responsive grid system
- **Components**: Clean cards with subtle borders and shadows
- **Typography**: Semantic HTML with proper heading hierarchy

## How to Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# Opens at http://localhost:3000

# Build for production
pnpm build

# Start production build locally
pnpm start
```

## How to Update Rates

1. Edit `/data/stampDutyRates.ts`
2. Update the `stampDutyRate`, `registrationRate`, and concession fields for any state
3. All pages automatically reflect the new rates
4. To add concessions, update the `womenConcession` or `jointOwnershipConcession` fields
5. The calculator component automatically shows/hides the buyer category dropdown

## Ad Integration

- Placeholder `<div id="ad-slot">` exists on:
  - Home page (`app/page.tsx`)
  - All state calculator pages (`app/stamp-duty-calculator/[state]/page.tsx`)
- Ready for AdSense implementation by replacing the placeholder with actual ad code

## Performance

- All calculations done client-side (no API calls)
- Static pre-rendering for all state pages
- Minimal JavaScript bundle
- Fast page loads with no external dependencies for calculations
- Responsive images and optimized assets

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- No special polyfills required

## Future Enhancements

- Add analytics to track popular states
- Implement contact form backend
- Add property type selector (affects rates in some states)
- Include recent amendments or temporary concessions
- Add state-specific blog posts or FAQs
- Implement email notification for rate changes
