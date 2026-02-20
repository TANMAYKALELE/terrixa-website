# Terrixa Realty — Final Visual Polish & Data Update Plan

**Status:** AWAITING APPROVAL
**Date:** 2026-02-10
**Mode:** PLAN ONLY (No Implementation Yet)

---

## Executive Summary

This plan addresses critical visual imbalances, data accuracy, and mobile UX issues to elevate the Terrixa Realty website to professional Tier-1 standards. All changes focus on visual hierarchy, brand consistency, and mobile user experience.

---

## 1. GLOBAL CONTACT DATA UPDATE (Critical Priority)

### Issue
Current contact information is outdated or placeholder data that could lead to lost business opportunities.

### Files to Update

#### 1.1 Footer Component (`components/footer.tsx`)
**Current:**
- Line 80: `+91 9930070767`

**Update To:**
- `+91 9090363607`

**Additional Required:**
- Add office address above contact details:
  - `Life Republic Kolte Patil Marunji - R9, Pune 411057`

#### 1.2 WhatsApp Button (`components/WhatsAppButton.tsx`)
**Current:**
- Line 31: `https://wa.me/919876543210` (placeholder number)

**Update To:**
- `https://wa.me/919090363607`

**Visual Enhancement:**
- Update label text to be more action-oriented
- Consider adding a subtle pulse animation to draw attention

#### 1.3 Contact Form Components (If Applicable)
**Search for all instances of:**
- Phone numbers in validation
- WhatsApp links in CTAs
- Office address references

**Ensure Consistency:**
- All phone references: `+91 9090363607` or `9090363607`
- All WhatsApp links: `https://wa.me/919090363607`
- All address references: `Life Republic Kolte Patil Marunji - R9, Pune 411057`

---

## 2. VISUAL LAYOUT FIXES — Orphaned Cards

### 2.1 Problem Statement
Three sections display 5 items in grid layouts designed for even numbers (2-column or 3-column). This creates awkward left-aligned "orphan" cards on the bottom row with empty space on the right, breaking visual symmetry.

### 2.2 Target Components

#### Component A: `components/who-we-work-with.tsx`
**Current Layout:**
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 5 items total
- Result: 3 cards on top row, 2 cards on bottom row (left-aligned with empty space on right)

**Proposed Fix:**
```tsx
// Change from:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"

// Change to:
className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
```

**Technical Details:**
- Use `flex flex-wrap` instead of `grid`
- Add `justify-center` to center items horizontally
- Each card should maintain fixed width: `w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`
- This creates a centered pyramid effect: 3 on top, 2 centered on bottom

**Visual Outcome:**
```
Desktop (3-column):
[Card] [Card] [Card]
   [Card] [Card]      ← Centered!

Tablet (2-column):
[Card] [Card]
[Card] [Card]
   [Card]             ← Centered!
```

#### Component B: `components/markets/lifestyle-markets.tsx`
**Current Layout:**
- Grid: `grid-cols-1 md:grid-cols-2`
- 5 locations
- Result: 4 cards on top rows, 1 card on bottom (left-aligned)

**Proposed Fix:**
```tsx
// Change from:
className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"

// Change to:
className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
```

**Technical Details:**
- Each card fixed width: `w-full md:w-[calc(50%-12px)]`
- Bottom card will center automatically with `justify-center`

#### Component C: `components/markets/urban-hubs.tsx`
**Current Layout:**
- Grid: `grid-cols-1 md:grid-cols-2`
- 5 locations
- Result: 4 cards on top rows, 1 card on bottom (left-aligned)

**Proposed Fix:**
- Identical to LifestyleMarkets fix above

---

## 3. HIERARCHY FIX — Risk vs. Solution Cards

### 3.1 Problem Statement
In `components/who-we-are.tsx`, the "Common Risks" card (black with red accents) is too visually aggressive and overshadows the "Our Structured Approach" card (the solution). The user's eye is drawn to the problem rather than the solution, which is poor UX hierarchy.

### 3.2 Current State Analysis

**"Common Risks" Card (Lines 83-109):**
- Background: `bg-charcoal` (very dark, high contrast)
- Icon: Red warning triangle with `bg-red-500/20`
- Text: White on dark (high contrast)
- Visual Weight: **VERY HIGH** (draws attention)

**"Our Structured Approach" Card (Lines 111-144):**
- Background: `bg-gradient-to-br from-[#C5A065]/10 to-[#C5A065]/5` (subtle gradient)
- Border: `border-2 border-[#C5A065]/30` (thin, subtle)
- Visual Weight: **MODERATE** (blends in)

### 3.3 Proposed Visual Rebalancing

#### Step 1: Tone Down "Common Risks" Card
**Current:**
```tsx
className="bg-charcoal rounded-2xl p-8 h-full border border-charcoal/20"
```

**Change To:**
```tsx
className="bg-neutral-800 rounded-2xl p-8 h-full border border-neutral-700/30"
```

**Icon Change:**
```tsx
// From:
className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center"

// To:
className="w-10 h-10 rounded-lg bg-neutral-700/30 flex items-center justify-center"
```

**Text Opacity:**
```tsx
// Reduce text contrast slightly
className="text-white/70" // instead of text-white/80
```

#### Step 2: Amplify "Our Structured Approach" Card
**Current:**
```tsx
className="bg-gradient-to-br from-[#C5A065]/10 to-[#C5A065]/5 border-2 border-[#C5A065]/30 rounded-2xl p-8 h-full"
```

**Change To:**
```tsx
className="bg-gradient-to-br from-[#C5A065]/15 to-[#C5A065]/10 border-3 border-[#C5A065]/50 rounded-2xl p-8 h-full shadow-xl shadow-[#C5A065]/10 ring-2 ring-[#C5A065]/20"
```

**Add Glow Effect:**
```tsx
// Add to motion.div wrapper:
whileHover={{
  scale: 1.02,
  boxShadow: "0 20px 60px rgba(197, 160, 101, 0.25)",
  transition: { duration: 0.3 }
}}
```

#### Step 3: Mobile Reordering (Critical UX Fix)
On mobile, the solution MUST appear BEFORE the problem.

**Add to parent container:**
```tsx
className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20 flex-col-reverse lg:flex-row"
```

**Or use explicit order classes:**
```tsx
// Risk Card:
className="... order-2 lg:order-1"

// Solution Card:
className="... order-1 lg:order-2"
```

**Mobile Flow:**
1. Solution card appears first (what Terrixa offers)
2. Risk card appears second (what they protect against)

---

## 4. IMAGERY & CONTEXT — Indian Real Estate Focus

### 4.1 Problem Statement
`components/what-we-do.tsx` uses generic stock images that don't match:
- The service titles (showing houses instead of land/plots/business)
- The Indian real estate context (Western suburban homes)

### 4.2 Image Analysis & Replacements

#### Service 1: "Aggregation & Broking"
**Current Image:**
- URL: `pexels-photo-259588` (generic suburban house exterior)
- Mismatch: Shows a finished residential property, not raw land

**Recommended Replacement Keywords:**
1. "Open land field India rural"
2. "Agricultural land survey India"
3. "Empty plot land development"
4. "Green field land investment"
5. "Land surveying equipment markers"

**Ideal Visual:**
- Wide open land/field
- Survey markers or boundary stakes
- Natural landscape (not buildings)
- Possibly surveyor equipment
- Indian rural/semi-urban context

#### Service 2: "Plotting"
**Current Image:**
- URL: `pexels-photo-2724748` (construction workers on site)
- Better than others but still generic

**Recommended Replacement Keywords:**
1. "Plot layout planning blueprint"
2. "Land subdivision markers India"
3. "Construction site planning aerial"
4. "Plot boundary markers stones"
5. "Site development planning"

**Ideal Visual:**
- Plot markers or boundary stones
- Layout planning/blueprints
- Aerial view of divided plots
- Surveying equipment
- Clear demarcation of land parcels

#### Service 3: "Trading"
**Current Image:**
- URL: `pexels-photo-7907676` (people in meeting)
- Generic business meeting, lacks real estate context

**Recommended Replacement Keywords:**
1. "Real estate contract signing India"
2. "Property handshake business deal"
3. "Real estate office negotiation"
4. "Business handshake modern office India"
5. "Property investment meeting professional"

**Ideal Visual:**
- Professional handshake or contract signing
- Modern office setting
- Indian business professionals
- Real estate documents visible
- Conveys trust and professionalism

### 4.3 Implementation Strategy

**Option A: Pexels Search (Recommended)**
```tsx
// Service 1 - Aggregation
image: "https://images.pexels.com/photos/[NEW_ID]/..."
// Search: "open land field" or "agricultural land india"

// Service 2 - Plotting
image: "https://images.pexels.com/photos/[NEW_ID]/..."
// Search: "plot boundary markers" or "land subdivision"

// Service 3 - Trading
image: "https://images.pexels.com/photos/[NEW_ID]/..."
// Search: "real estate handshake india" or "property contract signing"
```

**Option B: Unsplash Alternative**
- Use Unsplash API with more specific keywords
- Prioritize Indian context where possible

**Quality Criteria:**
- High resolution (minimum 1200px width)
- Professional photography
- Natural lighting
- Relevant to service description
- Culturally appropriate for Indian market

---

## 5. MOBILE UX OPTIMIZATION — Horizontal Carousels

### 5.1 Problem Statement
On mobile devices, sections with 4-6 cards create excessive vertical scrolling (scroll fatigue), making the page feel endless and reducing engagement.

### 5.2 Target Components

#### Component A: `components/integrated-services.tsx`
**Current Mobile Behavior:**
- 4 service tabs displayed as vertical grid on mobile
- Content card below tabs
- Requires significant vertical scrolling to see all options

**Proposed Solution:**
Implement horizontal snap carousel for tabs on mobile only.

**Technical Implementation:**
```tsx
// Tab Container (Lines 91-127)
// Current:
className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"

// Change to:
className="flex md:grid md:grid-cols-4 gap-3 mb-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2"
```

**Individual Tab Button:**
```tsx
className={`flex-shrink-0 w-[140px] md:w-auto snap-center ...`}
```

**Add Scroll Indicators (Optional):**
- Left/right gradient overlays to hint at scrollable content
- Dot indicators below to show position (1/4, 2/4, etc.)

**CSS Addition (globals.css):**
```css
@layer utilities {
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
```

#### Component B: `components/home/markets-overview.tsx`
**Current Mobile Behavior:**
- 2 large market cards stack vertically
- Each card is tall (aspect-video + content)
- Takes up significant screen real estate

**Proposed Solution:**
Horizontal snap carousel on mobile.

**Technical Implementation:**
```tsx
// Container (Lines 37)
// Current:
className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10"

// Change to:
className="flex md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide"
```

**Individual Market Card:**
```tsx
className="flex-shrink-0 w-[85vw] md:w-auto snap-center ..."
```

**User Experience:**
- Swipe left/right to view markets
- Smooth snap-to-center behavior
- Maintains visual hierarchy
- Reduces scroll fatigue
- More engaging interaction pattern

### 5.3 Design Considerations

**Pros:**
- Reduces vertical scroll length by ~40%
- More engaging interaction (swipe vs. scroll)
- Maintains desktop grid layout
- Industry-standard pattern (Instagram, App Store, etc.)

**Cons:**
- Slightly less discoverable (some users may miss content)
- Requires scroll indicators or hints

**Mitigation:**
- Add subtle scroll indicators
- Add "Swipe to explore" hint text on first load
- Ensure smooth momentum scrolling
- Add dot navigation below carousel

---

## 6. TESTING & VALIDATION CHECKLIST

### 6.1 Contact Data Verification
- [ ] All phone numbers updated to `9090363607`
- [ ] All WhatsApp links point to `https://wa.me/919090363607`
- [ ] Office address appears consistently across site
- [ ] Test WhatsApp link opens correctly on mobile and desktop
- [ ] Test phone number is clickable on mobile (tel: link)

### 6.2 Layout Verification
- [ ] WhoWeWorkWith: 5 cards center properly on all breakpoints
- [ ] LifestyleMarkets: 5 cards center properly on tablet/desktop
- [ ] UrbanHubs: 5 cards center properly on tablet/desktop
- [ ] No orphaned cards on any screen size
- [ ] Cards maintain consistent spacing and alignment

### 6.3 Hierarchy Verification
- [ ] "Common Risks" card is visually subdued
- [ ] "Our Structured Approach" card is visually prominent
- [ ] Mobile order shows solution first, risk second
- [ ] Glow effect on solution card works on hover
- [ ] Text contrast remains accessible (WCAG AA compliance)

### 6.4 Imagery Verification
- [ ] All 3 service images updated
- [ ] Images load correctly (no 404s)
- [ ] Images are high quality and contextually appropriate
- [ ] Images match service descriptions
- [ ] Alt text updated to reflect new images

### 6.5 Mobile Carousel Verification
- [ ] IntegratedServices tabs scroll horizontally on mobile
- [ ] MarketsOverview cards scroll horizontally on mobile
- [ ] Snap behavior works smoothly
- [ ] Desktop grid layout unaffected
- [ ] Scroll indicators visible and functional
- [ ] Touch/swipe gestures work on iOS and Android

### 6.6 Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)

### 6.7 Performance Testing
- [ ] New images optimized (WebP format if possible)
- [ ] No layout shift on page load
- [ ] Smooth scrolling performance on mobile
- [ ] No JavaScript errors in console

---

## 7. IMPLEMENTATION ORDER

### Phase 1: Critical Data (30 minutes)
1. Update footer phone number and add address
2. Update WhatsApp button link
3. Search and update any other contact references

### Phase 2: Layout Fixes (45 minutes)
4. Fix WhoWeWorkWith orphaned cards
5. Fix LifestyleMarkets orphaned cards
6. Fix UrbanHubs orphaned cards
7. Test all breakpoints

### Phase 3: Hierarchy Fix (30 minutes)
8. Tone down "Common Risks" card
9. Amplify "Our Structured Approach" card
10. Implement mobile reordering
11. Test visual balance

### Phase 4: Imagery Update (60 minutes)
12. Research and select appropriate images
13. Update image URLs in what-we-do.tsx
14. Update alt text
15. Test image loading

### Phase 5: Mobile Carousels (60 minutes)
16. Implement horizontal scroll for IntegratedServices
17. Implement horizontal scroll for MarketsOverview
18. Add scrollbar-hide utility
19. Test on multiple mobile devices

### Phase 6: Testing & QA (45 minutes)
20. Complete full testing checklist
21. Fix any issues found
22. Final cross-browser verification

**Total Estimated Time:** 4.5 hours

---

## 8. ROLLBACK PLAN

If any changes cause issues:

1. **Git Revert:** All changes will be in a single commit for easy revert
2. **Component Backups:** Keep original files as `.backup` before changes
3. **Incremental Testing:** Test each phase before moving to next

---

## 9. SUCCESS METRICS

**Objective Measures:**
- Contact form submissions increase
- WhatsApp button click-through rate
- Reduced bounce rate on mobile
- Increased time on page (mobile)

**Subjective Measures:**
- Visual hierarchy feels more balanced
- Cards appear more intentional and professional
- Images feel contextually relevant
- Mobile experience feels smoother and more engaging

---

## 10. APPROVAL REQUIRED

**Please Review:**
1. Are the contact details correct? (Phone: 9090363607, Address: Life Republic Kolte Patil Marunji - R9, Pune 411057)
2. Do you approve the centered card layout approach?
3. Do you approve toning down the risk card and emphasizing the solution card?
4. Do you approve the image replacement strategy?
5. Do you approve the mobile carousel approach?

**Next Steps:**
- Upon approval, I will implement all changes in the order specified
- I will test each phase before proceeding
- I will provide a summary of all changes upon completion

---

**END OF PLAN**

Awaiting your approval to proceed with implementation.
