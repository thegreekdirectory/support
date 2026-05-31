# Sorting Listings

URL slug: `/support/users/sorting-listings`

## What this article covers
This guide explains how **sorting listings** in The Greek Directory based on the current site behavior documented in the project README.

## Key details
- The Greek Directory is a static-first directory and PWA available at `https://thegreekdirectory.org`.
- Listings/search experiences are primarily on `/`, `/listings`, `/categories`, `/map`, `/starred`, and `/settings`.
- Filters, map behavior, starred sync, language toggle, and PWA settings are client-side features powered by JavaScript modules.

## Steps for users
1. Open the relevant page from the main navigation (or the PWA dock in standalone mode).
2. Use the described controls for this topic (search, filters, map, stars, settings, or form actions).
3. Confirm the URL/query updates when applicable (for shareable filters and views).
4. If behavior seems off, hard refresh the app cache or verify network/location permissions as needed.

## Notes & troubleshooting
- Some features depend on permissions (location) or connectivity (offline fallbacks are limited).
- Starred listings use cookie + IndexedDB sync; clearing browser/app data can remove locally stored stars.
- Language switching uses GTranslate plus local/browser persistence.
