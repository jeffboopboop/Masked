console.log(Date.now() + " " + document.currentScript.src);

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
        mask_style: 0
    }
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content loaded!");

    var { 
        OverlayScrollbars, 
        ScrollbarsHidingPlugin, 
        SizeObserverPlugin, 
        ClickScrollPlugin  
      } = OverlayScrollbarsGlobal;

    document.querySelectorAll("button[id^='secret'], button[id^='regex']").forEach(
        function(e) {
            e.addEventListener("click",
                async function(b) {
                    let selector     = null;
                    let target_list  = null;
                    let target_id    = null;
                    let list_sel     = null;

                    storage_data = await browser.storage.local.get();
                        
                    if (b.target.id.match(/^secret/)) {
                        target_list = document.getElementById('secrets-list');
                        selector = "option[id^='lst_sec']";
                        target_id = 'lst_sec_';
                        list_sel = "add-secret";
                    } else if (b.target.id.match(/^regex/)) {
                        target_list = document.getElementById('regex-list');
                        selector = "option[id^='lst_rgx']";
                        target_id = 'lst_rgx_';
                        list_sel = "add-regex";
                    } 
                    
                    if (b.target.id.match(/remove$/)) {
                        let count = 0

                        document.querySelectorAll(selector).forEach(
                            function(s) {
                                if (s.selected) { 
                                    s.remove();
                                    count++;
                                }
                            }
                        );
                
                        status_message(`${count} items removed`);
                    } else if (b.target.id.match(/append$/)) {
                        let lst_count = target_list.length;
                        let list_option = document.createElement('option');

                        list_option.id = `${target_id}${lst_count++}`;
                        list_option.name = list_option.id;
                        list_option.text = document.getElementById(list_sel).value;
                        
                        document.getElementById(list_sel).value = "";
                        target_list.appendChild(list_option);

                        status_message(`Secret added`);
                    } else if (b.target.id.match(/clear$/)) {
                        $(target_list).empty();
                        status_message(`Secrets cleared`);
                    }

                    set_masked_obj().catch((error) => {
                        console.error(error);
                    });
                }
            );
        }
    );

   document.querySelector('#option-enable-darkmode, #masked-logo').addEventListener('click', () => {
        storage_data.options.dark_mode = storage_data.options.dark_mode === "dark" ? "light" : "dark";
        document.body.setAttribute('data-bs-theme', storage_data.options.dark_mode);    
    });

    document.querySelectorAll('input[id^="option-"]').forEach((opt) => {
        opt.addEventListener("click", () => {
            set_masked_obj().then(() => {
                status_message("Updating options");
            }).catch((error) => {
                console.error(error);
            });
        });
    });

    document.getElementById('add-secret-element').addEventListener("focus", () => {
        selected_list = document.getElementById("secret-element-list");
        status_message("sec");
    });

    document.getElementById('add-regex-element').addEventListener("focus", () => {
        selected_list = document.getElementById("regex-element-list");
        status_message("reg");
    });

    document.querySelectorAll('button[id^="ele-"]').forEach((e) => {
        e.addEventListener("click", (b) => {
            if (b.target.id == 'ele-append') {
                let list_option = document.createElement('option');
                let lst_count = focused_list.length;
                let selector  = null;
                let target_id = null;
                let input_sel  = null;

                if (focused_list.id.match(/secret/)) {
                    selector  = "option[id^='lst_sec_ele']";
                    target_id = 'lst_sec_ele';
                    input_sel  = document.getElementById("add-secret-element");
                } else if (b.target.id.match(/regex/)) {
                    selector = "option[id^='lst_rgx_ele']";
                    target_id = 'lst_rgx_ele';
                    input_sel  = document.getElementById("add-regex-element");
                }

                list_option.id = `${target_id}${lst_count++}`;
                list_option.name = list_option.id;
                list_option.text = input_sel.value;
                
                input_sel.value = "";
                focused_list.appendChild(list_option);

                status_message(`Secret added`);
            } else if (b.target.id == 'ele-clear') {

            } else if (b.target.id == 'ele-remove') {

            }
        });
    });
});