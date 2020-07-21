function Ninja(name){
    var self = this
    this.name = name
    this.health = 100
    var speed = 3
    var strength = 3
    console.log(self)
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!")
    }
    this.showStats = function(){
        showStats = "Name: " + this.name + ", Health: " + this.health + ", Speed:" + speed + ", Strength: " + strength
        return showStats
    }
    this.drinkSake = function(){
        this.health += 10
        console.log(this.name + "'s" + " health is now " + this.health + ".")
    }
}
var ninjaOne = new Ninja("Hyabusa")
// console.log(ninjaOne)
ninjaOne.sayName()
console.log(ninjaOne.showStats()) //This is a method containing private variables
ninjaOne.drinkSake()