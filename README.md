# ANTES Health Complete Website

Static GitHub Pages website for **ANTES Health**.

## Included

- `index.html` — full healthtech startup website with sections:
  - Home
  - Our Story
  - Mission & Vision
  - Our Approach
  - Animated data-flow map
  - Product report mockup
  - MVP Pilot
  - Partners / Investors
  - Awards & Milestones
  - Founder
  - FAQ
  - Waitlist
- `styles.css` — responsive design, color palette, animations, accessibility styles
- `script.js` — mobile menu, scroll reveal, data-flow activation, node tooltips
- `privacy.html` — early placeholder for privacy and data protection
- `medical-disclaimer.html` — medical disclaimer page
- `assets/logo.svg` — custom SVG logo
- `assets/og-preview.svg` — social sharing preview

## Brand palette

- Cream background: `#FAF7F2`
- Text: `#1F2933`
- Deep health green: `#0F766E`
- Mint accent: `#99F6E4`
- Coral CTA: `#F97363`
- White cards: `#FFFFFF`
- Border gray: `#E5E7EB`

## Before publishing

1. Replace the Formspree placeholder in `index.html`:

```html
action="https://formspree.io/f/REPLACE_THIS_ID"
```

2. Confirm milestone wording before publishing:

- Impact Startup Competition Peru — selected / participant
- Claude Startups Program — accepted only if officially confirmed
- Cleveland NeuroDesign Workshop — confirm final wording
- IEEE Summer International Leadership Academy — confirm final wording

3. Replace founder placeholder with your photo if desired:

```html
<div class="founder-photo">...</div>
```

4. Review medical disclaimer and privacy language before MVP launch.

## GitHub Pages deployment

1. Upload these files to your `antes-health` GitHub repository.
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select branch `main` and folder `/root`.
5. Visit:

```text
https://jromero158486.github.io/antes-health/
```

## Medical wording guardrails

Use:

- preventive guidance
- education
- follow-up
- risk-based screening
- doctor-ready summary
- referral when needed

Avoid:

- diagnosis
- treatment recommendation
- AI doctor
- detect disease
- replace doctor
