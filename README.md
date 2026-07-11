# Stamp Duty Calculator India - Complete Implementation

A fast, mobile-first, static web application for calculating stamp duty and registration charges across all Indian states and union territories. Built with **Next.js 16 App Router** and **Tailwind CSS**.

## ✨ Features

✅ **31 Pre-rendered State Pages** - One calculator for each Indian state and major UTs  
✅ **Real-time Calculations** - Instant results as you type (client-side only)  
✅ **Special Concessions** - Automatically applies women's & joint ownership discounts where applicable  
✅ **SEO Optimized** - Unique titles, descriptions, and FAQ schema on each page  
✅ **Mobile Responsive** - Perfect on all devices  
✅ **No Backend Required** - All calculations done on the client  
✅ **Zero Database** - Static generation for fastest performance  
✅ **AdSense Ready** - Placeholder ad slots included  

---

## 📁 File Structure

```
project-root/
├── app/
│   ├── layout.tsx                          # Root layout
│   ├── page.tsx                            # Home/landing page with state directory
│   ├── stamp-duty-calculator/
│   │   └── [state]/
│   │       └── page.tsx                    # Dynamic state calculator (31 pre-rendered pages)
│   ├── about/page.tsx                      # About page
│   ├── privacy-policy/page.tsx             # Privacy policy
│   ├── contact/page.tsx                    # Contact page
│   └── globals.css                         # Global Tailwind styles
├── components/
│   └── StampDutyCalculator.tsx             # Client-side calculator widget
├── data/
│   └── stampDutyRates.ts                   # Central data file with all states
├── public/
│   └── sitemap.xml                         # XML sitemap (31 state URLs)
└── PROJECT_STRUCTURE.md                    # Detailed documentation
```

---

## 🚀 Quick Start

### Install & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# Runs at http://localhost:3000

# Build for production
pnpm build

# Start production server
pnpm start
```

### Test a Calculator Page

Open any state page:
- `http://localhost:3000/stamp-duty-calculator/maharashtra`
- `http://localhost:3000/stamp-duty-calculator/delhi`
- `http://localhost:3000/stamp-duty-calculator/karnataka`

---

## 📊 Data Structure

All state rates are stored in **`data/stampDutyRates.ts`**:

```typescript
{
  state: 'Maharashtra',
  slug: 'maharashtra',
  stampDutyRate: 5,              // 5% of property value
  registrationRate: 1,            // 1% of property value
  womenConcession: 1,             // 1% discount for women buyers
  jointOwnershipConcession: 0.5,  // 0.5% discount for joint ownership
  notes: 'Optional state-specific notes'
}
```

### States Included (31 Total)

**28 States:**
Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal

**3 Union Territories + Major UTs:**
Delhi, Puducherry, Chandigarh, Ladakh, Jammu & Kashmir

---

## 🧮 Calculator Component

**File:** `components/StampDutyCalculator.tsx`

- **Client-side only** - No API calls or backend required
- **Real-time updates** - Calculates as user types
- **Conditional UI** - Shows buyer category dropdown only if state has concessions
- **INR currency formatting** - Proper Indian Rupee display
- **Concession detection** - Automatically shows applicable discounts

### Inputs
- Property value (₹)
- Buyer category (Male/Female/Joint - shown if applicable)

### Outputs
- Stamp duty percentage & amount
- Registration percentage & amount
- Total charges
- Applied concession details (if any)

---

## 📄 Page Types

### **Home Page** (`/`)
- Feature highlights
- Alphabetically organized state directory
- "Why choose us?" section
- Footer with important links
- Ad slot placeholder

### **State Calculator Pages** (`/stamp-duty-calculator/[state]`)
- Unique H1: "Stamp Duty Calculator [State] 2026"
- Custom meta tags and Open Graph per state
- FAQ schema (JSON-LD) with 3 sample Q&As
- Calculator widget
- Information cards
- Ad slot placeholder

### **Info Pages**
- `/about` - About the calculator
- `/privacy-policy` - Privacy & data collection disclosure
- `/contact` - Contact form placeholder & support info

---

## 🔍 SEO & Schema

### Metadata
✓ Unique title & description per state  
✓ Keywords targeting "stamp duty calculator [state]"  
✓ Open Graph & Twitter Card tags  
✓ Canonical URLs

### Structured Data
✓ FAQ Schema (JSON-LD) on each state page  
✓ 3 questions per page (customizable)  
✓ Rich snippet support for Google

### Sitemap
✓ `public/sitemap.xml` includes:
  - Home page
  - All 31 state calculator pages
  - About, Privacy Policy, Contact pages
  - Proper priority & change frequency

---

## 💰 AdSense Integration

### Ready for Monetization

Ad slot placeholders are included on:
- **Home page:** `/` - `<div id="ad-slot">`
- **All state pages:** `/stamp-duty-calculator/[state]` - `<div id="ad-slot">`

### To Enable AdSense

1. Sign up for Google AdSense
2. Get your publisher ID
3. Replace placeholder divs with AdSense code:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-YOUR_ID"
     data-ad-slot="YOUR_SLOT_ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

---

## 🎨 Design

- **Color Scheme:** Professional blue (#0066FF) with clean grays
- **Typography:** Two-font system (headings + body)
- **Layout:** Mobile-first responsive grid
- **Cards:** Subtle borders and shadows
- **Spacing:** Consistent Tailwind scale

### Styling Files
- `app/globals.css` - Tailwind v4 setup with `@import`
- Component-level Tailwind classes

---

## 📝 How to Update Rates

1. Open `data/stampDutyRates.ts`
2. Find the state entry
3. Update `stampDutyRate` and/or `registrationRate`
4. Optional: Update concession percentages
5. Save - pages automatically reflect changes!

**Example - Update Maharashtra rates:**
```typescript
{
  state: 'Maharashtra',
  slug: 'maharashtra',
  stampDutyRate: 5,      // Change this
  registrationRate: 1,    // Or this
  womenConcession: 1,
  jointOwnershipConcession: 0.5,
  notes: 'Updated for 2026'
}
```

---

## 🔧 Development

### Available Scripts

```bash
pnpm dev       # Start dev server with HMR
pnpm build     # Build for production
pnpm start     # Run production build
pnpm lint      # Run ESLint
```

### Key Technologies

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Bundler:** Turbopack (default in Next.js 16)

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📋 Checklist for Production

- [ ] Replace sample state data with accurate rates
- [ ] Review and update state-specific notes
- [ ] Set up Google Analytics
- [ ] Enable AdSense monetization
- [ ] Deploy to Vercel (`vercel deploy`)
- [ ] Set up custom domain
- [ ] Create Twitter/social media preview cards
- [ ] Monitor search console for indexing
- [ ] Set up contact form backend (optional)

---

## 🌍 Deployment

### Deploy to Vercel

```bash
# Login to Vercel
vercel login

# Deploy
vercel deploy

# Set production domain
vercel deploy --prod
```

### Environment Variables

None required! This is a static site with no backend.

### Optimization

- Static page generation speeds up every state page
- No database or API calls
- Minimal JavaScript bundle
- Automatic image optimization
- Edge caching for fast global delivery

---

## 📚 Additional Resources

### Project Documentation
- `PROJECT_STRUCTURE.md` - Detailed architecture & file explanations
- `README.md` - This file

### India Tax Resources
- [Indian Stamp Duty Information](https://www.taxscan.in/)
- [State-wise Registration Policies](https://www.igrsharyana.gov.in/)

---

## 🛠️ Future Enhancements

**Potential Features:**
- Property type selector (affects rates)
- Recent amendments & temporary concessions
- State-specific blog posts
- Email notifications for rate changes
- Analytics dashboard
- A/B testing different landing pages
- Video tutorials
- Calculator API for other websites

---

## ⚠️ Legal Disclaimer

**This calculator provides estimates for educational purposes only.** Actual stamp duty and registration charges may vary based on:
- Property type (residential, commercial, agricultural)
- Location and municipal jurisdiction
- Special exemptions or schemes
- State-specific amendments

**Always consult your local sub-registrar office or a qualified property tax expert for precise calculations before completing any property transaction.**

---

## 📞 Support & Questions

For implementation help:
1. Check `PROJECT_STRUCTURE.md` for detailed architecture
2. Review component code for implementation details
3. Check Tailwind CSS docs for styling questions
4. Visit Next.js documentation for framework features

---

**Built with ❤️ using Next.js 16 & Tailwind CSS**

Happy calculating! 🎉
