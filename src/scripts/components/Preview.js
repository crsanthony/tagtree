'use strict';

var React = require('react/addons');
var PuzzlePiece = require('components/PuzzlePiece');
var Solutions = require('../lib/solutions')

require('styles/Preview.sass');

var Preview = React.createClass({

  getInitialState: function() {
    return {
      solvedPiece: undefined
    }
  },

  resetPreview: function() {
    this.setState({ shouldReset:true})
  },

  getPiece: function(content) {
    return ( <PuzzlePiece content={content}
                shouldReset={this.state.shouldReset}
                key={content}
                solvedPiece={this.state.solvedPiece}/>
            );
  },

  solvePiece: function(content) {
    this.setState({ solvedPiece : content });
  },

  renderPieces: function () {
    var pieces =[];
    Solutions.levels[this.props.level].solutions.forEach(function(value, index) {
        pieces.push(this.getPiece(value.content))
    }.bind(this))
    return pieces;
  },

  render: function () {
    var content = "";
    return (
        <div className="Preview">
          { this.renderPieces() }
        </div>
      );
  }
});

module.exports = Preview;
