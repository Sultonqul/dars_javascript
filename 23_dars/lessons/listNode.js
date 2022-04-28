class ListNode{
    constructor(data) {
        this.data = data 
        this.next = null 
    }
}
class LinkedList{
    constructor(head = null) {
        this.head = head 
        if(head){
            this.size = 1
        }
        else{
            this.size = 0
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
    unshift(data){
        if(this.head){
            let lastNode = this.head
            this.head = new ListNode(data)
            this.head.next = lastNode
        }
        else{
            this.head = new ListNode(data)
        }
        this.size++
    }
    addToPosition(data, position){
        if(this.position === 1){
            this.unshift(data)
        }
        else if(this.size < position){
            this.push(data)
        }
        else{
            let node = this.head
            let counter = 1
            while (counter < position-1 && node.next) {
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
        let arr =[]
        while(this.head){
            arr.push(this.head.data)
            this.head = this.head.next
        }
        console.log(arr);
    }
}
let list = new LinkedList()
list.push(12)
list.push(12)
list.push(111)
list.unshift(1999)
list.addToPosition(2000,4)
console.log(list);
list.print()

console.log(list);