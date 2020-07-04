class BankAccount
    attr_reader :accountNumber, :checkingAccount, :savingsAccount

    private # i moved this from line 8 because the last question asks to deny the user the abiity to set an attributes.
    
    @@numberOfAccounts = 0 # @@ because it's a class variable

    @@interestRate = 0.01 # @@ because every class that is created will have this interest rate
    
    def accountNum
        @accountNumber = (0...9).map{rand(0..10)}.join #or could do it like this rand(10 ** 12) which means using  numbers 0-10 make a random number 12 digits long
        p "Your account number is: #{accountNumber}."
    end

    public
    def initialize(checkings, savings)
        @accountNumber = accountNum
        @checkingAccount = checkings
        @savingsAccount = savings
        @@numberOfAccounts += 1
        if @@numberOfAccounts == 1
            p "The bank has #{@@numberOfAccounts} account."
        elsif @@numberOfAccounts > 1
            p "The bank has #{@@numberOfAccounts} accounts."
        end
    end

    def checkings
        @checkingAccountBalance = 0
        p "Your checking account balance is $#{checkingAccount}."
        self
    end

    def savings
        @savingsAccountBalance = 0
        puts "Your savings account balance is $#{savingsAccount}."
        self
    end

    def deposit(account, amount)
        if account == "checkings"
            @checkingAccount += amount #use the instance @name
            p "You have deposited $#{amount} into your checkings account."
        elsif account == "savings"
            @savingsAccount += amount
            p "You have deposited $#{amount} into your savings account."
        else
            puts "The account you are attempting to make your deposit to does not exist. Please try again."
        end
        self
    end

    def withdrawl(account, amount)
        if account == "checkings"
            if amount > @checkingAccount
                p "Insufficient funds."
            else
                @checkingAccount -= amount #use the instance @name
                p "You have withdrawn $#{amount} from your checkings account."
            end
        elsif account == "savings"
            if amount > @savingsAccount
                p "Insufficient funds."
            else
                @savingsAccount -= amount
                p "You have withdrawn $#{amount} from your savings account."
            end
        end
        self
    end

    def totalMoneyInBothAccounts
        total = @checkingAccount + @savingsAccount
        p "Your total amount of money is $#{total}."
        total
    end

    def accountInformation
        #ask how to include the total local variable. #{totalMoneyInBothAccounts} gets me bank object and #{total} says it's undefined.
        puts "User Account Info: \n Total Money: $ #{self.totalMoneyInBothAccounts} \n Checking Account Balance: $#{@checkingAccount} \n Saving Account Balance: $#{@savingsAccount} \n Interest Rate: #{@@interestRate}"
        self
    end
end

bankAccountOne = BankAccount.new(0,0)
# bankAccountOne.accountNumber
# bankAccountOne.checkings
# bankAccountOne.savings
bankAccountOne.deposit("checkings", 100).checkings.accountInformation
bankAccountOne.deposit("savings", 100).savings.accountInformation
bankAccountTwo = BankAccount.new(0,0)
bankAccountOne.withdrawl("checkings", 120).accountInformation # this should display insufficient funds.
bankAccountTwo.withdrawl("checkings", 120).accountInformation # this should display insufficient funds.
