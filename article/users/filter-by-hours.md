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
