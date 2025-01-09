document.addEventListener('DOMContentLoaded',init);

function init(){
    const startBtn = document.getElementById('button-start');
    const stopGameBtn = document.getElementById('stop-game-btn');
    const landingPage = document.getElementById('landing-page');
    const gamePage = document.getElementById('game-page');
    const moves = document.getElementById('score');
    const time = document.getElementById('time');
    const gameSquares = document.getElementsByClassName('game-squares');
    const images = document.getElementsByClassName('img-game');
    const mark = document.getElementsByClassName('mark');
    const mark1 = document.querySelectorAll('.mark');
    const gameOver = document.getElementById('game-over');
    const restartBtn = document.getElementById('restart-game');
    const finalScore = document.getElementById('final-score');

    gameOver.style.display = 'none';
    let movesValue = 0;
    let firstAnimal = '';
    let currentAnimal = '';
    let animals = [];
    var numOfOcc = 0;
    var timer1 = null;

    startBtn.addEventListener('click',startGame);
    function startGame(){
        landingPage.style.display = 'none';
        gamePage.style.display = 'grid';
        moves.innerText = `moves: ${movesValue}`;
        timer();
        hideImages(images);
        for(let i=0;i<gameSquares.length;i++){
         gameSquares[i].addEventListener('click',function(){
                showImage(images[i],mark[i]);
                currentAnimal = images[i].getAttribute('alt');
                if(animals.length === 0){
                    firstAnimal = currentAnimal;
                }
                numOfOcc = animals.filter(x => x === currentAnimal).length;
                if(firstAnimal === currentAnimal ||
                    animals.includes(currentAnimal))
                    {
                    showImage(images[i],mark[i]);
                    if(numOfOcc < 4){
                        animals.push(currentAnimal);
                        console.log('array:',animals);
                    }
                    }else{
                        setTimeout(function(){
                            hideImage(images[i],mark[i]);
                        },1000);}
                       updateMoves();
                       firstAnimal = currentAnimal;
                       if(checkIfGameIsOver()){
                        animals = [];
                       } 
        }
         );
    }
    }
    function timer(){
        var sec = 0;
        var min = 0;
         timer1 = setInterval(function(){
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
    function hideImages(array){
       for(let i = 0;i<array.length;i++){
       array[i].style.display = 'none';
       }
    }
    function showImage(img,mark){
        mark.style.display = 'none';
        img.style.display = 'block';
    }
    function hideImage(img,mark){
        mark.style.display = 'block';
        img.style.display = 'none';
    }
    function updateMoves(){
            movesValue++;
            moves.innerText = `moves: ${movesValue}`;
    }
    function checkIfGameIsOver(){
        if(animals.length === 16){
            console.log('array:',animals);
            gamePage.style.display = 'none';
            gameOver.style.display = 'flex';
            clearInterval(timer);
            finalScore.innerText = `your score is ${movesValue} moves in ${time.innerText}`;
            return true;
        }

    }
    function restartGame(){
        landingPage.style.display = 'none';
        gamePage.style.display = 'grid';
        hideImages(images);
        mark1.style.display = 'grid';
        animals = [];
        moves.innerText = `moves: ${movesValue}`;
        timer(); 
    }
    restartBtn.addEventListener('click',()=>{
        gameOver.style.display = 'none';
        clearInterval(timer1);
        movesValue = 0;
        restartGame();
        time.innerHTML = `time: 00:00`;
        firstAnimal = '';
        console.log('array before start:',animals);
    });
    stopGameBtn.addEventListener('click',function(){
            gamePage.style.display = 'none';
            gameOver.style.display = 'flex';
            clearInterval(timer);
            finalScore.innerText = `your score is ${movesValue} moves in ${time.innerText}`;
    })
    }
