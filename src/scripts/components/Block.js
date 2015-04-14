'use strict';

var React = require('react/addons');

require('styles/Block.sass');

var Block = React.createClass({
  render: function () {

    return (
        <div className="block">
          <span>{this.props.content}</span>
        </div>
      );
  }
});

module.exports = Block; 

