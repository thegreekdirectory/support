---
layout: article
title: "Privacy & Data: What Does The Greek Directory Collect?"
description: "A plain-language overview of what data TGD stores on your device, what's tracked when you interact with listings, and how cookies are used."
category: users
category_name: "General & Troubleshooting"
category_icon: "⚙️"
read_time: "3 min read"
slug: /article/users/privacy-data
related:
  - title: "Starring and Saving Your Favorite Businesses"
    url: /article/users/starring-favorites
  - title: "Why Did My Stars Disappear?"
    url: /article/users/stars-disappeared
  - title: "Browser & Device Compatibility"
    url: /article/users/browser-compatibility
---

## Data stored on your device

TGD stores the following data locally in your browser — not on a server tied to your identity:

| Data | Where stored | What it contains |
|---|---|---|
| Starred businesses | Cookie + IndexedDB (PWA) | List of business IDs you've starred |
| Language preference | localStorage | `"en"` or `"el"` |
| App theme | localStorage | `"light"`, `"dark"`, or `"system"` |
| Dock layout | localStorage | Your custom dock order and items |
| Default map app | localStorage | Your preferred navigation app |
| Listings layout | localStorage | Grid or list view preference |
| GTranslate cookie | Cookie | `googtrans` — stores language selection for the translation widget |

All of this data stays on your device. It is not linked to an account and is not sent to TGD's servers.

## Analytics tracking on listing pages

When you visit an individual listing page, a lightweight analytics event is recorded in TGD's database. This tracks:

- **Page view** — That the listing was viewed (anonymously — no personal information)
- **Call clicks** — If you tap the Call button
- **Website clicks** — If you tap the Website button
- **Direction clicks** — If you tap Get Directions
- **Share events** — If you use the Share button (and which platform)

These events help business owners understand how their listing performs. **No personal data is collected** — just event counts and approximate timing. Your IP address is not stored.

## Your location

IP-based location estimation happens on-device via a call to [ipapi.co](https://ipapi.co). If you grant precise GPS permission, that coordinate is used only in your browser for filtering and sorting — it is not sent to TGD's servers or stored anywhere.

## No advertising

The Greek Directory does not serve ads and does not sell visitor data to advertisers. See [Anthropic's guidelines on advertising](https://thegreekdirectory.org/legal) and the [TGD Privacy Policy](https://thegreekdirectory.org/privacy) for full details.

## Cloudflare Analytics

The site uses Cloudflare Web Analytics (a privacy-friendly analytics tool) on some pages. This does not use cookies and does not track individual users across sites.
