const scoreElm = document.querySelector('.scores');
const winStatusElm = document.querySelector('.win-status');
const moves = document.querySelector('.moves');
const playeMoveImg = document.querySelector('.player-move-img-js');
const computerMoveImg = document.querySelector('.computer-move-img-js');
let Score = JSON.parse(localStorage.getItem('Score')) || { wins: 0, losses: 0, draws: 0 };

function resetGame() {
    Score.draws = 0;
    Score.wins = 0;
    Score.losses = 0;
    
    localStorage.setItem('Score', JSON.stringify(Score));
    showScore(param1="null", param2="null", param3="null");
}   


function showScore(result,playerMove,computerMove) {
    scoreElm.innerHTML = `Wins ${Score.wins}, Loses ${Score.losses}, Draws  ${Score.draws}`;
    if(result){
    winStatusElm.innerHTML = 'You ' + result;
    if (result === 'Draw'){
        winStatusElm.innerHTML = `${result}`;
    }
    }
    if (playerMove && computerMove){
        if(computerMove == 'Rock'){
            computerMoveImg.style.width = '60px';
        }
       playeMoveImg.src = `./images/${playerMove}.png`;
       computerMoveImg.src = `./images/${computerMove}.png`;
        // console.log(playeMoveImg.src);
    }
}

function saveScore(result){
    if (result === 'Win') {
        Score.wins += 1;
    }
    else if (result === 'Lose'){
        Score.losses += 1;
    }
    else {
        Score.draws += 1;
    }

    localStorage.setItem('Score', JSON.stringify(Score));
    
}
function play(player) {
    console.log(player);
    const computer = Math.floor(Math.random() * 3 ) + 1;
    let computerMove= '';
    let result = '';
    let yourChoice = '';
    if (player === 1){
        yourChoice = "Rock";
        if (computer == 1){
            computerMove = 'Rock';
            result = 'Draw';
        }
        else if(computer === 2){
            computerMove = 'Paper';
            result = 'Lose';
        }
        else if(computer === 3){
            computerMove = 'scissors';
            result = 'Win'
        
    }
        
        saveScore(result);

    }
    else if(player == 2){
        yourChoice  = 'Paper';
        if (computer == 1){
            computerMove = 'Rock';
            result = 'Win';
    
        }
        else if(computer === 2){
          
            computerMove = 'Paper';
            result = 'Draw';
        }
        else if(computer === 3){
          
            computerMove = 'Scissors';
            result = 'Lose';
        }
        saveScore(result);
    }
    else if(player === 3){
        yourChoice = 'Scissors';
        if (computer == 1){
            computerMove = 'Rock';
            result = 'Lose';
    
        }
        else if(computer === 2){
            computerMove = 'Paper';
            result = 'Win';
        }
        else if(computer === 3){
           
            computerMove = 'Scissors';
            result = 'Draw';
        }
        saveScore();
    }

    showScore(result,yourChoice,computerMove);
}
