document.querySelectorAll("button[id^='secret'], button[id^='regex']").forEach(
    function(e) {
        e.addEventListener("click",
            function(b) {
                let selector    = null;
                let target_list = null;
                
                if (b.target.id.match(/^secret/)) {
                    target_list = document.getElementById('seecrets-list');
                    selector = "option[id^='lst_sec']";
                } else {
                    target_list = document.getElementById('regex-list');
                    selector = "option[id^='lst_rgx']";
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

                    list_option.id = "lst_sec_" + lst_count++;
                    list_option.name = "lst_sec_" + lst_count;
                    list_option.innerText = 
                    secrets_el.appendChild(list_option);
                }
            }
        );
    }
);

$(document).ready(function() {
    load_lists("secrets.txt");
    load_lists("regexes.txt");
    let secrets_list = document.getElementById("seecrets-list");
    let regexes_list = document.getElementById("regex-list");

    let secret_menu_item = document.getElementById("list-seecrets-list");
    let regex_menu_item  = document.getElementById("list-regex-list");

    let secrets_badge = document.createElement('span');
    secrets_badge.className = "badge text-bg-warning rounded-pill float-end";
    secrets_badge.innerText = `${secrets_list.length}`;

    let regex_badge = document.createElement('span');
    regex_badge.className = "badge text-bg-warning rounded-pill float-end";
    regex_badge.innerText = `${regexes_list.length}`;
     
    secret_menu_item.appendChild(secrets_badge);
    regex_menu_item.appendChild(regex_badge);
    
});