class Solution {
public:
    string countPrevious(string s) {
        string res = "";
        
        int count = 0;
        int loc = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s[i] != s[loc]) {
                res += std::to_string(count);
                res += s[i-1];

                loc = i;
                count = 0;
            }
            
            count++;
            
            if (i == s.length() -1) {
                res += std::to_string(count);
                res += s[i];
            }
        }
        
        return res;
    }
    
    string countAndSay(int n) {
        string res = "1";
        for (int i = 1; i < n; i++) {
            res = countPrevious(res);
        }
        return res;
    }
    
};
