'use strict';

var React = require('react/addons');
var Block = require('components/Block')
var Solutions = require('../lib/solutions')

require('styles/GameView.sass');

var GameView = React.createClass({

  getInitialState: function() {
    return {
      selected: [],
      currentString: "",
      solved: []
    }
  }

  , getBlock: function(value, index) {
      return ( <Block
                content={value}
                order={index} row="0"
                handleItemSelect={this.handleItemSelect}
                selectedItems={this.state.selected}
                solved={this.state.solved} /> );
  }

  , getBlocks: function() {
      var blocks = [];
      Solutions.pieces.forEach(function(value, index){
        blocks.push(this.getBlock(value, index));
      }.bind(this));
      return blocks;
  }

  , checkForSolution: function() {
        Solutions.solutions.forEach(function(value, index){
        console.log(value, this.state.currentString);
        if(this.state.currentString===value){
            setTimeout(function(){
                this.state.solved.push(this.state.currentString);
                this.setState({
                    currentString: "",
                    solved: this.state.solved
                });
            }.bind(this), 1000);
        } else {
            console.log("nope!");
        }
     }.bind(this))

  }

  , handleItemSelect: function(content) {
     this.state.selected.push(content);
     this.state.currentString+=content;
     this.setState({ selected: this.state.selected, currentString: this.state.currentString});
     this.checkForSolution();
  }

  , render: function () {
    return (
        <div className="GameView">
          { this.getBlocks() }
        </div>
      );
  }
});

module.exports = GameView;

