var randomNumber1;
var randomNumber2;

randomNumber1 = Math.floor(Math.random()*6) +1;
randomNumber2 = Math.floor(Math.random()*6) +1;

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png")

// document.getElementsByTagName("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png")
// document.getElementsByTagName("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png")

if(randomNumber1===randomNumber2){
    //h1 stays the same
    document.querySelector("h1").innerHTML="DRAW!";
}
else if(randomNumber1< randomNumber2){
    //h1 says player 2 wins
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    //player 1 wins
    document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins!";
}