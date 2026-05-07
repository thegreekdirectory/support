# USERS SUPPORT ARTICLES — PART 3 of 3 (FINAL)
# Remaining PWA articles (6) + Language & Accessibility (3) + Submitting a Business (5) + General & Troubleshooting (6)
# Total: 20 articles
#
# FORMAT FOR CODEX:
# Each article starts with <!-- ARTICLE --> and ends with <!-- /ARTICLE -->
# Filename = slug's last segment + .md
# Place each file in: _articles/users/{slug-last-segment}.md
# Site domain: https://support.thegreekdirectory.org
# Article URLs: /article/users/{name}/
# ─────────────────────────────────────────────────────────────────────────────


<!-- ARTICLE -->
---
layout: article
title: "Using the App Offline"
description: "The installed Greek Directory PWA works without an internet connection for core pages and starred listings. Here's exactly what's available offline and what isn't."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "2 min read"
slug: /article/users/app-offline
related:
  - title: "Starring Listings in the PWA"
    url: /article/users/starring-in-pwa
  - title: "Updating the App"
    url: /article/users/updating-the-app
  - title: "What Is the Greek Directory App?"
    url: /article/users/what-is-the-pwa
---

## What works offline

When you open the installed app without an internet connection, a **service worker** serves cached content from your last online session. The following are available offline:

- ✓ **Homepage** — The main page loads from cache
- ✓ **Listings page** — The page shell loads, but live listing data requires a connection
- ✓ **Map page** — The map shell and previously cached tiles load; pins require a connection
- ✓ **Starred businesses** — Full listing data and photos for businesses you've starred (see below)
- ✓ **Settings page** — All settings are accessible and editable offline
- ✓ **Offline fallback page** — If a page isn't cached, a friendly offline notice is shown instead of a browser error

## What requires an internet connection

- ✗ Live listing search results and filters
- ✗ New or updated business data
- ✗ The map's live business pins
- ✗ Submitting a listing or edit suggestion
- ✗ Analytics tracking

## Offline starred listings

Starred businesses are the most complete offline experience. When you star a business while online, TGD's service worker pre-caches:

- The listing's full data (name, address, hours, contact info, description)
- The listing's photos and logo images

This means you can browse your starred list, read full business details, and see photos — all without a connection.

## The offline fallback page

If you navigate to a page that isn't cached, the service worker serves a built-in **offline page** rather than showing a browser "No Internet" error. The offline page confirms you're offline and links back to your starred listings.

## Reconnecting

When your connection returns, the app automatically resumes normal behavior. No reload is needed for most actions — the app detects connectivity and re-enables live features in the background.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Dark Mode, Light Mode & System Theme"
description: "Switch between light mode, dark mode, or follow your device's system setting in the Greek Directory app's Settings tab."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "2 min read"
slug: /article/users/app-theme
related:
  - title: "Navigating with the Dock"
    url: /article/users/pwa-dock
  - title: "What Is the Greek Directory App?"
    url: /article/users/what-is-the-pwa
---

## Theme options

The Greek Directory supports three theme settings:

| Option | What it does |
|---|---|
| **Light** | Always uses the light (white background) theme |
| **Dark** | Always uses the dark (dark background) theme |
| **System** | Matches your device's current appearance setting |

## Changing the theme

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Tap the Settings tab (⚙️)</strong> in the bottom dock of the installed app.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Find the "Theme" section</strong> and tap your preferred option: Light, Dark, or System.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>The theme changes instantly</strong> — no restart required.
    </div>
  </li>
</ol>

## How dark mode works technically

Theme changes apply a CSS class to the page body:

- **Light mode** → `body.theme-light`
- **Dark mode** → `body.theme-dark`
- **System** → uses your device's `prefers-color-scheme` media query

This means the entire app — all pages, the dock, cards, and maps — updates to the chosen theme immediately.

## Dark mode on the map

When dark mode is active, the map tiles are automatically filtered and re-colored using CSS to match the dark theme. The map appears in dark tones consistent with the rest of the app.

## In a regular browser (non-PWA)

Without the installed app, the site respects your **system preference** automatically via `prefers-color-scheme`. There's no manual toggle in the regular browser experience — install the app to get manual theme control.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Auto-Hide Dock on Scroll"
description: "The dock can automatically hide when you scroll down and reappear when you scroll up — freeing up screen space while reading listings."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "1 min read"
slug: /article/users/dock-auto-hide
related:
  - title: "Navigating with the Dock"
    url: /article/users/pwa-dock
  - title: "Customizing Your Dock"
    url: /article/users/customize-dock
---

## What is auto-hide?

When **auto-hide** is enabled, the bottom dock slides out of view as you scroll down a page. When you scroll back up — or stop scrolling — the dock reappears. This gives you more vertical screen space while browsing a long list of results or reading a listing page.

## Enabling or disabling auto-hide

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Tap the Settings tab (⚙️)</strong> in the dock.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Find the "Auto-hide Dock on Scroll" toggle</strong> and switch it on or off.
    </div>
  </li>
</ol>

The setting takes effect immediately on the next scroll.

## Default state

Auto-hide is **off by default**. The dock stays visible at all times unless you enable this setting.

## Bringing the dock back when it's hidden

If the dock has hidden due to scrolling:

- Scroll back up slightly — the dock reappears
- Tap near the bottom edge of the screen — on some devices this triggers the dock to reappear
- Stop scrolling — the dock reappears after a short pause
<!-- /ARTICLE -->


<!-- ARTICLE -->
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
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Hard Refresh vs. Reset"
description: "The Settings tab has two powerful options — Hard Refresh and Reset App. Learn the difference and when to use each one."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "2 min read"
slug: /article/users/hard-refresh-vs-reset
related:
  - title: "Updating the App"
    url: /article/users/updating-the-app
  - title: "Why Did My Stars Disappear?"
    url: /article/users/stars-disappeared
  - title: "PWA App Not Updating After Install"
    url: /article/users/pwa-update-issues
---

## Hard Refresh

**Hard Refresh** clears the app's cached pages and assets, then reloads from the network. Think of it as "force-reload everything."

**What it clears:**
- Cached HTML, CSS, and JavaScript files
- Cached map tiles and images (except starred listing images)

**What it preserves:**
- ✓ Your starred businesses and their cached data
- ✓ App settings (theme, language, dock layout)
- ✓ Default map app preference

**When to use it:**
- The app feels stale or shows outdated content
- A new version seems to not be applying correctly
- Pages aren't displaying properly

**How to use it:** Settings tab (⚙️) → "Clear Cache & Reload"

## Reset App

**Reset App** is a full factory reset. It wipes all locally stored data and re-registers the service worker from scratch.

**What it clears:**
- ✓ Everything Hard Refresh clears, plus:
- All starred businesses and their cached images
- All app settings (theme resets to System, dock resets to default)
- Language preference
- Default map app preference
- All IndexedDB and localStorage data

**When to use it:**
- The app is seriously broken and Hard Refresh didn't fix it
- You want to start completely fresh
- You're handing the device to someone else

**How to use it:** Settings tab (⚙️) → "Reset App" → confirm in the dialog

<div class="art-callout art-callout--warning">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#92400e" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  <p><strong>Reset App cannot be undone.</strong> Your starred businesses will be permanently deleted from this device. Re-star them manually after resetting if you want to keep them.</p>
</div>
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Opening Links in Your Browser Instead of the App"
description: "In the installed PWA, external links automatically open in your system browser. Learn how this works and why it's designed that way."
category: users
category_name: "The PWA App"
category_icon: "📱"
read_time: "1 min read"
slug: /article/users/external-links-in-pwa
related:
  - title: "What Is the Greek Directory App?"
    url: /article/users/what-is-the-pwa
  - title: "Navigating with the Dock"
    url: /article/users/pwa-dock
---

## How external links work in the PWA

When you tap an external link in the installed Greek Directory app — such as a business's website, a social media profile, or a Google Maps link — the link opens in your **system browser** (Safari on iOS, Chrome on Android) instead of inside the app.

This is intentional. External websites are not part of the Greek Directory experience, and opening them inside the app would trap you with no easy way to navigate back.

## What counts as an external link

- Business website URLs (e.g., `https://restaurantwebsite.com`)
- Social media links (Facebook, Instagram, YouTube, etc.)
- Review site links (Google, Yelp, TripAdvisor)
- The Get Directions button (opens your map app instead of a browser)
- Any link to a domain other than `thegreekdirectory.org`

## What stays inside the app

- All navigation between pages within `thegreekdirectory.org`
- Listing pages, the map, search, categories, starred — all stay in the app

## Returning to the app after opening an external link

After the external link opens in your browser or map app, switch back to the Greek Directory app using:

- Your device's app switcher (swipe up from the bottom on iOS, or tap the square button on Android)
- The Greek Directory icon on your home screen

The app will be exactly where you left it.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Switching Between English and Greek"
description: "Toggle the site language between English and Greek (Ελληνικά) using the flag switch in the site header. Your preference is saved for future visits."
category: users
category_name: "Language & Accessibility"
category_icon: "🌐"
read_time: "2 min read"
slug: /article/users/language-toggle
related:
  - title: "How the Language Toggle Works"
    url: /article/users/how-language-toggle-works
  - title: "Greek Language Offline"
    url: /article/users/language-offline
---

## The language toggle

The site header contains a **language switch** — a small toggle showing the US flag (🇺🇸) and the Greek flag (🇬🇷). Click or tap it to switch between English and Greek.

- **US flag side** = English (default)
- **Greek flag side** = Greek (Ελληνικά)

The toggle is available in both the full desktop navigation and the mobile hamburger dropdown menu.

## How to switch languages

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Find the flag toggle</strong> in the site header (top of any page).
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Click or tap the toggle</strong> to switch to the other language. The page will briefly reload to apply the translation.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>Your preference is saved</strong> to your browser's local storage and applied automatically on future visits.
    </div>
  </li>
</ol>

## Switching in the PWA app

In the installed app, you can also switch languages from the **Settings tab** (⚙️) under the Language section. The options are English and Greek — selecting one applies the same toggle as the header switch.

## Does it translate business content?

The language toggle translates the **site interface** — navigation, buttons, labels, and static text. Business listings' names, descriptions, and other owner-entered content are not automatically translated, as they're stored as-is in the database.
<!-- /ARTICLE -->


<!-- ARTICLE -->
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
<!-- /ARTICLE -->


<!-- ARTICLE -->
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
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "How to Submit a Business Listing"
description: "If a Greek-owned business isn't in the directory yet, you can submit it for review using the public submission form at /submit-listing."
category: users
category_name: "Submitting a Business"
category_icon: "📋"
read_time: "3 min read"
slug: /article/users/submit-listing
related:
  - title: "What Happens After You Submit"
    url: /article/users/after-submission
  - title: "What Categories and Subcategories to Choose"
    url: /article/users/choosing-categories
  - title: "Submission Requirements"
    url: /article/users/submission-requirements
---

## Who can submit a listing?

Anyone can submit a Greek-owned business for review — you don't need to be the business owner, and you don't need an account. Community members are encouraged to nominate businesses they know and love.

If you are the owner, submitting gets the process started. Our team will reach out to verify ownership once the listing is under review.

## Where to submit

Go to [thegreekdirectory.org/submit-listing](https://thegreekdirectory.org/submit-listing) or click **"Add Your Business"** on the support site footer.

## What the form asks for

The submission form is divided into sections:

**Business basics (required)**
- Business name
- Category (choose one of 14)
- Subcategories (optional but helpful)
- Tagline — a one-line description (max ~75 characters)

**Location & contact (at least one required)**
- Street address, city, state, ZIP
- Phone number
- Email address
- Website URL

**About the business (optional but encouraged)**
- Description — up to 1,000 characters
- Business hours
- Pricing indicator ($–$$$$)
- Social media links

**Owner info (optional)**
- Owner name and title
- Owner contact email and phone
- Region of Greece the owner is from

**Media (optional)**
- Logo URL
- Photo URLs (up to the form's limit)
- Video URL

## Submitting the form

Fill in as many fields as you can — the more complete the submission, the faster it can be reviewed and published. Click **Submit** when done.

You'll see a confirmation message. Our team will review the submission and contact you or the owner if more information is needed.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "What Happens After You Submit a Listing"
description: "After submitting a business, our team reviews it before it goes live. Here's what to expect during the review process and when your listing will appear."
category: users
category_name: "Submitting a Business"
category_icon: "📋"
read_time: "2 min read"
slug: /article/users/after-submission
related:
  - title: "How to Submit a Business Listing"
    url: /article/users/submit-listing
  - title: "Submission Requirements"
    url: /article/users/submission-requirements
---

## The review process

All submissions go into a review queue. Our team checks each submission manually before publishing it. The process typically works like this:

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Submission received.</strong>
      Your form data is stored securely and added to the review queue. You'll see a confirmation on screen.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Team review.</strong>
      Our team verifies that the business is Greek-owned, checks the information for accuracy, assigns any missing categories, and may look up the address to add GPS coordinates.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>Approval and publishing.</strong>
      Once approved, a dedicated listing page is generated and published at <span class="art-code">thegreekdirectory.org/listing/[slug]</span>. The listing appears in search results immediately.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">4</span>
    <div class="art-step-body">
      <strong>Owner notification (if owner info was included).</strong>
      If you submitted owner contact details, we'll send a confirmation key to the owner so they can claim the listing and manage it through the Business Portal.
    </div>
  </li>
</ol>

## How long does it take?

Review times vary based on submission volume. Most submissions are reviewed within a few business days. Complex submissions (missing information, unclear ownership) may take longer.

## Can I check the status of my submission?

There's currently no self-serve status tracker for submissions. If you haven't seen the listing appear after 5 business days, [contact us](mailto:contact@thegreekdirectory.org) with the business name.

## What if the submission is denied?

Submissions may be declined if:
- The business cannot be confirmed as Greek-owned
- The information is incomplete or unverifiable
- A duplicate listing already exists

Our team may reach out to request more information before declining.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Choosing the Right Category & Subcategories"
description: "Picking the right category and subcategories for a submission helps visitors find the business. Here's guidance on making the best choice."
category: users
category_name: "Submitting a Business"
category_icon: "📋"
read_time: "2 min read"
slug: /article/users/choosing-categories
related:
  - title: "How to Submit a Business Listing"
    url: /article/users/submit-listing
  - title: "Filtering by Category & Subcategory"
    url: /article/users/filter-by-category
---

## Pick the primary category first

The main category is the most important classification. Choose the one that best describes the business's **primary activity**. If a business does multiple things (e.g., a restaurant that also does catering), choose the dominant one.

## Quick category guide

| If the business is… | Choose this category |
|---|---|
| A restaurant, café, bar, or catering company | Food & Hospitality |
| A Greek Orthodox church or religious org | Church & Religious Organization |
| A law firm, accounting firm, or consultant | Professional & Business Services |
| A Greek school, tutoring, or cultural program | Education & Community |
| A grocery store or specialty food importer | Grocery & Imports |
| A hair salon, spa, or medical practice | Beauty & Health |
| A real estate agency or developer | Real Estate & Development |
| A clothing, gift, or specialty retailer | Retail & Shopping |
| A car dealership, mechanic, or taxi service | Automotive & Transportation |
| A construction company or contractor | Home & Construction |
| A theater, museum, or sports club | Entertainment, Arts & Recreation |
| A fraternal organization or cultural society | Cultural/Fraternal Organization |
| A veterinarian or pet groomer | Pets & Veterinary |
| A manufacturer or industrial supplier | Industrial & Manufacturing |

## Adding subcategories

After choosing the main category, add as many relevant subcategories as apply. Subcategories help visitors filter more precisely. For example, for a Greek restaurant you might add: **Greek Restaurant**, **Dine-In**, **Takeout**, **Family-Friendly**.

Don't over-tag — only add subcategories that genuinely describe the business. Our team may remove subcategories that don't fit during the review process.

## What if no category fits perfectly?

Choose the closest match. Our team can adjust categories during review. Include a note in the description explaining what the business does if it's unusual or spans multiple categories.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Submission Requirements"
description: "What information is required vs. optional when submitting a business listing, and tips for making your submission as strong as possible."
category: users
category_name: "Submitting a Business"
category_icon: "📋"
read_time: "2 min read"
slug: /article/users/submission-requirements
related:
  - title: "How to Submit a Business Listing"
    url: /article/users/submit-listing
  - title: "What Happens After You Submit"
    url: /article/users/after-submission
---

## Required fields

Only a few fields are truly required to submit:

- **Business name** — The official name of the business
- **Category** — One of the 14 main categories
- **At least one contact method** — Phone number, email, or website URL

Everything else is optional, but the more you provide, the better the listing will look and the faster it will be approved.

## Strongly recommended

While not technically required, these fields significantly improve the listing's usefulness:

- **Address** — Enables the map pin and distance-based filtering
- **Business hours** — Enables the Open/Closed badge and hour-based filters
- **Tagline** — Appears on listing cards in search results (keep it under 75 characters)
- **Description** — Helps visitors understand what makes this business unique
- **Logo or photo URL** — A visual makes the card much more appealing

## Tips for a strong submission

**Use the business's official name** — Exactly as it appears on signage or their website, including any "The" or "LLC."

**Double-check the phone number** — Include the area code. US numbers should be in (XXX) XXX-XXXX format; the system will convert it.

**Paste the full website URL** — Include `https://` at the start (e.g., `https://mybusiness.com`).

**For photos** — Link to images already hosted online (the business's website, Google Maps photos, or their social media). Don't link to images that require a login to view.

**Be honest about what you know** — If you're not certain of the hours or exact address, leave those fields blank rather than guessing. Our team can fill in gaps during review.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Can I Submit a Business I Don't Own?"
description: "Yes — anyone can submit a Greek-owned business to the directory. You don't need to be the owner. Here's how it works and what happens next."
category: users
category_name: "Submitting a Business"
category_icon: "📋"
read_time: "1 min read"
slug: /article/users/submit-others-business
related:
  - title: "How to Submit a Business Listing"
    url: /article/users/submit-listing
  - title: "What Happens After You Submit"
    url: /article/users/after-submission
---

## Yes, community submissions are welcome

You don't need to own or work for a business to submit it. Community members submitting businesses they know and love is one of the main ways the directory grows.

## What to do as a non-owner submitter

- Fill in everything you know about the business — name, category, location, hours, website
- Leave the **Owner Info** section blank if you don't know the owner personally
- Add a note in the description if there's something specific our team should know

## What happens with the owner

Once the listing is approved and published, our team may independently contact the business owner to let them know they're listed and offer them the opportunity to **claim the listing** and manage it through the Business Portal.

If you do know the owner and have their contact info, you can include it in the Owner Info section of the form to speed this up.

## Accuracy responsibility

Please only submit information you're reasonably confident is correct — name, address, phone number, website. Incorrect submissions slow down the review process and may lead to a listing being published with wrong information.

If you're unsure about a detail, leave that field blank. Our team can verify and fill in missing information.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Why Is a Business Not Showing Up in Search?"
description: "If you searched for a business and can't find it, here are the most common reasons and how to check each one."
category: users
category_name: "General & Troubleshooting"
category_icon: "⚙️"
read_time: "3 min read"
slug: /article/users/business-not-showing
related:
  - title: "What to Do When You Can't Find a Business"
    url: /article/users/cant-find-business
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
  - title: "How to Submit a Business Listing"
    url: /article/users/submit-listing
---

## Reason 1: Active filters are hiding it

The most common cause. If you have category, location, hours, or pricing filters active, they may be excluding the business from results even if it exists in the directory.

**Fix:** Click **Clear All** in the filter panel to reset all filters, then search again.

## Reason 2: The business isn't listed yet

Not every Greek-owned business is in the directory. If the business was never submitted or hasn't been reviewed yet, it won't appear.

**Fix:** [Submit the business](/article/users/submit-listing) for review.

## Reason 3: The listing isn't visible yet

New listings go through a review process before being made publicly visible. A listing may exist in our system but not yet be published.

**Fix:** Wait a few business days after submission. If it still doesn't appear, [contact us](mailto:contact@thegreekdirectory.org).

## Reason 4: Spelling or name variation

The business may be listed under a slightly different name — a shortened version, a name without "The," or an alternate spelling.

**Fix:** Try a shorter or different version of the name. Search by category and city instead.

## Reason 5: The "Open Now" or hours filter is active

If you have **Open Now** selected, businesses without saved hours won't appear — even if they're open.

**Fix:** Remove the Open Now filter and search again.

## Reason 6: The business is outside your search scope

If a state or city filter is active, businesses in other locations won't show.

**Fix:** Clear the location filters and search again.

## Still can't find it?

[Contact us](mailto:contact@thegreekdirectory.org) with the business name and we'll look into it directly.
<!-- /ARTICLE -->


<!-- ARTICLE -->
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
<!-- /ARTICLE -->


<!-- ARTICLE -->
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
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Browser & Device Compatibility"
description: "The Greek Directory works on all modern browsers and devices. Here's a breakdown of supported environments and what to do if something doesn't work."
category: users
category_name: "General & Troubleshooting"
category_icon: "⚙️"
read_time: "2 min read"
slug: /article/users/browser-compatibility
related:
  - title: "The Site Isn't Loading or Displaying Correctly"
    url: /article/users/site-loading-issues
  - title: "Installing on iPhone (iOS)"
    url: /article/users/install-ios
  - title: "Installing on Android"
    url: /article/users/install-android
---

## Supported browsers

The Greek Directory works on all modern browsers. The experience is fully supported on:

| Browser | Minimum version |
|---|---|
| Chrome | 90+ |
| Safari | 14+ |
| Firefox | 88+ |
| Edge | 90+ |
| Samsung Internet | 14+ |
| Opera | 76+ |

Internet Explorer is **not supported**.

## PWA support

The installable PWA experience is supported on:

| Platform | Browser required |
|---|---|
| iPhone / iPad (iOS) | Safari only |
| Android | Chrome (recommended), Edge, Samsung Internet |
| Windows | Chrome or Edge |
| macOS | Chrome, Edge, or Safari 17+ |

## JavaScript requirement

The Greek Directory requires JavaScript. If JavaScript is disabled in your browser, a notice will appear asking you to enable it. The directory cannot function without JavaScript enabled.

## What to do if something looks broken

1. **Update your browser** — An outdated browser is the most common cause of display issues. Check for updates in your browser's settings.
2. **Disable extensions** — Ad blockers or privacy extensions sometimes interfere with the search bar, map, or search dropdown. Try disabling them temporarily.
3. **Clear your cache** — Stale cached files can cause display issues. In your browser settings, clear cached files and reload.
4. **Try a different browser** — If the issue persists, try opening the site in a different browser to see if it's browser-specific.
5. **Contact us** — If none of the above helps, [email our team](mailto:contact@thegreekdirectory.org) with a description of the issue and your browser/device.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "How to Report Incorrect Business Information"
description: "If a listing has wrong or outdated information, use the Suggest an Edit button on the listing page to flag it for our team."
category: users
category_name: "General & Troubleshooting"
category_icon: "⚙️"
read_time: "1 min read"
slug: /article/users/report-incorrect-info
related:
  - title: "Suggesting an Edit to a Listing"
    url: /article/users/suggesting-an-edit
  - title: "How to Read a Business Listing Page"
    url: /article/users/reading-a-listing
---

## When to report

Report a listing if you notice:

- Wrong phone number, address, or website
- Outdated or incorrect hours
- A business that has permanently closed but is still listed as active
- A duplicate listing for the same business
- Incorrect business name or category
- Missing important information you know is accurate

## How to report

The quickest way is the **Suggest an Edit** button at the bottom of any listing page.

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Open the listing page</strong> for the business with the issue.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Scroll to the bottom</strong> and tap <strong>"Suggest an Edit."</strong>
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>Describe what's wrong</strong> and, if possible, provide a source for the correct information (the business's own website is best).
    </div>
  </li>
</ol>

You can also report issues by emailing [contact@thegreekdirectory.org](mailto:contact@thegreekdirectory.org) directly with the business name and a description of what needs to be corrected.

Our team reviews all reports and applies corrections manually. We may follow up if we need more information.
<!-- /ARTICLE -->


<!-- ARTICLE -->
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
<!-- /ARTICLE -->
