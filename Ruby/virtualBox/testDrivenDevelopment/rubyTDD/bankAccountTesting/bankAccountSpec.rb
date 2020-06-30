require_relative 'bankAccount' #name of rb file

RSpec.describe BankAccount do #name of class in file (BankAccount)
    before(:each) do
        @BankAccount = BankAccount.new(100,100)
    end

    context "makes a withdrawl" do
        it "has sufficient funds" do
            expect(@BankAccount.withdrawl("checkings", 80)).to eq(20)
        end
    end

    context "total number of accounts" do
        it "returns more than 1 bank account" do
            expect{@BankAccount.numOfBankAccounts}.to raise_error(ArgumentError)
        end
    end

    context "the bank interest rate" do
        it "cannot change interest rate" do
            expect{@BankAccount.bankInterestRate}.to raise_error(ArgumentError)
            # expect(@BankAccount.interestRate).to eq(0.01)
        end
    end

end