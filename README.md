# Smart Solutions — Complete React.js Website (Responsive Edition)

Professional **React.js + Vite + React Router** company website for Smart Solutions.

## What is included

- Homepage with **full-width local MP4 video background** and factory-to-PLC-to-software storytelling.
- **Fully responsive homepage typography:** fluid heading/paragraph sizes and `A−`, `Normal`, `A+` controls directly inside the hero.
- Official Smart Solutions logo in the header and footer.
- Complete working navigation for Company, Services, Solutions, Industries, Resources, Support and Contact.
- Product pages for **Digital Work Instructions, Production Traceability, Real-Time OEE, Andon, Visitor Management, Vehicle Management, Warehouse Management**, and other software and industrial services.
- A collection of **41 local image assets**, including dashboard screenshots and cover visuals.
- Local product-showcase video and homepage factory-flow video.
- Frontend-only contact/quote form; demo submissions are stored locally in the browser until an API is connected.
- Vercel/Netlify SPA routing configuration.

## Run locally (Windows / VS Code)

Install **Node.js 20.19+ or 22.12+**, then from this folder:

```powershell
npm install
npm run dev
```

Open the URL shown by Vite, usually `http://localhost:5173`.

For production:

```powershell
npm run build
npm run preview
```

You can also double-click `START-WEBSITE.bat` on Windows (Node.js must be installed).

## Home typography customization

The homepage has buttons to decrease, reset or increase hero text size. The site also automatically adapts to desktop, laptop, tablet and phone widths.

For manual CSS tuning, open `src/styles.css` and find:

```css
/* ===== FINAL: responsive homepage hero / adjustable text ===== */
```

Main selectors:
- `.compact-hero .compact-copy h1` — headline size and wrapping
- `.compact-hero .compact-copy p` — description
- `.compact-hero .vision-content.compact-hero-content` — responsive hero layout
- `@media(max-width:700px)` — phone typography

The React state and font-size buttons are in `src/pages/HomePage.jsx`.

## Contact details

- **Email:** `sandeep.k@smartsolutions.com`
- **Phone:** `+91 70883 12070`
- **Alternate:** `+91 92206 03849`

## API connection later

No backend is included. To connect a contact API later:

1. Copy `.env.example` to `.env`.
2. Set `VITE_CONTACT_API_URL=https://your-domain.com/api/enquiries`.
3. Restart the Vite development server and test the API POST.

See `docs/API-INTEGRATION.md`. Form demo mode stores enquiries in the current browser only and does not email them.

## Notes

- Product dashboard images are illustration/mockup assets, not a connected live dashboard.
- Product showcase MP4 is a short image-based motion sequence; the homepage MP4 illustrates the automation flow.
- Before publishing, review your privacy/terms content, case-study claims and contact form integration.
