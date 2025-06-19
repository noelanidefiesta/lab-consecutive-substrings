function consecutiveSubstrings(string) {
  // type your code here
  const result = [];

  for (let start = 0; start < string.length; start++) {
    for (let end = start + 1; end <= string.length; end++) {
      result.push(string.slice(start, end));
    }
  }

  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
}

module.exports = consecutiveSubstrings;

/*
  Explanation:
  - I used two nested loops.
    Outer loop picks the starting index.
    Inner loop slices from start to end to get all possible substrings.
  - Each substring is added to the result array.

  Time Complexity: O(n^2)
    - We slice every possible combination of characters.
    - For a string of length n, the number of substrings is (n * (n + 1)) / 2.
*/
