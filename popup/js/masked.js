    'use strict';


    function load_lists(which) {
        var response;
        var data;
        var error;

        fetch(which)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));        
        
        let lines = data.split("\n");
        let secrets = [];
        let lst_count = 0;

        for (var i=0; i<lines.length; i++) {
            let list_option = document.createElement('option');
            let selected_list = null;
            let line = lines[i];
            let new_id = null;

            console.log(line);

            if (which.match(/regexes.txt$/)) {
                selected_list = document.getElementById("regex-list");
                new_id = "lst_rgx_";
            } else if(which.match(/secrets$/)) {
                selected_list = document.getElementById("seecrets-list");
                new_id = `lst_sec_`;
            }

            list_option.id = new_id + lst_count++;
            list_option.name = new_id + lst_count;
            list_option.innerText = line;

            selected_list.appendChild(list_option);
        }
    }

    window.addEventListener("message", (event) => {
        if (event.source == window &&
            event.data &&
            event.data.direction == "from-content-script") {
          alert("page script received message: \"" + event.data.message + "\"");
        }
      });

    window.addEventListener("load", function() {
        console.log("loaded masked.js");

        let found = [];

        // Compiled from SecLists & gitleaks
        // https://raw.githubusercontent.com/gitleaks/gitleaks/master/config/gitleaks.toml
        // https://github.com/SecLists
        let regexes_resource = 'https://masked.memelife.ca/regexes.txt';
        let secrets_resource = 'https://masked.memelife.ca/secrets.txt';
    
        load_lists(regexes_resource);
        load_lists(secrets_resource);

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
        })
    });