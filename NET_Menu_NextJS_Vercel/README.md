# NET Caffe & Restaurant — Next.js

A Next.js App Router version of your existing NET Menu, with Kurdish, Arabic, and English support.

## Run on your PC

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

To test the production build:

```bash
npm run build
npm run start
```

## Add your real food photos (easy)

1. Put your image file in **public/images/**, for example `public/images/hummus.jpg`.
2. Open **data/menu.js** and press Ctrl+F to find `PASTE FOOD IMAGE HERE`.
3. Find the dish and replace `img: "",` with `img: "/images/hummus.jpg",`.
4. Repeat for the other dishes. Your photo automatically appears on the menu, in the popup, and in the basket.

No demo photos are included, so you can add your restaurant's actual photos.

## Deploy to Vercel (recommended)

### From a GitHub repository

1. Unzip this project. Upload the **contents** (package.json and app/ must be at the repository root) to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Set Framework Preset = **Next.js**, Root Directory = `./`.
4. Leave Build Command / Output Directory in their Next.js defaults. Don't set Output Directory to `.`.
5. Click Deploy.

### From your Windows PC without GitHub

In the extracted project folder, open a terminal:

```bash
npm install
npx vercel login
npx vercel --prod
```

If prompted: create or link project; use `./` as code directory; accept Next.js detection.

**Important:** This is a Next.js source project, not a plain static HTML ZIP. Use the GitHub importer or Vercel CLI so Vercel builds it. Do not use old Static HTML project settings.

## Features preserved

- Full-screen language selection (Kurdish, Arabic, English)
- Sticky navigation and categories
- All food images visible without cropping; full-image details popup
- Scroll position retained after closing popup
- Food suggestions at 5,000 IQD and above while basket is empty
- + / − food ordering and order summary (local only; no server checkout)

## Project structure

- `app/` — Next.js route, metadata, global stylesheet
- `components/RestaurantMenu.jsx` — client-side React component
- `data/menu.js` — editable dishes, prices, images, translations
- `data/markup.js` — layout markup from the original design
- `lib/menu.js` — browser interactions and rendering
- `public/images/` — your own photos
