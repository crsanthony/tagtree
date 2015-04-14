'use strict';

describe('GameView', function () {
  var React = require('react/addons');
  var GameView, component;

  beforeEach(function () {
    GameView = require('components/GameView.js');
    component = React.createElement(GameView);
  });

  it('should create a new instance of GameView', function () {
    expect(component).toBeDefined();
  });
});
