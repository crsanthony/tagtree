'use strict';

var React = require('react/addons');
var Block = require('components/Block')
var Solutions = require('../lib/solutions')
var _ = require('underscore')

require('styles/GameView.sass');

var GameView = React.createClass({

  getInitialState: function() {
    return {
      selected: [],
      unSelected: _.clone(Solutions.pieces),
      unsolvedPieces: _.clone(Solutions.pieces),
      solvedPieces: [],
      currentString: "",
      solved: []
    }
  }

  , getBlock: function(value, index) {
      return ( <Block
                piece={value}
                key={value.id + value.content}
                id={value.id}
                order={index} row="0"
                ref={value.id}
                removePiece={this.removePiece}
                handleItemSelect={this.handleItemSelect}
                selectedItems={this.state.selected}
                unSelectedItems={this.state.unSelected}
                invalidTag={this.state.invalidTag}
                solved={this.state.solved} /> );
  }

  , getBlocks: function() {
      var blocks = [];
      this.state.unsolvedPieces.forEach(function(value, index){
        blocks.push(this.getBlock(value, index));
      }.bind(this));
      return blocks;
  }

  , isValidOrder: function(content) {
      if(content.indexOf("/")!= -1){
        var contentIndex = Solutions.pieces.indexOf(content.content);
        var openingTag = Solutions.pieces[contentIndex-2];
            if(this.state.selected.indexOf(openingTag)===-1){
                console.log("invalid order.  todo: do something about it");
            }
      } else {
        console.log("this is either an opening tag or content");
      }
  }

  , removePiece: function(content) {
      this.state.unsolvedPieces.forEach(function(value, index){
        if(value.id=== content.id ){
            this.state.unsolvedPieces.splice(index, 1);
            console.log(this.state.selected);
            console.log(content, this.state.selected.indexOf(content.content));
            this.state.selected.splice(this.state.selected.indexOf(content.content), 1);
            //this.setState({ unsolvedPieces : this.state.unsolvedPieces, selected : this.state.selected });
        }
      }.bind(this));
      console.log(this.state.unsolvedPieces.length);
  }

  , checkForSolution: function() {
        Solutions.solutions.forEach(function(value, index){
        if(this.state.currentString===value){
            setTimeout(function(){
                this.state.solved.push(this.state.currentString);
                this.removeSolvedPieces();
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

  , removeSolvedPieces: function() {
      this.state.solved.forEach(function(value, index) {
        this.state.unsolvedPieces.forEach(function(content, num) {
            if(value === content) {

            }
        });
      }.bind(this));
  }

  , handleItemSelect: function(content) {
     this.isValidOrder(content.content);
     this.state.selected.push(content.content);
     this.state.unSelected.splice(this.state.unSelected.indexOf(content), 1);
     this.state.currentString+=content.content;
     this.setState({ selected: this.state.selected, currentString: this.state.currentString, unSelected: this.state.unSelected });
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

