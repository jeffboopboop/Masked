console.log(Date.now() + " " + document.currentScript.src);
var focused_list = null;

populate_popup();


(() => {
    if (window.hasRun) {
        status_message("popup.js already ran, bailing");
        return;
    }

    window.hasRun = true;
    
})();

const Default = {
    scrollbarTheme: "os-theme-dark",
    scrollbarClickScroll: true,
    scrollbarAutoHide: true,
    scrollbarVisibility: "auto"
};

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('#settings-pane');

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