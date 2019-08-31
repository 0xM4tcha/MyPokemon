const add = require('./view/ListTypePokemon');

test('add', () => {
  expect(add(false)).toBeFalsy();
});