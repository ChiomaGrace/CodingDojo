import bankAccount
#from bankAccount import bankAccount (another way to import the module)

class User:		# declare a class and give it name User
    def __init__(self, name, email, balance):
        self.name = name
        self.email = email
        # self.balance = 0
        self.ba = bankAccount.bankAccount(intRate = .01, balance = 0)
        #self.ba = bankAccount(intRate = .01, balance = 0) (if i used the second way to import)

# Objectives:

# Create a file with the User class, including the __init__ and make_deposit methods
    def makeDeposit(self, amount):
    #     # self.balance += amount
        self.ba.deposit(amount)
        print(f"You have successfully deposited ${amount}.")
        return self

# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified

    def makeWithdrawl(self, amount):
        # self.balance -= amount   #  math equation for this withdrawl = balance - amount
        self.ba.withdrawl(amount)
        return self 


# display_user_balance(self) - have this method print the user's name and account balance to the terminal. 
# eg. "User: Guido van Rossum, Balance: $150

    def displayUserAndBalance(self):
        # print(f"Hi, {self.name}! Your current balance is: {self.balance} dollars.")
        self.ba.displayAccountInfo()
        print(f"Hi, {self.name}! Your current balance is: {self.ba} dollars.")
        return self

# BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

    def transferMoney(self, amount, recipient):
        self.balance -= amount
        recipient.balance += amount
        print(f"Your money transfer of {amount} to {recipient.name} is complete. Your current balance is {self.balance}.")


    # def transferMoney(self, otheruser, amount):
    #     self.balance -= amount
    #     recipient.balance += amount
    #     otheruser.account_balance+= amount
    #     self.display_balance()
        #how rob did it in class



#These are the users created from the class
guido = User("Guido van Rossum", "guido@python.com", 0)
monty = User("Monty Python", "monty@python.com", 0)
chioma = User("Chi", "chi@learningtocode.com", 0)
stephan = User("Steph", "chefcurry@goldenstate.com", 0)


#These are the methods being called.
print(guido.name)	
print(monty.name)
# guido.displayUserAndBalance()
guido.makeDeposit(150).makeDeposit(120).makeDeposit(80)
guido.makeWithdrawl(80)
monty.makeDeposit(60)
chioma.makeDeposit(200)
chioma.makeWithdrawl(10).makeWithdrawl(20).makeWithdrawl(30)
chioma.displayUserAndBalance()
monty.transferMoney(50, chioma)
monty.displayUserAndBalance()
chioma.displayUserAndBalance()
stephan.makeDeposit(30)
