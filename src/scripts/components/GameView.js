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
    var level = 0;
    var shuffledPieces = this.getPieces(level);

    return {
      selected: [],
      unSelected: _.clone(shuffledPieces),
      unsolvedPieces: _.clone(shuffledPieces),
      currentOpenSolutions : [],
      currentOpenSolution : { strings: "", ids: ""},
      solvedPieces: [],
      solved: [],
      lastBlockIndex: 0,
      level: level,
      rowCount: 1,
      rowLength: 6,
      waterUp: false,
      gameOver: false,
      invalidTag: undefined
    }
  }

  , componentDidMount: function() {
      this.raiseWater();
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
                shouldReset={this.state.invalidTag}
                solved={this.state.solved} /> );
  }

  , getBlocks: function() {
      var blocks = [];
      var lastBlockIndex = this.state.lastBlockIndex;
      var blocksCount = lastBlockIndex + this.state.rowLength;
      var nextBlockIndex = blocksCount > this.state.unsolvedPieces.length ? this.state.unsolvedPieces.length : blocksCount;

      for(var i=lastBlockIndex; i<nextBlockIndex; i++){

        var block = this.state.unsolvedPieces[i];
        blocks.push(this.getBlock(block, i));
      }

      return blocks;
  }

  , getPieces(level) {
     return shuffle(Solutions.generateIds(Solutions.levels[level].pieces.slice(0)));
  }

  , raiseWater: function() {
     setTimeout(function(){
        this.setState({ waterUp : true })
      }.bind(this), 200)
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
        Solutions.levels[this.state.level].solutions.forEach(function(value, index){
          if(this.state.currentOpenSolution.strings === value.passKey){

            setTimeout(function(){
                this.state.solved.push(this.state.currentOpenSolution.ids);
                this.props.onSolved(value, 30);
                Sounds.playScoreSound();
                this.state.currentOpenSolutions.pop();

                if(this.state.currentOpenSolutions.length===0){
                    this.state.currentOpenSolution = { strings: "", ids: ""}
                } else {
                    this.state.currentOpenSolution = this.state.currentOpenSolutions[this.state.currentOpenSolutions.length-1]

                }

                this.setState({
                    currentOpenSolutions: this.state.currentOpenSolutions,
                    currentOpenSolution: this.state.currentOpenSolution,
                    solved: this.state.solved
                });
            }.bind(this), 1000);
        } else {
            //no solution. needed?
        }
     }.bind(this))

  }

  , isValidOrder(piece) {
      var current = this.state.currentOpenSolution;
      if(!current.hasOpening) {
        return false

      }

      if(piece.order === "closing"){
        current.order.indexOf("content")
        if(current.order.indexOf("content") == -1){
            return false
        }
      }

      if(piece.order != "open") {
        var tagCount = this.countTags(current.tags, piece.tag)
        if(piece.order === "closing"){

            if(tagCount < 2){
                return false
            }
        } else {
            if(tagCount === 2){
                return false
            }
        }
      }

      return true
  }

  , countTags : function(tags, tag) {
      var substrings = tags.split(tag);
      return substrings.length - 1;
  }


  , handleItemSelect: function(content) {
     Sounds.playSelectedSound();

     this.state.selected.push(content.id);
     this.state.unSelected.splice(this.state.unSelected.indexOf(content), 1);

     if(content.openingTag){
        var current = {
            strings : content.name,
            ids: content.id,
            hasOpening: true,
            order: content.order,
            tags: content.tag
        };

        this.state.currentOpenSolutions.push(current);
        this.state.currentOpenSolution = current;

        this.setState({
            currentOpenSolutions : this.state.currentOpenSolutions
        })

     } else {
        this.state.currentOpenSolution.strings += content.name;
        this.state.currentOpenSolution.ids += content.id;
        this.state.currentOpenSolution.order += content.order,
        this.state.currentOpenSolution.tags += content.tag

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

     setTimeout(function() {
        if(!this.isValidOrder(content)){
          this.state.invalidTag = content.id;
          this.setState({ invalidTag : this.state.invalidTag })
          Sounds.playBadBlockSound()
        }
        return
     }.bind(this), 1000)

     this.checkForSolution(content);
  }

  , resetLevel() {
     var level = this.state.level - 1;
     this.state.level = level;
     this.setState({ level: this.state.level });
     this.nextLevel();
  }

  , getCongratsMessageContent() {
     let level = this.state.level;
     let content;
     if(Solutions.levels.length === this.state.level + 1) {
        content = ( <p>You Finished! Play again?</p> );
     } else {
        content = ( <p>Start level { this.state.level + 2} </p> );
     }

     return content;
  }

  , nextLevel: function() {
      let nextLevel;

      if(Solutions.levels.length === this.state.level + 1) {
        nextLevel = 0;
      } else {
        nextLevel = this.state.level + 1;
      }

      let shuffledPieces = this.getPieces(nextLevel);

      this.setState({
        level: nextLevel,
        selected: [],
        unSelected: _.clone(shuffledPieces),
        unsolvedPieces: _.clone(shuffledPieces),
        currentOpenSolutions: [],
        currentOpenSolution: { strings: "", ids: ""},
        solvedPieces: [],
        solved: [],
        lastBlockIndex: 0,
        invalidTag: undefined,
        gameOver: false,
        rowLength: 6,
      });

      this.props.nextLevel(nextLevel);
  }

  , render: function () {
      var cx = React.addons.classSet;

      var waterClasses = cx({
        "game-view--bottom": true,
        "game-view--bottom--up": this.state.waterUp
      });

      var congratsClasses = cx({
        "game-btn": true,
        "game-btn--shown": this.state.solved.length === Solutions.levels[this.state.level].solutions.length
      })

      let congratsContent;

      var badBlockClasses = cx({
        "game-btn": true,
        "game-btn--shown": this.state.invalidTag
      })

      return (
        <div className="GameView">
        <div className={congratsClasses} onClick={this.nextLevel}>
            <h3>Congratulations!</h3>
            {this.getCongratsMessageContent()}
        </div>

        <div className={badBlockClasses} onClick={this.resetLevel}>
            <h3>Bad Merge! Try Again?</h3>
        </div>
         <div className={waterClasses}>
              { this.props.started ? this.getBlocks() : "" }
         </div>
        </div>
      );
    }

});

module.exports = GameView;

