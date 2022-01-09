import { TreeNode } from 'structures/ts/tree';

const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

export default maxDepth;
