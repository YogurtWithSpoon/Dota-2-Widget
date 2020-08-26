$( document ).ready(function(){
    function update(){
        $.get( "../readJSON", function( data ) {
            let pageData = data;
            //page data 
            const betTeam = document.querySelector('.betTeam');
            const betKof = document.querySelector('.betKof');
            const betPercent = document.querySelector('.betPercent');
            //update page
            const body = document.querySelector('body');
            betTeam.textContent = pageData.betTeam;
            betKof.textContent = pageData.betKof;
            
            if(pageData.betPercent == ""){
                betPercent.textContent = "";
            } else{
                betPercent.textContent = pageData.betPercent + '%'; 
            }
            
            if(pageData.shadow == true){
                body.style.cssText = `text-shadow: ${pageData.shadowColor} 5px 0px 0px, ${pageData.shadowColor} 4.90033px 0.993347px 0px, ${pageData.shadowColor} 4.6053px 1.94709px 0px, ${pageData.shadowColor} 4.12668px 2.82321px 0px, ${pageData.shadowColor} 3.48353px 3.58678px 0px, ${pageData.shadowColor} 2.70151px 4.20736px 0px, ${pageData.shadowColor} 1.81179px 4.6602px 0px, ${pageData.shadowColor} 0.849836px 4.92725px 0px, ${pageData.shadowColor} -0.145998px 4.99787px 0px, ${pageData.shadowColor} -1.13601px 4.86924px 0px, ${pageData.shadowColor} -2.08073px 4.54649px 0px, ${pageData.shadowColor} -2.94251px 4.04248px 0px, ${pageData.shadowColor} -3.68697px 3.37732px 0px, ${pageData.shadowColor} -4.28444px 2.57751px 0px, ${pageData.shadowColor} -4.71111px 1.67494px 0px, ${pageData.shadowColor} -4.94996px 0.7056px 0px, ${pageData.shadowColor} -4.99147px -0.291871px 0px, ${pageData.shadowColor} -4.83399px -1.27771px 0px, ${pageData.shadowColor} -4.48379px -2.2126px 0px, ${pageData.shadowColor} -3.95484px -3.05929px 0px, ${pageData.shadowColor} -3.26822px -3.78401px 0px, ${pageData.shadowColor} -2.4513px -4.35788px 0px, ${pageData.shadowColor} -1.53666px -4.75801px 0px, ${pageData.shadowColor} -0.560763px -4.96845px 0px, ${pageData.shadowColor} 0.437495px -4.98082px 0px, ${pageData.shadowColor} 1.41831px -4.79462px 0px, ${pageData.shadowColor} 2.34258px -4.41727px 0px, ${pageData.shadowColor} 3.17346px -3.86382px 0px, ${pageData.shadowColor} 3.87783px -3.15633px 0px, ${pageData.shadowColor} 4.4276px -2.32301px 0px, ${pageData.shadowColor} 4.80085px -1.39708px 0px, ${pageData.shadowColor} 4.98271px -0.415447px 0px; color: ${pageData.color}`
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