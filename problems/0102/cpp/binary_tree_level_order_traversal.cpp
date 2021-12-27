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
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res;
        queue<TreeNode*> nodes;
        
        if (root) {
            nodes.push(root);
        }
        
        while (!nodes.empty()) {
            TreeNode* cur = nodes.front();
            vector<int> values;
            
            int size = nodes.size();
            while (size--) {
                values.push_back(cur->val);
                
                if (cur->left)
                    nodes.push(cur->left);
                if (cur->right)
                    nodes.push(cur->right);
                
                nodes.pop();
                cur = nodes.front();
            }
            res.push_back(values);
        }
        
        return res;
    }
};
