define(function (require, exports, module) {
  module.exports = {

    generateIds: function(pieces) {
        pieces.forEach(function(piece){
            piece.id = Math.random() * 1000 + piece.id;
        });

        return pieces;
    },

    levels: [{
        solutions: [{
            passKey: "acontent/a",
            content: "<a>save Toucan!</a>",
            id: "solution0a"
        }],
        pieces: [

            {
                order: "open",
                tag: "anchor",
                openingTag: true,
                content: "<a>",
                name: "a",
                id: "a1"
            },

            {
                order: "content",
                tag: "content",
                content: "lorum ipsum",
                name: "content",
                id: "c0"
            },

            {
                order: "closing",
                tag: "anchor",
                content: "</a>",
                name: "/a",
                id: "a2"
            }

            ]},
        {
         solutions: [{
                passKey: "pcontent/p",
                content: "<p>Need some help? Here's a clue: </p>",
                id: "solution1a"
            },

            {
                passKey: "h3content/h3",
                content: "<h3>If Toucan can,</h3>",
                id: "solution1b"
            },

            {
                passKey: "h1content/h1",
                content: "<h1>you can too!</h1>",
                id: "solution1c"
            },
            {
                passKey: "imgimagecontent/img",
                content: "<img src='images/Tom_Toucan-01.png' />",
                id: "solution1d"
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

    ]},
    {
         solutions: [{
                passKey: "pcontent/p",
                content: "<p>But Toucan and his friends are in trouble, and that's where you start your ride</p>",
                id: "solution2a"
            },

            {
                passKey: "h3content/h3",
                content: "<h3>Because Toucan and his crew,</h3>",
                id: "solution2b"
            },

            {
                passKey: "h1content/h1",
                content: "<h1>Have lost their stride!</h1>",
                id: "solution2c"
            },
            {
                passKey: "iframeiframecontent/iframe",
                content: "<iframe width='420' height='315' src='https://www.youtube.com/embed/cy46iOwWQiE' frameborder='0'></iframe>",
                id: "solution2d"
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
                tag: "iframe",
                openingTag: true,
                content: "<iframe ",
                name: "iframe",
                id: "iframe10"
            },

            {
                order: "content",
                tag: "content",
                content: "src='...'",
                name: "iframecontent",
                id: "content11"
            },

            {
                order: "closing",
                tag: "iframe",
                content: " </iframe>",
                name: "/iframe",
                id: "iframe12"
            }

    ]},
    {
         solutions: [{
                passKey: "h1content/h1",
                content: "<h1>Things you'll need:</h1>",
                id: "solution3a"
            },

            {
                passKey: "ullicontent/lilicontent/li/ul",
                content: "<ul><li>Gumption</li><li>patience</li></ul>",
                id: "solution3b"
            },

            {
                passKey: "h5content/h5",
                content: "<h5>And don't forget your friends, indeed!</h5>",
                id: "solution3c"
            },
            {
                passKey: "imageimagecontent/img",
                content: "<img src='http://cbcpreschool.webs.com/jungle-clip-art-15.gif' />",
                id: "solution3d"
            }
            ],
        pieces: [

            {
                order: "open",
                tag: "paragraph",
                openingTag: true,
                content: "<h1>",
                name: "h",
                id: "h1"
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
                tag: "header1",
                content: "</h1>",
                name: "/h",
                id: "h2"
            },

            {
                order: "open",
                tag: "ul",
                openingTag: true,
                content: "<ul>",
                name: "ul",
                id: "ul1"
            },

            {
                order: "open",
                tag: "li",
                content: "<li>",
                name: "li",
                id: "li1"
            },

            {
                order: "content",
                tag: "content",
                content: "lorum ipsum",
                name: "content",
                id: "c10"
            },

            {
                order: "closing",
                tag: "li",
                content: "</li>",
                name: "/li",
                id: "li2"
            },

            {
                order: "open",
                tag: "li",
                content: "<li>",
                name: "li",
                id: "li3"
            },

            {
                order: "content",
                tag: "content",
                content: "lorum ipsum",
                name: "content",
                id: "c11"
            },

            {
                order: "closing",
                tag: "li",
                content: "</li>",
                name: "/li",
                id: "li4"
            },

            {
                order: "closing",
                tag: "ul",
                openingTag: true,
                content: "</ul>",
                name: "/ul",
                id: "ul2"
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
                id: "img15"
            }

    ]}
    ]

  };
});
