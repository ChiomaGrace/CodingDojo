class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

#Create a new node. Assign it to the list head. Then return a pointer to the new head node.
    def addToFront(self, value):
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode
        return self

SLL1 = SinglyLinkedList()
SLL2 = SinglyLinkedList()
SLL1.addToFront(30)
SLL1.addToFront(20)
SLL1.addToFront(10)
print(SLL1)

#Given a ListNode pointer and a value, return whether a value is found in any node in the list.

    def Container(self, findValue):
        if self.head == none:
            return False
        else:
            runner = self.head
            while runner != None:
                if runner.value = findValue
                return True
            else:
                runner = runner.next
                return False
