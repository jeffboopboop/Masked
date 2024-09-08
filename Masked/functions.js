console.log("loaded functions.js");
function add_menu_badges() {
        let secrets_list = document.getElementById("seecrets-list");
        let regexes_list = document.getElementById("regex-list");

        let secret_menu_item = document.getElementById("list-seecrets-list");
        let regex_menu_item  = document.getElementById("list-regex-list");

        let secrets_badge = document.createElement('span');
        secrets_badge.className = "badge text-bg-warning rounded-pill float-end";
        secrets_badge.innerText = secrets_list.length;

        let regex_badge = document.createElement('span');
        regex_badge.className = "badge text-bg-warning rounded-pill float-end";
        regex_badge.innerText = regexes_list.length;
        
        secret_menu_item.appendChild(secrets_badge);
        regex_menu_item.appendChild(regex_badge);
}

function status_message(message) {
    $("#status")[0].innerText = message;
    $("#status").fadeIn(2000);
    $("#status").fadeOut(2000);
}

async function set_masked_obj(data) {
    let storage_data = JSON.parse(data);
    console.log(`storage data: ${storage_data}`);
    console.log(`Saving masked_data to local storage: ${data}`);

    document.querySelectorAll('option[id^="lst_sec"]').forEach((opt) => {
        storage_data.lists.secrets.push(opt.value);
    });

    document.querySelectorAll('option[id^="lst_rgx"]').forEach((opt) => {
        storage_data.lists.regexes.push(opt.value);
    });
    
    storage_data.options.mask_emails      = document.getElementById('option-mask-emails');
    storage_data.options.secrets_in_regex = document.getElementById('option-id-in-regex');
    storage_data.options.enable_regexes   = document.getElementById('option-enable-regex');
    storage_data.options.enable_secrets   = document.getElementById('option-enable-secret');

    browser.storage.local.set({masked_data: storage_data})
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
}