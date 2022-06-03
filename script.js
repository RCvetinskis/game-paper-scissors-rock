"use strict"

const button = document.querySelector("button")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const hand = document.querySelectorAll(".hand")
const mainContainer = document.querySelector(".container")
let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score")


let selectedSymbol = ""
let pcChoise= ""


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

  
function playerChoise(e){
    hand.forEach(x=>x.classList.remove("border"))
    e.target.classList.add("border")
     if( e.target.className.includes("rock")) selectedSymbol = "rock"
     if( e.target.className.includes("paper")) selectedSymbol = "paper"
     if( e.target.className.includes("scissors")) selectedSymbol = "scissors"
    //  console.log(selectedSymbol)
    
}

hand.forEach(x=>x.onclick = playerChoise)

function getCompuerChoise(){
    const computerSelection = ["paper", "rock", "scissors"]
    const randomNumber = Math.floor(Math.random()*3)
     return computerSelection[randomNumber]
}


        let computerClicks = 1
        let playerClicks = 1
        

   button.onclick =function(){
    pcChoise = getCompuerChoise()
    let result = game()
    if(result === "won"){
        playerScore.innerText = playerClicks++
    }else if(result === "lost"){
     computerScore.innerText = computerClicks++
    }else(alert("draw"))
    console.log(playerClicks,computerClicks)
    console.log(result,pcChoise)
    ifWins()

   }

   function ifWins(){
       if(computerClicks === 6){
           alert("Computer has won!")
           location.reload()

       }else if(playerClicks === 6){
           alert("Human has won!")
           location.reload()
       }
   }
   

  
    
 
