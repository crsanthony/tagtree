'use strict';

var React = require('react/addons');

require('styles/PuzzlePiece.sass');

var PuzzlePiece = React.createClass({
  render: function () {
    var content = "";
    return (
        <div className="puzzle-piece">
          {content}
        </div>
      );
  }
});

module.exports = PuzzlePiece;
