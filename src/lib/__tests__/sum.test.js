import sum from '../sum';

it('correctly adds two numbers', () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(1, 5)).toBe(6);
});
