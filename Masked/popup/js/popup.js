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

//add_menu_badges();