

let img1="images/dice1.png";
let img2="images/dice2.png";
let img3="images/dice3.png";
let img4="images/dice4.png";
let img5="images/dice5.png";
let img6="images/dice6.png";
let arr=[img1,img2,img3,img4,img5,img6];
function rollDice(){
    var randomNumber = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);

    document.getElementsByClassName("img1")[0].setAttribute("src",arr[randomNumber]);
    document.getElementsByClassName("img2")[0].setAttribute("src",arr[randomNumber2]);
    if(randomNumber===randomNumber2){ 
        document.querySelectorAll(".container h1")[0].innerHTML="Draw!";   
    }
    else if(randomNumber>randomNumber2){
        document.querySelectorAll(".container h1")[0].innerHTML="Player 1 Wins!";
    }
    else{   
        document.querySelectorAll(".container h1")[0].innerHTML="Player 2 Wins!";
    }
}
rollDice();
