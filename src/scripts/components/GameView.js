'use strict';

var React = require('react/addons');
var Block = require('components/Block')
var Solutions = require('../lib/solutions')
var Sounds = require('../lib/sounds')
var GumballMachine = require('components/GumballMachine')
var _ = require('underscore')
var shuffle = require('knuth-shuffle').knuthShuffle

var ROW_LENGTH = 6;


require('styles/GameView.sass');

var GameView = React.createClass({

  getInitialState: function() {
    return {
      selected: [],
      unSelected: _.clone(Solutions.pieces),
      unsolvedPieces: _.clone(Solutions.pieces),
      solvedPieces: [],
      currentString: "",
      currentIds: "",
      solved: [],
      lastBlockIndex: 0,
      rowCount: 1
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
                key={value.id}
                order={index} row="0"
                removePiece={this.removePiece}
                handleItemSelect={this.handleItemSelect}
                selectedItems={this.state.selected}
                unSelectedItems={this.state.unSelected}
                invalidTag={this.state.invalidTag}
                solved={this.state.solved} /> );
  }

  , getBlocks: function() {
      var blocks = [];
      var lastBlockIndex = this.state.lastBlockIndex;
      var blocksCount = this.state.lastBlockIndex + ROW_LENGTH;
      var nextBlockIndex = blocksCount > this.state.unsolvedPieces.length ? this.state.unsolvedPieces.length : blocksCount;


      for(var i=lastBlockIndex; i<nextBlockIndex; i++){
        var block = this.state.unsolvedPieces[i];
        blocks.push(this.getBlock(block, i));
      }

      return blocks;
  }

  , getRows: function() {
    var rows = [];
    //for rows length
    //get row

    return rows
  }

  , getRow: function() {
    var row = <div className="row"> this.getBlocks() </div>;

     return row;
  }

  , startGame: function() {
     this.startRowTimer();
  }

  , startRowTimer: function() {
      setInterval(function(){
        this.addRow()
      }.bind(this), 10000)
  }

  , addRow: function() {
      this.state.rowCount = this.state.rowCount + 1
  }

  , rowSolved: function() {
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
        if(value.id === content.id ){
            this.state.unsolvedPieces.splice(index, 1);
            this.state.selected.splice(this.state.selected.indexOf(content.content), 1);
        }
      }.bind(this));
  }

  , checkForSolution: function(content) {
        Solutions.solutions.forEach(function(value, index){
          if(this.state.currentString===value.passKey){
            value.passKey += this.state.currentIds;

            setTimeout(function(){
                this.state.solved.push(value);
                this.props.onSolved(value, 30);
                Sounds.playScoreSound();
                this.setState({
                    currentString: "",
                    currentIds: "",
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
     this.state.currentString+=content.name;
     this.state.currentIds+=content.id
     this.setState({
        selected: this.state.selected,
        currentString: this.state.currentString,
        unSelected: this.state.unSelected,
        currentIds: this.state.currentIds
     });
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
        <div className={waterClasses}>
              { this.props.started ? this.getBlocks() : "" }
            </div>


        </div>
      );
  }
});

module.exports = GameView;

