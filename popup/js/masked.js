    'use strict';
    // TODO: Split up content script stuff into.. content scripts.
    // Compiled from SecLists & gitleaks
    // https://raw.githubusercontent.com/gitleaks/gitleaks/master/config/gitleaks.toml
    // https://github.com/SecLists
    let found = [];

    load_lists("regexes.txt");
    load_lists("secrets.txt");
    

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

    document.querySelectorAll('option[id^="lst_sec"]').forEach(
        function(secret) {
            let selector = '[id*="' + secret + '"]';
            document.querySelectorAll(selector).forEach(
                function(hit) {
                    found.push(hit);
                    console.log('id_match: ' + secret);
                }
            );
        }
    );

    document.querySelectorAll('option[id^="lst_rgx"]').forEach(
        function(r) {
            document.querySelectorAll("input span div").forEach(function(i) {
                var input_val = $(this).val();
                var input_len = input_val.length;
                var input_type = $(this).type;

                if (input_len > 3 && input_type != "password" && input_type != "hidden") {
                    if (input_val.match(cur_regex)) {
                        matched_regs++;
                        found.push(i);
                        console.log('regex_match ' + input_val);
                    }
                }
            });
        }
    );


    found.forEach(function(f) {
        if (f.type != 'password' && f.type != 'hidden') {
            if (f.value && f.value.length) {
                var holder = document.createElement('a');
                holder.id = f.id + '-masked';
                holder.setAttribute('value', f.value);
                holder.innerHTML = '✂️';

                f.before(holder);
                f.type = 'password';
            }

            jQuery("a[id$=-masked").on("click", function (id) {
                navigator.clipboard.writeText(document.getElementById(id.target.id).attributes.value.value);
            });
        }
    });