/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isValidSub(TreeNode* node, TreeNode* min=NULL, TreeNode* max=NULL) {
        if (node == NULL)
            return true;
        
        if (min && node->val <= min->val)
            return false;
        if (max && node->val >= max->val)
            return false;
        if (!isValidSub(node->left, min, node) || !isValidSub(node->right, node, max))
            return false;
        
        return true;
    }
    
    bool isValidBST(TreeNode* root) {
        return isValidSub(root, NULL, NULL);;
    }
};
