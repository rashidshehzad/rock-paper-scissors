console.log("External script script.js referenced by index.html")
const options=["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0
let humanChoice = 0
let computerChoice = 0
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
            console.log("Please try again. You entered your choice wrong.")
        }
    }
    return choice
}
function playRound(humanChoice, computerChoice){
    if (computerChoice==((humanChoice-1)%3)){
        humanScore+=1
        console.log("You beat "+options[computerChoice]+" with "+options[humanChoice])
    }
    else if(humanChoice==((computerChoice-1)%3)){
        computerScore+=1
        console.log("The computer beat "+options[humanChoice]+" with "+options[computerChoice])
    }
    else{
        console.log("It was a draw.")
    }
    console.log("Human - "+humanScore)
    console.log("Computer - "+computerScore)
}
function playGame(rounds){
    console.log(rounds)
    for (let j = 0; j<rounds; j++){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log(j)
    }
    if (humanScore>computerScore){
        console.log("You won!")
    }
    else if(computerScore>humanScore){
        console.log("The computer beat you!")
    }
    else{
        console.log("You're both losers!")
    }
}
function defaultGame(){
    playGame(5)
}