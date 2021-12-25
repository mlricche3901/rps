
/*Create table that decides who wins game*/

/*Set variable equal to computerPlay*/
/*Set variable equal to playerSelection*/

/*Comare computerPlay vs playerSelection
to see who wins*/

/*function playerSelection() {
   return prompt("What would you like to play? Rock, Paper or Scissors?");
}*/


function playRound() {
    var rps = ["Rock", "Paper", "Scissors"];

    function computerPlay() {
        return rps[Math.floor(Math.random()*rps.length)];
    }
    
    let cp = computerPlay()
    console.log(cp);

    function playerSelection() {
        return prompt("What would you like to play? Rock, Paper or Scissors?");
     }   
     let ps = playerSelection().toLowerCase();
    console.log(ps)
if (ps === "rock" && cp === "Scissors") {
    return "Computer played Scissors - Player Wins";
} else if (ps === "rock" && cp === "Paper") {
    return "Computer played Paper - Computer Wins";
} else if (ps === "rock" && cp === "Rock") {
    return "Tie, play again";
} else if (ps === "paper" && cp === "Paper") {
    return "Tie, play again";
}else if (ps === "paper" && cp === "Rock") {
    return "Computer played Rock - Player Wins";
} else if (ps === "paper" && cp === "Scissors") {
    return "Computer played Scissors - Computer Wins";
} else if (ps === "scissors" && cp === "Rock") {
    return "Computer played Rock - Computer Wins";
} else if (ps === "scissors" && cp === "Paper") {
    return "Computer played Paper - Player wins";
} else if (ps === "scissors" && cp === "Scissors") {
    return "Tie, play again";
    };
};

/*let play = playRound();*/
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
