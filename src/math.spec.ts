import { sum, multiply } from './math';
describe('math', () => {
  it('should calculate sum of', () => {
    expect(sum(0, 1)).toBe(1);
  });

  it('should calculate multiply of', () => {
    expect(multiply(0, 1)).toBe(0);
  });
});
