---
layout: article
title: "Location Permission & Near Me Features"
description: "Learn what happens when you allow or deny location access, how IP-based location estimation works, and which features require precise location."
category: users
category_name: "Maps & Directions"
category_icon: "🗺️"
read_time: "2 min read"
slug: /article/users/location-permission
related:
  - title: "Filtering by Distance (Radius)"
    url: /article/users/filter-by-radius
  - title: "Sorting Listings"
    url: /article/users/sorting-listings
  - title: "Estimated Location vs. Precise Location"
    url: /article/users/estimated-vs-precise-location
---

## Why TGD uses your location

Location data helps TGD:

- Show nearby businesses higher in the default sort
- Center the map on your area automatically
- Enable the **radius filter** (distance-based filtering)
- Enable **Closest to Me** sort order

## IP-based estimation (no permission needed)

When you visit the listings page, TGD automatically estimates your location using your IP address. This requires no permission and happens invisibly. It gives a **city-level** estimate — accurate enough to bias nearby results and center the map on your city, but not precise enough for tight radius filtering.

You'll see an estimated-location circle on the map (a translucent ring) showing the approximate area.

## Precise location (browser permission)

For exact distance features, TGD requests your browser's GPS location. A permission prompt appears from your browser when you:

- Click the **📍 Locate Me** button on the map or listings page
- Use the radius filter for the first time

**Allow** → TGD gets your exact coordinates. The map centers precisely on you, the estimated-location circle is replaced with an accurate marker, and radius filtering becomes highly precise.

**Deny** → TGD falls back to the IP estimate. Radius filtering still works but is less accurate.

## Regranting permission after denying

If you denied location permission and want to re-enable it:

- **Chrome / Android:** Settings → Privacy and security → Site settings → Location → Find thegreekdirectory.org → Allow
- **Safari / iOS:** Settings app → Safari → Location → thegreekdirectory.org → Allow

## Privacy

Your location is only used on-device for filtering and sorting. It is not stored, sent to a server, or tracked.
