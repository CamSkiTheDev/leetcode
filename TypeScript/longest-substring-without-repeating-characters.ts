// Title: 3. Longest Substring Without Repeating Characters
// LeetCode Link: https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  const maxLength = new Set([1]);
  let subString: string = "";

  for (let i: number = 0; i < s.length; i++) {
    const char = s[i];
    const index = subString.indexOf(char);

    if (index === -1) {
      subString += char;

      maxLength.add(subString.length);
    } else {
      subString = subString.slice(index + 1).concat(char);
    }
  }

  return Math.max(...maxLength);
}
