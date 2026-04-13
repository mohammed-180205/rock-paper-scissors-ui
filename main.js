let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let symbol = Math.floor(Math.random() * 3);
    if(symbol === 0){
        return "rock";
    }
    else if(symbol === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
let humanChoice = prompt("type rock, paper or scissors");

    if(humanChoice.toLowerCase() === "rock"){
        return "rock";
    }
    else if(humanChoice.toLowerCase() === "paper"){
        return "paper";
    }
    else if(humanChoice.toLowerCase() === "scissors"){
        return "scissors";
    }
    else{
        return "type a valid choice";
    }


}






function playRound(humanChoice, computerChoice){


if(humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    return "You win! Rock beats Scissors\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
    
}

else if(humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
return "You lose! Paper beats Rock\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}



else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
return "You win! Paper beats Rock\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}

else if(humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
return "You lose! Scissors beats Paper\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}



else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
return "You win! Scissors beats Paper\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}

else if(humanChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
return "You lose! Rock beats Scissors\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}

else if(humanChoice === computerChoice ){
return "Its a tie.\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}

else {
    return "type a valid choice";
}



}





function playGame(){

console.log(playRound(getHumanChoice() , getComputerChoice()));
console.log(playRound(getHumanChoice() , getComputerChoice()));
console.log(playRound(getHumanChoice() , getComputerChoice()));
console.log(playRound(getHumanChoice() , getComputerChoice()));
console.log(playRound(getHumanChoice() , getComputerChoice()));



    
}


playGame();