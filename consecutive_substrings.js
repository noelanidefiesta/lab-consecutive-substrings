function consecutiveSubstrings(string) {
  // type your code here
}
function consecutiveSubstrings(string) {
  const result = [];

  // Loop through each starting character in the string
  for (let start = 0; start < string.length; start++) {
    // For each starting point, build all substrings that follow it
    for (let end = start + 1; end <= string.length; end++) {
      // Grab the substring and push it to our result array
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
  What’s going on:
  - We're using two loops to go through every possible "start" and "end" position in the string.
  - For each combo, we use .slice() to get the substring and add it to our result list.

  Time complexity:
  - O(n^2) because we’re slicing from every possible start and end point in the string.
  - It’s not the most efficient in the world, but for something this small it works just fine.

  TLDR: Loop over the string, build every substring, return the list!
*/