print("Imported bankAccount...")

class bankAccount:
    def __init__(self, intRate, balance):
        self.interest = .01
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(self.balance)
        return self

    def withdrawl(self, amount):
        if self.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -=5
        else:
            self.balance -= amount
            print(self.balance)
        return self

    def displayAccountInfo(self):
        print(f"Your current balance is: {self.balance}")
        return self

    def yieldInterest(self):
        if self.balance >= 0:
            (self.balance + (self.balance * self.interest))
            print(self.balance)
        return self


# wellsFargo = bankAccount(.02, 2000)
# santander = bankAccount(.03, 1000)

# wellsFargo.deposit(100).deposit(200).deposit(300).yieldInterest()
# santander.deposit(200).deposit(300).withdrawl(20).withdrawl(40).withdrawl(60).withdrawl(80).yieldInterest().displayAccountInfo