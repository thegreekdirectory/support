---
layout: article
title: "Starred Listings Across Multiple Tabs"
description: "When you star or unstar a business, all open TGD tabs update automatically. Here's how cross-tab syncing works."
category: users
category_name: "Starring & Favorites"
category_icon: "⭐"
read_time: "1 min read"
slug: /article/users/starred-across-tabs
related:
  - title: "How to Star a Business"
    url: /article/users/how-to-star
  - title: "Unstarring a Business"
    url: /article/users/unstarring
  - title: "Why Did My Stars Disappear?"
    url: /article/users/stars-disappeared
---

## How cross-tab sync works

TGD uses the browser's built-in `localStorage` storage event to keep star states synchronized across tabs. When you star or unstar a business in one tab:

1. The star state is written to `localStorage`
2. All other open TGD tabs receive the storage event automatically
3. Each tab updates the star icon for that business immediately — no refresh needed

This happens instantly and requires no server communication. It works as long as all tabs are in the same browser on the same device.

## What syncs and what doesn't

**Does sync across tabs:**
- Star / unstar actions
- The starred count in the header

**Does NOT sync:**
- Across different browsers (e.g., Chrome and Safari on the same computer)
- Across different devices
- Across different user profiles in the same browser

## Syncing across devices

There is currently no account-based sync for starred businesses. Stars are stored locally in your browser cookie and (in the PWA) in your device's IndexedDB. They exist only on the device where you starred them.

For the most seamless experience, install the PWA app on each device you use — your starred data stays available offline on each device independently.
