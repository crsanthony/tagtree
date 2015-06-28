define(function (require, exports, module) {
  module.exports = {

    rawSolution: "<p>lorum ipsum</p><h1>lorum ipsum</h1>",

    solutions: [{
        passKey: "pcontent1/p",
        content: "<p>IF TOUCAN</p>"
    },

    {
        passKey: "h1content4/h1",
        content: "<h1>you can</h1>"
    },

    {
        passKey: "h1content10/h1",
        content: "<h1>Build a Website</h1>"
    },
    {
        passKey: "imgcontent7/img",
        content: "<img src='images/safari.png' />"
    }
    ],

    pieces: [

    {
        content: "<p>",
        name: "p",
        id: "p1"
    },

    {

        content: "lorum ipsum",
        name: "content1",
        id: "c1"
    },

    {
        content: "</p>",
        name: "/p",
        id: "p2"
    },

    {
        content: "<h1>",
        name: "h1",
        id: "h3"
    },

    {
        content: "lorum ipsum",
        name: "content4",
        id: "c4"
    },

    {
        content: "</h1>",
        name: "/h1",
        id: "h5"
    },
    {
        content: "<h1>",
        name: "h1",
        id: "h6"
    },

    {
        content: "lorum ipsum",
        name: "content10",
        id: "content8"
    },

    {
        content: "</h1>",
        name: "/h1",
        id: "h9"
    },

    {
        content: "<img ",
        name: "img",
        id: "img10"
    },

    {
        content: "src='...'",
        name: "content7",
        id: "content11"
    },

    {
        content: " />",
        name: "/img",
        id: "img12"
    }

    ]

  };
});
