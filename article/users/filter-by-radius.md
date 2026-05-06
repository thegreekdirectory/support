---
layout: article
title: "Filtering by Distance (Radius)"
description: "Use the radius filter to show only listings within a set number of miles from your current location. Requires location permission or IP-based estimation."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "3 min read"
slug: /article/users/filter-by-radius
related:
  - title: "Filtering by Location"
    url: /article/users/filter-by-location
  - title: "Estimated Location vs. Precise Location"
    url: /article/users/estimated-vs-precise-location
  - title: "Sorting Listings"
    url: /article/users/sorting-listings
---

## What is the radius filter?

The radius filter shows only listings within a specified number of miles from your current location. You can set it from 1 mile up to 100 miles using a slider in the filter panel.

## How your location is determined

The radius filter needs to know where you are. TGD uses two methods:

**IP-based estimation (automatic)** — When you load the listings page, TGD estimates your location using your IP address. This is city-level accuracy — good enough to center the map and bias nearby results, but not precise enough for a tight radius filter like 5 miles.

**Precise geolocation (browser permission)** — Click the **📍 Locate Me** button on the map or the listings page. Your browser will ask for location permission. If you allow it, TGD gets your exact GPS coordinates. This makes the radius filter highly accurate.

## Using the radius filter

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Click the Locate Me button</strong> (📍) for accurate results, or proceed with IP-estimated location.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Open the filter panel</strong> and find the Radius slider.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>Drag the slider</strong> to your desired radius. Results update immediately.
    </div>
  </li>
</ol>

<div class="art-callout art-callout--warning">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#92400e" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  <p>The radius filter only works for listings that have GPS coordinates saved. A small number of listings may not appear in radius results if their address hasn't been geocoded yet.</p>
</div>

## Combining radius with other filters

The radius filter stacks with all other filters. For example, you can filter for open Greek restaurants within 10 miles of your location simultaneously.
