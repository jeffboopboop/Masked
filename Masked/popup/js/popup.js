'use strict';
console.log("loaded popup.js");

let local_storage_data = {
    "regexes": [],
    "secrets": [],
};

(async () => {
    if (window.hasRun) {
        console.log("popup.js already ran, bailing");
        return;
    }
    window.hasRun = true;

    console.log("popup.js: checking storage");

    fetch(browser.runtime.getURL('Masked/resources/secrets.txt'))
    .then(response => response.text())
    .then(data => {
        local_storage_data.secrets = data.split('\n');
        console.log("background.js: loaded secrets");
    }
    ).catch((error) => {
        console.error(error)
    })
    

    
    browser.storage.local.get().then((response) => {
        console.log(response);
        local_storage_data.regexes = response.regexes;
        local_storage_data.secrets = response.secrets;
    }).catch((error) => console.error(error));
    
    if (!local_storage_data.regexes.length) {
        console.log("popup.js: no data in storage");
        let message_bg = browser.runtime.sendMessage({'masked_cmd': 'get_lists'});
        message_bg.then((response) => {
            console.log(`popup.js: got back ${local_storage_data}`);
            local_storage_data.regexes = response.regexes;
            local_storage_data.secrets = response.secrets;
            
        }, notify_error).catch((error) => { console.error(error)});
    } else {
        console.log("popup.js: data in storage, skeep load");
    }

    function notify_error(e) {
        console.log(`popup.js: olord: ${e}`);
    }
})();

console.log("starting rest of popup.js");

let secrets_list  = document.getElementById('secrets-list');
let regex_list    = document.getElementById('regex-list');

console.log(local_storage_data);

local_storage_data.secrets.forEach(() => {
    let list_option = document.createElement('option');
    list_option.id = `lst_sec_${i}`;
    list_option.name = `lst_sec_${i}`;
    list_option.text = secret;
    console.log(list_option);
    secrets_list.appendChild(list_option);
});

local_storage_data.regexes.forEach((regex) => {
    let list_option = document.createElement('option');
    list_option.id = `lst_rgx_${i}`;
    list_option.name = `lst_rgx_${i}`;
    list_option.text = regex;
    console.log(list_option);
    regex_list.appendChild(list_option);
});