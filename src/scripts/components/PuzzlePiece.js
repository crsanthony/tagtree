'use strict';

var React = require('react/addons');

require('styles/PuzzlePiece.sass');

var PuzzlePiece = React.createClass({

  getInitialState: function() {
    return {
        solved: false
    }
  },

  componentDidUpdate: function() {
    if(!this.state.solved) {
     if(this.props.solvedPiece){
        if(this.props.solvedPiece.content===this.props.content){
          this.setState({
            solved: true
         })
        }
     }
    }

    if(this.props.shouldReset && this.state.solved){
        this.setState({ solved: false})
    }
  },

  render: function () {
    var content = this.props.content;

    var cx = React.addons.classSet;
    var pieceClasses = cx({
        'puzzle-piece' : true,
        'puzzle-piece--shown' : this.state.solved
    })
    return (
        <div className={pieceClasses} dangerouslySetInnerHTML={{__html: content}} >
        </div>
      );
  }
});

module.exports = PuzzlePiece;
