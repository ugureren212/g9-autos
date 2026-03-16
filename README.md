# G9 Autos LTD — Website

A simple, responsive single-page website for G9 Autos LTD, a local car mechanic shop.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser at the URL shown in the terminal (usually http://localhost:5173).

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory. Serve them with any static file server.

## Customisation

- **About text:** Edit `src/components/About.jsx` to update the about section copy.
- **Google Maps:** In `src/components/Contact.jsx`, replace the empty `src=""` in the iframe with your Google Maps embed URL.
- **Images:** Replace files in `public/img/` with your own images, keeping the same filenames.
- **Phone numbers:** Update numbers in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
