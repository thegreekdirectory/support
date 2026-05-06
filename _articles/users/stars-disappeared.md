---
layout: article
title: "Why Did My Stars Disappear?"
description: "If your starred businesses are gone, the most likely cause is cleared browser data. Here's why it happens and what you can do."
category: users
category_name: "Starring & Favorites"
category_icon: "⭐"
read_time: "2 min read"
slug: /article/users/stars-disappeared
related:
  - title: "How to Star a Business"
    url: /article/users/how-to-star
  - title: "Starring Listings in the PWA"
    url: /article/users/starring-in-pwa
  - title: "Viewing Your Starred Listings"
    url: /article/users/viewing-starred
---

## Why stars disappear

Starred businesses are stored **locally in your browser** — in a cookie (`starredListings`) and, if you use the PWA, in IndexedDB. They are not stored in a server account tied to your identity. This means:

### Cause 1: You cleared your browser data

If you cleared cookies, browsing history, or "all site data" in your browser settings, your starred listings were deleted along with everything else. This is the most common cause.

### Cause 2: You're on a different browser

Stars saved in Chrome won't appear in Safari, and vice versa — even on the same device. Each browser has its own independent cookie and storage.

### Cause 3: You're on a different device

Stars don't sync across devices automatically. A business starred on your phone won't appear on your laptop.

### Cause 4: Cookie expiry or restriction

Some browsers are set to block or regularly clear third-party cookies and site data. If your browser privacy settings are aggressive, stars may be lost when you close the browser.

### Cause 5: You reset the PWA app

Using the **Reset App** option in the PWA Settings clears all local data including starred businesses.

## How to prevent losing stars in the future

**Install the PWA app** — IndexedDB data in installed apps is less likely to be cleared by routine browser data sweeps compared to regular browser cookies.

**Don't use "Clear all browsing data"** without understanding that it will remove your starred businesses.

**Star businesses across devices** — Since there's no sync, re-star important businesses on each device you use.
