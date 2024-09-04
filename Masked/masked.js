    'use strict';
        console.log("loaded masked.js");
        let found = [];
        var storage_data = {
            "regexes": [],
            "secrets": []
        };

        async function init() {
            try {
                let data = await browser.storage.local.get();
                storage_data.regexes = data.regexes;
                storage_data.secrets = data.secrets;
                console.log(`masked.js: got some stuff from storage: ${data}`);
            } catch (error) {
                console.error(error);
            }
        
            if (!storage_data.regexes) {
                console.log("masked.js: Found nothing in storage, msg -> bg script");
                try {
                    let response = await browser.runtime.sendMessage({
                        "masked_cmd": "get_lists",
                        "sender": "masked.js"
                    });
                    storage_data.regexes = response.regexes;
                    storage_data.secrets = response.secrets;
                    console.log(`Got: ${response}`);
                } catch (error) {
                    console.error(error);
                }
            }
        
            console.log(storage_data.secrets);
            document.head.append('a.masked { position: relative; top: 50%; z-index: 2; div,input.maskedparent { position: relative;  z-index: 1; }');
            do_masks(storage_data);
        }

        init();
    
        function do_masks(sturrige) {
            console.log(`doin' masks`);
            sturrige.secrets.forEach(function(secret) {
                console.log(secret);
                let selector = '[id*="' + secret + '"]';
                document.querySelectorAll(selector).forEach(
                function(hit) {
                        found.push(hit);
                        console.log('id_match: ' + secret);
                    }
                );
            });

            sturrige.regexes.forEach((regex) => {
                console.log(regex);
                document.querySelectorAll("input,div").forEach(function(i) {
                    console.log(regex);
                    var input_val = i.value;
                    var input_len = i.length;
                    var input_type = i.type;

                    if (input_len > 3 && input_type != "password" && input_type != "hidden") {
                        if (input_val.match(regex)) {
                            matched_regs++;
                            found.push(i);
                            console.log('regex_match ' + input_val);
                        }
                    }
                });
            });

            console.log(`count found: ${found.length}`);

            found.forEach((f) => {
                if (f.type != 'password' && f.type != 'hidden') {
                    let holder = document.createElement('a');
                    
                    
                    new ResizeObserver(() => {
                        holder.style.top = '50%';    
                    }).observe(document.body);

                    holder.id = f.id + '-masked';
                    holder.innerHTML = '✂️';
                    holder.style.top = '51%';
                    holder.style.position = 'relative';
                    holder.style.zIndex = '99';
                    holder.style.left = "90%";

                    if (typeof(f) == 'input') {
                        if (f.length) {
                            holder.setAttribute('value', f.value);
                        }
                    } else {
                        holder.setAttribute('textContent', f.value);
                    }
                        

                    f.before(holder);
                    f.type = 'password';

                    $("a[id$=-masked").on("click", () => {
                        navigator.clipboard.writeText($("#email-masked").next().val());
                    });
                }
            });
        }