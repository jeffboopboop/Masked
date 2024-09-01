console.log("loaded functions.js");
function add_menu_badges() {
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
}

function status_message(message) {
    $("#status")[0].innerText = message;
    $("#status").fadeIn(1000);
    $("#status").fadeOut(1000);
}

