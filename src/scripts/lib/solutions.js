define(function (require, exports, module) {
  module.exports = {

    rawSolution: "<p>I am some text</p><h1>my name is chris</h1>",

    solutions: ["<p>I am some text</p>","<h1>my name is chris</h1>"],

    getSolutions: function() {
        var solutions = [];
        var solutionsString = this.rawSolution;
        for(var a = 0; a < this.rawSolution.length; a++) {
          if( solutionsString[a] === "<") {
             var tag = solutionsString.slice(solutionsString.indexOf(solutionsString[a]),
                solutionsString.indexOf(">")+ 1);
          }
        }

    }

  }
});
