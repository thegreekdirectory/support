---
layout: article
title: "Updating the App"
description: "The Greek Directory PWA updates automatically in the background. Learn how to know when an update is ready and how to apply it immediately."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "2 min read"
slug: /article/users/updating-the-app
related:
  - title: "Hard Refresh vs. Reset"
    url: /article/users/hard-refresh-vs-reset
  - title: "PWA App Not Updating After Install"
    url: /article/users/pwa-update-issues
  - title: "What Is the Greek Directory App?"
    url: /article/users/what-is-the-pwa
---

## How updates work

The Greek Directory uses a **service worker** to manage caching and updates. When a new version of the app is published:

1. The service worker downloads the new version silently in the background while you use the current version
2. A **badge** appears on the Settings tab icon (⚙️) in the dock to signal an update is ready
3. You can apply the update immediately or wait — it will apply automatically next time you close and reopen the app

## Applying an update immediately

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Tap the Settings tab (⚙️).</strong> A badge on the icon indicates an update is waiting.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Find the update banner</strong> at the top of the Settings page and tap <strong>"Update Now."</strong>
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>The app reloads</strong> with the new version active. Your starred listings and settings are preserved.
    </div>
  </li>
</ol>

## Automatic update timing

If you don't apply the update manually, it activates automatically the next time you:

- Close the app completely and reopen it
- The app checks for updates every 5 minutes while online

## What's preserved during an update

- ✓ Starred businesses
- ✓ App settings (theme, language, dock layout)
- ✓ Default map app preference

## What gets cleared

- Old cached page versions are replaced with the new ones
- The page you were viewing reloads to its fresh version
