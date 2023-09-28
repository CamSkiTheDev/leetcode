// Title: 94. Binary Tree Inorder Traversal
// LeetCode Link: https://leetcode.com/problems/binary-tree-inorder-traversal/

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function traverse(root: TreeNode | null, nodeVals: number[]): void {
  if (root != null) {
    traverse(root.left, nodeVals);
    nodeVals.push(root.val);
    traverse(root.right, nodeVals);
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const nodeVals: number[] = [];

  traverse(root, nodeVals);

  return nodeVals;
}
