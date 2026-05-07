---
layout: article
title: "Hard Refresh vs. Reset"
description: "The Settings tab has two powerful options — Hard Refresh and Reset App. Learn the difference and when to use each one."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "2 min read"
slug: /article/users/hard-refresh-vs-reset
related:
  - title: "Updating the App"
    url: /article/users/updating-the-app
  - title: "Why Did My Stars Disappear?"
    url: /article/users/stars-disappeared
  - title: "PWA App Not Updating After Install"
    url: /article/users/pwa-update-issues
---

## Hard Refresh

**Hard Refresh** clears the app's cached pages and assets, then reloads from the network. Think of it as "force-reload everything."

**What it clears:**
- Cached HTML, CSS, and JavaScript files
- Cached map tiles and images (except starred listing images)

**What it preserves:**
- ✓ Your starred businesses and their cached data
- ✓ App settings (theme, language, dock layout)
- ✓ Default map app preference

**When to use it:**
- The app feels stale or shows outdated content
- A new version seems to not be applying correctly
- Pages aren't displaying properly

**How to use it:** Settings tab (⚙️) → "Clear Cache & Reload"

## Reset App

**Reset App** is a full factory reset. It wipes all locally stored data and re-registers the service worker from scratch.

**What it clears:**
- ✓ Everything Hard Refresh clears, plus:
- All starred businesses and their cached images
- All app settings (theme resets to System, dock resets to default)
- Language preference
- Default map app preference
- All IndexedDB and localStorage data

**When to use it:**
- The app is seriously broken and Hard Refresh didn't fix it
- You want to start completely fresh
- You're handing the device to someone else

**How to use it:** Settings tab (⚙️) → "Reset App" → confirm in the dialog

<div class="art-callout art-callout--warning">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#92400e" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  <p><strong>Reset App cannot be undone.</strong> Your starred businesses will be permanently deleted from this device. Re-star them manually after resetting if you want to keep them.</p>
</div>
