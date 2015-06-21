'use strict';

var React = require('react/addons');
var Matter = require('matter-js')
var Solutions = require('../lib/solutions')

require('styles/GumballMachine.sass');

var GumballMachine = React.createClass({

  componentDidMount: function() {
    var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create a Matter.js engine
    var engine = Engine.create(document.getElementById('Gumball'), {
        render: {
            options: {
                height: 1000,
            }
        }
    });
    engine.world
    engine.world.bounds.max.y = 1000;
    var pieces = [];
// create two boxes and a ground
    Solutions.pieces.forEach(function(value, index){
        var piece = Bodies.rectangle(Math.random()*600, 0, 50, 25);
        pieces.push(piece)
    });

// add all of the bodies to the world
    World.add(engine.world, pieces);

// run the engine
    Engine.run(engine);
  },

  render: function () {
    return (
        <div id="Gumball">

        </div>
      );
  }
});

module.exports = GumballMachine;

