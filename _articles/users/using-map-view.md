---
layout: article
title: "Using the Map View"
description: "Explore Greek-owned businesses on an interactive map. Learn how to toggle the map panel, use split view, and navigate the full-screen map."
category: users
category_name: "Maps & Directions"
category_icon: "🗺️"
read_time: "3 min read"
slug: /article/users/using-map-view
related:
  - title: "Using Split View"
    url: /article/users/split-view
  - title: "Getting Directions to a Business"
    url: /article/users/getting-directions
  - title: "Clicking a Map Marker"
    url: /article/users/map-markers
---

## Three ways to use the map

| Mode | Where | Best for |
|---|---|---|
| **Map panel** | Listings page (`/listings`) | Toggling a map above the grid while browsing |
| **Split view** | Listings page (`/listings`) | Side-by-side list and map simultaneously |
| **Full-screen map** | Map page (`/map`) | Visual exploration without the listings grid |

## Map panel (listings page)

Tap the **Map** button near the top of the listings page to toggle a map panel above the listings grid. The map shows pins for all currently filtered listings.

- **Zoom** — Use the `+` / `−` buttons or scroll wheel (desktop), or pinch to zoom (mobile)
- **Pan** — Click and drag, or swipe on mobile
- **Click a pin** — Opens a popup with the business name, category, and a link to its page
- **Close** — Tap the Map button again

## Full-screen map (`/map`)

The dedicated map page gives you the entire screen as a map. It includes:

- A **category filter** at the top to show only certain types of businesses
- A **location search** to jump to a specific city or ZIP code
- All the same pins and cluster behavior as the listings page map

## Map tiles and style

The map uses **OpenStreetMap** tiles. In dark mode (system or PWA setting), the map tiles are automatically inverted and re-colored to match the dark theme.

<div class="art-callout art-callout--tip">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" stroke-linecap="round"/></svg>
  <p>On mobile, the full-screen map at <code>/map</code> is the cleanest experience — especially in the installed PWA where the dock gives you quick access to it.</p>
</div>
