var storage_data = {
    lists: {
        regexes: [],
        secrets: [],
        regex_elements: [],
        secret_elements: []
    },

    options: {
        dark_mode: "light",
        enable_regexes: true,
        enable_secrets: true,
        secrets_in_regex: false,
        regex_in_secrets: false,
        mask_emails: false,
        mask_ip_addr: false,
        mask_style: 0
    }
};

async function init() {
    console.log(
        '%c%c﴾%c░%c▒%c Masked%cInitialized %c▒%c░%c﴿',
            'text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;',
            'color:#fff; font-weight:999',
            'color:#383838; background-color:#383838; font-weight:999;',
            'color:#121212; background-color:#121212; font-weight:999;',
            'text-shadow: 1px 1px 2px white, 0 0 1em aliceblue; color:#000; background-color:#0d6efd; font-weight:999;',
            'text-shadow: 1px 1px 1px aliceblue, 0 0 1.1em white; color:#0d6efd; background-color:#000; font-weight:100;',
            'color:#121212; background-color:#121212; font-weight:999;',
            'color:#383838; background-color:#383838; font-weight:999;',
            'color:#fff; font-weight:999'
    );
    
    try {
        let data = await browser.storage.local.get();
        storage_data = data.masked_data;
    } catch (error) {
        console.error(error);
    }
    
    do_masks();
}

init();

async function do_masks() {
    let found = [];
    let secrets = storage_data.lists.secrets;
    let regexes = storage_data.lists.regexes;
    let elements = document.querySelectorAll("*");
    let sec_elements = document.getElementById("secret-element-list");

    if (storage_data.options.enable_secrets === true) {
        if (storage_data.options.regex_in_secrets) {
            regexes.forEach((r) => {
                let temp_rgx = `/${r}/g`;
                secrets.push(temp_rgx);
                status_message("Adding regex to secrets search");
            });
        }

        secrets.forEach(function(secret) {
            
            if (storage_data.options.mask_emails === false && secret.match(/email/)) {
                return;
            }           
            
            if (storage_data.options.regex_in_secrets) {
                secrets = [...secrets, ...regexes];
                document.querySelectorAll("*").forEach(
                    function(hit) {
                        found.push(hit);
                        status_message(`Found secret ${hit}`);
                    }
                );
            }

            selector = '[id*="' + secret + '"]';
        });
    }

    if (storage_data.options.enable_regexes) {
        if (storage_data.options.secrets_in_regex) {
            secrets.forEach((s) => {
                let temp_sec = `/${s}/g`;
                regexes.push(temp_sec);
                status_message("Adding secrets to regex search");
            });
        }
        storage_data.lists.regexes.forEach((regex) => {
            document.querySelectorAll("input, div, span").forEach(function(i) {
                var input_val = i.value;
                var input_len = i.length;
                var input_type = i.type;

                if (input_len > 3 && input_type != "password" && input_type != "hidden") {
                    let rgx = new RegExp(regex, "igm");

                    if (input_val.match(rgx)) {
                        matched_regs++;
                        found.push(i);
                        status_message(`Found secret ${i}`);
                    }
                }
            });
        });
    }

    found.forEach((f) => {
        let holder = document.createElement("a");
        
        holder.id = f.id + '-masked';
        holder.innerHTML = '🧐';
        holder.style.top = '51%';
        holder.style.position = 'relative';
        holder.style.zIndex = '300';
        holder.style.left = "90%";

        switch (f.tagName.toLowerCase()) {
            case 'input':
                if (f.type != 'password' && f.type != 'hidden') {
                    holder.textContent = f.value;
                    f.type = 'password';

                    holder.addEventListener("click", (e) => {
                        status_message(e);
                        navigator.clipboard.writeText(e.target.nextElementSibling.value);
                    });
                }
                break;
            case 'div':
                holder.setAttribute('value', f.textContent);
                f.textContent = "*".repeat(f.textContent.length);
                break;
            default:
                holder.value = f.value;
                break;
        }
        f.before(holder);
    });

    regexes.forEach((r) => {
        let found = [];
        
        if (document.body.innerText.matchAll(r)) {
            
        }
    });
    
    let update_icon = await browser.runtime.sendMessage({
        "masked_cmd": "update_badge",
        "sender": "masked.js",
        "value": found.length
    });
}