"use strict"

const button = document.querySelector("button")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const hand = document.querySelectorAll(".hand")
const mainContainer = document.querySelector(".container")
let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score")

// pushing player choises or computer choises to array
let selectedSymbol = ""
let pcChoise= ""

// logic of game
function game(){
    let result = "draw"
   if(selectedSymbol=== "scissors" && pcChoise ==="paper") result = "won"
   if(selectedSymbol=== "paper" && pcChoise ==="rock") result = "won"
   if(selectedSymbol=== "rock" && pcChoise ==="scissors") result = "won"

   if(selectedSymbol=== "paper" && pcChoise ==="scissors") result = "lost"
   if(selectedSymbol=== "rock" && pcChoise ==="paper") result = "lost"
   if(selectedSymbol=== "scissors" && pcChoise ==="rock") result = "lost"
   return result
   
   }

  // event listener function with selection logic
function playerChoise(e){
    
    hand.forEach(x=>x.classList.remove("border"))
    hand.forEach(x=>x.classList.remove("scale"))
    if(e.target.className.includes("playerHand")){
    e.target.classList.add("scale")
    e.target.classList.add("border")
        if( e.target.className.includes("rock")) selectedSymbol = "rock"
        if( e.target.className.includes("paper")) selectedSymbol = "paper"
        if( e.target.className.includes("scissors")) selectedSymbol = "scissors"
    }

    //  console.log(selectedSymbol)
    
}
//click event listerner
hand.forEach(x=>x.onclick = playerChoise)

// computer choise
function getCompuerChoise(){
    const computerSelection = ["paper", "rock", "scissors"]
    const randomNumber = Math.floor(Math.random()*3)
     return computerSelection[randomNumber]
}


// clicks counter
        let pcScore = 1
        let userSCore = 1
        
 // declaration of  logic who  wins or lose
   button.onclick =function(){
     pcChoise = getCompuerChoise()
        let result = game()
        if(result === "won"){
        playerScore.innerText = userSCore++
     }else if(result === "lost"){
     computerScore.innerText = pcScore++
    }else(alert("draw"))
    console.log(userSCore,pcScore)
    console.log(result,pcChoise)
    ifWins()

   }
//declaration of winner by click
   function ifWins(){
       if(pcScore === 4){
           alert("Computer has won!")
           location.reload()

       }else if(userSCore === 4){
           alert("Human has won!")
           location.reload()
       }
   }
   

  
    
 
