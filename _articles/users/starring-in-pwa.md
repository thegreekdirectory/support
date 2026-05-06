---
layout: article
title: "Starring Listings in the PWA (Offline Access)"
description: "In the installed Greek Directory app, starred businesses are saved with their photos for offline viewing — even without an internet connection."
category: users
category_name: "Starring & Favorites"
category_icon: "⭐"
read_time: "2 min read"
slug: /article/users/starring-in-pwa
related:
  - title: "How to Star a Business"
    url: /article/users/how-to-star
  - title: "Installing the App (PWA)"
    url: /article/users/install-pwa
  - title: "Viewing Your Starred Listings"
    url: /article/users/viewing-starred
---

## How PWA starring is different

When you use the installed Greek Directory app and star a business, TGD does two things instead of one:

1. **Saves the listing data** to your device's IndexedDB (a local database in your browser/app storage)
2. **Pre-caches the listing's images** via the service worker, so photos are stored on your device

This means you can open your starred listings and see them — with photos — even when you have no internet connection.

## What's available offline

When you're offline and open the Starred tab in the PWA:

- ✓ Business name, category, location, tagline
- ✓ Listing photos (if you starred while online)
- ✓ Contact info (phone, email, address)
- ✗ Live Open/Closed status (requires real-time clock check)
- ✗ Map and directions (requires network)
- ✗ Analytics or reviews

## Storage and limits

Starred listings are stored in IndexedDB under the `TGDDatabase` store. There's no hard cap on the number of starred businesses, but very large numbers may use significant device storage due to cached images.

## The cookie layer (non-PWA)

Even in a regular browser (non-PWA), starring uses a `starredListings` cookie to track your saved IDs. This is lighter than IndexedDB — it stores only the list of IDs, not the full listing data or images. That's why offline viewing is only available in the installed app.
