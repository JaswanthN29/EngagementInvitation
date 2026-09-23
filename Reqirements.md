# Engagement Website — Requirements & Project Brief

## 1. Project Overview

Build a premium, elegant **engagement invitation website** from scratch using only:

- HTML
- CSS
- JavaScript

The website should be inspired by the visual style, layout, spacing, typography, photography, and smooth interactions of:

https://template3.tilda.ws/

**Important:** Recreate the design concept and user experience independently. Do not copy proprietary source code or assets from the reference website.

The website is for an **Indian engagement / Telugu Hindu Nischitartham**, but the visible invitation wording should be **English only**.

---

# 2. Couple Details

**Bride:** Lalitha  
**Groom:** Jaswanth

## Event

**Event:** Engagement / Nischitartham

**Date:** 12 October 2026

**Time:** 9:30 AM

**City:** Visakhapatnam (Vizag), Andhra Pradesh, India

---

# 3. Venue Details

**Venue:** HOTEL V PRIDE

**Address:**

Opp. BSNL Office,  
Lalitha Colony, Daba Gardens,  
Ram Nagar, Visakhapatnam,  
Andhra Pradesh, India

**Google Maps:** Required

The website must include a prominent **Get Directions** button that opens Google Maps for the venue.

---

# 4. Features

| Feature | Requirement |
|---|---|
| Hero section | Required |
| Couple names | Required |
| Engagement date | Required |
| Engagement time | Required |
| Venue information | Required |
| Countdown timer | Required |
| Google Maps | Required |
| Photo gallery | Required |
| Gallery lightbox | Recommended |
| Smooth scrolling | Required |
| Scroll animations | Required |
| Responsive design | Required |
| Mobile-first design | Required |
| Desktop support | Required |
| Background music | Not required |
| RSVP | Not required |
| Telugu wording | Not required |

---

# 5. Design Direction

## Overall Style

The website should feel:

- Premium
- Elegant
- Romantic
- Minimal
- Sophisticated
- Warm
- Modern Indian
- Clean
- Luxury wedding-stationery inspired

The reference website should be used only as a design/UX inspiration.

## Color Palette

Primary colors:

- Warm ivory
- Cream
- Off-white
- Soft beige
- Muted brown
- Antique gold
- Very subtle green/maroon accents where appropriate

Avoid excessive bright colors.

The overall website should feel soft and luxurious rather than colorful or flashy.

---

# 6. Typography

Use elegant typography with a combination of:

### Heading Font

Elegant serif font.

Possible Google Fonts:

- Cormorant Garamond
- Playfair Display
- DM Serif Display

### Body Font

Clean modern sans-serif.

Possible fonts:

- Inter
- Montserrat
- Lato

The typography should have generous spacing and a premium invitation-card feel.

---

# 7. Website Structure

## Section 1 — Hero

The first screen should immediately establish the engagement invitation.

Suggested content:

> OUR ENGAGEMENT

> LALITHA & JASWANTH

> 12 OCTOBER 2026

> 9:30 AM

The hero should use a large couple image or couple illustration.

### Hero requirements

- Full-screen or near-full-screen layout
- Large visual centerpiece
- Elegant typography
- Minimal text
- Smooth entrance animation
- Scroll indicator
- Responsive on mobile

---

# 8. Section 2 — Invitation

Introduce the engagement with a short message.

Suggested direction:

> Two hearts, one beautiful beginning.

Followed by a short invitation message.

Example:

> With joyful hearts, we invite you to celebrate the beginning of a beautiful new chapter as Lalitha and Jaswanth get engaged.

The wording can be refined later.

---

# 9. Section 3 — Engagement Details

Display the important event information clearly.

### Date

12 October 2026

### Time

9:30 AM

### Venue

HOTEL V PRIDE

### Location

Visakhapatnam

Use elegant icons or decorative elements where appropriate.

---

# 10. Section 4 — Countdown

Create a live JavaScript countdown to:

**12 October 2026, 9:30 AM**

Display:

- Days
- Hours
- Minutes
- Seconds

Example:

```text
120
DAYS

08
HOURS

32
MINUTES

14
SECONDS
```

### Countdown behavior

- Update every second
- Use the correct local time zone for the event: India Standard Time (IST)
- Stop/reset gracefully after the event time
- Work correctly on mobile and desktop

---

# 11. Section 5 — Couple / Story Section

Create an elegant visual section introducing the couple.

Possible layout:

```text
LALITHA
&
JASWANTH
```

with one or more photographs.

This section should not be overly text-heavy.

Use large whitespace and premium typography.

---

# 12. Section 6 — Photo Gallery

A dedicated gallery is required.

### Requirements

- Responsive grid
- 6–12 photos initially
- Desktop and mobile layouts
- Smooth hover effects on desktop
- Tap/click interaction on mobile
- Full-screen lightbox
- Previous/next controls
- Close button
- Keyboard support where appropriate

Example layout:

```text
┌──────────────┬──────────┐
│              │          │
│   PHOTO 1    │ PHOTO 2  │
│              │          │
├──────────┬───┴──────────┤
│ PHOTO 3  │    PHOTO 4   │
│          │              │
└──────────┴──────────────┘
```

The gallery must adapt naturally to different image sizes.

---

# 13. Section 7 — Venue / Location

Display:

**HOTEL V PRIDE**

Opp. BSNL Office, Lalitha Colony, Daba Gardens, Ram Nagar, Visakhapatnam

Include:

### GET DIRECTIONS

Clicking the button should open Google Maps.

Prefer a Google Maps search/directions URL that points to:

**HOTEL V PRIDE, Visakhapatnam**

The map section should be visually integrated into the design rather than looking like a generic embedded map.

---

# 14. Section 8 — Closing

End the invitation with a beautiful closing section.

Suggested content:

> WE CAN'T WAIT TO CELEBRATE WITH YOU

Then:

> LALITHA  
> &  
> JASWANTH

And:

> 12 • 10 • 2026

Use a large couple photograph or illustration in the background/foreground.

---

# 15. Navigation

The website can use a minimal navigation system.

Possible navigation:

```text
HOME
DETAILS
GALLERY
VENUE
```

On mobile:

- Hamburger menu or
- Minimal floating navigation

Navigation should be unobtrusive.

---

# 16. Animations

Use subtle animations.

Required/desired animations:

- Fade-in sections
- Slide-up text
- Image reveal
- Smooth scrolling
- Gentle image zoom
- Parallax effect where appropriate
- Gallery hover animation
- Countdown number transitions

Avoid excessive animations.

The website should feel elegant rather than like a flashy commercial website.

---

# 17. Responsive Design

Mobile is the primary target because guests will most likely open the invitation through WhatsApp.

## Mobile

Optimize for:

- iPhone
- Android phones
- 360px–430px screen widths

## Desktop

Support:

- 1280px
- 1440px
- 1920px

The design should not simply shrink the desktop version.

Create intentional mobile layouts.

---

# 18. Performance

The website should load quickly.

Requirements:

- Optimize images
- Use WebP/AVIF where possible
- Lazy-load gallery images
- Avoid unnecessary JavaScript libraries
- Avoid large frameworks
- Minimize external dependencies
- Use CSS animations where possible
- Keep JavaScript modular and lightweight

---

# 19. Accessibility

Include:

- Proper semantic HTML
- Alt text for images
- Keyboard-accessible gallery
- Visible focus states
- Good text contrast
- Accessible buttons
- Proper heading hierarchy
- Reduced-motion support where practical

---

# 20. Technology

Use only:

```text
HTML5
CSS3
Vanilla JavaScript
```

Optional:

- Google Fonts
- Google Maps
- Lightweight CDN libraries only if genuinely necessary

Do NOT use:

- React
- Angular
- Vue
- Next.js
- Bootstrap
- Tailwind

The purpose is to build the website from scratch and keep the project easy to understand and maintain.

---

# 21. Recommended Project Structure

```text
engagement-website/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── hero.webp
│   ├── couple-01.webp
│   ├── couple-02.webp
│   ├── couple-03.webp
│   ├── gallery-01.webp
│   ├── gallery-02.webp
│   ├── gallery-03.webp
│   └── ...
│
└── README.md
```

---

# 22. HTML Requirements

`index.html` should contain semantic sections such as:

```html
<header>
</header>

<main>

    <section id="hero">
    </section>

    <section id="invitation">
    </section>

    <section id="details">
    </section>

    <section id="countdown">
    </section>

    <section id="couple">
    </section>

    <section id="gallery">
    </section>

    <section id="venue">
    </section>

</main>

<footer>
</footer>
```

Keep content easy to edit.

---

# 23. CSS Requirements

`style.css` should contain:

- CSS variables
- Global typography
- Color system
- Responsive breakpoints
- Section layouts
- Hero design
- Gallery grid
- Lightbox styling
- Buttons
- Animations
- Mobile-specific styling

Use CSS variables such as:

```css
:root {
    --color-ivory: #f8f5ef;
    --color-cream: #eee8dc;
    --color-gold: #b59b65;
    --color-brown: #4b4036;
    --color-text: #2f2a25;
}
```

Colors can be adjusted during visual refinement.

---

# 24. JavaScript Requirements

`script.js` should handle:

### Countdown

```text
Target:
12 October 2026
09:30 AM
IST
```

### Gallery

- Open image
- Close image
- Next
- Previous
- Keyboard navigation

### Navigation

- Smooth scrolling
- Mobile menu if implemented

### Scroll animations

Use Intersection Observer where practical instead of constantly listening to scroll events.

---

# 25. Google Maps

The venue button should point to:

```text
HOTEL V PRIDE
Visakhapatnam
Andhra Pradesh
India
```

Suggested user experience:

```text
VENUE

HOTEL V PRIDE
Opp. BSNL Office
Lalitha Colony, Daba Gardens
Ram Nagar, Visakhapatnam

[ GET DIRECTIONS ]
```

The button should open Google Maps in a new tab/window on desktop and the Google Maps app/browser on mobile where supported.

---

# 26. Photo Requirements

The website should support the user's own photographs.

The user may later provide:

- Engagement photos
- Couple portraits
- Pre-engagement photos
- Couple illustrations
- Decorative images

Do not hard-code image dimensions.

Use:

```css
object-fit: cover;
```

where appropriate.

Keep the image focal point adjustable using:

```css
object-position;
```

---

# 27. Couple Illustration

The user has previously expressed interest in a **3D/cartoon/animated couple illustration** for engagement invitations.

The website should therefore support either:

1. Real couple photograph
2. 3D/cartoon couple illustration
3. Both

Preferred approach:

**Hero:** Couple illustration or premium portrait

**Gallery:** Real photographs

This can be changed later without changing the website structure.

---

# 28. Content Rules

This is an **engagement website**, NOT a wedding website.

Do not use wording such as:

- Wedding ceremony
- Wedding reception
- Marriage ceremony
- Wedding day
- Bride & Groom wedding invitation

Use:

- Engagement
- Nischitartham
- Our Engagement
- Save the Date
- Celebration
- A Beautiful Beginning
- Lalitha & Jaswanth

---

# 29. Current Event Data

Use these values throughout the project:

```javascript
const eventDetails = {
    bride: "Lalitha",
    groom: "Jaswanth",
    event: "Engagement",
    date: "12 October 2026",
    time: "9:30 AM",
    city: "Visakhapatnam",
    shortCity: "Vizag",
    venue: "HOTEL V PRIDE",
    address: "Opp. BSNL Office, Lalitha Colony, Daba Gardens, Ram Nagar, Visakhapatnam"
};
```

Keep event information centralized where practical so it can be changed easily later.

---

# 30. Things Explicitly NOT Required

Do not implement:

- RSVP form
- Background music
- Telugu text
- Guest registration
- Login
- Database
- Admin dashboard
- User accounts
- Payment system

This is intended to be a **static invitation website**.

---

# 31. Future Enhancements

Possible future features:

- WhatsApp share button
- Add to Google Calendar
- Add to Apple Calendar
- Animated floral elements
- More gallery layouts
- Custom domain
- QR code for the invitation
- Open Graph preview for WhatsApp
- Social sharing metadata
- PWA/offline support

These are optional and should not be implemented until requested.

---

# 32. Deployment

The website should be deployable as a static site.

Recommended options:

1. GitHub Pages
2. Cloudflare Pages
3. Vercel
4. Netlify

No backend server should be required.

---

# 33. Development Approach

Build in this order:

### Phase 1 — Foundation

- Create project structure
- Create HTML sections
- Add event information
- Add placeholder images

### Phase 2 — Visual Design

- Typography
- Colors
- Hero
- Sections
- Gallery
- Venue

### Phase 3 — JavaScript

- Countdown
- Gallery lightbox
- Navigation
- Scroll animations

### Phase 4 — Responsive Design

- Mobile
- Tablet
- Desktop

### Phase 5 — Polish

- Animation timing
- Image optimization
- Accessibility
- Performance
- Final typography
- Spacing

### Phase 6 — Deployment

Deploy using GitHub Pages, Cloudflare Pages, Vercel, or Netlify.

---

# 34. Final Design Goal

The finished website should feel like a **premium digital engagement invitation**, not a generic HTML website.

The desired experience is:

> Open the link → beautiful hero → discover Lalitha & Jaswanth → see the engagement date → countdown → explore their photos → see the venue → get directions → finish with a memorable closing section.

The overall visual language should be:

**Minimal + Romantic + Elegant + Indian + Premium + Modern**

Reference inspiration:

https://template3.tilda.ws/

The final implementation must be independently coded using HTML, CSS, and JavaScript.
