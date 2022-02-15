class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> res;
        for (int i = 0; i < numRows; i++)
        {
            if (i == 0)
            {
                res.push_back(vector<int> (1, 1));
            }
            else if (i == 1)
            {
                res.push_back(vector<int> (2, 1));
            }
            else
            {
                vector<int> cur;
                cur.push_back(1);
                
                vector<int> last = res[res.size()-1];
                for (int j = 1; j < last.size(); j++)
                {
                    int item = last[j-1]+last[j];
                    cur.push_back(item);
                }
                cur.push_back(1);
                
                res.push_back(cur);
            }
        }
        
        return res;
    }
};
