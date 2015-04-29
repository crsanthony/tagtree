'use strict';

var React = require('react/addons');
var Block = require('components/Block')
var Solutions = require('../lib/solutions')

require('styles/GameView.sass');

var GameView = React.createClass({

  getInitialState: function() {
    Solutions.getSolutions();
    return {
      selected: [],
      currentString: "Hi"
    }
  }

  , getBlocks: function() {

  }

  , checkForSolution: function() {

        Solutions.solutions.forEach(function(value, index){
        console.log(value, this.state.currentString);
        if(this.state.currentString===value){
            setTimeout(function(){
                this.setState({currentString: ""})
                alert("great job!");
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
          <Block content="</p>" order="0" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="<p>" order="1" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected}/>
          <Block content="I am some text" order="2" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="</h1>" order="3" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="my name is chris" order="4" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
          <Block content="<h1>" order="5" row="0" handleItemSelect={this.handleItemSelect} selectedItems={this.state.selected} />
        </div>
      );
  }
});

module.exports = GameView;

