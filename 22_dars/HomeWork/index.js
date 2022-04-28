class ListNode{
    constructor(data){
        this.data = data 
        this.next = null
    }
} 
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)

node5.next = node4
node4.next = node3
node3.next = node2
node2.next = node1

let node = node5
while (node) {
    console.log(node.data);
    node = node.next
}
console.log(node5);