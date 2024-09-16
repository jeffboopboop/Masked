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
    scrollbarAutoHide: true,
    scrollbarVisibility: "auto"
};

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('#masked-container');
    
    if (container && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined") {
        OverlayScrollbarsGlobal.OverlayScrollbars(container, {
            scrollbars: {
                theme: Default.scrollbarTheme,
                autohide: Default.scrollbarAutoHide,
                visibility: Default.scrollbarVisibility
            },
            overflow: {
                x: 'hidden'
            }
        });
    }
});