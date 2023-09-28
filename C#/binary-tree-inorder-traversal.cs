// Title: 94. Binary Tree Inorder Traversal
// LeetCode Link: https://leetcode.com/problems/binary-tree-inorder-traversal/


// Definition for a binary tree node.
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution
{
    public void Traverse(TreeNode root, List<int> nodeVals)
    {
        if (root == null) return;

        Traverse(root.left, nodeVals);
        nodeVals.Add(root.val);
        Traverse(root.right, nodeVals);
    }

    public IList<int> InorderTraversal(TreeNode root)
    {
        IList<int> nodeVals = new List<int>();

        Traverse(root, nodeVals);

        return nodeVals;
    }
}