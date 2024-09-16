console.log("loaded functions.js");

HTMLElement.prototype.sort_options = function() {
    Array.prototype.slice.call(this.options).sort(function(a, b) {
        return a.text > b.text ? 1 : a.text < b.text ? -1 : 0;
    }).forEach(function(option, index) {
        this.appendChild(option);
    }, this);
};

function add_menu_badges() {
    let secret_menu_item = document.getElementById("list-secrets-list");
    let regex_menu_item  = document.getElementById("list-regex-list");
    let secrets_list     = document.getElementById("secrets-list");
    let regexes_list     = document.getElementById("regex-list");
    let secrets_badge = document.createElement('span');
    let regex_badge = document.createElement('span');

    if (!document.getElementById('secrets-badge')) {
        secrets_badge.className = "badge text-bg-warning rounded-pill float-end";
        secrets_badge.innerText = secrets_list.length;
        secrets_badge.id = 'secrets-badge';
        secrets_badge.name = 'secrets-badge';
        
        regex_badge.className = "badge text-bg-warning rounded-pill float-end";
        regex_badge.innerText = regexes_list.length;
        regex_badge.id = 'regex-badge';
        regex_badge.name = 'regex-badge';
    } else {
        document.getElementById('secrets-badge').innerText = secrets_list.length;
        document.getElementById('regex-badge').innerText = regex_list.length;
    }

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
            let secrets_list  = document.getElementById("secrets-list");
            let regex_list    = document.getElementById("regex-list");


            document.getElementById("option-secrets-in-regex").checked   = response.masked_data.options.secrets_in_regex;
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
            
            add_menu_badges();
            
            return true;
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

    storage_data.lists.regexes.sort();
    storage_data.lists.secrets.sort();
    
    storage_data.options.mask_emails      = document.getElementById('option-mask-emails').checked;
    storage_data.options.secrets_in_regex = document.getElementById('option-secrets-in-regex').checked;
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