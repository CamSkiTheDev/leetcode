// Title: 2. Add Two Numbers
// LeetCode Link: https://leetcode.com/problems/add-two-numbers/

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function convertList(node: ListNode | null): string {
  const NumberList: number[] = [];
  let currentNode: ListNode | null = node;

  while (currentNode != null) {
    NumberList.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return NumberList.reverse().join("");
}

function buildList(sum: string[]): ListNode | null {
  let node: ListNode | null = null;

  for (let i: number = 0; i < sum.length; i++) {
    node = new ListNode(+sum[i], node);
  }

  return node;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const sum: string[] =
    (BigInt(convertList(l1)) + BigInt(convertList(l2))).toString().split("") ??
    [];

  return buildList(sum);
}
