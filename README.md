# ☕ Brew Morning — Coffee Shop Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=flat&logo=github)](https://mennaa7med.github.io/coffee-site/)

**🔗 [View Live Demo](https://mennaa7med.github.io/coffee-site/)**

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
git clone https://github.com/mennaa7med/coffee-site.git
cd coffee-site
npm install
```

### Development

```bash
npm run dev
```

Open **http://localhost:5173**

### Live demo (GitHub Pages)

After enabling **Pages → Build and deployment → Source: GitHub Actions** in the repo settings, each push to `main` deploys automatically to:

**https://mennaa7med.github.io/coffee-site/**

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

**Menna Ahmed** — [GitHub](https://github.com/mennaa7med) · [coffee-site](https://github.com/mennaa7med/coffee-site)

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

> Built as part of **CodeAlpha** — Landing page extended to a full React application.
