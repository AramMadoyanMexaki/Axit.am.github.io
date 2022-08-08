const btn = document.querySelectorAll(".tab_item");

btn.forEach(function(item) {
    item.addEventListener("click", function() {
        btn.forEach(function(item) {
            item.classList.remove("active");
        })

        item.classList.add("active");
    });

});
