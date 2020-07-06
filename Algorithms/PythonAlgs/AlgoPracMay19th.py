class Node:
    def __init__(self, value):
        self.value = value
        self. next = None

class Stack:
    def __init__(self):
        self.top = None

#Create push(val) that adds val to our stack. We are using singlyLinkedLists.
    def push(self, value):
        newNode = Node(value)
        if self.top == None:
            self.top = newNode
        else: 
            newNode.next = self.top
            self.top = newNode
        return self

    def display(self):
        runner = self.top
        while runner != None:
            print runner.value
            runner = runner.next
        return self

# Create a method that returns not removes the top value of the stack
    def returnTop(self):
        if self.top != None:
            return self.top.value
        else:
            return False

# Create a method that returns and removes the top value of the stack
    def pop(self):
        valueToReturn = self.top.value
        self.top = self.top.next
        return valueToReturn

#Returns whether or not the stack is empty.
    def checkIfEmpty(self):
        if self.top == None:
            return True
        else:
            return False

#Returns whether or not the given value is in the stack.
    def checkForValue(self,value):
        runner = self.top
        valueToCheck = value
        if runner.value == valueToCheck
            return True
        runner = runner.next
        while runner.next != None:
            if runner.next.value == valueToCheck
            return True
        else: valueToCheck != runner.next.value # not finished solution




stackOne = Stack()
stackOne.push(10)
stackOne.push(20)
stackOne.push(30)
stackOne.display()
stackOne.returnTop()
stackOne.display()
stackOne.pop()
stackOne.display()



