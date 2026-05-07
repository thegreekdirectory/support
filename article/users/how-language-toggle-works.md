---
layout: article
title: "How the Language Toggle Works"
description: "A look at the technical side of the English/Greek toggle — what it changes under the hood, including the GTranslate integration and localStorage preference."
category: users
category_name: "Language & Accessibility"
category_icon: "🌐"
read_time: "2 min read"
slug: /article/users/how-language-toggle-works
related:
  - title: "Switching Between English and Greek"
    url: /article/users/language-toggle
  - title: "Greek Language Offline"
    url: /article/users/language-offline
---

## What the toggle changes

When you switch languages, four things update simultaneously:

1. **`localStorage.tgd_language`** — Your preference is saved as `"en"` or `"el"` and read on every future page load
2. **The `googtrans` cookie** — This is the cookie read by GTranslate (the translation service powering the Greek translation) to know which language to render
3. **`document.documentElement.lang`** — The HTML `lang` attribute on the page updates to `"en"` or `"el"` for accessibility and SEO
4. **The GTranslate widget** — The widget's internal combo box is synced to match your selection

## GTranslate

The Greek translation is powered by **GTranslate**, a third-party translation widget. When Greek is selected, GTranslate renders translated versions of the site's static text. Business data (names, descriptions, addresses) is not translated by GTranslate — only the site UI.

## Session persistence

Your language preference is read from `localStorage` on every page load. This means:

- The correct language is applied instantly on load, before any visible flash
- Your preference persists across browser sessions as long as you don't clear site data
- If you have TGD open in multiple tabs, switching language in one tab is reflected in others on their next load (not live-synced between tabs)

## In the PWA app

The PWA app manager reads `tgd_language` from localStorage on launch and applies the language before rendering begins. Language changes from the Settings tab use the same underlying system as the header toggle — they're the same preference, just exposed in two places.
