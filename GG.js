let player1Number = "";
let player2Number = "";
let currentPlayer = 1;
let title = "Guessing Game";
let maxDigits = 4;

document.getElementById("title").innerHTML = title;

function startGame(player) {
    if (player === 1) {
        player1Number = document.getElementById('player' + player + 'Number').value;
        document.getElementById('Submit' + 2).style.display = 'block';
    } else {
        player2Number = document.getElementById('player' + player + 'Number').value;
        document.getElementById('Submit' + 1).style.display = 'block';

    }
    document.getElementById('Submit' + player).style.display = 'none';
    document.getElementById('player' + player + 'Number').disabled = true;

    if (player1Number && player2Number) {
        document.getElementById('player1Guess').style.display = 'block';
        document.getElementById('player2Guess').style.display = 'none';
    }
}

function makeGuess(player) {
    let guess = document.getElementById('player' + player + 'GuessInput').value;
    let result = document.getElementById('player' + player + 'Result');
    let targetNumber = player === 1 ? player2Number : player1Number;


    let correctDigits = 0;
    let correctPositions = 0;

    //TODO:Checking for (same postion , correct digits)
    for (let i = 0; i < maxDigits; i++) {
        for (let j = i; j < maxDigits; j++) {
            if (guess[i] == targetNumber[j]) {
                if (i === j) {
                    correctPositions++;
                }
                ++correctDigits;

                //get out of loop when number is found
                break;
            }
        }
    }


    //TODO:Show the resault of the guess
    if (correctDigits === maxDigits && correctPositions === maxDigits) {
        document.getElementById('player1Guess').style.display = 'none';
        document.getElementById('player2Guess').style.display = 'none';
        document.getElementById("title").innerHTML = "Player " + player + "Won !";
        document.getElementById("restart").style.display = "block";
        result.innerHTML = `Correct Digits: ${correctDigits}, Correct Positions: ${correctPositions}`;
    } else {

        result.innerHTML = `Correct Digits: ${correctDigits}, Correct Positions: ${correctPositions}`;

        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById('player1Guess').style.display = currentPlayer === 1 ? 'block' : 'none';
        document.getElementById('player2Guess').style.display = currentPlayer === 2 ? 'block' : 'none';

    }
}

//TODO:Rest the stats of player and the textfields value
function restart() {
    player1Number = "";
    player2Number = "";

    //number of the current supported players 
    let num_of_players = 2;

    currentPlayer = 1;

    //Iteration to reset the n number of players  
    for (let i = 1; i <= num_of_players; ++i) {
        let result = document.getElementById('player' + i + 'Result').innerHTML = '';
        document.getElementById('player' + i + 'Number').disabled = false;
        document.getElementById('player' + i + 'Number').value = '';
        document.getElementById('player' + i + 'Number').value = "";

    }

    document.getElementById('Submit1').style.display = 'block';
    document.getElementById("restart").style.display = "none";
    document.getElementById("title").innerHTML = title;


}