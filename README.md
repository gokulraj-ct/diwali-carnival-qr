# Diwali Carnival QR Website 🎇

A festive, mobile-friendly Diwali fun-fact experience for GitHub Pages. It uses plain HTML, CSS and JavaScript—no framework, backend, database, API key, account signup, or paid service is needed to run the site.

## What's included

- `index.html` — the QR destination / main experience
- `styles.css` — responsive Diwali-meets-carnival styling and animations
- `app.js` — 40 built-in facts, random selection without repeats until the set is exhausted, confetti, and share/copy
- `poster.html` — printable QR poster generator (paste the live URL after publishing)
- `.nojekyll` — tells GitHub Pages not to run Jekyll processing

## Test it locally

1. Extract this ZIP.
2. Open `index.html` in a browser. The first random fact appears automatically.
3. Tap **Discover Another Fact** to reveal more.
4. `poster.html` is a separate poster maker. Its QR library is loaded from a free CDN, so you need an internet connection to generate the QR. The main fact website itself does not need that library.

## Publish for free with GitHub Pages

1. Sign in to GitHub or create a free account at https://github.com/.
2. Create a **public** repository named `diwali-carnival-qr`.
3. Upload the files in this folder to the repository's root. Make sure `index.html`, `styles.css`, `app.js`, `.nojekyll`, and `poster.html` are at the top level, not nested in another folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait for the Pages deployment to finish. Your website URL should be:
   `https://YOUR-USERNAME.github.io/diwali-carnival-qr/`
   Replace `YOUR-USERNAME` with your exact GitHub username. GitHub will also show the actual published URL in Settings → Pages.
8. Open that URL on your phone and scan/test it before printing.

GitHub Pages setup guide: https://docs.github.com/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Generate and print your QR poster

1. Open `poster.html` in a desktop browser. If you are viewing the repository on GitHub, download/open the file locally; do not use the GitHub source-code view as the poster.
2. Paste your exact published HTTPS URL in the field.
3. Click **Generate QR poster**.
4. Scan the QR code with a phone. Confirm it opens the live website.
5. Click **Print / Save as PDF** and choose paper size **A4**. Use colour printing for the festive design.

The poster uses a free, open-source QRCode.js library from cdnjs, loaded only by `poster.html`. If the library does not load, check your internet connection. Do not print a placeholder QR.

## Customisation

- Edit the fact list near the top of `app.js`.
- Edit colours and layout in `styles.css`.
- Change the poster wording in `poster.html`.
- After editing, commit/push the changes to the same GitHub repository. Pages will redeploy.

## Notes

- Hosting and QR generation are free with the setup described here. GitHub account availability and platform terms apply.
- The public repository and public website can be viewed by anyone; do not add secrets or private data.
- Facts are general cultural notes. Customs and stories vary by region, religion and family.
- The website has no analytics or tracking code. A browser's native share feature may be offered where supported.
