let heading = document.querySelector(".heading");
document.querySelector(".heading").addEventListener('click', () => {
  ChangeImage1()
  ChangeImage2()
  GuessTheWinner()
})

let num1
let num2
let winner = document.querySelector(".heading")

function ChangeImage1 (){
  num1 = Math.floor(Math.random()*6);
  let image1 = document.querySelector(".img1, src")
  if(num1 == 0){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
  }else if(num1 == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
  }else if(num1 == 2){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
  }else if(num1 == 3){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
  }else if(num1 == 4){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
  }else if(num1 == 5){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
  }
}

function ChangeImage2 (){
  num2 = Math.floor(Math.random()*6);
  let image2 = document.querySelector(".img2, src")
  if(num2 == 0){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
  }else if(num2 == 1){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
  }else if(num2 == 2){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
  }else if(num2 == 3){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
  }else if(num2 == 4){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
  }else if(num2 == 5){
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
  }
}

function GuessTheWinner(){
  if(num1 > num2){
    winner.innerHTML = "Player 1 Wins"
  }else if (num1 < num2){
    winner.innerHTML = "Player 2 Wins"
  }else{
    winner.innerHTML = "Draw"
  }
}