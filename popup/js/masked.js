    'use strict';
    // TODO: Split up content script stuff into.. content scripts.
    // Compiled from SecLists & gitleaks
    // https://raw.githubusercontent.com/gitleaks/gitleaks/master/config/gitleaks.toml
    // https://github.com/SecLists
	let secrets_el = document.getElementById('seecrets-list');
    let regex_el   = document.getElementById('regex-list');
    let found = [];

    secret_list.forEach(
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

    regex_list.forEach(function(r) {
        jQuery("input").each(function(i) {
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
    });

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