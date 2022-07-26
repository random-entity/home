[...document.getElementsByClassName('collapseTrigger')].forEach(collapseTrigger => {
    collapseTrigger.addEventListener("click", function (event) {
        event.stopPropagation();

        [...this.parentElement.querySelectorAll(":scope > li > .nested")].forEach(descendantUl => {
            descendantUl.classList.toggle("inactive");
        });
    });
});