const stats = require('./src/dashboard/stats');

test('', () => {
  expect(stats('Orin', 'ami')).toBe('Orinami');
});