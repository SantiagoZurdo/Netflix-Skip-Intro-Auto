// ==UserScript==
// @name         Netflix Skip Intro Auto
// @namespace    https://github.com/SantiagoZurdo/Netflix-Skip-Intro-Auto
// @version      1.1
// @description  Automatically skips intros on Netflix using MutationObserver.
// @author       SantiagoZurdo
// @match        *://www.netflix.com/watch/*
// @grant        none
// @license      MIT
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    /**
     * Detects and clicks the "Skip Intro" button when it appears.
     */
    function skipIntro() {
        const skipButton = document.querySelector('button[data-uia="player-skip-intro"]');
        if (skipButton) {
            console.log("🎬 Intro detected, skipping...");
            skipButton.click();
        }
    }
    /**
     * Creates a MutationObserver to detect DOM changes.
     * It triggers when new elements are added to the page.
     */
    const observer = new MutationObserver(() => skipIntro());

    observer.observe(document.body, {
        childList: true, // Watches for direct changes in the DOM
        subtree: true    // Includes all child elements
    });

    console.log("✅ Netflix Skip Intro Auto activated and watching for changes...");
})();
