'use strict';

var React = require('react/addons');
var Sounds = require('../lib/sounds')

require('styles/Block.sass');

var Block = React.createClass({

  getInitialState: function() {
    return {
      selected: false,
      onboard: false,
      order: this.props.order,
    }
  }

  , componentDidMount: function() {
      setTimeout(function() {
        this.setState({ onboard : true })
        Sounds.playBlockOnBoard();
      }.bind(this), 200)
  }

  , _isSolved: function() {
       var solved = false
       this.props.solved.forEach(function(value, index){
        if(value.indexOf(this.props.piece.id)!=-1){
            if(this.state.selected) {
              solved = true;
              this.props.removePiece(this.props.piece);
            }
        }
       }.bind(this))

       return solved;
  }

  , componentDidUpdate: function() {
     if(this.props.shouldReset && this.state.onboard){
        this.replaceState(this.getInitialState())
     }
  }

  , _handleSelect: function() {
     this.setState({ selected : true});
     this.props.handleItemSelect(this.props.piece)
  }

  , render: function () {
      var l = this.state.selected ? (this.props.selectedItems.indexOf(this.props.piece.id) * 74) + 'px' :
      60 + (this.props.unSelectedItems.indexOf(this.props.piece)*74) + 'px';

      var t;
      if(!this.state.onboard) {
        t = 800 + (this.state.order * 30) + 'px';
      } else if(this.state.selected) {
        t = (this.props.row * 10) + 'px';
      } else {
        t = ((this.props.row * 10) + 500) + 'px';
      }

      var divStyle = {
        left: this.state.onboard ? l : 60 + (this.state.order * 74) + 'px',
        top: t
      };

      var solved = this._isSolved();

      var cx = React.addons.classSet;
      var isInvalid = this.props.invalidTag === this.props.piece.id;

      var blockStyle = cx({
        'block': true,
        'block--dissolved': (solved || isInvalid) && this.state.selected,
        'block--opening': this.props.piece.order === "open",
        'block--closing': this.props.piece.order === "closing",
        'block--game-over': this.props.gameOver
      });

      var pointsStyle = cx({
        'points' : true,
        'points--invalid': isInvalid  && this.state.selected
      })
      var points = isInvalid ? "OH NO!" : "+10";
      return (
        <div>
           <div className={blockStyle} style={divStyle} onClick={this._handleSelect}>
            <span className={pointsStyle}>{points}</span>
            <span className="block__content">{this.props.piece.content}</span>
           </div>

        </div>
      );
  }
});

module.exports = Block;

