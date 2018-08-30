const assert = require('chai').assert;
global.window = global;
require('../lib/md-links.js');

//  Validar función
describe('Validar extensión del archivo', () => { //  Describe lo que habrá dentro de cada función
  describe('files', () => {
    it('path.extname(file).toLowerCase() === ".md"', () => {
      assert.equal(('.md'), true);
      assert.equal(('.txt'), false); 
    });
  });
});
