class Node:
    def __init__(self,inputValue):
        self.value = inputValue
        self.next = None

class SLQueue:
    def __init__(self):
        self.head = None
        self.tail = None

# Create a Singly Linked List Queue method enqueue(val) to add the given value to end of our queue.
    def enqueue(self, value):
        newNode = Node(value)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
    
    def display(self):
            runner = self.head
            while runner!= None:
                print(runner.value)
                runner = runner.next
            return self

# Create a Singly Linked List Queue method enqueue(val) to remove and return value at front of queue.
    def dequeue(self):
        if self.head != None:
            returnValue = self.head.value
            self.head = self.head.next
            return returnValue
        else:
            return None

    def front(self):
        if self.head != None:
            return self.head.value
        else:
            return None
    
    def isEmpty(Queue):
        if self.head == None and self.tail == None:
            return True
        else:
            return False
    
    def size(self):
        runner = self.head
        count = 0
        while runner != None:
            count +=1
            runner = runner.next
        return count
        
    def compareQueues(QueueOne,QueueTwo):
        firstRunner = QueueOne.head
        secondRunner = QueueTwo.head
        while firstRunner != None and secondRunner != None:
            if QueueOne.head.value == QueueTwo.head.value:
                firstRunner = QueueOne.next
                secondRunner = QueueTwo.next
                if firstRunner.next.value == secondRunner.next.value:
                    firstRunner = QueueOne.next.next
                    secondRunner = QueueTwo.next.next
        return QueueOne, QueueTwo
        
def isQueueAPalindrome(queueInput):
    aString = ""
    runner = queueInput.head
    while runner != None:
        aString += str(runner.value)
        runner = runner.next
            runner = runner.next
    #Fix the above

Q = SLQueue()
Q.enqueue(8)
Q.enqueue(10)
Q.enqueue(12)
Q.display()
Q.dequeue()
Q.display()
print(Q.size())
# Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before exiting. For storage, use one additional Stack”
