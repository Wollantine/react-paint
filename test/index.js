/**
 *	Configure Chai with extensions
 */
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'


chai.should();

chai.use(chaiEnzyme());
chai.use(sinonChai);

/**
 *	Configure Enzyme with virtual DOM (via JSDOM)
 *
 *	Snippet extracted from:
 *	 https://github.com/airbnb/enzyme/blob/b296d0339d74a7b610742a0e133b144a1f8812a2/docs/guides/jsdom.md
 */
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
