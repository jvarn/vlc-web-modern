# VLC Web Modern - Developer Guide

This directory contains the source code for the modern React-based frontend of the VLC Web Interface. It was scaffolded using Vite and relies heavily on Tailwind CSS v4 and Shadcn UI components for styling.

## 📦 Tech Stack
- **Framework**: React 18, Vite
- **Styling**: Tailwind CSS v4, Lucide React (Icons), native CSS glassmorphism styles
- **State/Fetching**: React Query (`@tanstack/react-query`)
- **UI Architecture**: Radix UI Primitives (Headless Modals, Sliders, Dropdowns)

## 🛠 Project Setup
If you want to modify, compile, or fork the web interface, follow these steps:

1. Navigate into this directory:
   ```sh
   cd vlc-web-modern
   ```

2. Install dependencies:
   ```sh
   npm install --legacy-peer-deps
   ```
   *(Note: The legacy peer deps flag is required due to standard Vite + Tailwind v4 peer dependency behaviors).*

## 🌐 Local Development
To run this application logically alongside a VLC server for real API testing, start VLC with the web interface enabled locally, and run:

```sh
npm run dev
```
> Since the interface strictly fetches VLC's local API by polling `requests/status.json` and sending query commands, your local Node development server needs to query the open VLC Desktop App HTTP port directly. Refer to `vite.config.ts` if proxy configuration is necessary depending on your environment.

## 🏗 Building for Production
Once you have finalized your changes, execute:

```sh
npm run build
```

This project's `vite.config.ts` is explicitly configured to output its bundled assets to the **parent directory** (`../`). 
- The generated `index.html` replaces the parent directory's `index.html`.
- The `.js` and `.css` bundles are placed securely inside `../assets/`.

VLC natively expects `index.html` and `.css/.js` files to securely reside inside the `lua/http` folder hierarchy. Building places the files perfectly in position!

## 🧪 Metadata Sources
The `src/hooks/useMetadata.ts` engine extracts clean title strings using complex regex against standard filename formats. If you are modifying this extraction engine, note the `localStorage` key mappings required by the `<MediaInfo />`'s Fix Match logic, ensuring manual overrides are always prioritized over auto-detection regex!
