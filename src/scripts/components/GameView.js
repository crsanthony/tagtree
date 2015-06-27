'use strict';

var React = require('react/addons');
var Block = require('components/Block')
var Solutions = require('../lib/solutions')
var Sounds = require('../lib/sounds')
var GumballMachine = require('components/GumballMachine')
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

  , componentDidMount: function() {
     setTimeout(function() {
        this.setState({ waterUp: true })
     }.bind(this), 1000)
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

  , startGame: function() {
    this.startRowTimer();
    return this.getBlocks();
  }

  , startRowTimer: function() {
    setTimeout(function(){
        this.addRow()
    }.bind(this), 10000)
  }

  , addRow: function() {
     console.log("add a row");
  }

  , rowSolved: function() {
     console.log("row solved");
     this.addRow();
  }

  , isValidOrder: function(content) {
      if(content.content.indexOf("/")!= -1){
        var contentIndex = Solutions.pieces.indexOf(content);
        var openingTag = Solutions.pieces[contentIndex-2].content;
            if(this.state.selected.indexOf(openingTag)===-1){
                setTimeout(function(){
                    setTimeout(function() {
                        //this.removePiece(content);
                    }.bind(this), 1000)
                    //this.state.invalidTag = content.content;
                    //content.id = content.id + content.id;
                    //this.state.unSelected.push(content);
                    //this.state.unsolvedPieces.push(content);

                    this.setState({
                        //invalidTag: this.state.invalidTag,
                        //unsolvedPieces: this.state.unsolvedPieces
                    });
                }.bind(this), 1000)
            }
      } else {
        console.log("this is either an opening tag or content");
      }
  }

  , removePiece: function(content) {
      this.state.unsolvedPieces.forEach(function(value, index){
        if(value.id=== content.id ){
            this.state.unsolvedPieces.splice(index, 1);
            this.state.selected.splice(this.state.selected.indexOf(content.content), 1);
        }
      }.bind(this));
  }

  , checkForSolution: function(content) {
        Solutions.solutions.forEach(function(value, index){
        if(this.state.currentString===value.passKey){
            setTimeout(function(){
                this.state.solved.push(value);
                this.props.onSolved(value, 30);
                Sounds.playScoreSound();
                this.setState({
                    currentString: "",
                    solved: this.state.solved
                });
            }.bind(this), 1000);
        } else {
            //no solution. needed?
        }
     }.bind(this))

  }

  , handleItemSelect: function(content) {
     Sounds.playSelectedSound();
     this.isValidOrder(content);
     this.state.selected.push(content.content);
     this.state.unSelected.splice(this.state.unSelected.indexOf(content), 1);
     this.state.currentString+=content.id;
     this.setState({ selected: this.state.selected, currentString: this.state.currentString, unSelected: this.state.unSelected });
     this.checkForSolution(content);
  }

  , render: function () {
    var cx = React.addons.classSet;
    var waterClasses = cx({
        "game-view--bottom": true,
        "game-view--bottom--up": this.state.waterUp
    })
    return (
        <div className="GameView">
        <GumballMachine />
          { this.props.started ? this.startGame() : "" }
          <div className={waterClasses}>

          </div>

        </div>
      );
  }
});

module.exports = GameView;

