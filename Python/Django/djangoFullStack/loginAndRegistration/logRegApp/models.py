from django.db import models
import re
import bcrypt 
from datetime import datetime, date


class ShowManager(models.Manager):
    def registrationValidator(self, postData):
        errors = {}
        print('This is the registrationValidation from models.')

        #The below line of code makes sure the first name is a certain length. 
        if len(postData['userFirstName']) < 2:
            errors['firstName'] = "First name should be at least 2 characters."

        #The below line of code makes sure the first name is a certain length. 
        if len(postData['userLastName']) < 2:
            errors['lastName'] = "Last name should be at least 2 characters."

        #The below line of code makes sure the birthday is in the past. This is why I imported datetime
        #First I set a variable equal to the current date.
        currentDate = datetime.now()
        print(postData['userBirthday'])
        print(currentDate.strftime('%m-%d-%Y'))
        #Secondly, I comapred the above variable to the inputed birthday by the user. I had to convert the current date variable to a string using strftime in order for the comparsion to work.
        if (postData['userBirthday']) >= currentDate.strftime('%Y-%m-%d'):
            errors['birthday'] = "Birthday should be prior to the current date. Please try again."
        
        #The below line of code makes sure the user is at least 13 years old. This is why I imported datetime
        submittedBirthday = postData['userBirthday']
        atLeastAge = 13
        atLeastAgeInBirthdayFormat = '2007-12-31'
        todaysDate = date.today()
        print("*"*50)
        # print(todaysDate)
        print(submittedBirthday)
        # print(atLeastAge)
        # print(atLeastAgeInBirthdayFormat)
        print("*"*50)
        atLeastAgeInBirthdayFormat = datetime.strptime(atLeastAgeInBirthdayFormat,"%Y-%m-%d")
        submittedBirthday = datetime.strptime(submittedBirthday,"%Y-%m-%d")
        #The > symbol because the year is higher than the required year meaning they are too young.
        if submittedBirthday > atLeastAgeInBirthdayFormat:
            errors['tooYoung'] = "You must be at least 13 years of age."

        #The below line of code makes sure a birthday is submitted. ASK ABOUT THIS DOESN'T WORK
        # if len(submittedBirthday) == 0:
        #     errors['birthdayRequired'] = "Must submit a date for birthday field."

        #The below line of code makes sure it is a correct email format. 
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['userEmail']):
            errors['emailAddress'] = "Invalid email address."
        
        #The  below line of code makes sure that email is not already chosen.
        alreadyUsedEmail = User.objects.filter(emailAddress = postData['userEmail'])
        if len(alreadyUsedEmail) > 0:
            errors['emailAddress'] = "Email address already used. Please try another email address."
        
        #The below line of code makes sure the password and confirmed password are the same.
        submittedPassword = postData['userPassword']
        submittedConfirmPassword = postData['userConfirmPassword']
        if submittedPassword != submittedConfirmPassword:
            errors['password'] = "Passwords do not match. Please try again."
        
        #The below line of code makes sure the password is a certain length.
        if len(submittedPassword) < 8:
            errors['password'] = "Password should be at least 8 characters."
        return errors

    
    def loginValidator(self, postData):
        errors = {}
        print("*"*50)
        #The below line of code makes sure an email is submitted. 
        if len(postData['userEmail']) == 0:
            errors['emailAddressRequired'] = "Must submit an email address."
        
        #The below line of code makes sure it is a correct email format. 
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['userEmail']):
            errors['emailAddress'] = "Invalid email address."
        
        #The below line of code makes sure the email is registered prior to logining in. 
        #Filter instead of get because even if the query is empty, it will return an empty list whereas get would throw an error (ASK IF THIS THE RIGHT REASONING)
        verifyLoginEmail = User.objects.filter(emailAddress = postData['userEmail'])
        if len(verifyLoginEmail)  == 0:
            errors['emailAddress'] = "Email address is not recognized. Please register."
        else:
        #The below line of code makes sure the password entered when loggining in is the same as the password from registration. 
        # We make a variable equal to array[0] because there should only be one email(value) available in the query because of the prior registration validations  
            verifyUser = verifyLoginEmail[0]
            if bcrypt.checkpw(postData['userPassword'].encode(), verifyUser.password.encode()):
                print("password match")
            else:
                errors['passwordIncorrect'] = "Invalid password."
        return errors

class User(models.Model):
    firstName = models.CharField(max_length = 255)
    lastName = models.CharField(max_length = 255)
    birthday = models.DateField(null = True)
    emailAddress = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    confirmPassword = models.CharField(max_length = 255)
    objects = ShowManager()
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)

    def __repr__(self):
        return f"<User object: {self.firstName} {self.lastName} {self.emailAddress} {self.password} ({self.id})>"






