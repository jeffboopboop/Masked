console.log("loaded background.js");

function handle_ctx_menus() {
    browser.contextMenus.create({
        id: "ctx_masked",
        title: "\x1F[ Masked 🥸]",
        contexts: ["action"]
    });

    browser.contextMenus.create({
            id: "ctx_regex_matching",
            title: "Enable Regex Matching",
            contexts: ["action"]
            //onclick: enable_regexes()
    });

    browser.contextMenus.create({
            id: "ctx_secret_matching",
            title: "Enable Secret Matching",
            contexts: ["action"]
            //onclick: enable_secrets()
    });
}

function handle_install() {
    console.log("Extension installed");

    var storage_data = {
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

    const all_promises = [
        fetch(browser.runtime.getURL('Masked/resources/regexes.txt'))
            .then(response => response.text())
            .then(data => {
                storage_data.lists.regexes = data.split('\n');
                storage_data.lists.regexes.sort();
            }
        ).catch((error) =>
            console.error(error)
        ),

        fetch(browser.runtime.getURL('Masked/resources/secrets.txt'))
            .then(response => response.text())
            .then(data => {
                storage_data.lists.secrets = data.split('\n');
                storage_data.lists.secrets.sort();
                console.log("background.js: loaded secrets");
            }
        ).catch((error) => {
            console.error(error)
        })
    ];

    Promise.all(all_promises).then(() => {
        console.log("background.js: all fetches complete, adding initial storage data");
        
        browser.storage.local.set({masked_data: storage_data})
            .then((response) => {
                console.log(`background.js: storage data saved: ${response}`);
            }).catch((error) => {
                console.error(error);
            });
    }).catch((error) => {
        console.error(error);
    });

    handle_ctx_menus();
}

browser.runtime.onInstalled.addListener(handle_install);

browser.runtime.onMessage.addListener(function(message, sender, senderResponse) {
    var storage_data = {
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

    browser.storage.local.get()
        .then((response) => {
            storage_data = response.masked_data;
            console.log(`background.js: in regexes, got back data: ${response}`);
        }).catch((error) => {
            console.error(`background.js: ${error}`);
        }
    );

    if (message.masked_cmd == "get_lists") {
        if (message.sender == "masked.js" && sender.tab.active == true) {
            let tab_id = sender.tab.id;
            const reply_msg = browser.tabs.sendMessage(tab_id, storage_data);

            reply_msg.then((response) => {
                console.log(`background.js: got response from tab ${tab_id}: ${response}`);
            }).catch((error) => {
                console.error(`background.js: ${error}`);
            });
            return true;
        }
    
        senderResponse(storage_data);
        return true;
    }

    if (message.masked_cmd == "update_badge" && message.sender == 'masked.js') {
        browser.action.setBadgeBackgroundColor(255, 0, 0);
        browser.action.setBadgeText(message.value);
    }
});