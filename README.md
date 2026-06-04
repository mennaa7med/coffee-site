# ☕ Brew Morning — Coffee Shop Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

A modern, responsive coffee shop website built with **React**. Converted from a static landing page into a full multi-page web app with routing, animations, and mobile-first design.

![Brew Morning preview](./public/image/home.png)

## ✨ Features

- **4 pages** — Home, About, Menu, Contact
- **Filterable menu** — Hot, Cold, Specialty drinks
- **Responsive layout** — Mobile menu, flexible grids, touch-friendly UI
- **GSAP animations** — Hero and header entrance effects
- **Contact form** — Client-side validation and success feedback
- **Consistent branding** — Dark brown theme with gold accent (`#d3ad7f`)

## 🛠️ Tech Stack

| Category | Tools |
|----------|--------|
| Framework | React 19 |
| Build | Vite 6 |
| Routing | React Router 7 |
| Animation | GSAP |
| Styling | CSS3, Font Awesome |
| Font | Google Fonts (Nunito) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/brew-morning-coffee.git
cd brew-morning-coffee
npm install
```

### Development

```bash
npm run dev
```

Open **http://localhost:5173**

### Production build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── public/image/     Static assets (logo, hero image)
├── src/
│   ├── components/   Header, Footer, MenuCard, BtnLink
│   ├── pages/        Home, About, Menu, Contact
│   ├── data/         Menu items data
│   ├── hooks/        GSAP animation hooks
│   ├── App.jsx
│   └── index.css
├── index.html
└── vite.config.js
```

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Hero, perks, featured drinks, CTAs |
| `/about` | Story, stats, values |
| `/menu` | Full menu with category filters |
| `/contact` | Contact info and message form |

## 👤 Author

**Your Name** — [GitHub](https://github.com/YOUR_USERNAME) · [LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

> Built as part of **CodeAlpha** — Landing page extended to a full React application.
