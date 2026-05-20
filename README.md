# ✈ Swaranjali Tours & Travels

A premium, frontend-only travel agency and ride-booking web application built using **React (v19) + Vite (v8)**. The application offers a comprehensive showcase of tour packages, an interactive vehicle fleet browser, a complete ride-booking system, and a PIN-protected driver dashboard to manage ride requests in real-time.

---

## 🌍 Live Demo & Routing Configuration
This project is optimized for deployment on **Vercel**. 

### Client-Side Routing Fix (404 Error)
Since this is a Single Page Application (SPA) using client-side routing (`react-router-dom`), refreshing any subpage (e.g., `/fleet`, `/booking`, or `/driver`) on a standard static hosting provider would normally trigger a `404 Not Found` error. 

To solve this, we have configured a `vercel.json` file in the project root:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This configuration ensures that Vercel routes all client-side URL requests directly to `index.html`, allowing `react-router-dom` to take over and render the correct route dynamically.

---

## ✨ Features

| Page / Feature | Description |
| :--- | :--- |
| **🏠 Home Page** | Premium hero layout with a Marathi tagline (*प्रवास तुमचा जबाबदारी आमची*), popular destination tiles across Maharashtra & Karnataka, animated milestone counters, "Why Choose Us" sections, and client testimonials. |
| **🌏 Tour Packages** | 7 handcrafted travel packages (Mahabaleshwar, Hampi, Coorg, Lonavala, Mysore, Gokarna, Matheran) detailing duration, pricing, rating, and included sightseeing/amenity lists. |
| **🚗 Our Fleet** | Interactive catalog of vehicles (Hatchbacks, Sedans, SUVs, MPVs, Travellers) including Maruti Swift, Swift Dzire, Hyundai i10, Toyota Innova, Innova Crysta, Toyota Rumion, Kia Carens, and Tempo Traveller. Features client-side filtering by vehicle type. |
| **🧑‍✈️ Book a Ride** | Complete booking form capturing passenger details, pickup/drop coordinates, date, time, vehicle selection, and special notes. Integrates directly with global React context. |
| **🔐 Driver Dashboard** | PIN-protected admin portal (**Default PIN: 1234**) to view all bookings in real-time. Features status filters (All, Pending, Accepted, Declined), status modification action buttons (Accept/Decline), and dynamic dashboard metrics. |
| **🌐 About Us** | The founding journey of Swaranjali Travels since 2018, operational milestones, our core mission, and profile cards of the core team members (Founder, Head of Operations, Customer Relations). |
| **📬 Contact** | Validated client inquiry form with toast-based success alerts, company email, phone number, and physical office details. |

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19 + Vite 8
- **Routing:** React Router DOM v7
- **Styling:** Vanilla CSS (component-scoped CSS files with CSS variables for dark-indigo/gold palette harmony)
- **State Management:** React Context API (`RideContext.jsx`) for managing booking requests globally
- **Auth Simulation:** `sessionStorage` for driver login persistence
- **Feedback Alerts:** Custom-built React Toast notification system

---

## 📂 Project Structure

```
Tours/
├── public/                 # Static assets (logos, vehicle images, backgrounds)
├── src/
│   ├── components/         # Reusable structural & UI components
│   │   ├── Navbar.jsx      # Navigation bar with responsive mobile menu
│   │   ├── Footer.jsx      # Multi-column footer
│   │   ├── PackageCard.jsx # Tour package summary card
│   │   ├── VehicleCard.jsx # Fleet vehicle listing card
│   │   ├── RideCard.jsx    # Driver dashboard ride request card
│   │   ├── Toast.jsx       # Alert notification toast container
│   │   └── PolicySection.jsx # Booking policy component
│   ├── context/
│   │   └── RideContext.jsx # Global ride booking context and state provider
│   ├── data/
│   │   └── vehicles.js     # Data configuration for vehicles, policies, and pricing
│   ├── pages/              # Routed page views
│   │   ├── Home.jsx
│   │   ├── Packages.jsx
│   │   ├── Fleet.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Booking.jsx
│   │   └── Driver.jsx
│   ├── styles/             # Dedicated CSS stylesheets matching components and pages
│   ├── App.jsx             # Route definitions and layout assembly
│   ├── index.css           # Global design system tokens and base styles
│   └── main.jsx            # Application entry point
├── vercel.json             # Vercel deployment and rewrite rules
├── package.json            # Scripts and dependency versions
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started Locally

To run the project on your local machine:

1. **Clone the repository** (or navigate to your workspace directory).
2. **Install all dependencies:**
   ```bash
   npm install
   ```
3. **Start the local development server:**
   ```bash
   npm run dev
   ```
4. **Open the application:**
   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Developer Reference Notes

- **Real-time Synchronization:** When a user books a ride via the "Book a Ride" form, it is immediately pushed to the global `RideContext`. Navigating to the **Driver Dashboard** will display the new request under the "Pending" tab.
- **PIN Lock:** The driver portal requires entering `1234`. The unlocked status persists across page refreshes during the session via `sessionStorage`.
- **Database Reset:** The app runs entirely on frontend memory. A hard refresh of the entire browser window will reset the ride bookings to the default preloaded sample requests (except driver dashboard authentication status).
- **Responsive Layout:** The design system uses modern CSS Flexbox and CSS Grid layout techniques, ensuring complete visual compatibility on mobile, tablet, and desktop screens.
