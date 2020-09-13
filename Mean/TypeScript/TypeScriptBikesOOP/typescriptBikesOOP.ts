class Bike {
    miles: number;

    constructor( public price: number, public maxSpeed: string) {
            this.miles = 0;
    }

    displayInfo(){
        // console.log(this.price)
        console.log(`The information on this bike is the following: Price: ${this.price}, Max Speed: ${this.maxSpeed}, Total Miles: ${this.miles}`)
        // console.log("The information on this bike is the following: Price: ", this.price, ",", "Max Speed: " , this.maxSpeed , "," , "Total Miles: " , this.miles)
        return this
    }

    ride = ()=>{
        this.miles += 10;
        console.log("Wee, this is fun!", "Total Miles:", this.miles)
        return this
    }

    reverse = ()=>{
        if(this.miles <=5) {
            this.miles = 0
            console.log("Miles:", this.miles)
        }
        else {
            this.miles -= 5;
            console.log("Reversing..." , "Miles:", this.miles)
        }
        return this
    }
}

const bikeOne = new Bike(200, "25mph")
// console.log(bikeOne)
const bikeTwo = new Bike(300, "30mph")
// console.log(bikeTwo)
const bikeThree = new Bike(400, "35mph")
// console.log(bikeThree)
bikeOne.reverse().ride()