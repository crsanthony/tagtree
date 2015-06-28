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
        content: "<img src='images/safari.png' />"
    }
    ],

    pieces: [

    {
        openingTag: true,
        content: "<p>",
        name: "p",
        id: "p1"
    },

    {
        content: "lorum ipsum",
        name: "content",
        id: "c1"
    },

    {
        content: "</p>",
        name: "/p",
        id: "p2"
    },

    {
        openingTag: true,
        content: "<h3>",
        name: "h3",
        id: "h3"
    },

    {
        content: "lorum ipsum",
        name: "content",
        id: "c4"
    },

    {
        content: "</h3>",
        name: "/h3",
        id: "h5"
    },

    {
        openingTag: true,
        content: "<h1>",
        name: "h1",
        id: "h6"
    },

    {
        content: "lorum ipsum",
        name: "content",
        id: "content8"
    },

    {
        content: "</h1>",
        name: "/h1",
        id: "h9"
    },

    {
        openingTag: true,
        content: "<img ",
        name: "img",
        id: "img10"
    },

    {
        content: "src='...'",
        name: "imagecontent",
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
