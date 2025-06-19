const consecutiveSubstrings = require('../consecutive_substrings');

describe('consecutiveSubstrings', () => {
  test('returns an empty array when the input is an empty string', () => {
    expect(consecutiveSubstrings('')).toEqual([]);
  });

  test('returns a single element array when the input is one character', () => {
    expect(consecutiveSubstrings('a')).toEqual(['a']);
  });

  test('returns all consecutive substrings for a short word', () => {
    expect(consecutiveSubstrings('ab')).toEqual(['a', 'ab', 'b']);
  });

  test('returns all consecutive substrings for a longer word', () => {
    expect(consecutiveSubstrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
  });

  test('returns the correct number of substrings for a 4-letter word', () => {
    const result = consecutiveSubstrings('abcd');
    // The formula for total substrings is (n * (n + 1)) / 2
    expect(result.length).toBe(10);
  });
});
