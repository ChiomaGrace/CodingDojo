class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SLL:
    def __init__(self):
        self.head = None

    
    def addFront(self,value):
        newNode = Node(value)
        newNode.next=self.head
        self.head = newNode
        return self

a = Node(7)
b = Node(8)
c = Node(9)
a.next = b
b.next = c

my_list = SLL()

my_list.head = a

print(my_list.head.value)

my_list.addFront(10)

print(my_list.head.value)



