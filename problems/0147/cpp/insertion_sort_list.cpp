/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* insertionSortList(ListNode* head) {
        ListNode* res;
        res = new ListNode(head->val);
        
        head = head->next;
        while (head)
        {
            ListNode* last = res;
            ListNode* next = res;
            while (last)
            {
                if (!next)
                {
                    ListNode* cur = new ListNode(head->val);
                    last->next = cur;
                    break;
                }
                
                if (next->val >= head->val)
                {
                    ListNode* cur = new ListNode(head->val, next);
                    if (last == next)
                    {
                        res = cur;
                    }
                    else
                    {
                        last->next = cur;
                    }
                    break;
                }
                else
                {
                    if (last == next)
                    {
                        next = last->next;
                    }
                    else
                    {
                        last = last->next;
                        next = next->next;
                    }
                }
            }
            
            head = head->next;
        }
        
        return res;
    }
};
