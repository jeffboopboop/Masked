browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "ctx_regex_matching",
        title: "Enable Regex Matching",
        contexts: ["browser_action"]
        //onclick: enable_regexes()
    });

    browser.contextMenus.create({
        id: "ctx_secret_matching",
        title: "Enable Secret Matching",
        contexts: ["browser_action"]
        //onclick: enable_secrets()
    });

    
});


