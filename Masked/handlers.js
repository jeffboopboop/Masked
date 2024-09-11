console.log("loaded handlers.js");

document.querySelectorAll("button[id^='secret'], button[id^='regex']").forEach(
    function(e) {
        e.addEventListener("click",
            function(b) {
                let selector     = null;
                let target_list  = null;
                let target_id    = null;
                let list_sel     = null;
            
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
                    document.querySelectorAll('option[id^="lst_sec"]').forEach((opt) => {
                        if (document.getElementById(list_sel).value == opt.value) {
                            status_message(`Secret already exists`);
                            return;
                        }
                    });

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

                set_masked_obj().then(() => {
                    console.log("Updating lists");
                }).catch((error) => {
                    console.error(error);
                });
            }
        );
    }
);

document.querySelectorAll('input[id^="option-"]').forEach((opt) => {
    opt.addEventListener("click", () => {
        set_masked_obj().then(() => {
            console.log("Updating options");
        }).catch((error) => {
            console.error(error);
        });
    });
});

document.querySelectorAll('a[id^="list-"]').forEach((e) => {
    e.addEventListener('click', (ie) => {
        ie.target.classList.toggle('border');
        ie.target.classList.toggle('border-black');
    });
});