# Ninja Class III

This project performs the following tasks:

1. Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):
    * name
    * health
    * speed
    * strength
    * Speed and strength should be 3 by default. Health should be 100 by default.

2. The Ninja class should have the following methods:

    * sayName() - This should log that Ninja's name to the console.
    * showStats() - This should show the Ninja's name, strength, speed, and health.
    * drinkSake() - This should add +10 health to the Ninja

3. Extend the Ninja class and create the Sensei class. 
    * A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
    * A Sensei should have a new attribute called wisdom, and the default should be 10. 
    * Add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.