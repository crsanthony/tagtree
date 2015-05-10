'use strict';

var React = require('react/addons');
var GameView = require('components/GameView');
var Preview = require('components/Preview');


// CSS
require('normalize.css');
require('styles/Main.sass');
require('styles/Block.sass');

var CodeBlocksApp = React.createClass({

  getInitialState: function() {
    return {
      solvedPieces : [],
      started: false
    }
  },

  onSolvedPiece: function(solution) {
    this.refs.preview.solvePiece(solution);
  },

  startGame: function() {
    this.setState({
        started : true
    })
  },

  render: function() {
    return (
      <div className="Main">
        <GameView onSolved={this.onSolvedPiece} started={this.state.started} />
        <Preview ref="preview" />
        { !this.state.started ?
            <div className="start-btn" onClick={this.startGame}>Start</div>
        : undefined }
      </div>
    );
  },


});
React.render(<CodeBlocksApp />, document.getElementById('content')); // jshint ignore:line

module.exports = CodeBlocksApp;

