'use strict';

var React = require('react/addons');

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
      }.bind(this), 200)
  }

  , _isSolved: function() {
     var solved = false
     this.props.solved.forEach(function(value, index){
        if(value.passKey.indexOf(this.props.piece.id)!=-1){
            if(this.state.selected) {
              solved = true;
              this.props.removePiece(this.props.piece);
            }
        }
     }.bind(this))

     return solved;
  }

  , _handleSelect: function() {
     this.setState({ selected : true});
     this.props.handleItemSelect(this.props.piece)
  }

  , render: function () {
      var l = this.state.selected ? (this.props.selectedItems.indexOf(this.props.piece.content) * 70) + 'px' :
      (this.props.unSelectedItems.indexOf(this.props.piece)*70) + 'px';
      var divStyle = {
        left: this.state.onboard ? l : (1000 + (this.state.order * 170)) + 'px',
        top: this.state.selected ? (this.props.row * 10) + 'px' : ((this.props.row * 10) + 500) + 'px'
      };

      var solved = this._isSolved();

      var cx = React.addons.classSet;
      var isInvalid = this.props.invalidTag === this.props.piece.content;

      var blockStyle = cx({
        'block': true,
        'block--dissolved': (solved || isInvalid) && this.state.selected
      });

      var pointsStyle = cx({
        'points' : true,
        'points--invalid': isInvalid  && this.state.selected
      })
      var points = isInvalid ? "-10" : "+10";
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

