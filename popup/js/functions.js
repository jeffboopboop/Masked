function remove_selected_items(which) {
    let sel = which === "regex" ? "lst_reg" : "lst_sec";
    console.log(`Selector for remove items is: ${sel}`);
    document.querySelectorAll(`option[id^='${sel}']`).forEach(function(e) {
        if (e.selected) { 
            console.log(e.innerText);
        }
    });
}