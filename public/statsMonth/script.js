$( document ).ready(function(){
    function update(){
        $.get( "../readJSON", function( data ) {
            let pageData = data;
            //page data 
            const result = document.querySelector('.result');
            const percent = document.querySelector('.percent')
            //update page
            const body = document.querySelector('body');
            const sum = Number(pageData.win2) + Number(pageData.lose2);
            const oneperc =  100 / sum;
            result.textContent = pageData.win2 + '/' + pageData.lose2 + '/' + pageData.draw2;
            percent.textContent = "WinRate " + (Number(pageData.win2) * oneperc).toFixed(2) + "%";
            body.style.cssText = '#000'
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