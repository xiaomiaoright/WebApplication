// program data:

// prompt user for their guess 

// if correct: let the user know they won

// if incorrect: let the user know

var number = 4;
var guess;
var limit = 5;
var won = false;
var guesses = [];

for (i = 1; i <= limit; i++) {
    // prompt user for their guess 
    guess = prompt("Guess a number");

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
    document.write("Sorry, you ran out of tries. \n Game over.");
}