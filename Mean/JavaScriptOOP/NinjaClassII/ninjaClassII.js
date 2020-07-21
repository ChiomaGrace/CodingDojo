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
    this.punch = function(ninja){
        if (ninja instanceof Ninja) { 
        punch = 5
        ninja.health -= 5
        console.log(ninja.name + " was punched by " + this.name + " and lost " + punch + " Health!")
        }
        else {
            throw new Error("A ninja object must be passed as a parameter.")
        }
    }

    this.kick = function(ninja){
        if (strength > 0) { //ASK ABOUT THIS
            strength -= 1
            kick = 15
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + kick + " Health!")
            ninja.health -= kick
        }
        else {
            console.log(this.name + "'s strength is 0! Too weak to kick.")
        }
    }

    
}

var blueNinja = new Ninja("Goemon")
var redNinja = new Ninja("Bill Gates")
redNinja.punch(blueNinja)
console.log(blueNinja.showStats())
blueNinja.kick(redNinja)
console.log(redNinja.showStats())
console.log(blueNinja.showStats())
blueNinja.kick(redNinja)
blueNinja.kick(redNinja)
console.log(blueNinja.showStats())
blueNinja.kick(redNinja)
console.log(blueNinja.showStats())
redNinja.punch("turtle")





