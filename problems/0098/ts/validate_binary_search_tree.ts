import { TreeNode } from '../../../structures/ts/tree';

const isValidSub = (
  root: TreeNode | null,
  min: number,
  max: number
): boolean => {
  if (root == null) return true;

  if (root.val >= max) return false;
  if (root.val <= min) return false;

  return (
    isValidSub(root.left, min, root.val) &&
    isValidSub(root.right, root.val, max)
  );
};

const isValidBST = (root: TreeNode | null): boolean => {
  if (root == null) return true;
  return isValidSub(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

export default isValidBST;
