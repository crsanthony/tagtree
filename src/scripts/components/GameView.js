'use strict';

var React = require('react/addons');
var Block = require('components/Block')
var Solutions = require('../lib/solutions')
var Sounds = require('../lib/sounds')
var GumballMachine = require('components/GumballMachine')
var _ = require('underscore')
var shuffle = require("knuth-shuffle").knuthShuffle;


require('styles/GameView.sass');

var GameView = React.createClass({

  getInitialState: function() {
    var shufffledPieces = shuffle(Solutions.pieces.slice(0));

    return {
      selected: [],
      unSelected: _.clone(shufffledPieces),
      unsolvedPieces: _.clone(shufffledPieces),
      currentOpenSolutions : [],
      currentOpenSolution : [],
      solvedPieces: [],
      solved: [],
      lastBlockIndex: 0,
      rowCount: 1,
      rowLength: 6
    }
  }

  , componentDidMount: function() {
     setTimeout(function() {
        this.setState({ waterUp: true })
     }.bind(this), 2000)

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
      var blocksCount = this.state.lastBlockIndex + this.state.rowLength;
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

  , removePiece: function(content) {
      this.state.unsolvedPieces.forEach(function(value, index){
        if(value.id === content.id ){
            this.state.unsolvedPieces.splice(index, 1);
            this.state.selected.splice(this.state.selected.indexOf(content.id), 1);
        }
      }.bind(this));
  }

  , checkForSolution: function(content) {
        Solutions.solutions.forEach(function(value, index){
          if(this.state.currentOpenSolution.strings === value.passKey){
            value.passKey += this.state.currentOpenSolution.ids;

            setTimeout(function(){
                this.state.solved.push(value);
                this.props.onSolved(value, 30);
                Sounds.playScoreSound();
                this.state.currentOpenSolutions.pop();
                this.setState({
                    currentOpenSolutions: this.state.currentOpenSolutions,
                    currentOpenSolution: this.state.currentOpenSolutions[this.state.currentOpenSolutions.length-1],
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

     this.state.selected.push(content.id);
     this.state.unSelected.splice(this.state.unSelected.indexOf(content), 1);

     if(content.openingTag){
        var current = {
            strings : content.name,
            ids: content.id
        };

        this.state.currentOpenSolutions.push(current);
        this.state.currentOpenSolution = current
        this.setState({
            currentOpenSolutions : this.state.currentOpenSolutions
        })

     } else {
        this.state.currentOpenSolution.strings += content.name;
        this.state.currentOpenSolution.ids += content.id;

        this.setState({
            currentOpenSolution: this.state.currentOpenSolution
        })
     }

     this.state.rowLength++;

     this.setState({
        selected: this.state.selected,
        unSelected: this.state.unSelected,
        rowLength: this.state.rowLength
     });

     this.checkForSolution(content);
  }

  , render: function () {
      var cx = React.addons.classSet;

      var waterClasses = cx({
        "game-view--bottom": true,
        "game-view--bottom--up": this.state.waterUp
      });

      return (
        <div className="GameView">
         <GumballMachine shouldShow={this.state.waterUp} />
         <div className={waterClasses}>
              { this.props.started ? this.getBlocks() : "" }
         </div>
        </div>
      );
    }

});

module.exports = GameView;

