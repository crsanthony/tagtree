'use strict';

describe('Block', function () {
  var React = require('react/addons');
  var Block, component;

  beforeEach(function () {
    Block = require('components/Block.js');
    component = React.createElement(Block);
  });

  it('should create a new instance of Block', function () {
    expect(component).toBeDefined();
  });
});
