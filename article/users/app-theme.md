---
layout: article
title: "Dark Mode, Light Mode & System Theme"
description: "Switch between light mode, dark mode, or follow your device's system setting in the Greek Directory app's Settings tab."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "2 min read"
slug: /article/users/app-theme
related:
  - title: "Navigating with the Dock"
    url: /article/users/pwa-dock
  - title: "What Is the Greek Directory App?"
    url: /article/users/what-is-the-pwa
---

## Theme options

The Greek Directory supports three theme settings:

| Option | What it does |
|---|---|
| **Light** | Always uses the light (white background) theme |
| **Dark** | Always uses the dark (dark background) theme |
| **System** | Matches your device's current appearance setting |

## Changing the theme

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Tap the Settings tab (⚙️)</strong> in the bottom dock of the installed app.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Find the "Theme" section</strong> and tap your preferred option: Light, Dark, or System.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>The theme changes instantly</strong> — no restart required.
    </div>
  </li>
</ol>

## How dark mode works technically

Theme changes apply a CSS class to the page body:

- **Light mode** → `body.theme-light`
- **Dark mode** → `body.theme-dark`
- **System** → uses your device's `prefers-color-scheme` media query

This means the entire app — all pages, the dock, cards, and maps — updates to the chosen theme immediately.

## Dark mode on the map

When dark mode is active, the map tiles are automatically filtered and re-colored using CSS to match the dark theme. The map appears in dark tones consistent with the rest of the app.

## In a regular browser (non-PWA)

Without the installed app, the site respects your **system preference** automatically via `prefers-color-scheme`. There's no manual toggle in the regular browser experience — install the app to get manual theme control.
