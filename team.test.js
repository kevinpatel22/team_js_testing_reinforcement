const teamObj = require('./team.js');

test('teamObj creates an object which contains teamname, level and points', () => {
const team1 = teamObj('Unicron', 10);
expect(team1).toEqual({ teamName: 'Unicron', level: 10, points: 0 });
});

test('returns teambj as undefined teamName and level  ', () => {
  const result = teamObj();
  expect(result).toEqual({'teamName':undefined, 'level':undefined, 'points':0});
});