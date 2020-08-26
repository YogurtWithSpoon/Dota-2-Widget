$( document ).ready(function(){

    function update(){
        $.get( "../readJSON", function( data ) {
            let pageData = data;
            document.querySelector('.marquee span').textContent = pageData.textLine;
        });
    }

    const socket = io();
    socket.on("update", function () {
        update();
    });
    update();
});