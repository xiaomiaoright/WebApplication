// program data:

// prompt user for their guess 

// if correct: let the user know they won

// if incorrect: let the user know

var number = 4;
var guess;
var limit = 5;

for (i = 1; i <= limit; i++) {
    // prompt user for their guess 
    guess = prompt("Guess a number");

    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.")
    }
    // if incorrect: let the user know
    else{
        alert("incorrect. \nTries remaining: " + (limit -i));

}


}