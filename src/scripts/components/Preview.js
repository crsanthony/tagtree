'use strict';

var React = require('react/addons');

require('styles/Preview.sass');

var GameView = React.createClass({
  render: function () {
    var content = <p>I am text</p>
    return (
        <div className="Preview">
          {content}
        </div>
      );
  }
});

module.exports = GameView;
