'use strict';

var React = require('react/addons');
var GameView = require('components/GameView');
var Preview = require('components/Preview');


// CSS
require('normalize.css');
require('styles/Main.sass');
require('styles/Block.sass');

var CodeBlocksApp = React.createClass({
  render: function() {
    return (
      <div className="Main">
        <GameView />
        <Preview />
      </div>
    );
  }
});
React.render(<CodeBlocksApp />, document.getElementById('content')); // jshint ignore:line

module.exports = CodeBlocksApp;

