'use strict';
console.log("loaded popup.js");

var local_storage_data = {
    "regexes": [],
    "secrets": [],
};

(() => {
    if (window.hasRun) {
        console.log("popup.js already ran, bailing");
        return;
    }
    window.hasRun = true;

    browser.storage.local.get()
        .then((response) => {
            let secrets_list = document.getElementById('secrets-list');
            let regex_list   = document.getElementById('regex-list');

            local_storage_data.regexes = response.regexes;
            local_storage_data.secrets = response.secrets;

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
        })
        .catch((error) => {
            console.error(error)
        }
    );
})();

//add_menu_badges();