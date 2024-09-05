console.log("loaded handlers.js");

// content script
document.querySelectorAll("button[id^='secret'], button[id^='regex']").forEach(
    function(e) {
        e.addEventListener("click",
            function(b) {
                let selector    = null;
                let target_list = null;
                let target_id   = null;
                let list_sel    = null;

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
                    let storage_data = {
                        regexes: [],
                        secrets: []
                    };

                    list_option.id = `${target_id}${lst_count++}`;
                    list_option.name = list_option.id;
                    list_option.text = document.getElementById(list_sel).value;
                    
                    target_list.appendChild(list_option);
                    
                    browser.storage.local.get()
                        .then((response) => {
                            storage_data.regexes = response.regexes;
                            storage_data.secrets = response.secrets;
                        }).catch((error) => {
                            console.error(error);
                        }
                    );
                    
                    browser.storage.local.set("storage_data",  storage_data);
                }
            }
        );
    }
);

$("option-id-in-regex").on("click", (e) => {
    let cur_val = this.clicked;
});

$("option-mask-emails").on("click", (e) => {
});

