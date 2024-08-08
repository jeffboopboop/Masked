function remove_list_items(which) {
    let sel = 'option[id^="lst_sec"]';
    
    if (which === 'secret') {
        document.querySelectorAll(sel).forEach(function(e) {
                if (e.selected) {
                    e.remove();
                }
            )
    }
}