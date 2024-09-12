console.log("loaded functions.js");

$.fn.sort_options = function() {
    this.html(this.find('option').sort(function(a, b) {
      return $(a).text() > $(b).text() ? 1 : $(a).text() < $(b).text() ? -1 : 0;
    }));
};

function add_menu_badges() {
        let secrets_list = document.getElementById("secrets-list");
        let regexes_list = document.getElementById("regex-list");

        let secret_menu_item = document.getElementById("list-secrets-list");
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

async function populate_popup() {
    browser.storage.local.get()
        .then((response) => {
            let secrets_list  = $("#secrets-list");
            let regex_list    = $("#regex-list");

            document.getElementById("option-id-in-regex").checked   = response.masked_data.options.secrets_in_regex;
            document.getElementById("option-mask-emails").checked   = response.masked_data.options.mask_emails;
            document.getElementById("option-enable-regex").checked  = response.masked_data.options.enable_regexes;
            document.getElementById("option-enable-secret").checked = response.masked_data.options.enable_secrets;

            for (let i=0; i<response.masked_data.lists.secrets.length - 1; i++) {
                let list_option = document.createElement('option');
                list_option.id = `lst_sec_${i}`;
                list_option.name = `lst_sec_${i}`;
                list_option.text = response.masked_data.lists.secrets[i];
                secrets_list.append(list_option);
            };

            for (let i=0; i<response.masked_data.lists.regexes.length - 1; i++) {
                let list_option = document.createElement('option');
                list_option.id = `lst_rgx_${i}`;
                list_option.name = `lst_rgx_${i}`;
                list_option.text = response.masked_data.lists.regexes[i];
                regex_list.append(list_option);
            };
            regex_list.sort_options();
            secrets_list.sort_options();
            add_menu_badges();
        }).catch((error) => {
            console.error(error)
        }
    );

    return true;
}

async function set_masked_obj() {
    var storage_data = {
        lists: {
            regexes: [],
            secrets: [],
        },
        options: {
            enable_regexes: true,
            enable_secrets: true,
            secrets_in_regex: false,
            mask_emails: false,
            mask_style: 0
        }
    };

    browser.storage.local.get().then((data) => {
        storage_data = data;
    }).catch((error) => {
        console.error(error);
    });

    console.log(storage_data);

    document.querySelectorAll('option[id^="lst_sec"]').forEach((opt) => {
        storage_data.lists.secrets.push(opt.value);
    });

    document.querySelectorAll('option[id^="lst_rgx"]').forEach((opt) => {
        storage_data.lists.regexes.push(opt.value);
    });    
    
    storage_data.options.mask_emails      = document.getElementById('option-mask-emails').checked;
    storage_data.options.secrets_in_regex = document.getElementById('option-id-in-regex').checked;
    storage_data.options.enable_regexes   = document.getElementById('option-enable-regex').checked;
    storage_data.options.enable_secrets   = document.getElementById('option-enable-secret').checked;

    browser.storage.local.set({masked_data: storage_data})
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    
    console.log("Saved storage!!!");

    return true;
}