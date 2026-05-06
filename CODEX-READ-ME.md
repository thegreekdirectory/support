# USERS SUPPORT ARTICLES — PART 1 of 3
# Search & Discovery (5 articles) + Filters & Sorting (10 articles)
#
# FORMAT FOR CODEX:
# Each article starts with <!-- ARTICLE --> and ends with <!-- /ARTICLE -->
# The filename for each article = the `slug` field's last segment + .md
# Place each file in: _articles/users/{slug-last-segment}.md
# The permalink in _config.yml should map: /articles/:path/ → /article/users/:name/
# ─────────────────────────────────────────────────────────────────────────────

<!-- ARTICLE -->
---
layout: article
title: "How to Search for a Business"
description: "Use the homepage search bar, predictive dropdown, and category chips to find Greek-owned businesses across America quickly and accurately."
category: users
category_name: "Search & Discovery"
category_icon: "🔍"
read_time: "2 min read"
slug: /article/users/how-to-search
related:
  - title: "Using Predictive Search"
    url: /article/users/predictive-search
  - title: "Using Search Filters and Sorting"
    url: /article/users/how-to-filter
  - title: "What to Do When You Can't Find a Business"
    url: /article/users/cant-find-business
---

## The homepage search bar

The fastest way to find a business is the **search bar** on the homepage at [thegreekdirectory.org](https://thegreekdirectory.org). It searches business names, taglines, categories, and locations all at once.

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Start typing in the search bar.</strong>
      After 2 characters, a predictive dropdown appears with matching businesses, categories, and cities.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Click a result or press Enter.</strong>
      Click any business to go to its listing page. Click a category or city to see all matching results. Press Enter or the Search button to run a full search.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>Refine on the listings page.</strong>
      After searching, use the filters panel on the left (desktop) or top (mobile) to narrow down results further.
    </div>
  </li>
</ol>

## Category chips

Below the search bar, the **category chips** let you jump straight to a category without typing:

- 🍽️ Restaurants → Food & Hospitality
- ⛪ Churches → Church & Religious Organization
- 💼 Professional Services
- 📚 Greek Schools → Education & Community
- 🛒 Markets → Grocery & Imports

## Searching on the listings page

The `/listings` page has its own inline search bar that filters results as you type (with a short debounce). You can combine it with any active filters.

## Keyboard shortcuts

| Key | Action |
|---|---|
| `↓` / `↑` | Navigate dropdown results |
| `Enter` | Open highlighted result or run full search |
| `Escape` | Close the dropdown |

<div class="art-callout art-callout--tip">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" stroke-linecap="round"/></svg>
  <p><strong>Tip:</strong> If you can't find a business by its exact name, try searching by category or city instead.</p>
</div>
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Using Predictive Search"
description: "Learn how the predictive search dropdown works — what it shows, how to navigate it with your keyboard, and how to get the most from it."
category: users
category_name: "Search & Discovery"
category_icon: "🔍"
read_time: "2 min read"
slug: /article/users/predictive-search
related:
  - title: "How to Search for a Business"
    url: /article/users/how-to-search
  - title: "Browsing by Category"
    url: /article/users/browsing-by-category
  - title: "Understanding Search Results"
    url: /article/users/understanding-search-results
---

## What the predictive dropdown shows

As you type in the homepage search bar, a dropdown appears after 2 characters. It shows up to three groups of results:

**Businesses** — Matched by name or tagline. Each result shows a thumbnail photo, category, and city/state. Up to 5 businesses appear.

**Categories** — Any of the 14 main categories whose names match your query. Shows the category emoji and a "Browse all businesses" subtitle.

**Locations** — City and state combinations extracted from listing data. Clicking a location filters the listings page to that state.

At the very bottom, a **"Search all listings for…"** footer link runs a full search across everything.

## Navigating with the keyboard

You can stay on the keyboard the entire time:

- Press `↓` to move down through results
- Press `↑` to move back up
- Press `Enter` to open the focused result
- Press `Escape` to dismiss the dropdown without searching

## How results are ranked

Businesses in the dropdown are ranked by how closely they match your query — name matches first, then tagline matches. Featured and Premium listings may appear higher within their match tier.

## When no results show

If your query returns no dropdown results, you'll see a "No results for…" message. Try:

- A shorter or more general search term
- The city or state name instead of a business name
- A category keyword like "restaurant" or "bakery"

Click the footer link to run a full search anyway — the listings page may still find relevant results with its broader search logic.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Browsing by Category"
description: "Use the category chips on the homepage or the /categories page to explore all Greek-owned businesses in a specific industry or type."
category: users
category_name: "Search & Discovery"
category_icon: "🔍"
read_time: "2 min read"
slug: /article/users/browsing-by-category
related:
  - title: "How to Search for a Business"
    url: /article/users/how-to-search
  - title: "Filtering by Category & Subcategory"
    url: /article/users/filter-by-category
  - title: "Understanding Search Results"
    url: /article/users/understanding-search-results
---

## The 14 main categories

Every business in The Greek Directory belongs to one of 14 categories:

| Category | Icon |
|---|---|
| Automotive & Transportation | 🚗 |
| Beauty & Health | 💅 |
| Church & Religious Organization | ⛪ |
| Cultural/Fraternal Organization | 🎭 |
| Education & Community | 📚 |
| Entertainment, Arts & Recreation | 🎨 |
| Food & Hospitality | 🍽️ |
| Grocery & Imports | 🛒 |
| Home & Construction | 🏠 |
| Industrial & Manufacturing | 🏭 |
| Pets & Veterinary | 🐾 |
| Professional & Business Services | 💼 |
| Real Estate & Development | 🏢 |
| Retail & Shopping | 🛍️ |

## Ways to browse by category

**Homepage chips** — The five most popular categories appear as quick-access buttons below the search bar. Tapping one takes you directly to the listings page pre-filtered to that category.

**Listings page filter** — On the listings page, open the filter panel and select any category from the Category section.

**Categories page** — Visit `/categories` to see all 14 categories in a visual grid. Click any to see all listings in that category, along with subcategory options.

## Subcategories

Each category has subcategories that let you drill further. For example, within **Food & Hospitality** you might find Greek Restaurant, Bakery, Catering, Coffee Shop, and more.

After selecting a category on the listings page, subcategory checkboxes appear in the filter panel. You can select multiple subcategories and choose whether a business must match **any** or **all** of them.

See [Filtering by Category & Subcategory](/article/users/filter-by-category) for more detail.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Understanding Search Results"
description: "Learn what information appears on listing cards in search results — badges, location, hours status, pricing, and how results are ranked."
category: users
category_name: "Search & Discovery"
category_icon: "🔍"
read_time: "2 min read"
slug: /article/users/understanding-search-results
related:
  - title: "How to Search for a Business"
    url: /article/users/how-to-search
  - title: "Understanding Verified, Featured & Premium Badges"
    url: /article/users/listing-badges
  - title: "Business Hours & Open/Closed Status"
    url: /article/users/business-hours-status
---

## What a listing card shows

Each result on the listings page is a **listing card** that gives you a quick overview before you click through. Cards show:

- **Cover photo** — The business's primary photo or logo
- **Badges** — VERIFIED, FEATURED, or PREMIUM status
- **Business name** with a ✓ checkmark for verified/claimed listings
- **Tagline** — A short description of the business
- **Category label** — Blue pill showing the main category
- **Open/Closed badge** — Real-time status based on saved hours
- **Location** — City and state
- **Phone number** (if available)
- **Pricing** — $ to $$$$ scale (if set)
- **Star button** — Save to your favorites

## How results are ranked

The **Default** sort uses a tiered ranking:

1. **PREMIUM** listings appear first
2. **FEATURED** listings next
3. **VERIFIED** listings follow
4. **FREE** listings fill the rest

Within each tier, listings closest to your estimated location appear higher. A consistent random seed ensures the order stays stable during your browsing session.

## Grid view vs. list view

Toggle between two layouts using the view buttons at the top right of the listings page:

- **Grid view** — Photo cards arranged in columns, great for visual browsing
- **List view** — Compact rows showing more listings at once, better for quick scanning

Your preference is saved for future visits.

## Pagination

By default, 24 listings load at a time. Scroll to the bottom and click **Load More** to see additional results. The counter at the top shows how many are displayed vs. the total matching your current filters.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "What to Do When You Can't Find a Business"
description: "If a search returns no results or misses a business you're looking for, here are the steps to try before giving up or submitting a new listing."
category: users
category_name: "Search & Discovery"
category_icon: "🔍"
read_time: "3 min read"
slug: /article/users/cant-find-business
related:
  - title: "How to Search for a Business"
    url: /article/users/how-to-search
  - title: "Browsing by Category"
    url: /article/users/browsing-by-category
  - title: "How to Submit a Business Listing"
    url: /article/users/submit-listing
---

## Step 1: Check your spelling and try a shorter query

Search works best with short, specific terms. If you searched for a full business name, try just one keyword from the name. For example, instead of "Athena's Greek Kitchen & Catering," just try "Athena."

## Step 2: Clear all active filters

Active filters on the listings page can hide results even when a business exists. Look for the filter count badge on the Filters button — if it shows a number, you have active filters. Click **Clear All** to reset them and try your search again.

## Step 3: Try searching by category or city

If the business name search fails, try browsing its category or location instead. For example, browse "Food & Hospitality" in "Chicago, IL" to see all Greek restaurants in that area.

## Step 4: Use the typo suggestion

If your search returns zero results on the listings page, a **"Did you mean…?"** suggestion may appear automatically, showing the closest matching business name. Click the suggestion to run a corrected search.

## Step 5: Check that you're searching the right type of business

Some businesses may be categorized differently than you expect. A "Greek catering company" might be listed under **Food & Hospitality** or **Professional & Business Services**. Try both.

## Step 6: The business may not be listed yet

The Greek Directory is growing every day, but not every Greek-owned business is listed yet. If you believe a business should be in the directory, you can:

- **Submit it for review** at [`/submit-listing`](https://thegreekdirectory.org/submit-listing) — our team will review and publish it.
- **Contact us** at [contact@thegreekdirectory.org](mailto:contact@thegreekdirectory.org) if you'd like to flag a missing business.

<div class="art-callout art-callout--info">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#1e40af" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" stroke-linecap="round"/></svg>
  <p>If a listing exists but has outdated or incorrect information, use the <strong>Suggest an Edit</strong> button on the listing page to flag it for our team.</p>
</div>
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "How to Filter Listings"
description: "Open the filter panel on the listings page to narrow results by category, location, hours, pricing, and more. Works on both desktop and mobile."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "2 min read"
slug: /article/users/how-to-filter
related:
  - title: "Filtering by Category & Subcategory"
    url: /article/users/filter-by-category
  - title: "Filtering by Location"
    url: /article/users/filter-by-location
  - title: "Sorting Listings"
    url: /article/users/sorting-listings
---

## Opening the filter panel

On the **listings page** (`/listings`), tap the **Filters** button to open the filter panel.

- **Desktop** — The filter panel appears as a sidebar on the left side of the page. You can also pin it open using the sidebar toggle.
- **Mobile** — The filter panel slides in from the top of the page. Scroll down through the filter options, then tap **Apply** or close to see results.

When filters are active, the **Filters** button shows a count badge (e.g., "Filters · 3") indicating how many filters you have on.

## Available filters

| Filter group | What it does |
|---|---|
| **Search** | Text search across business name, tagline, and description |
| **Category** | One of 14 main categories |
| **Subcategory** | Checkboxes within the selected category |
| **Location** | Country, state, city, or ZIP code |
| **Radius** | Miles from your location |
| **Hours** | Open Now, Closed Now, Opening Soon, Closing Soon |
| **Special** | Online Only, Coming Soon |
| **Pricing** | $ to $$$$ |

## Clearing filters

- **Clear All** — Removes every active filter at once. The button appears at the top of the filter panel when any filter is active.
- **Individual filters** — Click the `×` next to a filter chip at the top of the results to remove just that one.
- **Reload the page** — Navigating to `/listings` without any URL parameters resets everything.

## Filters in the URL

Every active filter is reflected in the page URL as query parameters (e.g., `?category=Food+%26+Hospitality&state=IL`). This means you can **bookmark or share a filtered view** — anyone opening that URL will see the same filtered results.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Filtering by Category & Subcategory"
description: "Select a main category and drill down with subcategory checkboxes to find exactly the type of Greek-owned business you're looking for."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "3 min read"
slug: /article/users/filter-by-category
related:
  - title: "Subcategory Filter Modes: Any vs. All"
    url: /article/users/subcategory-any-vs-all
  - title: "Browsing by Category"
    url: /article/users/browsing-by-category
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
---

## Selecting a main category

In the filter panel, the **Category** section shows all 14 main categories. Click one to filter — only listings in that category will show. You can only have one main category active at a time.

To clear the category filter, click the currently selected category again, or use **Clear All**.

## Using subcategories

Once you select a main category, a **Subcategory** section appears below it. This shows all the subcategories that exist within your chosen category.

For example, selecting **Food & Hospitality** might reveal subcategories like:
- Greek Restaurant
- Bakery / Pastry Shop
- Coffee Shop / Café
- Catering
- Food Truck
- Bar & Lounge

Check one or more subcategories to filter further. The filter mode (Any / All) controls how multiple selections work — see [Subcategory Filter Modes](/article/users/subcategory-any-vs-all).

## Primary subcategory

Each listing has a **primary subcategory** — the single subcategory the owner has designated as most descriptive. This is shown as a tag on the listing card. When you filter by subcategory, listings are matched against all their subcategories, not just the primary one.

## Combining with other filters

Category and subcategory filters work together with location, hours, and pricing filters. For example, you could filter for:

- Category: **Beauty & Health**
- Subcategory: **Hair Salon**
- State: **Illinois**
- Open Now: ✓

All active filters apply simultaneously.

<div class="art-callout art-callout--tip">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" stroke-linecap="round"/></svg>
  <p><strong>Tip:</strong> If results seem too narrow, check whether you've selected subcategories. Clearing subcategories while keeping the main category will show all listings in that category.</p>
</div>
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Subcategory Filter Modes: Any vs. All"
description: "When you select multiple subcategories, the filter mode controls whether listings must match at least one or every subcategory you've chosen."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "2 min read"
slug: /article/users/subcategory-any-vs-all
related:
  - title: "Filtering by Category & Subcategory"
    url: /article/users/filter-by-category
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
---

## What are filter modes?

When you check multiple subcategories in the filter panel, a small **toggle** appears letting you choose between two modes:

**Any** — A listing shows up if it has *at least one* of the selected subcategories. This gives broader results.

**All** — A listing only shows up if it has *every* selected subcategory. This gives narrower, more specific results.

## Example

Say you're browsing **Professional & Business Services** and you check:
- ☑ Law Firm
- ☑ Real Estate

**Any mode** → Shows all law firms AND all real estate agencies. If a business has either subcategory, it appears.

**All mode** → Shows only businesses that are tagged as BOTH a law firm AND a real estate agency simultaneously. This would likely return very few or no results.

## When to use each mode

Use **Any** (the default) most of the time — it finds the broadest set of businesses that fit any of your chosen types.

Use **All** only when you're looking for a business that genuinely combines multiple specialties, like a business tagged as both a Bakery and a Catering service.

## Default mode

The default mode is **Any**. It resets to Any whenever you clear your subcategory filters or change the main category.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Filtering by Location"
description: "Narrow listings to a specific country, state, city, or ZIP code using the location filters on the listings page."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "2 min read"
slug: /article/users/filter-by-location
related:
  - title: "Filtering by Distance (Radius)"
    url: /article/users/filter-by-radius
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
  - title: "Estimated Location vs. Precise Location"
    url: /article/users/estimated-vs-precise-location
---

## Location filter options

The filter panel has four location fields you can use individually or together:

**Country** — Dropdown defaulting to USA. Change this if you're looking for listings outside the US (currently rare but supported).

**State** — Dropdown of US states (or regions, if another country is selected). Filtered to states that actually have listings.

**City** — A type-ahead text field. Start typing a city name and matching options appear based on listing data.

**ZIP code** — Enter a 5-digit US ZIP to show only listings in that postal area.

## How they stack

These filters stack together. For example, selecting **State: Illinois** and **City: Chicago** shows only listings in Chicago, IL. You don't need to fill in all fields — any combination works.

## Searching by location text

On the listings page, there is also a **Location Search** field separate from the main filters. It accepts free-text input for city, state, ZIP, or full address and provides autocomplete suggestions based on listing data.

## Resetting location filters

Clear individual location fields using the `×` chip at the top of the results, or use **Clear All** in the filter panel to reset everything at once.

<div class="art-callout art-callout--info">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#1e40af" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" stroke-linecap="round"/></svg>
  <p>The <strong>Radius</strong> filter (distance from you) is a separate, more precise tool. See <a href="/article/users/filter-by-radius">Filtering by Distance</a> for details.</p>
</div>
<!-- /ARTICLE -->


<!-- ARTICLE -->
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
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Filtering by Hours"
description: "Use the Open Now, Closed Now, Opening Soon, and Closing Soon filters to find businesses based on their real-time hours status."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "2 min read"
slug: /article/users/filter-by-hours
related:
  - title: "Business Hours & Open/Closed Status"
    url: /article/users/business-hours-status
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
---

## The four time-based filters

All hour-based filters use **Central Time (America/Chicago)** as the reference timezone, regardless of where the listing is located. Business owners set their timezone, but Central Time is the system default.

| Filter | What it shows |
|---|---|
| **Open Now** | Businesses currently within their listed open hours |
| **Closed Now** | Businesses outside their listed open hours |
| **Opening Soon** | Businesses that will open within the next 60 minutes |
| **Closing Soon** | Businesses that will close within the next 60 minutes |

## How hours are evaluated

Hours are stored in 24-hour format (`HH:MM-HH:MM`) per day of the week. The filter system checks the current time against the saved hours for today.

Special values:
- **Closed** — The business is closed on that day entirely.
- **24 Hours** — The business is open all day; it's always matched by Open Now.

## Listings without saved hours

If a business hasn't set its hours, it is **excluded** from all four hour-based filters. These filters only surface businesses with confirmed hour data. You won't see "hours unknown" results when any of these filters is active.

## Using hours filters with other filters

Hour filters combine with all other filters. For example: Category → Food & Hospitality + Open Now → shows you all Greek restaurants that are currently open.

<div class="art-callout art-callout--tip">
  <svg class="art-callout-icon" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" stroke-linecap="round"/></svg>
  <p><strong>Tip:</strong> Use <strong>Opening Soon</strong> when you're heading out — it shows businesses that will be open by the time you arrive.</p>
</div>
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Filtering by Pricing"
description: "Use the pricing filter ($ to $$$$) to find businesses that match your budget. Pricing is set by the business owner as a general cost indicator."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "1 min read"
slug: /article/users/filter-by-pricing
related:
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
  - title: "Pricing Indicators on a Listing"
    url: /article/users/pricing-indicators
---

## The pricing scale

Listings can be tagged with a pricing indicator from $ to $$$$. These are set by the business owner and represent a general cost level relative to their category:

| Symbol | General meaning |
|---|---|
| **$** | Budget-friendly, inexpensive |
| **$$** | Moderate, average pricing |
| **$$$** | Above average, upscale |
| **$$$$** | Premium, fine dining / luxury |

Pricing is relative to the business's industry — a $$ restaurant and a $$ law firm represent very different actual costs.

## Using the pricing filter

In the filter panel, check one or more pricing tiers. Results show only listings that match any of the checked tiers.

Not all listings have pricing set — if no pricing filter is active, all listings appear regardless of whether they have a pricing indicator.

## Listings without pricing

Many listings don't have a pricing indicator, especially service-based businesses where cost varies widely. These listings are hidden when any pricing filter is active.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Other Filters Explained"
description: "Learn about the Online Only and Coming Soon filters — what they mean and when to use them while browsing the directory."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "2 min read"
slug: /article/users/other-filters
related:
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
  - title: "Coming Soon Listings"
    url: /article/users/coming-soon-listings
---

## Online Only

The **Online Only** filter shows businesses that have a city and state listed but no physical street address. These are businesses that operate exclusively online — such as e-commerce shops, virtual services, or remote consultants.

Use this filter when you're looking for a service you can use from anywhere, without needing to visit a physical location.

## Coming Soon

The **Coming Soon** filter shows businesses that have a "Coming Soon" badge on their listing. These are real Greek-owned businesses that are in the process of opening or haven't fully launched yet. Their listing is published so the community can discover them early.

Use this filter if you want to see what's new in the pipeline — upcoming restaurants, new shops, or newly established services.

## Combining filters

Both Online Only and Coming Soon can be combined with category, location, and other filters. For example: Category → Retail & Shopping + Online Only → shows all Greek-owned online retailers.

## Filter behavior notes

- **Online Only** and regular listings are mutually exclusive in the filter — enabling Online Only hides businesses with a street address.
- **Coming Soon** and normal listings coexist — you don't need to filter for Coming Soon to see regular listings. The filter simply adds Coming Soon businesses to your view when selected alongside other filters that might otherwise exclude them.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Sorting Listings"
description: "Switch between Default, A–Z, Closest to Me, and Random sort orders on the listings page to find businesses the way you want."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "2 min read"
slug: /article/users/sorting-listings
related:
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
  - title: "Filtering by Distance (Radius)"
    url: /article/users/filter-by-radius
  - title: "Understanding Search Results"
    url: /article/users/understanding-search-results
---

## The four sort options

Use the **Sort** dropdown near the top of the listings page to change how results are ordered.

### Default

The default sort ranks listings by:

1. **Tier priority** — PREMIUM → FEATURED → VERIFIED → FREE
2. **Proximity** — How close the business is to your estimated or precise location
3. **Seeded random** — Within the same tier and distance, a consistent random order is applied using a session-based seed

The seeded random ensures results don't reshuffle every time you change a filter — the relative order stays stable during your session.

### A–Z

Sorts all filtered listings alphabetically by business name, from A to Z. Useful when you know the name you're looking for and want to find it quickly in a long list.

### Closest to Me

Sorts by **geodesic distance** from your location, nearest first. Requires either:
- Browser location permission granted (precise GPS), or
- IP-based location estimate (city-level accuracy)

If no location is available, this sort falls back to Default.

### Random

Applies a fresh **Fisher-Yates shuffle** to the current filtered results every time you select it. Useful for discovery — you might find businesses you'd never scroll to otherwise.

## Sort and filters work together

Your sort order applies on top of your active filters. For example, sort by Closest to Me while filtering for Open Now + Food & Hospitality to find the nearest open Greek restaurant.
<!-- /ARTICLE -->


<!-- ARTICLE -->
---
layout: article
title: "Sharing or Bookmarking a Filtered View"
description: "Every filter you apply is reflected in the page URL, so you can bookmark or share a specific filtered view of the Greek Directory."
category: users
category_name: "Filters & Sorting"
category_icon: "🗂️"
read_time: "1 min read"
slug: /article/users/share-filtered-view
related:
  - title: "How to Filter Listings"
    url: /article/users/how-to-filter
  - title: "Sorting Listings"
    url: /article/users/sorting-listings
---

## Filters live in the URL

Every filter you activate on the listings page is encoded into the URL as query parameters. For example, filtering for Greek restaurants in Illinois produces a URL like:

`/listings?category=Food+%26+Hospitality&state=IL`

This means the filtered view is **fully shareable** — anyone who opens your link will see the same filtered results you do.

## How to share a filtered view

<ol class="art-steps">
  <li class="art-step">
    <span class="art-step-num">1</span>
    <div class="art-step-body">
      <strong>Set up your filters</strong> on the listings page as desired.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">2</span>
    <div class="art-step-body">
      <strong>Copy the URL</strong> from your browser's address bar.
    </div>
  </li>
  <li class="art-step">
    <span class="art-step-num">3</span>
    <div class="art-step-body">
      <strong>Paste and share</strong> via text, email, or any messaging platform.
    </div>
  </li>
</ol>

## Bookmarking

You can bookmark a filtered URL in your browser just like any other page. When you open it later, your filters will be restored automatically.

## What isn't saved in the URL

- Your **sort order** is not currently saved in the URL — it resets to Default when you share the link.
- The **starred filter** (`?starred=1`) is user-specific — starring data is stored in your browser, so sharing a starred-filter URL won't show the recipient your saved businesses.
<!-- /ARTICLE -->
