'use strict';

var React = require('react/addons');
var GameView = require('components/GameView')
var Block = require('components/Block')



// CSS
require('normalize.css');
require('../../styles/main.css');
require('styles/Block.sass');

//mixins
var Solutions = require('mixins/solutions')

var CodeBlocksApp = React.createClass({
	mixins: [Solutions]
  , render: function() {
    return (
      <div className='main'>
      	<Block content="I'm some content"/>
      </div>
    );
  }
});
React.render(<CodeBlocksApp />, document.getElementById('content')); // jshint ignore:line

module.exports = CodeBlocksApp;

