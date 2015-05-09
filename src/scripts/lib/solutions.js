define(function (require, exports, module) {
  module.exports = {

    rawSolution: "<p>I am some text</p><h1>my name is chris</h1>",

    solutions: ["<p>I am some text</p>","<h1>my name is chris</h1>"],

    pieces: [

    {
        content: "<p>",
        id: "tag0"
    },

    {

        content: "I am some text",
        id: "content1"
    },

    {
        content: "</p>",
        id: "tag2"
    },

    {
        content: "<h1>",
        id: "tag3"
    },

    {
        content: "my name is chris",
        id: "tag4"
    },

    {
        content: "</h1>",
        id: "tag5"
    }

    ],

  }
});
