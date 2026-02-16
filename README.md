# Atelier Botanical: Unified Atelier

> High-end floral composition suite treating bouquet arrangement as architectural sculpture

---

## Screens

| Screen | Description |
|--------|-------------|
| **The Mood Gallery** | Asymmetrical masonry grid with cinematic motion |
| **The Composer** | Technical drafting table for stem-by-stem construction |
| **Palette & Harmony** | Color theory tool for bloom selection |
| **The Ledger** | Split-screen editorial checkout receipt |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#2C2C2B` | Text, borders, fine lines |
| `--color-bg` | `#F2F0EB` | Canvas, page background |
| `--color-surface` | `#EAE7DF` | Panels, modals |
| `--color-muted` | `#8C8C8A` | Specs, secondary labels |
| `--color-accent` | `#9A463D` | Active states, prices, errors |

### Typography

```
Font Display:  Cinzel Decorative (Headings, 700, 32-56px)
Font Body:     Tenor Sans (Body, 400, 16px)
Font Specs:    Tenor Sans (12px, Uppercase, 1px spacing)
Font Buttons: Tenor Sans (500, 13px, Uppercase, 2px spacing)
```

### Style Rules

- **Zero Radius:** All containers, buttons, images (0px)
- **Borders:** 1px solid `#2C2C2B` for all dividers/inputs
- **Shadows:** None on UI elements. Ambient shadows on floral assets only

---

## Component Specifications

### Global: Sidebar Navigation

**Layout:** Fixed left, 80px width

```
┌────┐
│ AB │  <- Monogram, 24px
├────┤
│    │
│ G  │  <- ROTATED -90°
│ A  │     "GALLERY"
│ L  │     "COMPOSER"
│ L  │     "PROFILE"
│    │
├────┤
│ ?  │  <- Legal links
└────┘
```

---

### 1. The Mood Gallery

**Layout:** Full-screen masonry grid (right of sidebar)

**Components:**

| Element | Description |
|---------|-------------|
| Mood Tiles | Vertical images, 0px radius |
| Hover Reveal | 20% dim + wireframe overlay |
| Filter Bar | "SEASONAL", "ARCHITECTURAL", "WILD" |

- **Hover:** Scale 1.05, text slides up from bottom
- **Loading:** Skeleton with breathing opacity pulse

---

### 2. The Composer

**Layout:** Three-column "Architect's Table"

```
┌─────────────┬─────────────────────────┬────────────────────┐
│   Tools     │       Canvas            │    Inventory       │
│  (200px)    │      (Fluid)            │     (320px)        │
├─────────────┼─────────────────────────┼────────────────────┤
│             │    ┌───────────┐        │  Hellebore ... $12│
│  Vessels    │    │   3D      │        │  Anemone ...  $08│
│  Supports   │    │  Viewer    │        │  Rose .....   $06│
│             │    │  (Grid)   │        │                    │
│             │    └───────────┘        │  [+] Add Stem      │
├─────────────┴─────────────────────────┴────────────────────┤
│  H: 45cm | W: 30cm                          <- Spec Footer │
└────────────────────────────────────────────────────────────┘
```

- **Canvas:** 3D viewer, dotted grid floor (`#8C8C8A`)
- **Stem Card:** 60px height, border top/bottom, hover adds `#EAE7DF`
- **Drag & Drop:** Stem snaps to vessel neck
- **Rotate:** Click/drag canvas for 360°

---

### 3. Palette & Harmony

**Layout:** Full-screen overlay, 95% opacity `#F2F0EB`

**Components:**

| Element | Description |
|---------|-------------|
| Color Wheel | SVG wheel with petal texture masks |
| Harmony Toggles | Monochromatic, Analogous, Split-Complementary |
| Results Grid | Bottom rail showing matching stems |

- **Click Wedge:** Wheel spins to top, results update instantly
- **Close:** Top right "X", 48px click target

---

### 4. The Ledger

**Layout:** Split screen - 60% Order / 40% Payment

```
┌────────────────────────────┬─────────────────────────┐
│     THE MANIFEST          │    SHIP TO               │
│                            │  [Typewriter input]      │
│  05 x Ranunculus .... $45 │                          │
│  03 x Anemone ....... $24 │  ─────────────────       │
│  12 x Dried Rose ...... $36│                          │
│                            │  PAYMENT DETAILS         │
│                            │  [Card input]            │
├────────────────────────────┤                          │
│                            │  ┌─────────────────┐     │
│                            │  │      $105.00    │     │
│                            │  │   (64px accent) │     │
│                            │  └─────────────────┘     │
└────────────────────────────┴─────────────────────────┘
```

- **Manifest:** Editorial list, "05 x Ranunculus (Name) ....... $45.00"
- **Letter Input:** Typewriter courier font
- **Total:** 64px, accent color `#9A463D`
- **Success:** Letter folds into envelope animation

---

## Tech Stack

- **Framework:** React + Tailwind CSS
- **3D:** Three.js + React Three Fiber (R3F)

---

## Build Order

1. Global Shell (Sidebar, Logo, Footer)
2. The Composer (Three.js + drag-drop)
3. Mood Gallery (masonry grid)
4. The Ledger (styling-heavy)
5. Palette Modal (isolated component)

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
