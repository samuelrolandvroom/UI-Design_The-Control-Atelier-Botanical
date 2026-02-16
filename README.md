# Atelier Botanical: Unified Atelier

## Product Overview

**The Pitch:** A high-end floral composition suite that treats bouquet arrangement as architectural sculpture. It merges the cinematic immersion of an art gallery with the technical precision of a CAD workspace, allowing users to build floral arrangements stem-by-stem.

**For:** Discerning aesthetics obsessives, interior designers, and event planners who demand exacting control over texture, color harmony, and structural form.

**Device:** Desktop (Optimization: 1440px+)

**Design Direction:** **Digital brutalism meets organic softness.** Sharp, architectural grids hold fluid, high-fidelity botanical imagery. The interface feels like heavy paper stock and drafting tools.

**Inspired by:** *Aesop* (minimalist luxury), *Spline* (web-based 3D tooling), *Kinfolk* (editorial whitespace).

---

## Screens

- **The Mood Gallery (Home):** Asymmetrical masonry grid showcasing pre-designed collections with cinematic motion.
- **The Composer (Workspace):** Technical drafting table for stem-by-stem bouquet construction.
- **Palette & Harmony (Overlay):** Interactive color theory tool for selecting blooms by emotion and season.
- **The Ledger (Checkout):** A split-screen editorial receipt that presents the purchase as a commissioned work order.

---

## Key Flows

**[Flow: The Commission]** User creates a custom arrangement from scratch.

1. User lands on **The Mood Gallery** -> Selects "Start Blank Commission" from Sidebar.
2. Enters **The Composer** -> Drags "White Anemone" stems onto the canvas.
3. User clicks "Harmony Tools" -> Opens **Palette & Harmony** overlay to find matching accent flowers.
4. Selects "Dried Rose" accent -> Returns to Composer, finalizes arrangement.
5. Clicks "Commission" -> Proceed to **The Ledger** for payment.

---

<details>
<summary>Design System</summary>

## Color Palette

- **Primary:** `#2C2C2B` - Charcoal (Text, borders, fine lines)
- **Background:** `#F2F0EB` - Raw Silk (Canvas, page background)
- **Surface:** `#EAE7DF` - Slight darkening for panels/modals
- **Text:** `#2C2C2B` - Charcoal
- **Muted:** `#8C8C8A` - Specifications, secondary labels
- **Accent:** `#9A463D` - Dried Rose (Active states, price totals, errors)

## Typography

- **Headings:** `Cinzel Decorative`, 700, 32-56px (Uppercase, wide tracking)
- **Subheadings:** `Cinzel Decorative`, 400, 18-24px
- **Body:** `Tenor Sans`, 400, 16px (160% line height)
- **Technical Specs:** `Tenor Sans`, 400, 12px (Uppercase, 1px letter spacing)
- **Buttons:** `Tenor Sans`, 500, 13px (Uppercase, 2px letter spacing)

**Style Notes:**
- **Radius:** Strictly `0px` on all containers, buttons, and images.
- **Borders:** `1px solid #2C2C2B` for all dividers and inputs.
- **Shadows:** None on UI elements. Deep, soft, ambient shadows on *floral assets only* to create depth against flat UI.

## Design Tokens

```css
:root {
  --color-primary: #2C2C2B;
  --color-bg: #F2F0EB;
  --color-surface: #EAE7DF;
  --color-accent: #9A463D;
  --font-display: 'Cinzel Decorative', serif;
  --font-body: 'Tenor Sans', sans-serif;
  --border-width: 1px;
  --radius: 0px;
  --grid-gap: 24px;
}
```

</details>

---

<details>
<summary>Screen Specifications</summary>

### Global Elements (Persistent)

**Sidebar Navigation (Left, Fixed, 80px width):**
- **Logo:** "AB" Monogram, Top, 24px.
- **Menu:** Vertical text rotated -90deg. "GALLERY", "COMPOSER", "PROFILE".
- **Footer:** Legal links (Privacy, Terms), Bottom, 10px font.

### 1. The Mood Gallery (Home)

**Purpose:** Inspiration and entry point. Immersive visual browsing.

**Layout:** Full-screen asymmetrical masonry grid right of the Sidebar.

**Key Elements:**
- **Mood Tiles:** Large vertical images of arrangements. `0px` radius.
- **Hover Reveal:** On hover, image dims 20%, white wireframe overlay appears showing stem geometry.
- **Filter Bar:** Top right. Simple text links: "SEASONAL", "ARCHITECTURAL", "WILD".

**States:**
- **Loading:** Skeleton rectangles with a subtle "breathing" opacity pulse.
- **Hover:** Cursor changes to "VIEW" circle.

**Interactions:**
- **Hover Tile:** Slight zoom (scale 1.05) on image, text overlay slides up from bottom.

**Responsive:**
- **Desktop:** 3-column masonry.

### 2. The Composer (Workspace)

**Purpose:** The core builder tool. Technical precision meet organic experimentation.

**Layout:** Three-column "Architect's Table".
1.  **Tools (Left, 200px):** Vertical list of vessel types and structural supports.
2.  **Canvas (Center, Fluid):** 3D viewer area.
3.  **Inventory (Right, 320px):** Stem selector and pricing.

**Key Elements:**
- **The Canvas:** 3D interactive viewer. Background is `#F2F0EB`. Dotted grid floor (`#8C8C8A`).
- **Stem List (Right):** List items with thumbnail, botanical name (Italic), and price.
    - *Example:* "Hellebore 'Onyx Odyssey' — $12.00"
- **Spec Footer:** Fixed bottom bar within canvas showing dimensions: `H: 45cm | W: 30cm`.

**Components:**
- **Stem Card:** 60px height, borders top/bottom. Hover adds `#EAE7DF` background.
- **Add Button:** Square `+` button, 100% width, dashed border.

**Interactions:**
- **Drag & Drop:** User drags stem from Right Rail to Canvas. Stem snaps to vessel neck.
- **Rotate:** Click/Drag canvas to rotate arrangement 360°.

### 3. Palette & Harmony (Modal/Overlay)

**Purpose:** Advanced color theory tool to assist selection.

**Layout:** Full screen overlay with 95% opacity background (`#F2F0EB`).

**Key Elements:**
- **The Wheel:** Central SVG color wheel. Segments are not solid colors but texture masks of actual petals.
- **Harmony Toggles:** Bottom center. "Monochromatic", "Analogous", "Split-Complementary".
- **Results Grid:** Bottom rail. Shows stems that match the selected color harmony.

**Interactions:**
- **Click Wedge:** Wheel spins selection to top. Results Grid updates instantly.
- **Close:** Top right "X", thin, 48px click target.

### 4. The Ledger (Checkout)

**Purpose:** Transaction as a formal agreement.

**Layout:** Split screen. Left: 60% Order Summary. Right: 40% Payment Details.

**Key Elements:**
- **The Manifest (Left):** Editorial list of every stem. Large typography.
    - *Format:* "05 x Ranunculus (Clooney Hanoi) ....... $45.00"
- **The Letter (Right):** Inputs styled like lines on a letterhead.
    - Label: `SHIP TO` | Input: [User types here, font looks like typewriter courier]
- **Total Block:** Bottom right. Massive font size (64px). Accent color `#9A463D`.

**States:**
- **Success:** The "Letter" folds up (animation) and slides into an envelope graphic.

</details>

---

<details>
<summary>Build Guide</summary>

**Stack:** React + Tailwind CSS v3 + Three.js (R3F) for Canvas

**Build Order:**
1.  **Global Shell:** Implement the persistent Sidebar/Logo/Footer structure first to satisfy the strict constraint.
2.  **The Composer:** This is the highest complexity (Three.js integration). Get the drag-and-drop logic working early.
3.  **Mood Gallery:** Establishes the visual masonry grid system.
4.  **The Ledger:** Styling-heavy, logic-light.
5.  **Palette Modal:** Isolated component, can be built last.

</details>

---

## Local Server

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

*Created by Samuel Roland Vroom*
