document.querySelector('.song').addEventListener("click",function(){
  var song=new Audio('sounds/tum.mp3');
  song.play();
})


var noOfDrumButton = document.querySelectorAll(".drum").length;
for (var j = 0; j < noOfDrumButton; j++) {
 document.querySelectorAll(".drum")[j].addEventListener("click", function() {
   var buttonhtml = this.innerHTML;
   sound(buttonhtml);
  });
}
document.addEventListener("keypress",function(event){
   sound(event.key);
 });

function sound(key){
  switch (key) {
    case "w":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "a":
      var tom1= new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "s":
      var tom2= new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "d":
      var tom4= new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "l":
      var kick= new Audio('sounds/kick-bass.mp3');
      kick.play();
    default: console.log(buttonhtml)

  }
}
