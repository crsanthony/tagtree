'use strict';

var React = require('react/addons');
var PuzzlePiece = require('components/PuzzlePiece');

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
