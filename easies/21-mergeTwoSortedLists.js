/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = (l1, l2) => {
    const result = new ListNode(null);
    let n = result;

    while(l1 != null || l2 != null){
        if(l1 == null){
            n.next = l2;
            l2 = l2.next;
        } else if(l2 == null){
            n.next = l1;
            l1 = l1.next;
        } else if(l1.val > l2.val){
            n.next = l2;
            l2 = l2.next;
        } else {
            n.next = l1;
            l1 = l1.next;
        }
        n = n.next;
    }

    return result.next;
};


// paciam neisejo