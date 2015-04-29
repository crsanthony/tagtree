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
        if(value.indexOf(this.props.content)!=-1){
            solved = true;
        }
     }.bind(this))

     return solved;
  }

  , _handleSelect: function() {
     this.setState({ selected : true, order: this.props.selectedItems? this.props.selectedItems.length : 0 });
     this.props.handleItemSelect(this.props.content)
  }

  , render: function () {
    var divStyle = {
      left: this.state.onboard ? (this.state.order * 70) + 'px' : (1000 + (this.state.order * 70)) + 'px',
      top: this.state.selected ? (this.props.row * 10) + 'px' : ((this.props.row * 10) + 500) + 'px'
    };

    var solved = this._isSolved();

    var cx = React.addons.classSet;

    var blockStyle = cx({
        'block': true,
        'block--dissolved': solved
    })
    var points = "+10";
    return (
        <div className={blockStyle} style={divStyle} onClick={this._handleSelect}>
         <span className="points">{points}</span>
          <span className="block__content">{this.props.content}</span>
        </div>
      );
  }
});

module.exports = Block;

