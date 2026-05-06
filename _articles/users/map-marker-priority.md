---
layout: article
title: "Understanding Map Marker Priority"
description: "Featured and Premium listings appear on top of other pins when markers overlap. Learn how tier-based z-index works on the map."
category: users
category_name: "Maps & Directions"
category_icon: "🗺️"
read_time: "1 min read"
slug: /article/users/map-marker-priority
related:
  - title: "Clicking a Map Marker"
    url: /article/users/map-markers
  - title: "Understanding Listing Tiers"
    url: /article/users/listing-tiers
  - title: "Using the Map View"
    url: /article/users/using-map-view
---

## How marker layering works

When multiple business pins are close together on the map but not quite touching (not yet grouped into a cluster), they can overlap. The tier system determines which pin appears on top:

| Tier | Stack order |
|---|---|
| **PREMIUM** | Highest — always on top |
| **FEATURED** | Second |
| **VERIFIED** | Third |
| **FREE** | Lowest |

This means if a FREE listing and a PREMIUM listing pins overlap, the PREMIUM pin is visible and the FREE pin is underneath.

## Visual differences by tier

Pins also look slightly different by tier:

- **FREE / VERIFIED** — Standard blue-bordered circular pin
- **FEATURED / PREMIUM** — Gold-bordered pin with a subtle glow effect

The gold border makes Featured and Premium pins visually distinct even without overlapping.

## Hovering a pin

When you hover over any pin (on desktop) or tap it (mobile), it pops to the very top regardless of tier — so you can always access any business, even if it's behind a higher-tier pin. The hovered/tapped pin gets a temporary z-index boost to bring it forward.
