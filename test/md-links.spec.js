const assert = require('chai').assert;
global.window = global;
require('../md.js');

describe('Validar extensión del archivo', () => { //  Describe lo que habrá dentro de cada función
  describe('file', () => {
    it('path.extname(file).toLowerCase() === ".md"', () => {
      assert.equal(('.md'), true);
      assert.equal(('.txt'), false); 
    });
  });
});
