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
      solvedPieces : [],
      started: false,
      score: 0
    }
  },

  onSolvedPiece: function(solution, score) {
    this.refs.preview.solvePiece(solution);
    this.refs.scoreboard.tallyScore(score);
  },

  startGame: function() {
    this.setState({
        started : true
    })
  },

  render: function() {
    return (
      <div className="Main">
        <div className="left-pane">
        <img className="left-poster" src="images/safari.png" />
        </div>
        <GameView onSolved={this.onSolvedPiece} started={this.state.started} />
        <Preview ref="preview" />
        { !this.state.started ?
            <div className="start-btn" onClick={this.startGame}>Start</div>
        : undefined }
        <ScoreBoard ref="scoreboard" />
      </div>
    );
  },


});
React.render(<CodeBlocksApp />, document.getElementById('content')); // jshint ignore:line

module.exports = CodeBlocksApp;

