class ListNode{
    constructor(data){
        this.data = data 
        this.next = null
    }
} 
let node1 = new ListNode(5)
let node2 = new ListNode(19)
let node3 = new ListNode(40)

node3.next = node2
node2.next = node1

let node = node3
while (node) {
    console.log(node.data);
    node = node.next
}