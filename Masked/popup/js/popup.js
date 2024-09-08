'use strict';
console.log("loaded popup.js");

(() => {
    if (window.hasRun) {
        console.log("popup.js already ran, bailing");
        return;
    }

    window.hasRun = true;

    browser.storage.local.get()
        .then((response) => {
            
            let secrets_list  = document.getElementById('secrets-list');
            let regex_list    = document.getElementById('regex-list');

            document.getElementById("option-id-in-regex").checked   = response.masked_data.options.secrets_in_regex;
            document.getElementById("option-mask-emails").checked   = response.masked_data.options.mask_emails;
            document.getElementById("option-enable-regex").checked  = response.masked_data.options.enable_regexes;
            document.getElementById("option-enable-secret").checked = response.masked_data.options.enable_secrets;

            for (let i=0; i<response.masked_data.lists.secrets.length - 1; i++) {
                let list_option = document.createElement('option');
                list_option.id = `lst_sec_${i}`;
                list_option.name = `lst_sec_${i}`;
                list_option.text = response.masked_data.lists.secrets[i];
                secrets_list.appendChild(list_option);
            };

            for (let i=0; i<response.masked_data.lists.regexes.length - 1; i++) {
                let list_option = document.createElement('option');
                list_option.id = `lst_rgx_${i}`;
                list_option.name = `lst_rgx_${i}`;
                list_option.text = response.masked_data.lists.regexes[i];
                regex_list.appendChild(list_option);
            };
        }).catch((error) => {
            console.error(error)
        }
    );
})();

//add_menu_badges();