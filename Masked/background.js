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
    
    let storage_data = {
        regexes: [],
        secrets: []
    };

    const all_promises = [
        fetch(browser.runtime.getURL('Masked/resources/regexes.txt'))
            .then(response => response.text())
            .then(data => {
                storage_data.regexes = data.split('\n');
            }
        ).catch((error) =>
            console.error(error)
        ),

        fetch(browser.runtime.getURL('Masked/resources/secrets.txt'))
            .then(response => response.text())
            .then(data => {
                storage_data.secrets = data.split('\n');
                console.log("background.js: loaded secrets");
            }
        ).catch((error) => {
            console.error(error)
        })
    ];

    Promise.all(all_promises).then(() => {
        console.log("background.js: all fetches complete, adding initial storage data");
        browser.storage.local.set({
             regexes: storage_data.regexes, secrets: storage_data.secrets
        });
    }).catch((error) => {
        console.error(error);
    });

    handle_ctx_menus();
}

browser.runtime.onInstalled.addListener(handle_install);

browser.runtime.onMessage.addListener(function(message, sender, senderResponse) {
    if (message.masked_cmd == "get_lists") {
        let storage_data = {
            regexes: [],
            secrets: []
        };
        
        console.log('background.js: message in onMessage handler');
        console.log(message);
        console.log('background.js: sender in onMessage handler');
        console.log(sender);

        browser.storage.local.get()
            .then((response) => {
                storage_data.regexes = response.regexes;
                storage_data.secrets = response.secrets;
                console.log(`background.js: in regexes, got back data: ${response}`);
            }).catch((error) => {
                console.error(`background.js: ${error}`);
            });
        senderResponse(storage_data);
        return true;
    }

    if (message.masked_cmd == "update_badge") {
        browser.action.setBadgeBackgroundColor(255, 0, 0);
        browser.action.setBadgeText(message.count);
    }
});