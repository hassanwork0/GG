let player1Number = "";
let player2Number = "";
let currentPlayer = 1;


function makeGuess(player) {
    let guess = player === 1 ? document.getElementById('player1GuessInput').value : document.getElementById('player2GuessInput').value;
    let result = player === 1 ? document.getElementById('player1Result') : document.getElementById('player2Result');
    let targetNumber = player === 1 ? player2Number : player1Number;

    let correctDigits = 0;
    let correctPositions = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === targetNumber[i]) {
            correctPositions++;
        }
    for (let i = 0; i < 4; i++) {
        if (targetNumber.includes(guess[i])) {
            correctDigits++;
        }
    }

    result.innerHTML = Correct Digits: ${correctDigits}, Correct Positions: ${correctPositions};

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('player1Guess').style.display = currentPlayer === 1 ? 'block' : 'none';
    document.getElementById('player2Guess').style.display = currentPlayer === 2 ? 'block' : 'none';
}
