'use strict';

describe('CodeBlocksApp', function () {
  var React = require('react/addons');
  var CodeBlocksApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CodeBlocksApp = require('components/CodeBlocksApp.js');
    component = React.createElement(CodeBlocksApp);
  });

  it('should create a new instance of CodeBlocksApp', function () {
    expect(component).toBeDefined();
  });
});
