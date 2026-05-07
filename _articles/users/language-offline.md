---
layout: article
title: "Greek Language Offline"
description: "When you're offline in the PWA app, some Greek-language UI strings are available from a local cache. Here's what's translated offline and how it works."
category: users
category_name: "Language & Accessibility"
category_icon: "🌐"
read_time: "1 min read"
slug: /article/users/language-offline
related:
  - title: "Switching Between English and Greek"
    url: /article/users/language-toggle
  - title: "Using the App Offline"
    url: /article/users/app-offline
---

## How offline translations work

When you're online and using the app in Greek, the `offline-translation.js` module stores a set of key UI strings in `localStorage`. These strings are then available to render even without a connection.

## What's translated offline

The following UI labels are available in Greek when offline:

- Home
- Listings
- Settings
- Map
- Starred
- Offline
- The Greek Directory (site name)
- Filters
- Clear All
- Loading

These strings apply to elements that have the `data-offline-i18n` attribute in the app's HTML. They cover the dock labels and key headings that need to be readable when you're browsing your starred listings offline.

## What's not translated offline

The GTranslate service requires an internet connection to translate the rest of the page's content. When offline:

- Dynamic page text (listings, descriptions, search UI) renders in English
- Only the core offline-cached strings listed above render in Greek

## No action needed

This system works automatically. As long as you've opened the app in Greek mode while online at least once, the offline strings are cached and ready. You don't need to configure anything.
