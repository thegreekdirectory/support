// js/support.js
// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   SUPPORT ARTICLES DATA
═══════════════════════════════════════ */

const SUPPORT_CATEGORIES = [
    {
        id: 'getting-started',
        name: 'Getting Started',
        icon: '🚀',
        description: 'New to TGD? Start here.',
        color: '#2563eb',
        bg: '#eff6ff',
        fg: '#1d4ed8',
    },
    {
        id: 'business-owners',
        name: 'Business Owners',
        icon: '🏢',
        description: 'Claim and manage your listing.',
        color: '#d97706',
        bg: '#fef3c7',
        fg: '#92400e',
    },
    {
        id: 'managing-listing',
        name: 'Managing Your Listing',
        icon: '📋',
        description: 'Edit, update, and optimize.',
        color: '#059669',
        bg: '#d1fae5',
        fg: '#065f46',
    },
    {
        id: 'plans-billing',
        name: 'Plans & Tiers',
        icon: '⭐',
        description: 'FREE, FEATURED, PREMIUM.',
        color: '#7c3aed',
        bg: '#ede9fe',
        fg: '#6b21a8',
    },
    {
        id: 'technical',
        name: 'Technical Help',
        icon: '🔧',
        description: 'Troubleshooting common issues.',
        color: '#dc2626',
        bg: '#fee2e2',
        fg: '#991b1b',
    },
    {
        id: 'account',
        name: 'Account & Contact',
        icon: '👤',
        description: 'Account settings and support.',
        color: '#0891b2',
        bg: '#e0f2fe',
        fg: '#0e7490',
    },
];

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

const SUPPORT_ARTICLES = [
    // ── Getting Started ─────────────────────────────────────────
    {
        id: 'gs-01',
        category: 'getting-started',
        title: 'Welcome to The Greek Directory',
        excerpt: 'Learn what The Greek Directory is, who it\'s for, and how to get the most out of the platform as a visitor or business owner.',
        slug: 'article/users/welcome-to-tgd',
        readTime: '3 min read',
        popular: true,
    },
    {
        id: 'gs-02',
        category: 'getting-started',
        title: 'How to search for a business',
        excerpt: 'Use the search bar, filters, and category browser to find exactly the Greek-owned business you\'re looking for, anywhere in the US.',
        slug: 'article/users/how-to-search',
        readTime: '2 min read',
        popular: true,
    },
    {
        id: 'gs-03',
        category: 'getting-started',
        title: 'Using the map view',
        excerpt: 'The map view lets you visually explore businesses near you. Learn how to use the interactive map, clusters, and location filters.',
        slug: 'article/users/using-map-view',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'gs-04',
        category: 'getting-started',
        title: 'Understanding listing tiers',
        excerpt: 'Listings on TGD come in four tiers: FREE, VERIFIED, FEATURED, and PREMIUM. Each tier unlocks additional features and visibility.',
        slug: 'article/users/listing-tiers',
        readTime: '4 min read',
        popular: false,
    },
    {
        id: 'gs-05',
        category: 'getting-started',
        title: 'Using search filters and sorting',
        excerpt: 'Narrow down listings by category, subcategory, location, hours, pricing, and more with our advanced filter panel.',
        slug: 'article/users/search-filters',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'gs-06',
        category: 'getting-started',
        title: 'Starring and saving your favorite businesses',
        excerpt: 'Tap the star icon on any listing to save it. Access your saved businesses any time from the Starred tab in the menu.',
        slug: 'article/users/starring-favorites',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'gs-07',
        category: 'getting-started',
        title: 'Installing The Greek Directory as an app (PWA)',
        excerpt: 'Install TGD on your iPhone or Android home screen for a native app experience with offline support and a bottom navigation dock.',
        slug: 'article/users/install-pwa',
        readTime: '4 min read',
        popular: false,
    },

    // ── Business Owners ─────────────────────────────────────────
    {
        id: 'bo-01',
        category: 'business-owners',
        title: 'How to claim your business listing',
        excerpt: 'If your business is already in the directory, you can claim it by verifying your identity with the confirmation key provided by our team.',
        slug: 'article/users/claim-listing',
        readTime: '4 min read',
        popular: true,
    },
    {
        id: 'bo-02',
        category: 'business-owners',
        title: 'Creating a business owner account',
        excerpt: 'Step-by-step guide to signing up as a business owner: find your listing, enter your confirmation key, and set up your account.',
        slug: 'article/users/create-account',
        readTime: '3 min read',
        popular: true,
    },
    {
        id: 'bo-03',
        category: 'business-owners',
        title: 'What is the confirmation key?',
        excerpt: 'The confirmation key is a unique 3-word code assigned to your listing by our team. It is used to verify ownership when you sign up.',
        slug: 'article/users/confirmation-key',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'bo-04',
        category: 'business-owners',
        title: 'Logging in to the business portal',
        excerpt: 'Access the Business Portal at thegreekdirectory.org/business using your email and password. Learn how sessions work and what to do if you\'re locked out.',
        slug: 'article/users/business-portal-login',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'bo-05',
        category: 'business-owners',
        title: 'Submitting a new listing for review',
        excerpt: 'Don\'t see your business on TGD? Submit it for review using our public submission form. Our team reviews all submissions before publishing.',
        slug: 'article/users/submit-listing',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'bo-06',
        category: 'business-owners',
        title: 'How to reset your password',
        excerpt: 'Forgot your business portal password? Use the "Forgot password" link on the sign-in page to receive a reset email.',
        slug: 'article/users/reset-password',
        readTime: '2 min read',
        popular: true,
    },

    // ── Managing Listing ─────────────────────────────────────────
    {
        id: 'ml-01',
        category: 'managing-listing',
        title: 'Editing your business information',
        excerpt: 'Update your business name, address, phone number, website, tagline, and description from the Edit tab in your business portal dashboard.',
        slug: 'article/users/editing-business-info',
        readTime: '3 min read',
        popular: true,
    },
    {
        id: 'ml-02',
        category: 'managing-listing',
        title: 'Uploading photos and your logo',
        excerpt: 'Learn how to upload a logo and photos to your listing. Tips on image sizes, formats, and how many photos each tier supports.',
        slug: 'article/users/uploading-photos',
        readTime: '3 min read',
        popular: true,
    },
    {
        id: 'ml-03',
        category: 'managing-listing',
        title: 'Setting your business hours',
        excerpt: 'Add your hours of operation for each day of the week. You can mark individual days as Closed or set 24 Hours for always-open businesses.',
        slug: 'article/users/business-hours',
        readTime: '3 min read',
        popular: true,
    },
    {
        id: 'ml-04',
        category: 'managing-listing',
        title: 'Adding social media links',
        excerpt: 'Link your Facebook, Instagram, YouTube, TikTok, LinkedIn, Twitter, and up to 3 custom social profiles from the Edit tab.',
        slug: 'article/users/social-media-links',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'ml-05',
        category: 'managing-listing',
        title: 'Adding custom call-to-action buttons',
        excerpt: 'FEATURED and PREMIUM listings can add custom CTA buttons (e.g., "Book a Table", "Order Online") that appear prominently on your listing page.',
        slug: 'article/users/custom-cta-buttons',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'ml-06',
        category: 'managing-listing',
        title: 'Selecting categories and subcategories',
        excerpt: 'Choose the best category and subcategories for your business to make it easier for customers to find you in the directory.',
        slug: 'article/users/categories-subcategories',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'ml-07',
        category: 'managing-listing',
        title: 'Adding review site links',
        excerpt: 'Link your Google, Yelp, and TripAdvisor review pages to your listing. Once set by an admin, review links can only be changed by contacting support.',
        slug: 'article/users/review-links',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'ml-08',
        category: 'managing-listing',
        title: 'Viewing your listing analytics',
        excerpt: 'Track views, call clicks, website visits, direction requests, and share events from the Analytics tab in your business portal.',
        slug: 'article/users/listing-analytics',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'ml-09',
        category: 'managing-listing',
        title: 'Adding additional info and details',
        excerpt: 'Use the Additional Info section to add up to 5 custom label/value pairs — like Cuisine Type, Parking, Accessibility features, and more.',
        slug: 'article/users/additional-info',
        readTime: '2 min read',
        popular: false,
    },

    // ── Plans & Tiers ─────────────────────────────────────────
    {
        id: 'pb-01',
        category: 'plans-billing',
        title: 'Understanding the four listing tiers',
        excerpt: 'Compare FREE, VERIFIED, FEATURED, and PREMIUM tiers side-by-side: photos, videos, analytics, badges, and priority placement.',
        slug: 'article/users/tier-comparison',
        readTime: '4 min read',
        popular: false,
    },
    {
        id: 'pb-02',
        category: 'plans-billing',
        title: 'What does "Verified" mean?',
        excerpt: 'A Verified badge signals to visitors that this listing has been reviewed and confirmed by The Greek Directory team.',
        slug: 'article/users/what-is-verified',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'pb-03',
        category: 'plans-billing',
        title: 'What does "Featured" mean?',
        excerpt: 'Featured listings appear at the top of search results and on the homepage. Learn how to get your business featured.',
        slug: 'article/users/what-is-featured',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'pb-04',
        category: 'plans-billing',
        title: 'How to upgrade your listing tier',
        excerpt: 'Interested in upgrading from FREE to VERIFIED, FEATURED, or PREMIUM? Contact us to learn about availability and options.',
        slug: 'article/users/upgrade-tier',
        readTime: '2 min read',
        popular: false,
    },

    // ── Technical ─────────────────────────────────────────
    {
        id: 'tech-01',
        category: 'technical',
        title: 'Images aren\'t uploading — what to do',
        excerpt: 'If your photo or logo upload fails, check your file size (max 10MB), file format (JPG, PNG, WEBP), and internet connection.',
        slug: 'article/users/image-upload-issues',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'tech-02',
        category: 'technical',
        title: 'I can\'t log in to my account',
        excerpt: 'Troubleshoot login issues: wrong email, forgotten password, account not yet created, or browser cache problems.',
        slug: 'article/users/cant-login',
        readTime: '3 min read',
        popular: true,
    },
    {
        id: 'tech-03',
        category: 'technical',
        title: 'The map isn\'t showing my business location',
        excerpt: 'Your listing needs a valid street address to appear on the map. Learn how to update your address and trigger re-geocoding.',
        slug: 'article/users/map-location-missing',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'tech-04',
        category: 'technical',
        title: 'My listing changes aren\'t showing up',
        excerpt: 'Changes made in the business portal are typically reflected within a few minutes. Learn what to do if updates aren\'t appearing.',
        slug: 'article/users/changes-not-showing',
        readTime: '3 min read',
        popular: false,
    },
    {
        id: 'tech-05',
        category: 'technical',
        title: 'The site isn\'t loading or displaying correctly',
        excerpt: 'Steps to fix display issues: clear your browser cache, disable extensions, or try a different browser.',
        slug: 'article/users/site-loading-issues',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'tech-06',
        category: 'technical',
        title: 'PWA app not updating after install',
        excerpt: 'If your installed PWA is showing outdated content, try clearing the app cache from the Settings tab or reinstalling the app.',
        slug: 'article/users/pwa-update-issues',
        readTime: '2 min read',
        popular: false,
    },

    // ── Account ─────────────────────────────────────────
    {
        id: 'ac-01',
        category: 'account',
        title: 'How to contact support',
        excerpt: 'Reach our team by email at contact@thegreekdirectory.org. We typically respond within 1-2 business days.',
        slug: 'article/users/contact-support',
        readTime: '1 min read',
        popular: false,
    },
    {
        id: 'ac-02',
        category: 'account',
        title: 'Reporting an incorrect or duplicate listing',
        excerpt: 'Found a listing with wrong information, or a duplicate entry? Use the "Suggest an Edit" button on the listing page or contact us directly.',
        slug: 'article/users/report-listing',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'ac-03',
        category: 'account',
        title: 'Changing your owner contact information',
        excerpt: 'Update your visible contact details (name, title, phone, email) from the Settings tab in the business portal.',
        slug: 'article/users/change-contact-info',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'ac-04',
        category: 'account',
        title: 'Privacy: controlling what\'s visible on your listing',
        excerpt: 'Toggle visibility for your owner name, email, and phone number. Visitors will only see the information you choose to display.',
        slug: 'article/users/privacy-visibility',
        readTime: '2 min read',
        popular: false,
    },
    {
        id: 'ac-05',
        category: 'account',
        title: 'Requesting listing removal',
        excerpt: 'If you\'d like your business removed from the directory, contact us with your business name and the email address on file.',
        slug: 'article/users/request-removal',
        readTime: '2 min read',
        popular: false,
    },
];

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */

let currentCategory = 'all';
let currentSearch   = '';
let searchTimer     = null;

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFilterBar();
    renderArticles('all');
    setupSearch();

    // Check URL hash for direct category linking: support#business-owners
    const hash = location.hash.replace('#', '');
    if (hash && SUPPORT_CATEGORIES.find(c => c.id === hash)) {
        filterByCategory(hash);
        document.getElementById('articlesSection')?.scrollIntoView({ behavior: 'smooth' });
    }
});

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   RENDER CATEGORIES
═══════════════════════════════════════ */

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    grid.innerHTML = SUPPORT_CATEGORIES.map(cat => {
        const count = SUPPORT_ARTICLES.filter(a => a.category === cat.id).length;
        return `
            <button
                class="support-cat-card"
                data-cat="${cat.id}"
                style="--cat-color:${cat.color};--cat-bg:${cat.bg};--cat-fg:${cat.fg};"
                onclick="filterByCategory('${cat.id}', this)"
                aria-label="Browse ${cat.name} articles"
            >
                <div class="support-cat-icon" style="background:${cat.bg};">${cat.icon}</div>
                <div>
                    <p class="support-cat-name">${cat.name}</p>
                    <p class="support-cat-count">${count} article${count !== 1 ? 's' : ''}</p>
                </div>
            </button>`;
    }).join('');
}

/* ═══════════════════════════════════════
   RENDER FILTER BAR
═══════════════════════════════════════ */

function renderFilterBar() {
    const bar = document.getElementById('supportFilterBar');
    if (!bar) return;

    const catBtns = SUPPORT_CATEGORIES.map(cat => `
        <button
            class="support-filter-btn"
            data-cat="${cat.id}"
            onclick="filterByCategory('${cat.id}', this)"
        >${cat.icon} ${cat.name}</button>
    `).join('');

    bar.innerHTML = `
        <button class="support-filter-btn active" data-cat="all" onclick="filterByCategory('all', this)">All Articles</button>
        ${catBtns}
    `;
}

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   FILTER BY CATEGORY
═══════════════════════════════════════ */

function filterByCategory(catId, clickedEl) {
    currentCategory = catId;
    currentSearch   = '';

    // Clear search input
    const input = document.getElementById('supportSearchInput');
    if (input) input.value = '';
    hideSearchDropdown();

    // Toggle active state on category cards
    document.querySelectorAll('.support-cat-card').forEach(card => {
        card.classList.toggle('active', card.dataset.cat === catId);
    });

    // Toggle active state on filter bar buttons
    document.querySelectorAll('.support-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === catId);
    });

    // Show articles section, hide search results
    showArticlesSection();
    renderArticles(catId);

    // Scroll to articles section smoothly
    document.getElementById('articlesSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update URL hash for linkability
    if (catId !== 'all') {
        history.replaceState(null, '', `#${catId}`);
    } else {
        history.replaceState(null, '', location.pathname);
    }
}

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   RENDER ARTICLES GRID
═══════════════════════════════════════ */

function renderArticles(catId) {
    const grid  = document.getElementById('articlesGrid');
    const empty = document.getElementById('articlesEmpty');
    if (!grid) return;

    const filtered = catId === 'all'
        ? SUPPORT_ARTICLES.filter(a => a.popular)
        : SUPPORT_ARTICLES.filter(a => a.category === catId);

    if (filtered.length === 0) {
        grid.innerHTML = '';
        empty?.classList.remove('hidden');
        return;
    }

    empty?.classList.add('hidden');
    grid.innerHTML = filtered.map(a => renderArticleCard(a)).join('');
}

function renderArticleCard(article) {
    const cat  = SUPPORT_CATEGORIES.find(c => c.id === article.category) || {};

    return `
        <article
            class="support-article-card"
            style="--cat-bg:${cat.bg || '#eff6ff'};--cat-fg:${cat.fg || '#1d4ed8'};"
            onclick="openArticle('${article.slug}')"
            role="button"
            tabindex="0"
            aria-label="Read: ${escHtml(article.title)}"
            onkeydown="if(event.key==='Enter'||event.key===' ')openArticle('${article.slug}')"
        >
            <span class="support-article-cat-badge">
                ${cat.icon || ''} ${escHtml(cat.name || '')}
            </span>
            <h3 class="support-article-title">${escHtml(article.title)}</h3>
            <p class="support-article-excerpt">${escHtml(article.excerpt)}</p>
            <div class="support-article-footer">
                <span class="support-article-read">${article.readTime}</span>
                <span class="support-article-arrow" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </article>`;
}

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   SEARCH
═══════════════════════════════════════ */

function setupSearch() {
    const input    = document.getElementById('supportSearchInput');
    const clearBtn = document.getElementById('supportSearchClear');
    if (!input) return;

    input.addEventListener('input', () => {
        const val = input.value.trim();
        clearBtn?.classList.toggle('hidden', val.length === 0);

        clearTimeout(searchTimer);
        if (val.length < 2) {
            hideSearchDropdown();
            return;
        }
        searchTimer = setTimeout(() => showSearchDropdown(val), 160);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = input.value.trim();
            if (val.length >= 2) doSearch(val);
        }
        if (e.key === 'Escape') hideSearchDropdown();
    });

    clearBtn?.addEventListener('click', clearSearch);

    document.addEventListener('click', (e) => {
        const wrapper = document.querySelector('.support-search-wrapper');
        if (wrapper && !wrapper.contains(e.target)) hideSearchDropdown();
    });
}

function showSearchDropdown(query) {
    const dropdown = document.getElementById('supportSearchDropdown');
    if (!dropdown) return;

    const results = searchArticles(query).slice(0, 6);

    if (results.length === 0) {
        dropdown.innerHTML = `<div class="support-drop-no-results">No articles found for "<strong>${escHtml(query)}</strong>"</div>`;
        dropdown.classList.remove('hidden');
        return;
    }

    let html = `<div class="support-drop-group">Articles</div>`;
    html += results.map(a => {
        const cat = SUPPORT_CATEGORIES.find(c => c.id === a.category) || {};
        return `
            <button class="support-drop-item" onclick="openArticle('${a.slug}')">
                <span class="support-drop-cat-dot" style="background:${cat.color || '#6b7280'};"></span>
                <span>${escHtml(a.title)}</span>
                <span class="support-drop-arrow">›</span>
            </button>`;
    }).join('');

    html += `
        <button class="support-drop-item" style="border-top:1px solid #f3f4f6;font-weight:600;color:#045093;" onclick="doSearch('${escHtml(query)}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35" stroke-linecap="round"/></svg>
            See all results for "${escHtml(query)}"
        </button>`;

    dropdown.innerHTML = html;
    dropdown.classList.remove('hidden');
}

function hideSearchDropdown() {
    const dropdown = document.getElementById('supportSearchDropdown');
    if (dropdown) {
        dropdown.classList.add('hidden');
        dropdown.innerHTML = '';
    }
}

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

function searchArticles(query) {
    const q = query.toLowerCase();
    return SUPPORT_ARTICLES.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        (SUPPORT_CATEGORIES.find(c => c.id === a.category)?.name || '').toLowerCase().includes(q)
    );
}

function doSearch(query) {
    if (!query || query.trim().length < 2) return;
    currentSearch = query.trim();

    const input = document.getElementById('supportSearchInput');
    if (input) input.value = currentSearch;
    hideSearchDropdown();

    // Show search results section
    const resultsSection = document.getElementById('searchResultsSection');
    const catSection     = document.getElementById('categoriesSection');
    const artSection     = document.getElementById('articlesSection');

    resultsSection?.classList.remove('hidden');
    catSection?.classList.add('hidden');
    artSection?.classList.add('hidden');

    const title = document.getElementById('searchResultsTitle');
    if (title) title.textContent = `Results for "${currentSearch}"`;

    const list    = document.getElementById('searchResultsList');
    const results = searchArticles(currentSearch);

    if (!list) return;

    if (results.length === 0) {
        list.innerHTML = `
            <div class="support-empty" style="display:flex;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" stroke-linecap="round"/></svg>
                <p>No articles found for "<strong>${escHtml(currentSearch)}</strong>". Try different keywords or browse by category below.</p>
            </div>`;
    } else {
        list.innerHTML = results.map(a => renderArticleCard(a)).join('');
    }

    resultsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearSearch() {
    currentSearch = '';
    const input = document.getElementById('supportSearchInput');
    if (input) input.value = '';
    document.getElementById('supportSearchClear')?.classList.add('hidden');
    hideSearchDropdown();
    showArticlesSection();
}

function showArticlesSection() {
    document.getElementById('searchResultsSection')?.classList.add('hidden');
    document.getElementById('categoriesSection')?.classList.remove('hidden');
    document.getElementById('articlesSection')?.classList.remove('hidden');
}

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */

function openArticle(slug) {
    // Article pages at /{slug} — for now shows alert since pages don't exist yet
    // Once article pages are created, change to: window.location.href = `/${slug}`;
    window.location.href = `/${slug}`;
}

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */

function escHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Expose globals for inline event attributes
window.filterByCategory = filterByCategory;
window.doSearch         = doSearch;
window.clearSearch      = clearSearch;
window.openArticle      = openArticle;

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.
// This source code is proprietary. Unauthorized use is prohibited.
