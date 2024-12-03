let computerGuessVar;
let luckyButton = document.querySelector('#lucky-button');
let previousGuesses = document.querySelector('.previous-guesses')
let userGuessVar;
let checkGuessAccuracy;
let endButton
let count = 0;


computerGuess();
    userGuess();

function startGame() {
    count = 0;
    computerGuess();
    document.querySelector('#lucky-button').disabled = false
    document.querySelector("#user-guess").disabled = false
    document.querySelector('.end-game').remove()
    previousGuesses.textContent = "Previous Guesses: "
}




// Button click saves user input in variable, clears textbox, focuses on it, every click count increments by one //
function userGuess() {
    luckyButton.addEventListener("click", () => {
        userGuessVar = document.querySelector("#user-guess").value
        document.querySelector("#user-guess").value = ""
        document.querySelector("#user-guess").focus()
        checkGuess()
        count++
        previousGuesses.textContent += ` ${userGuessVar}`
        if (count >= 10) {
            gameOver()
        }
        });
    };


// Random number generator //
function computerGuess() {
    computerGuessVar = Math.floor(Math.random()*100+1);
    console.log(computerGuessVar)
};

// Checking guess //
function checkGuess() {
    if (computerGuessVar > userGuessVar) {
        document.querySelector(".wrong-or-right").textContent = "You guess is too low"
    } else if (computerGuessVar < userGuessVar) {
        document.querySelector(".wrong-or-right").textContent = "You guess is too high"
    } else {
        document.querySelector(".wrong-or-right").textContent = "You guessed it, baby"
        gameOver()
    }
};


// Gameover func

function gameOver() {
    document.querySelector('#lucky-button').disabled = true
    document.querySelector("#user-guess").disabled = true
    endButton = document.createElement("BUTTON")
    document.body.appendChild(endButton)
    endButton.textContent = "New game"
    endButton.className = "end-game"
    endButton.addEventListener("click", () => {
    startGame()
    })
}