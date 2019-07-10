// program data:

// prompt user for their guess 

// if correct: let the user know they won

// if incorrect: let the user know

//var number = 4;
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 2;
var won = false;
var guesses = [];

for (i = 1; i <= limit; i++) {
    // prompt user for their guess
    do{
        guess = parseInt(prompt("Guess a number"));
    } while(isNaN(guess) || isPreviousGuess(guess));

    if(isPreviousGuess()){
        alert("You have tried this number!");
    }

    // if correct: let the user know they won
    if(guess == number){
        won = true;
        document.write("Correct! You won.")
        break;
    }
    // if incorrect: let the user know
    else{
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));

}

}

if(!won){
    document.write("Sorry, you ran out of tries. \n Game over. \n The answer is: " + number);
}

function isPreviousGuess(){

    for(i = 0; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false;
}