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

    , playBadBlockSound: function() {
        var snd = new Audio("sounds/badblock_3.wav"); // buffers automatically when created
        snd.play();
    }

    , playBlockOnBoard: function() {
        var snd = new Audio("sounds/new_block_onboard.wav");
        snd.play();
    }

  };
});
