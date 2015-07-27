'use strict';

var React = require('react/addons');
var GameView = require('components/GameView');
var Preview = require('components/Preview');
var ScoreBoard = require('components/ScoreBoard');
var GumballMachine = require('components/GumballMachine')


// CSS
require('normalize.css');
require('styles/Main.sass');
require('styles/Block.sass');

var CodeBlocksApp = React.createClass({

  getInitialState: function() {
    return {
      started: false,
      score: 0,
      level: 0
    }
  },

  onSolvedPiece: function(solution, score) {
    this.refs.preview.solvePiece(solution);
    this.refs.scoreboard.tallyScore(score);
  },

  startGame: function() {
    this.setState({
        started : true,
    });
  },

  nextLevel: function(nextLevel) {
    this.setState({ level: nextLevel });
    this.refs.preview.nextLevel(nextLevel);
  },

  render: function() {
    return (
      <div className="Main">

        <div className="left-pane">
            <img className="left-poster" src="images/left-panel.png" />
        </div>

        <GameView
            onSolved={this.onSolvedPiece}
            started={this.state.started}
            nextLevel={this.nextLevel} />

        <Preview
            ref="preview"
            level={this.state.level} />

        { !this.state.started ?
            <div className="start-btn" onClick={this.startGame}>
            <img src="images/level_1_a.png" />
            </div>
            : undefined
        }

        <ScoreBoard ref="scoreboard" />

      </div>
    );
  },


});
React.render(<CodeBlocksApp />, document.getElementById('content')); // jshint ignore:line

module.exports = CodeBlocksApp;

