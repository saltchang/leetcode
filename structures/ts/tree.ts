export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class BST {
  root: TreeNode | null;

  constructor(vals?: number | number[]) {
    if (Array.isArray(vals)) {
      if (vals.length === 0 || vals[0] === null) this.root = null;
      this.root = new TreeNode(vals[0]);
      vals.shift();
      for (const value of vals) {
        this.add(value);
      }
    } else {
      this.root = vals != null ? new TreeNode(vals) : null;
    }
  }

  add = (val: number): void => {
    const root = this.root;

    if (root === null) {
      this.root = new TreeNode(val);
      return;
    } else {
      const searchTree = (node: TreeNode): void => {
        if (val < node.val) {
          if (node.left === null) {
            node.left = new TreeNode(val);
          } else return searchTree(node.left);
        } else if (val > node.val) {
          if (node.right === null) {
            node.right = new TreeNode(val);
          } else return searchTree(node.right);
        } else return;
      };
      return searchTree(root);
    }
  };

  find = (target: number): boolean => {
    let current = this.root;

    while (current) {
      if (current.val === target) return true;
      current = target < current.val ? current.left : current.right;
    }
    return false;
  };

  print = (): void => {
    if (this.root === null) return console.log([]);

    const queue = [this.root];
    const result: (number | null)[] = [];

    while (queue.length > 0) {
      const current = queue.shift()!;
      result.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    console.log(result);
  };
}
