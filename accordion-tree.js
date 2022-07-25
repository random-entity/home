Array.from(document.getElementsByClassName('collapsible')).forEach(
    element => {
        element.addEventListener(
            'click',
            function () {
                this.querySelectorAll('.collapsible').forEach(classList.toggle('active'));
            }
        );
    }
);