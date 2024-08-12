console.log("loaded background.js");

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

    browser.fetch('https://masked.memelife.ca/regexes.txt')
        .then(response => response.json())
        .then(data => messagePageScript({'regexes': data}))
        .catch(error => console.error(error));
  
    browser.fetch('https://masked.memelife.ca/regexes.txt')
        .then(response => response.json())
        .then(data => messagePageScript({'secrets': data}))
        .catch(error => console.error(error));
    });
       
    
    function messagePageScript() {
        window.postMessage({
            direction: "from-page-script",
            message: "Message from the  age script"
        }, "https://google.ca");
        }






