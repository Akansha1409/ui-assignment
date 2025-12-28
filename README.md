# NFTme - NFT Marketplace UI Assignment

A pixel-perfect, responsive NFT Marketplace landing page built with **React** and **Tailwind CSS**. This project replicates a high-fidelity "Dark Mode/Cyberpunk" design with glassmorphism effects, custom masonry grids, and geometric UI elements.

## 🚀 Features

* **Pixel-Perfect UI**: Replicates the reference design with exact spacing, typography, and colors.
* **Geometric Design**: Custom CSS clip-paths for diagonal buttons and sharp-edged layouts.
* **Staggered Grid**: "One-up, One-down" masonry layout for the Trending section.
* **Glassmorphism**: Backdrop blurs and semi-transparent gradients.
* **Responsive**: Fully optimized for Desktop, Tablet, and Mobile.

## 🛠️ Tech Stack

* **Framework**: React (Vite)
* **Styling**: Tailwind CSS (v3.4)
* **Routing**: React Router DOM
* **Icons**: Lucide React
* **Fonts**: Outfit (Google Fonts)

## 📂 Project Structure

```bash
ui-assignment/
├── public/
│   └── images/            # Assets (hero img.png, Rectangle *.png, etc.)
├── src/
│   ├── components/
│   │   └── Layout.jsx     # Navbar & Footer
│   ├── pages/
│   │   └── Home.jsx       # Main Landing Page
│   ├── App.jsx            # Routing Setup
│   ├── index.css          # Tailwind Directives & Global CSS
│   └── main.jsx           # Entry Point
├── package.json
├── postcss.config.js      # PostCSS Config
├── tailwind.config.js     # Tailwind Theme Config
└── vite.config.js
