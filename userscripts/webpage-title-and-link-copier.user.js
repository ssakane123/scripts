// ==UserScript==
// @name         Copy Page Title and URL as Markdown
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Copy the current page title and URL in Markdown format to clipboard
// @author       ssakane123
// @match        *://*/*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
  "use strict";

  // Add event listener for keypress
  document.addEventListener("keydown", function (e) {
    // Check if the specific key (e.g., 'Ctrl + M') is pressed
    if (e.ctrlKey && e.key === "m") {
      // Get the page title and URL
      const title = document.title;
      const url = window.location.href;

      // Format as Markdown
      const markdown = `[${title}](${url})`;

      // Copy to clipboard
      GM_setClipboard(markdown);

      // Optional: Notify the user
      // alert('Page title and URL copied as Markdown!');
    }
  });
})();
