$( document ).ready(function(){
    function update(){
        $.get( "../readJSON", function( data ) {
            clearInterval(countdown);
            let pageData = data;
            console.log()
            //page data 
            const team1 = document.querySelector('.team1__logo');
            const team2 = document.querySelector('.team2__logo');
            const title1 = document.querySelector('.team1__title');
            const title2 = document.querySelector('.team2__title');
            const gameType = document.querySelector('.gametype');
    
            //score or timer 
    
            //minutes
            const score1 = document.querySelector('.team1__score');
            //seconds
            const score2 = document.querySelector('.team2__score');
            //update page
            team1.setAttribute('src','flags/'+pageData.team1+'.mp4');
            team2.setAttribute('src','flags/'+pageData.team2+'.mp4');
            title1.textContent = pageData.team1;
            title2.textContent = pageData.team2;
            gameType.textContent = pageData.gametype;
            score1.textContent = pageData.score1;
            score2.textContent = pageData.score2;
            if(pageData.time ==  true){
               $( ".team_score" ).css( "fontSize", "12em" )
               document.querySelector('.versus>span').textContent = ':'
               let type = document.querySelector('.type');
               let time = document.querySelector('.time')
               let scorewrapper = document.querySelector('.score__wrapper')
               scorewrapper.style.width = 60+"%";
               time.append(type);
               
    
               countdown = setInterval(()=>{
                
                let minutes = Number(score1.textContent);
                let seconds = Number(score2.textContent);
        
                if(seconds<=0){
                    seconds = 59;
                    minutes--;
                } else {
                    seconds--;
                }
    
                if(minutes<10){
                    score1.textContent = "0"+minutes
                } else {
                    score1.textContent = minutes;
                }
    
                if(seconds<10){
                    score2.textContent = "0"+seconds;
                } else {
                    score2.textContent = seconds;
                }
    
                if(minutes<0){
                    score1.textContent='';
                    score2.textContent='';
                    document.querySelector('.versus>span').textContent = 'Скоро начнем';
                    clearInterval(countdown);
                }
                },1000)
            }
        });
    }
    let countdown;
    const socket = io();
    socket.on("update", function () {
        update();
    });
    update();
});