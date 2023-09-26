// Title: 70. Climbing Stairs
// LeetCode Link: https://leetcode.com/problems/climbing-stairs/

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

function climbStairs(n: number): number {
  if (n <= 1) {
    return 1;
  }

  let prev: number = 1;
  let curr: number = 1;

  for (let i: number = 2; i <= n; i++) {
    let temp: number = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}

console.log(climbStairs(2));
