---
layout: article
title: "The Site Says I'm Offline — What Now?"
description: "If The Greek Directory is showing an offline page or not loading, here's what to check and how to get back online."
category: users
category_name: "General & Troubleshooting"
category_icon: "⚙️"
read_time: "2 min read"
slug: /article/users/site-offline
related:
  - title: "Using the App Offline"
    url: /article/users/app-offline
  - title: "Hard Refresh vs. Reset"
    url: /article/users/hard-refresh-vs-reset
  - title: "Browser & Device Compatibility"
    url: /article/users/browser-compatibility
---

## What the offline page means

If you see The Greek Directory's offline page — a message saying the site isn't available — it means the service worker couldn't reach the network and the requested page wasn't in your local cache.

This happens when:
- Your internet connection is down or very weak
- You're in airplane mode
- Your Wi-Fi or cellular data is disconnected

## What you can still do offline

Even without a connection, the installed PWA gives you access to:

- Your **starred businesses** (full data and photos, cached when you last starred them)
- **Cached core pages** from your last online session

See [Using the App Offline](/article/users/app-offline) for the full list.

## Troubleshooting steps

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Check your internet connection.</strong> Try opening another website or app. If nothing loads, the issue is your connection, not TGD.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Toggle Wi-Fi or airplane mode off and back on</strong> to force your device to reconnect.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>Once connected, reload the page.</strong> In the PWA, tap the Home tab in the dock. In a browser, pull down to refresh.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">4</span>
    <div class="art-step-body">
      <strong>If the page still shows as offline with a working connection,</strong> try a Hard Refresh from the Settings tab in the app to clear the stale cache.
    </div>
  </li>
</ol>
