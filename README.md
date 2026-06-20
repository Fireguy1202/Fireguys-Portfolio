# Your portfolio site — structure & next steps

This is a plain HTML/CSS/JS site, no build tools needed. Just edit the files directly and push to GitHub.

## Folder structure

```
your-repo/
├── index.html       → homepage (hero, about, the 3 cards)
├── games.html        → released games page
├── systems.html       → game systems page (code samples)
├── reviews.html        → testimonials page
├── css/
│   └── style.css     → all styling lives here
├── js/
│   └── main.js       → small interactive touches (copy-code button, fade-in)
└── images/           → put real screenshots/photos here once you have them
```

## How to get this live

1. Download these files and copy them into your `yourusername.github.io` repo, keeping the folders exactly as they are (don't flatten `css/` or `js/` into the root).
2. Commit and push (or drag-and-drop upload via the GitHub web UI if you don't have git installed locally).
3. Your site will be live at `https://yourusername.github.io` within a minute or two of pushing.

## What to edit

Every spot that needs your real content is marked with an `<!-- EDIT: ... -->` comment in the HTML, plus placeholder text in brackets like `[Game name]`. Search each file for "EDIT" or "Placeholder" to find every spot quickly.

Specifically:
- Your name, tagline, and bio in `index.html`
- A real photo: replace the dashed circle `<div class="avatar">` block with an `<img src="images/your-photo.jpg" ...>` once you have one, sized to roughly 200x200px
- Game entries in `games.html` — duplicate the `<article class="entry">` block for each game
- System write-ups and code snippets in `systems.html`
- Testimonials in `reviews.html` (delete the whole section if you don't have any yet)
- Your real GitHub/Roblox/email links in the footer of every page

## Notes

- The fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono) load from Google Fonts via a `<link>` tag, so they need an internet connection to load — this is normal and will work fine once it's live on GitHub Pages.
- Colors and spacing are all controlled by CSS variables at the top of `css/style.css` (`:root { ... }`), so you can retheme the whole site by changing a handful of values there.
