$( document ).ready(function(){
    function update(){
        $.get( "../readJSON", function( data ) {
            let pageData = data;
            //page data 
            const result = document.querySelector('.result');
            //update page
            const body = document.querySelector('body');
        
            result.textContent = pageData.win + '/' + pageData.lose + '/' + pageData.draw
            console.log(pageData.shadow)
            if((pageData.shadow == true)){
                body.style.cssText = `-webkit-text-stroke: 5px ${pageData.shadowColor}; color: ${pageData.color}`
            } else {
                body.style.cssText = `color: ${pageData.color}`
            }
        });
    }

    const socket = io();
    socket.on("update", function () {
        update();
    });
    update();
});