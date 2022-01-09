import { BST } from './structures/ts/tree';

const tree = new BST([5, 1, 4, 3, 6]);

tree.add(-2);
console.log(tree.find(5));
tree.print();
