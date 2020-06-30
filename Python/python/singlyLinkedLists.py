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

#Create a new node. Assign it to the list head. Then return a pointer to the last node.
    
    def addToBack(self, value):
        newNode = Node(value)
        runner = self.head
        while runner.next != None:
            runner = runner.next
        runner.next = newNode
        return self

#a function that prints each value from the nodes in the list to the terminal.
    
    def display(self):
            runner = self.head
            while runner!= None:
                print(runner.value)
                runner = runner.next
            return self

#Given a list node pointer and a value, return whether or not the value is found in any node in the list.
    
    def contain(self, findValue):
        if self.head == None:
            print("False")
            return False
        else:
            runner = self.head
            while runner != None:
                if runner.value == findValue:
                    print("True")
                    return True
                else:
                    runner = runner.next
                print("False")
                return False

#Given a pointer to the first node in a list, remove the head node, and return the new list head node. If list is empty, return null
    
    def removeFront(self):
        if self.head == None:
            return null
        else:
            self.head = self.head.next
            return self

#Create a function that accepts a pointer to the first list node, and returns number of nodes in that List.

    def length(self):
        count = 0
        runner = self.head
        while runner != None:
            count += 1
            runner = runner.next
        return count

# Create a standalone function that locates the minimum value in a linked list. Return the new list with all nodes still present(except for the new head node) in their original order.

def moveMinToFront(singlyLinkedList):
    runner = singlyLinkedList.head
    min = runner.value
    while runner != None:
        if runner.next != None:
            if min > runner.next.value:
                min = runner.next.value
                minNode = runner.next
                prevNode = runner
            runner = runner.next
    before.next = minNode.next
    minNode.next = singlyLinkedList.head
    singlyLinkedList.head = minNode
    return singlyLinkedList

# def moveMaxToBack(linkedList):
#         runner = linkedList.head
#         maxVal = runner.value
#         while runner != None:
#             if maxVal < runner.next.value:
#                 maxVal = runner.next.value
#                 maxNode = runner.next
#                 previousNode = runner
#             runner = runner.next
#         before.next = maxnode.next
#         runner.next = maxnode
#         maxnode.next = None
#         # maxVal = runner.next.next.value This is what I thought
#         # maxVal = runner.next.next
#         # previousNode = runner.next
#         return linkedList


SLL1 = SinglyLinkedList()
SLL1.addToFront(40)
SLL1.addToFront(30)
SLL1.addToFront(20)
SLL1.addToFront(10)
SLL1.addToFront(0)
SLL1.display()
SLL1.contain(30) # This should print true, but it's not...ask for clarity.
SLL1.contain(5)
SLL1.removeFront()
SLL1.addToBack(-20)
SLL1.display()

# moveMinToFrontFunctionNotWorkingCorrectly



