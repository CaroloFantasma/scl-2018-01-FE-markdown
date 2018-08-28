const assert = require('chai').assert;
global.window = global;
require('md-examples');

//  Validar función
describe('Calcular tarifa', () => { //  Describe lo que habrá dentro de cada función
  describe('calculate', () => {
    it('debería ser una función', () => {
      assert.equal(typeof calculate, 'function'); 
    });
  });
});
