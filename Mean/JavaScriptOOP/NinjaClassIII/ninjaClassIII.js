class Ninja {
    constructor(name) {
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log("My ninja name is " + this.name + "!")
    }

    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed:" + this.speed + ", Strength: " + this.strength)
        return this
    }
    
    drinkSake() {
        this.health += 10
        console.log(this.name + "'s" + " health is now " + this.health + ".")
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom()
superSensei.showStats()






