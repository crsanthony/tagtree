'use strict';

var React = require('react/addons');

require('styles/Preview.sass');

var GameView = React.createClass({
  render: function () {
    var content = "";
    return (
        <div className="Preview">
          {content}
        </div>
      );
  }
});

module.exports = GameView;
