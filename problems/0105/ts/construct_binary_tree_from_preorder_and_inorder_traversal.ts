import { TreeNode } from '../../../structures/ts/tree';

const buildTree = (preorder: number[], inorder: number[]): TreeNode | null => {
  const map = new Map<number, number>();

  for (const [i, val] of inorder.entries()) map.set(val, i);

  const build = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;

    const index = map.get(preorder.shift()!)!;
    const node = new TreeNode(inorder[index]);
    node.left = build(start, index - 1);
    node.right = build(index + 1, end);

    return node;
  };

  return build(0, preorder.length - 1);
};

// recursively

// let pre: number[];
// let ins: number[];
// const inmap = new Map<number, number>();

// const buildTree = (preorder: number[], inorder: number[]): TreeNode | null => {
//   pre = preorder;
//   ins = inorder;

//   for (let i = 0; i < inorder.length; i++) {
//     inmap.set(inorder[i], i);
//   }
//   const root = helper(0, 0, ins.length - 1);
//   return root;
// };

// const helper = (
//   preStart: number,
//   inStart: number,
//   inEnd: number
// ): TreeNode | null => {
//   if (preStart > pre.length - 1 || inStart > inEnd) {
//     return null;
//   }
//   const val = pre[preStart];
//   const root = new TreeNode(val);
//   const inIndex = inmap.get(val) ?? 0;
//   root.left = helper(preStart + 1, inStart, inIndex - 1);
//   root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd);
//   return root;
// };

export default buildTree;
