class Solution {
public:
    int firstUniqChar(string s) {
        int characters[26] = {0};
        
        for (int i = 0; i < s.length(); i++) {
            characters[s[i] - 'a']++;
        }
        
        for (int i = 0; i < s.length(); i++) {
            if(characters[s[i] - 'a'] == 1)
                return i;
        }
        
        return -1;
    }
};
