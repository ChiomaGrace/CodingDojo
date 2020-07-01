from django.db import models
import re
import bcrypt
from datetime import datetime, date

#The below line of code makes validations for the user login page. 

class UserManager(models.Manager):
    def registrationValidator(self, postData):
        errors = {}
        print('This is the registrationValidation from models.')

        #The below line of code makes sure the first name is a certain length. 
        if len(postData['userFirstName']) < 2:
            errors['firstName'] = "First name should be at least 2 characters."

        #The below line of code makes sure the first name is a certain length. 
        if len(postData['userLastName']) < 2:
            errors['lastName'] = "Last name should be at least 2 characters."

        #The below line of code makes sure it is a correct email format. 
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['userEmail']):
            errors['email'] = "Invalid email address."
        
        #The  below line of code makes sure that email is not already chosen.
        alreadyUsedEmail = User.objects.filter(email = postData['userEmail'])
        if len(alreadyUsedEmail) > 0:
            errors['email'] = "Email address already used. Please try another email address."
        
        #The below line of code makes sure the user is at least 13 years old. This is why I imported datetime
        # submittedBirthday = postData['userBirthday']
        # atLeastAge = 13
        # atLeastAgeInBirthdayFormat = '2007-12-31'
        # todaysDate = date.today()
        # print("*"*50)
        # # print(todaysDate)
        # print(submittedBirthday)
        # # print(atLeastAge)
        # # print(atLeastAgeInBirthdayFormat)
        # print("*"*50)
        # atLeastAgeInBirthdayFormat = datetime.strptime(atLeastAgeInBirthdayFormat,"%Y-%m-%d")
        # submittedBirthday = datetime.strptime(submittedBirthday,"%Y-%m-%d ")
        # #The > symbol because the year is higher than the required year meaning they are too young.
        # if submittedBirthday > atLeastAgeInBirthdayFormat:
        #     errors['tooYoung'] = "You must be at least 13 years of age."

        #The below line of code makes sure the password and confirmed password are the same.
        submittedPassword = postData['userPassword']
        submittedConfirmPassword = postData['userConfirmPassword']
        if submittedPassword != submittedConfirmPassword:
            errors['password'] = "Passwords do not match. Please try again."
        
        #The below line of code makes sure the password is a certain length.
        if len(submittedPassword) < 8:
            errors['password'] = "Password should be at least 8 characters."
        
        #The below line of code confirms everything is correct, and the user can then login.
        # submittedPassword = postData['userPassword']
        # submittedConfirmPassword = postData['userConfirmPassword']
        # if submittedPassword == submittedConfirmPassword:
        #     errors['correctPassword'] = "You have successfully registered! Please login."
        return errors
    
    def loginValidator(self, postData):
        errors = {}
        print("*"*50)
        #The below line of code makes sure an email is submitted. 
        if len(postData['userEmail']) == 0:
            errors['emailRequired'] = "Must submit an email address."
        
        #The below line of code makes sure it is a correct email format. 
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['userEmail']):
            errors['email'] = "Invalid email address."
        
        #The below line of code makes sure the email is registered prior to logining in. 
        #Filter instead of get because even if the query is empty, it will return an empty list whereas get would throw an error (ASK IF THIS THE RIGHT REASONING)
        verifyLoginEmail = User.objects.filter(email = postData['userEmail'])
        if len(verifyLoginEmail)  == 0:
            errors['email'] = "Email address is not recognized. Please register."
        else:
        #The below line of code makes sure the password entered when loggining in is the same as the password from registration. 
        # We make a variable equal to array[0] because there should only be one email(value) available in the query because of the prior registration validations  
            verifyUser = verifyLoginEmail[0]
            if bcrypt.checkpw(postData['userPassword'].encode(), verifyUser.password.encode()):
                print("password match")
            else:
                errors['passwordIncorrect'] = "Invalid password."
        return errors

#The above line of code makes validations for the user login page. 

#The below line of code makes validations for the submitted quote page. 

# class QuoteManager(models.Manager):
class QuoteManager(models.Manager):
    def quoteValidator(self, postData):
        errors = {}
        print('This is the quoteValidation from models.')

        #The below line of code makes sure the quoter name is a certain length. 
        if len(postData['submittedQuoter']) < 2:
            errors['invalidName'] = "The name of the person should be at least 2 characters."
        #The below line of code makes sure the quote is a certain length. 
        elif len(postData['submittedQuote']) < 10:
            errors['tooShortQuote'] = "The submitted quote should be at least 10 characters."
        return errors

#The above line of code makes validations for the submitted quote page. 

class User(models.Model):
    firstName = models.CharField(max_length = 255)
    lastName = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    birthday= models.DateField()
    password = models.CharField(max_length = 255)
    confirmPassword = models.CharField(max_length = 255)
    objects = UserManager()
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)

    def __repr__(self):
        return f"<User object: {self.firstName} {self.lastName} ({self.id})>"

class Quote(models.Model):
    quoter = models.CharField(max_length = 255)
    quote = models.TextField()
    userWhoPosted = models.ForeignKey(User, related_name = "userPosts", on_delete = models.CASCADE)
    favoritedByUser = models.ManyToManyField(User, related_name = "quotes")
    objects = QuoteManager()
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)

    def __repr__(self):
        return f"<Quote object: {self.quoter} {self.quote} ({self.id})>"