// js/support-partials-loader.js
/*
 * Copyright (C) The Greek Directory, 2025-present. All rights reserved.
 * Loads support-specific header and footer partials.
 */

function executePartialScripts(container) {
    var scripts = container.querySelectorAll('script');
    scripts.forEach(function (oldScript) {
        var newScript = document.createElement('script');
        for (var i = 0; i < oldScript.attributes.length; i++) {
            var attr = oldScript.attributes[i];
            newScript.setAttribute(attr.name, attr.value);
        }
        newScript.textContent = oldScript.textContent;
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

async function loadSupportPartials() {
    try {
        // Load support header
        var headerEl = document.querySelector('[data-partial="support-header"]');
        if (headerEl) {
            var hRes = await fetch('/partials/support-header.html');
            if (hRes.ok) {
                headerEl.innerHTML = await hRes.text();
                executePartialScripts(headerEl);
            }
        }

        // Load support footer
        var footerEl = document.querySelector('[data-partial="support-footer"]');
        if (footerEl) {
            var fRes = await fetch('/partials/support-footer.html');
            if (fRes.ok) {
                footerEl.innerHTML = await fRes.text();
                executePartialScripts(footerEl);
            }
        }

        if (window.translationSystem) {
            window.translationSystem.applyTranslations();
        }

        document.dispatchEvent(new CustomEvent('tgd:partials-loaded'));
    } catch (err) {
        console.error('Support partials load error:', err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSupportPartials);
} else {
    loadSupportPartials();
}

// Copyright (C) The Greek Directory, 2025-present. All rights reserved.
