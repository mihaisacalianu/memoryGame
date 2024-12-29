document.addEventListener('DOMContentLoaded',init);

function init(){
    const startBtn = document.getElementById('button-start');
    const landingPage = document.getElementById('landing-page');
    const gamePage = document.getElementById('game-page');
    const moves = document.getElementById('score');
    const time = document.getElementById('time');
    const gameSquares = document.getElementsByClassName('game-squares');
    const images = document.getElementsByClassName('img-game');
    const mark = document.getElementsByClassName('mark');
    let movesValue = 0;
    let firstAnimal = images[0].getAttribute('alt');
    let animals = [firstAnimal];

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
                let currentAnimal = images[i].getAttribute('alt');
                if(firstAnimal === currentAnimal || animals.includes(currentAnimal)){
                    showImage(images[i],mark[i]);
                    animals.push(currentAnimal);
                }else{
                    setTimeout(function(){
                        hideImage(images[i],mark[i]);
                    },1000);
                }
                updateMoves();
                firstAnimal = currentAnimal; 
        });

    }
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
  
    }
