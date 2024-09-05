'use strict';
console.log("loaded popup.js");

const Default = {
    scrollbarTheme: "os-theme-light",
    scrollbarAutoHide: "leave",
    scrollbarClickScroll: true,
};

var { 
    OverlayScrollbars, 
    ScrollbarsHidingPlugin, 
    SizeObserverPlugin, 
    ClickScrollPlugin  
  } = OverlayScrollbarsGlobal;

  let storage_data = {
    "regexes": [],
    "secrets": [],
    "options": {
        "enable_regexes": true,
        "enable_secrets": true,
        "id_in_regex": false,
        "mask_emails": false,
        "mask_style": 0
    }
};



document.addEventListener("DOMContentLoaded", function() {
    let plugin_container = document.querySelector('#plugin-container');

    if (plugin_container && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined") {
        OverlayScrollbarsGlobal.OverlayScrollbars(plugin_container, {
            scrollbars: {
                theme: Default.scrollbarTheme,
                autoHide: Default.scrollbarAutoHide,
                clickScroll: Default.scrollbarClickScroll,
            },
        });
    }
});

(() => {
    if (window.hasRun) {
        console.log("popup.js already ran, bailing");
        return;
    }

    OverlayScrollbars(document.querySelector('#plugin-container'), {});

    window.hasRun = true;

    browser.storage.local.get()
        .then((response) => {
            let secrets_list  = document.getElementById('secrets-list');
            let regex_list    = document.getElementById('regex-list');

            document.getElementById("option-id-in-regex").checked  = response.checked;
            document.getElementById("option-mask-emails").checked  = response.checked;;
            document.getElementById("option-enable-regex").checked = response.checked;;
            document.getElementById("option-enable-id").checked    = response.checked;;

            for (let i=0; i<response.secrets.length - 1; i++) {
                let list_option = document.createElement('option');
                list_option.id = `lst_sec_${i}`;
                list_option.name = `lst_sec_${i}`;
                list_option.text = response.secrets[i];
                secrets_list.appendChild(list_option);
            };

            for (let i=0; i<response.regexes.length - 1; i++) {
                let list_option = document.createElement('option');
                list_option.id = `lst_rgx_${i}`;
                list_option.name = `lst_rgx_${i}`;
                list_option.text = response.regexes[i];
                regex_list.appendChild(list_option);
            };
        }).catch((error) => {
            console.error(error)
        }
    );
})();

//add_menu_badges();