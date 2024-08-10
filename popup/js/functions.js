function add_menu_badges() {

}

function status_message(message) {
    $("#status")[0].innerText = message;
    $("#status").fadeIn(3000);
    $("#status").fadeOut(3000);
}

function load_lists(which) {
    fetch(which)
        .then((response) => response.text())
        .then((text) => {
            let lines = text.split("\n");
            let secrets = [];
            let lst_count = 0;

            for (var i=0; i<lines.length; i++) {
                let list_option = document.createElement('option');
                let selected_list = null;
                let line = lines[i];
                let new_id = null;
                
                if (which === 'regexes.txt') {
                    selected_list = document.getElementById("regex-list");
                    new_id = "lst_rgx_";
                } else {
                    selected_list = document.getElementById("seecrets-list");
                    new_id = `lst_sec_`;
                }

                list_option.id = new_id + lst_count++;
                list_option.name = new_id + lst_count;
                list_option.innerText = line;

                selected_list.appendChild(list_option);
            }
        })
        .catch((error) => console.error(error));
}