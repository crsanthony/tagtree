define(function (require, exports, module) {
  module.exports = {

    rawSolution: "<p>lorum ipsum</p><h1>lorum ipsum</h1>",

    solutions: [{
        passKey: "tag0content1tag2",
        content: "<p>IF TOUCAN</p>"
    },

    {
        passKey: "tag3content4tag5",
        content: "<h1>you can</h1>"
    }

    ],

    pieces: [

    {
        content: "<p>",
        id: "tag0"
    },

    {

        content: "lorum ipsum",
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
        content: "lorum ipsum",
        id: "content4"
    },

    {
        content: "</h1>",
        id: "tag5"
    }

    ],

  }
});
