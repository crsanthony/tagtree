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

  , _handleSelect: function() {
     this.setState({ selected : true, order: this.props.selectedItems? this.props.selectedItems.length : 0 });
     this.props.handleItemSelect(this.props.content)
  }

  , render: function () {
    var divStyle = {
      left: this.state.onboard ? (this.state.order * 70) + 'px' : (1000 + (this.state.order * 70)) + 'px',
      top: this.state.selected ? (this.props.row * 10) + 'px' : ((this.props.row * 10) + 500) + 'px'
    };

    return (
        <div className="block" style={divStyle} onClick={this._handleSelect}>
          <span>{this.props.content}</span>
        </div>
      );
  }
});

module.exports = Block;

