---
layout: article
title: "Using the App Offline"
description: "The installed Greek Directory PWA works without an internet connection for core pages and starred listings. Here's exactly what's available offline and what isn't."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "2 min read"
slug: /article/users/app-offline
related:
  - title: "Starring Listings in the PWA"
    url: /article/users/starring-in-pwa
  - title: "Updating the App"
    url: /article/users/updating-the-app
  - title: "What Is the Greek Directory App?"
    url: /article/users/what-is-the-pwa
---

## What works offline

When you open the installed app without an internet connection, a **service worker** serves cached content from your last online session. The following are available offline:

- ✓ **Homepage** — The main page loads from cache
- ✓ **Listings page** — The page shell loads, but live listing data requires a connection
- ✓ **Map page** — The map shell and previously cached tiles load; pins require a connection
- ✓ **Starred businesses** — Full listing data and photos for businesses you've starred (see below)
- ✓ **Settings page** — All settings are accessible and editable offline
- ✓ **Offline fallback page** — If a page isn't cached, a friendly offline notice is shown instead of a browser error

## What requires an internet connection

- ✗ Live listing search results and filters
- ✗ New or updated business data
- ✗ The map's live business pins
- ✗ Submitting a listing or edit suggestion
- ✗ Analytics tracking

## Offline starred listings

Starred businesses are the most complete offline experience. When you star a business while online, TGD's service worker pre-caches:

- The listing's full data (name, address, hours, contact info, description)
- The listing's photos and logo images

This means you can browse your starred list, read full business details, and see photos — all without a connection.

## The offline fallback page

If you navigate to a page that isn't cached, the service worker serves a built-in **offline page** rather than showing a browser "No Internet" error. The offline page confirms you're offline and links back to your starred listings.

## Reconnecting

When your connection returns, the app automatically resumes normal behavior. No reload is needed for most actions — the app detects connectivity and re-enables live features in the background.
