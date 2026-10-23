# Raihan Muzhaffar Athallah: Portfolio

Personal portfolio website of a Telecommunication Engineering student at Institut Teknologi Sepuluh Nopember (ITS), with a focus on networking, cloud infrastructure, and data analysis. It is a static site built with semantic HTML, CSS (Flexbox), and one small vanilla JavaScript file. No frameworks and no build step.

> The page content is written in Indonesian (`<html lang="id">`).

## Sections

- **Hero**: introduction, current status and focus areas, and call-to-action buttons.
- **Profile card**: short profile with location and contact links.
- **About** (`#tentang`): background and education.
- **Experience** (`#pengalaman`): internships, lab assistant work, and student organization experience.
- **Skills** (`#keahlian`): programming and data, networking and cloud, engineering tools and platforms, and soft skills.
- **Contact** (`#kontak`): footer with contact details and profile links.

## Features

- **Page-style navigation:** About, Experience, and Skills behave like separate pages. Choosing one fades and slides the content in instead of scrolling. Deep links such as `index.html#pengalaman` open the matching page directly.
- **Progressive enhancement:** without JavaScript, all sections are shown stacked (via a `<noscript>` style) and the navigation falls back to plain in-page anchors.
- **Responsive layout:** breakpoints at 900px, 760px (hamburger menu on mobile), and 480px.
- **Accessibility:** skip link, ARIA labels on the navigation, `aria-expanded` and `aria-controls` on the menu toggle, and support for `prefers-reduced-motion`.
- **Lightweight:** about 83 KB in total (HTML, CSS, JavaScript, and the profile photo), with Google Fonts as the only external resource.

## Design

The visual language is inspired by signal and spectrum-analyzer readouts, reflecting hands-on work with RF monitoring and network QoS analysis. It uses a dark theme with amber and cyan accents, monospace labels, and SVG waveform lines as decoration. Colors, fonts, corner radius, and layout width are defined as CSS custom properties in the `:root` block of `css/style.css`.

## Tech stack

- HTML5
- CSS3: custom properties and Flexbox (no floats, no CSS frameworks)
- Vanilla JavaScript (a small script wrapped in an IIFE)
- Google Fonts: Space Grotesk, IBM Plex Sans, IBM Plex Mono

## Project structure

```text
raihan-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── raihan-avatar.jpg
└── README.md
```

## Getting started

No installation is needed.

**Option 1:** open `index.html` directly in a browser.

**Option 2:** serve the folder with a local static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

The fonts are loaded from Google Fonts, so an internet connection is needed for the intended typography. Without it, the page falls back to system fonts.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select the `main` branch and the `/ (root)` folder.
4. After a minute, the site is available at `https://<username>.github.io/<repository-name>/`.

## References

- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans), and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) on Google Fonts: typefaces used for headings, body text, and monospace labels.

## Author

**Raihan Muzhaffar Athallah**: GitHub [@Ahayrai18](https://github.com/Ahayrai18)
