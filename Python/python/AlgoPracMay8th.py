# “Coin Change with Object
# As before, given a number of U.S. cents, return the optimal configuration of coins, in an object.”


# testVar = 88
# def coinChange(amount):
#     total = 0
#     # for key, value in amount.items():
#     #     if (coins[0]['quarters']) < amount:
#     #         total += (coins[0]['quarters'])
#     #         if dimes < total:
#     #                 total += (coins[1]['dimes'])
#     #                     if nickels < total:
#     #                         total += (coins[2]['nickels'])
#     #                             if nickels < total:
#     #                                 total += (coins[3]['pennies'])
#     return total 

# print(coinChange(testVar))

testVar = 88
def coinChange(amount):
    total = 0
    for key, value in amount.items():
        if (coins[0]['quarters']) < amount:
            total += (coins[0]['quarters'])
            if dimes < total:
                    total += (coins[1]['dimes'])
                        if nickels < total:
                            total += (coins[2]['nickels'])
                                if nickels < total:
                                    total += (coins[3]['pennies'])
    return total 

print(coinChange(testVar))