'use strict';

describe('GumballMachine', function () {
  var React = require('react/addons');
  var GumballMachine, component;

  beforeEach(function () {
    GumballMachine = require('components/GumballMachine.js');
    component = React.createElement(GumballMachine);
  });

  it('should create a new instance of GumballMachine', function () {
    expect(component).toBeDefined();
  });
});
