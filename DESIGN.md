---
name: Obsidian Cinematic
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a29'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e928e'
  outline-variant: '#444845'
  surface-tint: '#c6c7c4'
  primary: '#ffffff'
  on-primary: '#2f312f'
  primary-container: '#e2e3e0'
  on-primary-container: '#636563'
  inverse-primary: '#5d5f5d'
  secondary: '#c7c6c9'
  on-secondary: '#303033'
  secondary-container: '#464749'
  on-secondary-container: '#b6b5b7'
  tertiary: '#ffffff'
  on-tertiary: '#342f2e'
  tertiary-container: '#eae0de'
  on-tertiary-container: '#696362'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e3e0'
  primary-fixed-dim: '#c6c7c4'
  on-primary-fixed: '#1a1c1b'
  on-primary-fixed-variant: '#454745'
  secondary-fixed: '#e3e2e5'
  secondary-fixed-dim: '#c7c6c9'
  on-secondary-fixed: '#1b1c1e'
  on-secondary-fixed-variant: '#464749'
  tertiary-fixed: '#eae0de'
  tertiary-fixed-dim: '#cdc5c3'
  on-tertiary-fixed: '#1f1b1a'
  on-tertiary-fixed-variant: '#4b4544'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 100px
    letterSpacing: -0.05em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-desktop: 64px
  margin-mobile: 24px
  gutter: 32px
  section-gap-lg: 240px
  section-gap-md: 120px
---

## Brand & Style

This design system evolves the "machined craft" philosophy into a **high-impact, cinematic agency experience**. The personality is **Prestigious, Immersive, and Visionary**, moving away from purely functional tool-like aesthetics toward a narrative-driven flow inspired by world-class digital production studios.

The chosen style is a blend of **Minimalism and Glassmorphism with Cinematic High-Contrast**. It leverages the deep "Obsidian" void to ground massive, aggressive typography and ultra-sharp imagery. The interface should feel like a premium digital showcase—atmospheric, deliberate, and high-fidelity—where every scroll reveals a new "scene" in a larger story.

**Key visual principles:**
- **Cinematic Scale:** Use dramatic shifts in scale to guide the eye, moving from massive headlines to hyper-precise metadata.
- **Material Depth:** Go beyond flat surfaces by using "frosted" glass effects, background blurs, and light-refractive borders that mimic high-end lenses and hardware.
- **Storytelling Flow:** Information is presented in high-contrast chapters, prioritizing large-scale visuals and bold, definitive statements over dense information grids.

## Colors

The palette remains anchored in the classic Obsidian and Soft White contrast but introduces transparency levels to enhance the "cinematic" atmosphere.

- **Obsidian (#0B0C0E):** The foundational darkness. It acts as the infinite background and the primary "shadow" for material depth.
- **Soft White (#F5F5F2):** The primary light source and typographic color. It should feel radiant against the dark canvas.
- **Deep Matte (#050506):** An even darker value used for extreme depth or to create "recessed" areas in the layout.
- **Glass/Translucency:** Use Soft White with low alpha (5%–15%) for surface layers. This creates a "smoked glass" effect that allows background imagery to subtly bleed through.

**Color Application:** High-contrast is mandatory. Avoid mid-gray tones that muddy the design. Borders should be either sharp Soft White (high contrast) or transparent glass-borders for a more sophisticated, "machined" feel.

## Typography

The typography system is defined by **Dramatic Scale** and **Aggressive Tracking**. By using Plus Jakarta Sans across all roles but varying weight and spacing, we achieve a cohesive yet high-impact look.

- **The "Fantasy" Scale:** Headlines are intentionally oversized. The `display-xl` role should feel massive, often used for single-word statements or hero titles that dominate the viewport.
- **Tighter Tracking:** For all display and headline roles, letter-spacing is negative to create a "locked" and authoritative appearance.
- **Label Precision:** Small labels and metadata use heavy bold weights and wide letter-spacing to act as "technical markers" against the larger, fluid display text.

**Hierarchy Rules:**
- `display-xl` should be used sparingly for maximum impact.
- `label-caps` must always be uppercase and is often used to introduce sections or provide context for large imagery.

## Layout & Spacing

The layout moves away from traditional functional grids to an **Immersive Storytelling Flow**. While a 12-column grid provides the structural skeleton, the layout uses "visual breathing room" to create a premium, unhurried pace.

- **The Epic Scroll:** Use extremely large vertical gaps (`section-gap-lg`) to separate different narratives. This ensures that only one major visual or statement is the focus at any time.
- **Asymmetric Balance:** Align text to the left or right of the grid while leaving the opposite side for large-scale, edge-to-edge imagery or empty space.
- **Fixed Margins:** A generous 64px margin creates a "frame" for the content, emphasizing the cinematic nature of the UI.

**Mobile Adaptation:**
On mobile, the focus shifts to full-width visual impact. Text scales significantly, but maintains its dramatic letter-spacing. Use the 24px margin to ensure content doesn't feel cramped despite the smaller screen.

## Elevation & Depth

Hierarchy is established through **Material Contrast** and **Atmospheric Blurs**. This design system avoids standard drop shadows in favor of more sophisticated depth techniques:

- **Cinematic Shadows:** Use very large, soft, and low-opacity shadows (e.g., 120px blur, 15% opacity) to lift elements off the "Obsidian" base. The shadow should feel like an ambient occlusion effect rather than a light source.
- **High-Contrast Borders:** Use 1px or 2px Soft White borders for primary interactive elements. These should feel like "machined" edges catching a rim light.
- **Backdrop Blurs:** When overlapping layers occur (e.g., navigation or modals), use a heavy backdrop blur (20px+) combined with a transparent Soft White fill (5%). This creates the "lens" effect central to the cinematic aesthetic.

## Shapes

The shape language is **Rounded (0.5rem)**, moving slightly away from a strict industrial feel toward a more modern, premium interface aesthetic. This softens the aggressive typography while maintaining intentionality.

- **Functional Elements:** Buttons and input fields use the 8px (rounded-md) radius to feel like refined, modern components.
- **Imagery:** Large visual assets should use the 16px (rounded-lg) radius when contained within cards or sections to soften the overall layout.
- **Pill Shapes:** Avoided. The 0.5rem base radius ensures that even at larger scales, the geometric integrity of the rectangular layout remains clear.

## Components

### Buttons
- **Primary:** Soft White background with Obsidian text. Rectangular with 8px radius.
- **Cinematic Ghost:** Transparent background with a 1px Soft White border. On hover, the border width increases or the background gains a 10% Soft White tint.
- **Text:** Always use `label-caps` for button labels.

### Cards & Containers
- **Style:** Use either "Obsidian" on "Deep Matte" for tonal depth, or a semi-transparent "Glass" layer with a 1px glass-border. Apply an 8px or 16px radius depending on scale.
- **Visuals:** Images within cards should have a subtle dark overlay (10-20%) that clears on hover to emphasize the "reveal."

### Input Fields
- **Style:** Minimalist. A simple 1px bottom border in Soft White. Labels use `label-caps` positioned above the input.
- **Focus:** The bottom border increases to 2px, and a subtle ambient glow is applied behind the field.

### List Items
- **Style:** Separated by thin glass-borders. Use dramatic scaling for list titles (e.g., `headline-lg`) and `label-caps` for index numbers (e.g., `001`, `002`).

### Immersive Navigation
- **Style:** Top-fixed or "hidden-reveal" navigation with a heavy backdrop blur. Links use `label-caps` with a horizontal line hover effect that mimics a progress bar.