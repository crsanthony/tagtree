define(function (require, exports, module) {
  module.exports = {

    rawSolution: "<p>I am some text</p><h1>my name is chris</h1>",

    getSolutions: function() {
        console.log(this.rawSolution);
    }

  }
});
