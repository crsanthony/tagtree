define(function (require, exports, module) {
  module.exports = {

    playScoreSound: function() {
        var snd = new Audio("sounds/Metroid_Door.wav"); // buffers automatically when created
        snd.play();
    }

    , playSelectedSound: function() {
      var snd = new Audio("sounds/Pickup_Coin5.wav"); // buffers automatically when created
      snd.play();
    }

  };
});
