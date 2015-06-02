'use strict';

describe('ScoreBoard', function () {
  var React = require('react/addons');
  var ScoreBoard, component;

  beforeEach(function () {
    ScoreBoard = require('components/ScoreBoard.js');
    component = React.createElement(ScoreBoard);
  });

  it('should create a new instance of ScoreBoard', function () {
    expect(component).toBeDefined();
  });
});
