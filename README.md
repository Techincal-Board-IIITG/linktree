# IIITG Links

> A terminal-inspired link hub for IIIT Guwahati.

IIITG Links is a simple, lightweight landing page that brings together important IIIT Guwahati websites, communities, projects and resources in one place.

No frameworks. No backend. No database. Just HTML, CSS and JavaScript with a little terminal-flavoured chaos.

## Features

- Terminal-inspired UI
- Fully responsive
- Custom icons for every link
- Configurable accent colors
- Animated terminal prompt
- Scanline effect
- Hover animations
- Lightweight and fast
- No backend required
- No build system required

## Project Structure

```text
iiitg-links/
│
├── index.html
├── style.css
├── script.js
│
├── config/
│   ├── links.js
│   └── theme.js
│
└── assets/
    ├── iiitg.png
    ├── discord.png
    └── github.png
```

## Adding a Link

All links are managed through:

```text
config/links.js
```

Add a new entry to the `LINKS` array:

```js
{
    title: "Programming Club",
    description: "Events, projects & community",
    url: "https://example.com",
    icon: "assets/programming.png",
    iconSize: 42,
    accent: "purple"
}
```

### Available Accent Colors

```text
orange
purple
cyan
pink
green
yellow
```

You can add more colors through `theme.js` and `style.css`.

## Changing the Theme

The main configuration is located at:

```text
config/theme.js
```

You can change the site information:

```js
site: {
    name: "IIITG",
    subtitle: "L I N K S",
    title: "IIIT Guwahati",
    titleAccent: "Student Links",
    tagline: "Everything you need, in one place."
}
```

You can also change the terminal information:

```js
terminal: {
    user: "iiitg",
    host: "links",
    version: "v1.0.0",
    status: "ONLINE"
}
```

And the complete color palette:

```js
colors: {
    background: "#09090b",
    panel: "#0c0c0f",
    text: "#eeeeee",
    muted: "#92929e",
    border: "#36363e",
    accent: "#a866ff"
}
```

## Custom Icons

Each link uses a normal image file.

```js
icon: "assets/github.png"
```

PNG, WebP and other browser-supported image formats can be used.

The displayed size can be changed individually:

```js
iconSize: 42
```

For the best results, use images with minimal transparent padding around the actual logo.

## Running Locally

No build process is required.

You can simply open:

```text
index.html
```

Or use a local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment

This is a completely static website, so it can be deployed on any platform that supports static sites.

Some options:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
- Any standard web server

There is no backend to configure.

## Tech Stack

```text
HTML
CSS
Vanilla JavaScript
PNG / WebP assets
```

No React.

No Next.js.

No database.

No API.

Just HTML, CSS and JavaScript doing their thing.

## Customization Flow

The project is intentionally configuration-driven:

```text
config/links.js
        │
        ├── Titles
        ├── Descriptions
        ├── URLs
        ├── Icons
        └── Accent Colors
                │
                ▼
config/theme.js
        │
        ├── Site Information
        ├── Terminal Information
        └── Color Palette
                │
                ▼
             Website
```

This makes it easy to reuse the template for clubs, organizations, events or other student projects without touching the core code.

## Credits

Built for the Technical Board, IIIT Guwahati.

Made by students, for students.

Because a page full of links deserved a blinking cursor.
