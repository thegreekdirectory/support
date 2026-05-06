---
layout: article
title: "Estimated Location vs. Precise Location"
description: "TGD uses two types of location data — an automatic IP-based city estimate and optional GPS-based precise location. Here's the difference and when each is used."
category: users
category_name: "Maps & Directions"
category_icon: "🗺️"
read_time: "2 min read"
slug: /article/users/estimated-vs-precise-location
related:
  - title: "Location Permission & Near Me Features"
    url: /article/users/location-permission
  - title: "Filtering by Distance (Radius)"
    url: /article/users/filter-by-radius
  - title: "Sorting Listings"
    url: /article/users/sorting-listings
---

## Estimated location (IP-based)

**What it is:** An automatic guess of your city based on your IP address, provided by [ipapi.co](https://ipapi.co). No permission required.

**Accuracy:** City-level — typically within 10–30 miles of your actual location. It may be off entirely if you're using a VPN or cellular data routed through a different city.

**What it enables:**
- Biases the default sort toward nearby listings
- Centers the map on your approximate city
- Shows a translucent estimated-location circle on the map
- Powers a rough version of the Closest to Me sort

**What it can't do reliably:**
- Accurate radius filtering under ~15 miles
- Precise Closest to Me sorting

## Precise location (GPS)

**What it is:** Your actual GPS coordinates from your device, requested via the browser's Geolocation API.

**Accuracy:** Within meters.

**What it enables:**
- Precise radius filtering (e.g., show businesses within 3 miles)
- Accurate Closest to Me sorting
- Exact location marker on the map (replaces the estimated circle)

**How to enable it:** Click the **📍 Locate Me** button on the listings page or map, then allow location permission in the browser prompt.

## Summary table

| Feature | Estimated (IP) | Precise (GPS) |
|---|---|---|
| Default sort bias | ✓ | ✓ |
| Map center | Approximate | Exact |
| Radius filter | Approximate | Accurate |
| Closest to Me sort | Approximate | Accurate |
| Permission required | No | Yes |
