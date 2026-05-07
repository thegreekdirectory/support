---
layout: article
title: "Why Does My Location Look Wrong?"
description: "TGD estimates your location using your IP address, which can be inaccurate. Here's why it happens and how to get a more accurate location."
category: users
category_name: "General & Troubleshooting"
category_icon: "⚙️"
read_time: "2 min read"
slug: /article/users/wrong-location
related:
  - title: "Estimated Location vs. Precise Location"
    url: /article/users/estimated-vs-precise-location
  - title: "Location Permission & Near Me Features"
    url: /article/users/location-permission
  - title: "Filtering by Distance (Radius)"
    url: /article/users/filter-by-radius
---

## Why IP-based location is sometimes wrong

When you load the listings page, TGD estimates your location using your IP address via [ipapi.co](https://ipapi.co). This is automatic and requires no permission — but it has limitations:

- **VPN users** — If you're connected to a VPN, your IP appears to be in the VPN server's city, not your actual city. TGD will show that city's location.
- **Mobile data** — Cellular IP addresses are often registered to your carrier's regional hub city, not your actual location. You might appear to be 50+ miles away.
- **Business/campus networks** — If you're on a company or university network, the IP may resolve to the organization's registered address rather than your physical location.
- **ISP routing** — Some ISPs route traffic through distant data centers, making your IP appear to be in a different city entirely.

## How to fix it

**Grant precise location permission.** Click the **📍 Locate Me** button on the listings page or map. When your browser asks for location permission, tap **Allow**. TGD will use your actual GPS coordinates, which are accurate to within meters.

This overrides the IP estimate completely and gives you accurate radius filtering, Closest to Me sorting, and the correct location on the map.

## What if I already denied permission?

You can re-grant it in your browser settings:

- **iOS Safari:** Settings app → Safari → scroll to "Settings for Websites" → Location → thegreekdirectory.org → Allow
- **Android Chrome:** Tap the lock icon in the address bar → Permissions → Location → Allow

## The estimated location circle

On the map, a translucent blue ring shows your estimated location. Once you grant precise location permission, this ring is replaced with an accurate blue dot.
