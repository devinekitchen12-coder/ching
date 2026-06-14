# Ching Kong • Our Wok Talks

Official website for **Ching Kong**, an Indo-Chinese restaurant in Panchkula — built with Vite + React.

> "From dreams to woks." — A passion project bringing bold Indo-Chinese street food, fired in our own signature sauces.

## Quick start

```bash
npm install
npm run dev
```

The dev server will open at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

## Drop in your real logo

Save your logo file as `public/logo.png` (square, transparent background, at least 400×400 px).
A placeholder `logo.svg` is included as an automatic fallback, so the site looks good immediately.

## What's inside

- `src/App.jsx` — composes all sections
- `src/components/` — one file per section (Navbar, Hero, About, Menu, Gallery, Testimonials, Reservation, Contact, Footer)
- `src/data/menu.js` — edit menu items, prices, categories here
- `src/index.css` — full design system (brand palette, layout, responsive)

## Editing the menu

Open [src/data/menu.js](src/data/menu.js) and add/edit items under any category. Tags
like `Signature`, `Veg`, and `Hot` get auto-styled.

## Reservation / Order form

The form opens a pre-filled WhatsApp message to **+91 99156 35585**. Change the number
in [src/components/Reservation.jsx](src/components/Reservation.jsx) if needed.

## Brand palette

| Token | Color |
|---|---|
| Red | `#E63027` |
| Yellow | `#F5A623` |
| Black | `#1A1A1A` |
| Cream | `#FFF8EE` |

---

Made with ❤ in Panchkula.
