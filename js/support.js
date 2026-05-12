// js/support.js
// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   CATEGORIES — matches articles.json category IDs
═══════════════════════════════════════ */

const SUPPORT_CATEGORIES = [
    {
        id: 'search-discovery',
        name: 'Search & Discovery',
        icon: '🔍',
        description: 'Find businesses by name, category, or location.',
        color: '#2563eb',
        bg: '#eff6ff',
        fg: '#1d4ed8',
    },
    {
        id: 'filters-sorting',
        name: 'Filters & Sorting',
        icon: '🗂️',
        description: 'Narrow results by category, location, hours, and more.',
        color: '#059669',
        bg: '#d1fae5',
        fg: '#065f46',
    },
    {
        id: 'business-listings',
        name: 'Business Listings',
        icon: '🏢',
        description: 'Reading and understanding listing pages.',
        color: '#d97706',
        bg: '#fef3c7',
        fg: '#92400e',
    },
    {
        id: 'maps-directions',
        name: 'Maps & Directions',
        icon: '🗺️',
        description: 'Explore businesses on the interactive map.',
        color: '#0891b2',
        bg: '#e0f2fe',
        fg: '#0e7490',
    },
    {
        id: 'starring-favorites',
        name: 'Starring & Favorites',
        icon: '⭐',
        description: 'Save and manage your favorite businesses.',
        color: '#ca8a04',
        bg: '#fef9c3',
        fg: '#854d0e',
    },
    {
        id: 'pwa-app',
        name: 'The PWA App',
        icon: '📱',
        description: 'Install and use the Greek Directory app.',
        color: '#7c3aed',
        bg: '#ede9fe',
        fg: '#6b21a8',
    },
    {
        id: 'language-accessibility',
        name: 'Language & Accessibility',
        icon: '🌐',
        description: 'Switch between English and Greek.',
        color: '#0f766e',
        bg: '#ccfbf1',
        fg: '#134e4a',
    },
    {
        id: 'submitting-business',
        name: 'Submitting a Business',
        icon: '📋',
        description: 'Add a Greek-owned business to the directory.',
        color: '#dc2626',
        bg: '#fee2e2',
        fg: '#991b1b',
    },
    {
        id: 'troubleshooting',
        name: 'General & Troubleshooting',
        icon: '⚙️',
        description: 'Fix issues and understand privacy & data.',
        color: '#6b7280',
        bg: '#f3f4f6',
        fg: '#374151',
    },
];

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */

let SUPPORT_ARTICLES = [];   // populated by loadArticles()
let currentCategory  = 'all';
let currentSearch    = '';
let searchTimer      = null;

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', async () => {
    await loadArticles();

    renderCategories();
    renderFilterBar();
    renderArticles('all');
    setupSearch();

    // Check URL hash for direct category linking: /#search-discovery
    const hash = location.hash.replace('#', '');
    if (hash && SUPPORT_CATEGORIES.find(c => c.id === hash)) {
        filterByCategory(hash);
        document.getElementById('articlesSection')?.scrollIntoView({ behavior: 'smooth' });
    }
});

/* ═══════════════════════════════════════
   LOAD ARTICLES FROM JSON
═══════════════════════════════════════ */

async function loadArticles() {
    try {
        const res = await fetch('/assets/data/articles.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        SUPPORT_ARTICLES = await res.json();
    } catch (err) {
        console.error('Failed to load articles.json:', err);
        SUPPORT_ARTICLES = [];
    }
}

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

    const input = document.getElementById('supportSearchInput');
    if (input) input.value = '';
    hideSearchDropdown();

    document.querySelectorAll('.support-cat-card').forEach(card => {
        card.classList.toggle('active', card.dataset.cat === catId);
    });

    document.querySelectorAll('.support-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === catId);
    });

    showArticlesSection();
    renderArticles(catId);

    document.getElementById('articlesSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

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
    const cat       = SUPPORT_CATEGORIES.find(c => c.id === article.category) || {};
    // JSON uses category_name / category_icon on each article — fall back to category lookup
    const badgeIcon = article.category_icon || cat.icon || '';
    const badgeName = article.category_name || cat.name || '';
    const catBg     = cat.bg  || '#eff6ff';
    const catFg     = cat.fg  || '#1d4ed8';
    // JSON uses description; fall back to excerpt for forward-compat
    const excerpt   = article.description || article.excerpt || '';
    // JSON uses read_time; fall back to readTime
    const readTime  = article.read_time   || article.readTime || '';

    return `
        <article
            class="support-article-card"
            style="--cat-bg:${catBg};--cat-fg:${catFg};"
            onclick="openArticle('${escHtml(article.slug)}')"
            role="button"
            tabindex="0"
            aria-label="Read: ${escHtml(article.title)}"
            onkeydown="if(event.key==='Enter'||event.key===' ')openArticle('${escHtml(article.slug)}')"
        >
            <span class="support-article-cat-badge">
                ${badgeIcon} ${escHtml(badgeName)}
            </span>
            <h3 class="support-article-title">${escHtml(article.title)}</h3>
            <p class="support-article-excerpt">${escHtml(excerpt)}</p>
            <div class="support-article-footer">
                <span class="support-article-read">${escHtml(readTime)}</span>
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
        if (val.length < 2) { hideSearchDropdown(); return; }
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

function searchArticles(query) {
    const q = query.toLowerCase();
    return SUPPORT_ARTICLES.filter(a => {
        const desc    = (a.description || a.excerpt || '').toLowerCase();
        const catName = (a.category_name || SUPPORT_CATEGORIES.find(c => c.id === a.category)?.name || '').toLowerCase();
        return a.title.toLowerCase().includes(q) || desc.includes(q) || catName.includes(q);
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
            <button class="support-drop-item" onclick="openArticle('${escHtml(a.slug)}')">
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

function doSearch(query) {
    if (!query || query.trim().length < 2) return;
    currentSearch = query.trim();

    const input = document.getElementById('supportSearchInput');
    if (input) input.value = currentSearch;
    hideSearchDropdown();

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
   Slugs in articles.json are bare slugs like "how-to-search".
   Article pages live at /article/users/{slug}/
═══════════════════════════════════════ */

function openArticle(slug) {
    window.location.href = `/article/users/${slug}/`;
}

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */

function escHtml(str) {
    if (!str) return '';
    return String(str)
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
