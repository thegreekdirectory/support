---
layout: article
title: "Sorting Listings"
description: "Switch between Default, A–Z, Closest to Me, and Random sort orders on the listings page to find businesses the way you want."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "2 min read"
slug: /article/users/sorting-listings
related:
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
  - title: "Filtering by Distance (Radius)"
    url: /article/users/filter-by-radius
  - title: "Understanding Search Results"
    url: /article/users/understanding-search-results
---

## The four sort options

Use the **Sort** dropdown near the top of the listings page to change how results are ordered.

### Default

The default sort ranks listings by:

1. **Tier priority** — PREMIUM → FEATURED → VERIFIED → FREE
2. **Proximity** — How close the business is to your estimated or precise location
3. **Seeded random** — Within the same tier and distance, a consistent random order is applied using a session-based seed

The seeded random ensures results don't reshuffle every time you change a filter — the relative order stays stable during your session.

### A–Z

Sorts all filtered listings alphabetically by business name, from A to Z. Useful when you know the name you're looking for and want to find it quickly in a long list.

### Closest to Me

Sorts by **geodesic distance** from your location, nearest first. Requires either:
- Browser location permission granted (precise GPS), or
- IP-based location estimate (city-level accuracy)

If no location is available, this sort falls back to Default.

### Random

Applies a fresh **Fisher-Yates shuffle** to the current filtered results every time you select it. Useful for discovery — you might find businesses you'd never scroll to otherwise.

## Sort and filters work together

Your sort order applies on top of your active filters. For example, sort by Closest to Me while filtering for Open Now + Food & Hospitality to find the nearest open Greek restaurant.
