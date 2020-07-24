var eeyore= {   character: "You are currently located at Eeyore's house.",
                greet: function() {
                    console.log("Wish I could say yes, but I can't.");
                }
            }

var heffalumps= {   character: "You are currently located at Lumpy's house.",
                    greet: function() {
                        console.log("Hi, I'm Lumpy!");
                    }
                }

var kanga=  {   character: "You are currently located at Kanga's house.",
                greet: function() {
                    console.log("I'm Kanga, and somewhere around here is Baby Roo!");
                }
            }

var owl=    {   character: "You are currently located at Owl's house.",
                greet: function() {
                    console.log("Who, who, who is it?");
                }   
            }

var christopherRobin=   {   character: "You are currently located at Christopher Robin's house.",
                            greet: function() {
                                console.log("You are braver than you believe, stronger than you seem, and smarter than you think.");
                            }   
                        }

var rabbit =    {   character: "You are currently located at Rabbit's house.",
                    greet: function() {
                        console.log("You needn't shout so loud. I heard you quite well the first time.")
                    }   
                }

var gopher =    {  character: "You are currently located at Gopher's house.",
                    greet: function() {
                        console.log("Say what's wrong, Sonny?")
                    }   
                }

var piglet =    {  character: "You are currently located at Piglet's house.",
                    greet: function() {
                        console.log("It's so much more friendly with two.")
                    }   
                }

var pooh=   {   character: "You are currently located at Winnie the Pooh's house.",
                greet: function() {
                    console.log("Oh bother.")
                }
            }

var bees=   {   character: "You are currently located at Bees' hive.",
                greet: function() {
                    console.log("Bzz");
                }
            }

var tigger = { character: "You are currently located at Tigger's House.",
                greet: function() {
                    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
                }
            }
            
//These are objects for each location on the map, and these objects point to each other.

eeyore.east = heffalumps;
eeyore.south = kanga;

heffalumps.west = eeyore;

kanga.north = eeyore;
kanga.south = christopherRobin;

owl.east = christopherRobin;
owl.south = piglet;

christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

rabbit.south = bees;
rabbit.west = christopherRobin;
rabbit.east = gopher

gopher.west = rabbit

piglet.north = owl
piglet.east = pooh;

pooh.north = christopherRobin;
pooh.south = tigger;
pooh.west = piglet
pooh.east = bees;

bees.north = rabbit;
bees.west = pooh;

tigger.north = pooh; 

var player = {
    location: tigger, 
    //This is where the player is located initially. The player starts at the very bottom of the map at Tigger's house
    honeyStatus: false 
    //This is set to false because the player will always begin the game without honey.
}

function move(direction){
    if(! player.location[direction]) {
        console.log("You cannot travel this way!")
    }
    else{
        console.log("You traveled!")
        console.log(player.location[direction]["character"])
        console.log(player.location[direction].greet())
        player.location = player.location[direction] 
    }
}

function pickUp(){
    // console.log(player.location["character"]) 
    if(player.location["character"] != "You are currently located at Bees' hive.") {
        console.log("There is no honey at this location!")
    }
    else{
        player.honeyStatus = true
        console.log("You've gathered some honey!")
    }
}

//The mission function is a method that selects a random character. The player must delivery the honey to the randomly selected character's home. 
// The deliveryLocation variable is outside of the function, so it can be used in other functions (such as the drop function)
var deliveryLocation = ["Eeyore", "Heffalump", "Kanga", "Owl", "ChristopherRobin", "Rabbit", "Gopher", "Piglet", "Pooh", "Bees", "Tigger"]
function mission(){
    const randomDeliveryLocation = deliveryLocation[Math.floor(Math.random() * deliveryLocation.length)];
    console.log(randomDeliveryLocation, "is looking for honey! Can you help?")
}

function drop(){
    // console.log(deliveryLocation)
    if(player.honeyStatus = false){
        console.log("You don't have any honey to delivery, yet!")
    }
    if(player.location["character"] != deliveryLocation) {
        console.log("This isn't the place that needs the honey.")
    }
    else{
        console.log("Congratulations! You delivered the honey to " + deliveryLocation)
    }

}

console.log(player.location["character"])
mission()
move("north")
// drop()
// move("east")
// pickUp()
// move("west")
// move("west")
// drop()