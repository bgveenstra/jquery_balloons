//Definition
var balloonApp = {};

//Colors available to the balloons
balloonApp.colors = ["red", "blue", "yellow",
                     "green", "orange", "pink",
                     "teal", "purple", "aqua"];

balloonApp.init = function(){
  for(var i=0; i < balloonApp.colors.length; i++) {
    var value = balloonApp.colors[i];
    var index = i;
    balloonApp.createBalloon(value)
  }
  // or
  // balloonApp.colors.forEach(function(value,index){
  //   balloonApp.createBalloon(value)
  // })
}

//Create a balloon
balloonApp.createBalloon = function(color) {
  var buttonElement = document.createElement("button");
  buttonElement.addEventListener("click", balloonApp.blowUpBalloon);
  buttonElement.innerText = "Ballooon!";
  buttonElement.classList.add("balloon");
  buttonElement.style['background-color'] = color;
  buttonElement.title = "I'm " + color + "!";
  document.body.appendChild(buttonElement);
}

//Blow up a balloon
balloonApp.blowUpBalloon = function(event) {
  var currentButton = event.target; // grab the element that was clicked from the event
  var currentPadding = parseInt(currentButton.style.padding) || 0;
  var newPadding = currentPadding + 10;
  if (newPadding > 50) {
    currentButton.innerText = "BOOM!"
    currentButton.classList.add("boom")
    return false;
  }
  currentButton.style.padding = newPadding + "px";
}