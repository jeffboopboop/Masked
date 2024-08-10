document.querySelectorAll("button[id^='secret'], button[id^='regex']").forEach(
    function(e) {
        e.addEventListener("click",
            function(b) {
                let selector    = null;
                let target_list = null;
                
                if (b.target.id.match(/^secret/)) {
                    target_list = document.getElementById('seecrets-list');
                    selector = "option[id^='lst_sec']";
                } else {
                    target_list = document.getElementById('regex-list');
                    selector = "option[id^='lst_rgx']";
                }

                if (b.target.id.match(/remove$/)) {
                    let count = 0

                    document.querySelectorAll(selector).forEach(
                        function(s) {
                            if (s.selected) { 
                                s.remove();
                                count++;
                            }
                        }
                    );
            
                    status_message(`${count} items removed`);
                } else if (b.target.id.match(/append$/)) {
                    let lst_count = target_list.length;
                    let list_option = document.createElement('option');

                    list_option.id = "lst_sec_" + lst_count++;
                    list_option.name = "lst_sec_" + lst_count;
                    list_option.text = document.getElementById("add-secret").text;
                    console.log(list_option);
                    target_list.appendChild(list_option);
                }
            }
        );
    }
);

document.addEventListener("DOMContentLoaded", function(event) {

    
});