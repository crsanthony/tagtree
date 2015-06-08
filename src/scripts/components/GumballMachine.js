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
    var engine = Engine.create(document.getElementById('Gumball'));
    var pieces = [];
// create two boxes and a ground
    Solutions.pieces.forEach(function(value, index){
        var piece = Bodies.rectangle(Math.random()*800, 0, 100, 50);
        pieces.push(piece)
    })
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    pieces.push(ground);

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

