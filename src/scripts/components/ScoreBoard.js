'use strict';

var React = require('react/addons');

require('styles/ScoreBoard.sass');

var ScoreBoard = React.createClass({

  getInitialState: function() {
    return {
        score: 0
    }
  },

  tallyScore: function(score) {
    this.setState({ score : this.state.score + score });
  },

  render: function () {
    return (
         <div className="score-board" ref="scoreBoard">Level 1: {"score: " + this.state.score} </div>
      );
  }
});

module.exports = ScoreBoard;

