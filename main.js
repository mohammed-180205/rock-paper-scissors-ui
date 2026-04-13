let humanScore = 0;
let computerScore = 0;


let scoreBoard = document.querySelector("div");
let rockbtn = document.querySelector("#rock");
let paperbtn = document.querySelector("#paper");
let scissorsbtn = document.querySelector("#scissors");





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








function playRound(humanChoice, computerChoice){


if(humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
scoreBoard.textContent = "You win! Rock beats Scissors\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
    
}

else if(humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
scoreBoard.textContent = "You lose! Paper beats Rock\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}



else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
scoreBoard.textContent = "You win! Paper beats Rock\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}

else if(humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
scoreBoard.textContent = "You lose! Scissors beats Paper\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}



else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
scoreBoard.textContent = "You win! Scissors beats Paper\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}

else if(humanChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
scoreBoard.textContent = "You lose! Rock beats Scissors\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}

else if(humanChoice === computerChoice ){
scoreBoard.textContent =  "Its a tie.\nYour score is " + humanScore + " and the Computer's score is " + computerScore ;
}


}


function playGame(){
    if(humanScore===5){
        scoreBoard.textContent="YOU HAVE WON THE GAME! YOUR SCORE IS: " + humanScore + ". COMPUTER'S SCORE IS: " + computerScore + ". ";
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore===5){
        scoreBoard.textContent="YOU HAVE LOST THE GAME! YOUR SCORE IS: " + humanScore + ". COMPUTER'S SCORE IS: " + computerScore + ". ";
        humanScore = 0;
        computerScore = 0;
    }


}


rockbtn.addEventListener("click",() => {
        
        playRound(rockbtn.id, getComputerChoice())
        playGame();
    })

    paperbtn.addEventListener("click",() => {
        
        playRound(paperbtn.id, getComputerChoice())
        playGame();
    })

    scissorsbtn.addEventListener("click",() => {
        
        playRound(scissorsbtn.id, getComputerChoice())
        playGame();
    })