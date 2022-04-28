class ListNode{
    constructor(data) {
        this.data = data 
        this.next = null
    }
}
class LinkedList{
    constructor(head = null) {
        this.head = head
        if(head)
        this.size = 1
        else
        this.size = 0
    }
    unshift(data){
        if(this.head){
            let eski_boshi = this.head
            let newNode = new ListNode(data)
            this.head  = newNode
            this.head.next = eski_boshi
        }
        else{
            this.head = new ListNode(data)
        }
    }
    push(data){
        if(this.head){
            let newNode = new ListNode(data)
            let lastNode = this.head
            while(lastNode.next){
                lastNode = lastNode.next
            }
            lastNode.next = newNode
        }
        else{
            this.head = new ListNode(data)
        }
        this.size++
    }
    addToPosition(data, position){
        if(this.position == 1){
            this.unshift(data)
        }
        else if(this.size < position){
            this.push(data)
        }
        else{
            let node = this.head
            let counter = 1
            while(counter < position-1 && node.next){
                node = node.next
                counter++
            }
            let newNode = new ListNode(data)
            let after_node = node.next
            node.next = newNode
            newNode.next = after_node
        }
        this.size++
    }
    print(){
        let c = []
        while (this.head) {
            c.push(this.head.data)
            this.head = this.head.next 
        }
        console.log(c);
    }

}
let node = new ListNode(10)
let list = new LinkedList(node)
console.log(list);
list.push(23)
list.push(2)
list.unshift(200)
list.addToPosition(99,2)
list.addToPosition(99,4)
list.print()
console.log(list);