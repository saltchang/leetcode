class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int run = word1.length() < word2.length() ? word2.length() : word1.length();
        string res = "";
        
        for (int i = 0; i < run; i++)
        {
            if (i < word1.length())
            {
                res += word1[i];
            }
            
            if (i < word2.length())
            {
                res += word2[i];
            }
        }
        
        return res;
    }
};
