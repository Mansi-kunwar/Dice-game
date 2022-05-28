var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;

// if (randomNumber1===1)
// // document.getElementsByClassName("img1")[0].style.backgroundImage = "url('images/dice1.png')";
// var im1=document.getElementByClassName("img1").src = "images/dice1.png"
// else if (randomNumber1===2)
// // document.getElementsByClassName("img1")[1].style.backgroundImage = "url('images/dice2.png')";
// var im1=document.getElementByClassName("img1").src = "images/dice2.png"
// else if (randomNumber1===3)
// // document.getElementsByClassName("img1")[2].style.backgroundImage = "url('images/dice3.png')";
// var im1=document.getElementByClassName("img1").src = "images/dice3.png"
// else if (randomNumber1===4)
// // document.getElementsByClassName("img1")[3].style.backgroundImage = "url('images/dice4.png')";
// var im1=document.getElementByClassName("img1").src = "images/dice4.png"
// else if (randomNumber1===5)
// // document.getElementsByClassName("img1")[4].style.backgroundImage = "url('images/dice5.png')";
// var im1=document.getElementByClassName("img1").src = "images/dice5.png"
// else 
// // document.getElementsByClassName("img1")[5].style.backgroundImage = "url('images/dice6.png')";
// var im1=document.getElementByClassName("img1").src = "images/dice5.png"

document.querySelector(".img1").setAttribute('src',"images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute('src',"images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if((randomNumber1<randomNumber2)) {
	document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
	document.querySelector("h1").innerHTML="Draw!"
}