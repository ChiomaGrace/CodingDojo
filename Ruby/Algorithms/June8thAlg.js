function SLList() {
    this.head = null //null is like none in python and this is like self
    this.append = function (val){
    newnode = new SLNode(val)
    newnode.next = this.head
    this.head = newnode
    return this
}

    this.display = function (){
        runner = this.head
        while (runner!= null){
        console.log(runner.val)
        runner = runner.next
        }
    return this
    }

    this.reverse = function(){
        let runner = this.head
        let prev = null
        let after = runner.next

        while(runner != null){
            runner.next = prev
            prev = runner
            runner = after
            if( runner != null){
                after = runner.next
            }
        }
        this.head = prev
    }
}
    function SLNode(val) {
    this.val = val
    this.next = null
    }
    
list = new SLList()
list.append(5).append(6).append(7).display().reverse()
