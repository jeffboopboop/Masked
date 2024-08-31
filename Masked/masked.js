    'use strict';
    console.log("masked.js injected");

    let local_storage_data = {
        "regexes": [],
        "secrets": [],
    };

    (() => {
        if (window.hasRun) {
            console.log("masked.js already ran, bailing");
            return;
        }
        window.hasRun = true;

        console.log("masked.js: checking storage");
        let storage_data = null;
        
        console.log(storage_data);
        console.log("masked.js: no data in storage");
        
        let message_bg = browser.runtime.sendMessage({'masked_cmd': 'get_lists'});
        message_bg.then(populate_local_obj, notify_error).catch((error) => console.log(error));

        function notify_error(e) {
            console.log(`olord: ${e}`);
        }

        function populate_local_obj(storage_data) {
            local_storage_data = storage_data;
        }
    })();

    let found = [];

    let secrets_list = local_storage_data.secrets;
    let regexes_list = local_storage_data.regexes;

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
            
            let message = {
                "masked_cmd": "update_badge",
                "count": found.length
            };

            browser.runtime.sendMessage(message);
        }
    });