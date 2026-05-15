# ✈ Wanderlust Travel & Rides

A premium, frontend-only travel agency web app built with **React + Vite**.

## Features

| Page | Description |
|------|-------------|
| **Home** | Hero, destination tiles, animated stats, Why Choose Us cards, testimonials, CTA |
| **Tour Packages** | 6 destination cards (Bali, Paris, Rajasthan, Maldives, Manali, Kerala) |
| **About Us** | Brand story, milestone timeline, team member cards |
| **Contact** | Validated contact form with success toast |
| **Book a Ride** | Full ride booking form → confirmation screen, stored in React context |
| **Driver Dashboard** | PIN-protected (1234), live ride list, Accept/Decline actions, filter tabs |

## Tech Stack

- **React 18** + **Vite**
- **React Router v6**
- **Plain CSS** (no Tailwind) — one CSS file per component
- **Google Fonts**: Playfair Display + DM Sans
- **RideContext** (React Context + useState) for global ride state
- `sessionStorage` for driver PIN auth persistence

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Driver Dashboard

- Navigate to `/driver`
- Enter PIN: **1234**
- View pending, accepted, and declined ride requests
- Accept or Decline rides — updates propagate instantly across the app

## Project Structure

```
src/
├── context/
│   └── RideContext.jsx       # Global ride state (addRide, updateStatus)
├── pages/
│   ├── Home.jsx
│   ├── Packages.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Booking.jsx
│   └── Driver.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Toast.jsx
│   ├── RideCard.jsx
│   └── PackageCard.jsx
├── styles/
│   └── (one CSS file per component/page)
├── App.jsx
└── main.jsx
```

## Notes

- No backend, no database — all state is in-memory (React useState)
- Rides reset on page refresh (by design)
- Only `sessionStorage` is used (driver login persists across refresh within same tab)
- All validation is inline — no `window.alert()` anywhere
- 2 sample rides are preloaded in `RideContext` so the dashboard is never empty
