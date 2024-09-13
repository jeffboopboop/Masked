'use strict';
console.log("loaded popup.js");

(() => {
    if (window.hasRun) {
        console.log("popup.js already ran, bailing");
        return;
    }

    window.hasRun = true;

    populate_popup();

    
})();

const Default = {
    scrollbarTheme: "os-theme-dark",
    scrollbarClickScroll: true,
};

document.addEventListener("DOMContentLoaded", function() {
    const popup_lists  = document.querySelectorAll('div[id^="list-"]');
    const content_div  = document.getElementById('nav-tabContent');
    
    popup_lists.forEach((e) => {
        if (e && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined") {
            OverlayScrollbarsGlobal.OverlayScrollbars(e, {
                scrollbars: {
                    theme: Default.scrollbarTheme,
                    clickScroll: Default.scrollbarClickScroll,
                },
                overflow: {
                    x: 'hidden',
                    y: 'auto'
                }
            });
        }
    });

    if (content_div && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined") {
        OverlayScrollbarsGlobal.OverlayScrollbars(content_div, {
            scrollbars: {
                theme: Default.scrollbarTheme,
                clickScroll: Default.scrollbarClickScroll,
            },
            overflow: {
                x: 'hidden',
                y: 'auto'
            }
        });
    }


});