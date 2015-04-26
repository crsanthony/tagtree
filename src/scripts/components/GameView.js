'use strict';

var React = require('react/addons');
var Block = require('components/Block')
var Solutions = require('../lib/solutions')

require('styles/GameView.sass');

var GameView = React.createClass({

  getInitialState: function() {
    return {
      selected: []
    }
  }

  , handleItemSelect: function(content) {
     this.state.selected.push(content);
     this.setState({ selected: this.state.selected });
  }

  , render: function () {
    return (
        <div className="GameView">
          <Block content="</p>" order="0" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="<p>" order="1" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected}/>
          <Block content="I am text" order="2" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="</h1>" order="3" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="my name is chris" order="4" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="<h1>" order="5" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
        </div>
      );
  }
});

module.exports = GameView;

