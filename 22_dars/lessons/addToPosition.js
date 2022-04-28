class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(head = null) {
        this.head = head
        if(this.head){
            this.size = 1
        }
        else {
            this.size = 0
        }
    }
    addNode(data){
        if(this.head){
            let yangiNode = new ListNode(data)
            let lastNode = this.head
            while (lastNode.next) {
                lastNode = lastNode.next
            }
            lastNode.next = yangiNode
        }
        else{
            this.head = new ListNode(data)
        }
        this.size++
    }
    addToPosition(data,position){
        if(position === 1){
            let current_head = this.head
            let newNode = new ListNode(data)
            this.head = newNode
            this.head.next = current_head
        }
        else{
            let index = 2
            let node = this.head
            while(index < position - 1 && node.next){
                node = node.next 
                index++
            }
            if(node.next === null){
                node.next = new ListNode(data)
            }
            else{
                let newNode = new ListNode(data)
                let currentNextNode = node.next
                node.next = newNode
                newNode.next = currentNextNode
            }
        }
        this.size++
    }
    printList(){
        let node = this.head 
        let nodes = []
        while (node) {
            nodes.push(node.data)
            node = node.next
        }
        console.log(nodes);
    }
}
let list = new LinkedList()
console.log(list);
list.addNode(5)
list.addNode(15)
list.addNode(1)
list.addNode(35)
list.printList()
list.addToPosition(90,1) 
list.printList()
list.addToPosition(10,3)
list.printList()

// console.log(list);