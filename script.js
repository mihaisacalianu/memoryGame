document.addEventListener('DOMContentLoaded',init);

function init(){
    const startBtn = document.getElementById('button-start');
    const landingPage = document.getElementById('landing-page');
    const gamePage = document.getElementById('game-page');
    const moves = document.getElementById('score');
    const time = document.getElementById('time');
    let movesValue = 0;

    console.log(startBtn);

    startBtn.addEventListener('click',startGame);

    function startGame(){
        landingPage.style.display = 'none';
        gamePage.style.display = 'grid';
        moves.innerText = `moves: ${movesValue}`;
        timer();
    }

    function timer(){
        var sec = 0;
        var min = 0;
        var timer = setInterval(function(){
            time.innerHTML = `time: 0${min}:0${sec}`;
            sec++;
            if(sec > 59){
                min++;
                sec = 0;
                time.innerHTML = `time: 0${min}:0${sec}`;  
            }
            else if(min > 2){
                clearInterval(timer);
            }
            else if(sec > 9){
                time.innerHTML = `time: 0${min}:${sec}`;
            }
           
        },1000);
    }
}