//Namespacing
var balloonApp = {};

//Available colors for the balloons
balloonApp.colors = ["red", "blue", "yellow",
                     "green", "orange", "pink",
                     "teal", "purple", "aqua"];

//Initialize the balloons
balloonApp.init = function(){

    balloonApp.colors.forEach(function(value, index){
      balloonApp.createBalloonElement(value);
    })

    $('button').on("click", balloonApp.blowUpBalloon);

}
//Create a new balloon
balloonApp.createBalloonElement = function(color) {
    var $buttonElement = $("<button></button>");
    $buttonElement.text("Ballooon!");
    $buttonElement.addClass("balloon");
    $buttonElement.css('background-color', color);
    $buttonElement.attr("title", "I'm " + color + "!");
    $('body').append($buttonElement);
}

//Blow up a balloon
balloonApp.blowUpBalloon = function(event) {
    var $currentButton = $(event.target); // grab the element that was clicked from the event
    var currentPadding = parseInt($currentButton.css("padding")) || 0;
    var newPadding = currentPadding + 10;
    if (newPadding > 50) {
      $currentButton.text("BOOM!");
      $currentButton.addClass("boom");
      return false;
    }
    $currentButton.css("padding", newPadding + "px");
}