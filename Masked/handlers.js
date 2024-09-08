console.log("loaded handlers.js");

let storage_data = {
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

document.querySelectorAll("button[id^='secret'], button[id^='regex']").forEach(
    function(e) {
        e.addEventListener("click",
            function(b) {
                let selector     = null;
                let target_list  = null;
                let target_id    = null;
                let list_sel     = null;
                

                browser.storage.local.get()
                    .then((response) => {
                        storage_data = response.masked_data;
                    }).catch((error) => {
                        console.error(error);
                    });
            
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
                    
                    target_list.appendChild(list_option);
                    
                    browser.storage.local.set({masked_data: storage_data})
                        .then((response) => {
                            console.log(
                                `Storage updated with ${response.masked_data.length} items`
                            );
                        }).catch((error) => {
                            console.error(error);
                        });
                } else if (b.target.id.match(/clear$/)) {
                    $(target_list).empty();
                }
            }
        );
    }
);

/*$("option-id-in-regex").on("click", (e) => {
    let cur_val = this.clicked;
});
*/
document.getElementById("option-mask-emails").addEventListener("click", (e) => {
    let storage_data = null;

    browser.storage.local.get()
        .then((response) => {
           storage_data = response.masked_data;
           storage_data.options.mask_emails = e.target.checked;

           browser.storage.local.set({masked_data: storage_data})
           .then((response) => {
               console.log(response);
           }).catch((error) => {
               console.error(error);
           });
        }).catch((error) => {
            console.error(error);
        });
});

document.querySelectorAll('a[id^="list-"]').forEach((e) => {
    e.addEventListener('click', (ie) => {
        ie.target.classList.toggle('border');
        ie.target.classList.toggle('border-black');
    });
});