console.log("External script script.js referenced by index.html")
const options=["rock", "paper", "scissors"]
const resultsDiv=document.querySelector("#resultsDiv")
const scoreDisplay=document.querySelector("#currentScore")
let humanScore = 0
let computerScore = 0
let humanChoice = 0
let computerChoice = 0
let winner = null
function display(text){
    const p = document.createElement("p");
    p.textContent=text;
    resultsDiv.appendChild(p);
}
function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    let validChoice=false
    let choice = -1
    while (!validChoice){
        let promptChoice = prompt("Please enter 'rock', 'paper' or 'scissors'").toLowerCase()
        choice=-1
        for (let i = 0; i<options.length; i++){
            if (options[i]==promptChoice){
                choice=i
            }
        }
        if (choice>=0 && choice<options.length){
            validChoice=true
        }
        else{
            display("Please try again. You entered your choice wrong.")
        }
    }
    return choice
}

function playRound(humanChoice, computerChoice){
    if (computerChoice==((humanChoice-1)%3)){
        humanScore+=1
        display("You beat "+options[computerChoice]+" with "+options[humanChoice])
    }
    else if(humanChoice==((computerChoice-1)%3)){
        computerScore+=1
        display("The computer beat "+options[humanChoice]+" with "+options[computerChoice])
    }
    else{
        display("It was a draw.")
    }
    display("Human - "+humanScore)
    display("Computer - "+computerScore)
    if (winner == null){
        scoreDisplay.textContent="Human - "+humanScore+"    Computer - "+computerScore;
        let humanWon = humanScore>=5;
        let computerWon = computerScore>=5;
        if (humanWon && computerWon){
            winner="Both players"
        }
        else if (computerWon){
            winner="Computer"
        }
        else if (humanWon){
            winner="Human"
        }
        (winner!==null && (scoreDisplay.textContent=winner+" won the game!")) //This will never get updated again so it's fine.
    }}

const rockButton = document.querySelector("#Rock")
rockButton.addEventListener("click", () => {playRound(0, getComputerChoice())})
const paperButton = document.querySelector("#Paper")
paperButton.addEventListener("click", () => {playRound(1, getComputerChoice())})
const scissorsButton = document.querySelector("#Scissors")
scissorsButton.addEventListener("click", () => {playRound(2, getComputerChoice())})

/*
function playGame(rounds){
    display(rounds)
    for (let j = 0; j<rounds; j++){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        display(j)
    }
    if (humanScore>computerScore){
        display("You won!")
    }
    else if(computerScore>humanScore){
        display("The computer beat you!")
    }
    else{
        display("You're both losers!")
    }
}
function defaultGame(){
    playGame(5)
}*/