'use strict';

var React = require('react/addons');
var PuzzlePiece = require('components/PuzzlePiece');
var Solutions = require('../lib/solutions')

require('styles/Preview.sass');

var Preview = React.createClass({

  getInitialState: function() {
    var solutions = this.getPieces(0);

    return {
      solvedPiece: undefined,
      solutions: solutions
    }
  },

  resetPreview: function() {
    this.setState({ shouldReset:true})
  },

  getPiece: function(value) {
    return ( <PuzzlePiece content={value.content}
                shouldReset={this.state.shouldReset}
                key={value.id}
                solvedPiece={this.state.solvedPiece}/>
            );
  },

  getPieces: function(level) {
    return Solutions.generateIds(Solutions.levels[level].solutions);
  },

  nextLevel: function(level) {
    var solutions = this.getPieces(level);
    this.setState({ solutions : solutions });
  },

  solvePiece: function(content) {
    this.setState({ solvedPiece : content });
  },

  renderPieces: function () {
    var pieces =[];
    var solutions = this.state.solutions;
    solutions.forEach(function(value, index) {
        pieces.push(this.getPiece(value))
    }.bind(this))
    return pieces;
  },

  render: function () {
    return (
        <div className="Preview">
          { this.renderPieces() }
        </div>
      );
  }
});

module.exports = Preview;
