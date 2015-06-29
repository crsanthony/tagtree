define(function (require, exports, module) {
  module.exports = {
    rawSolution: "<p>lorum ipsum</p><h1>lorum ipsum</h1>",

    solutions: [{
        passKey: "pcontent/p",
        content: "<p>IF TOUCAN</p>"
    },

    {
        passKey: "h3content/h3",
        content: "<h3>you can</h3>"
    },

    {
        passKey: "h1content/h1",
        content: "<h1>Build a Website</h1>"
    },
    {
        passKey: "imgimagecontent/img",
        content: "<img src='images/Tom_Toucan-01.png' />"
    }
    ],

    pieces: [

    {
        order: "open",
        tag: "paragraph",
        openingTag: true,
        content: "<p>",
        name: "p",
        id: "p1"
    },

    {
        order: "content",
        tag: "content",
        content: "lorum ipsum",
        name: "content",
        id: "c1"
    },

    {
        order: "closing",
        tag: "paragraph",
        content: "</p>",
        name: "/p",
        id: "p2"
    },

    {
        order: "open",
        tag: "header3",
        openingTag: true,
        content: "<h3>",
        name: "h3",
        id: "h3"
    },

    {
        order: "content",
        tag: "content",
        content: "lorum ipsum",
        name: "content",
        id: "c4"
    },

    {
        order: "closing",
        tag: "header3",
        content: "</h3>",
        name: "/h3",
        id: "h5"
    },

    {
        order: "open",
        tag: "header1",
        openingTag: true,
        content: "<h1>",
        name: "h1",
        id: "h6"
    },

    {
        order: "content",
        tag: "content",
        content: "lorum ipsum",
        name: "content",
        id: "content8"
    },

    {
        order: "closing",
        tag: "header1",
        content: "</h1>",
        name: "/h1",
        id: "h9"
    },

    {
        order: "open",
        tag: "img",
        openingTag: true,
        content: "<img ",
        name: "img",
        id: "img10"
    },

    {
        order: "content",
        tag: "content",
        content: "src='...'",
        name: "imagecontent",
        id: "content11"
    },

    {
        order: "closing",
        tag: "img",
        content: " />",
        name: "/img",
        id: "img12"
    }

    ]

  };
});
