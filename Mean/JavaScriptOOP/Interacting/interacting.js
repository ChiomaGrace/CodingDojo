var eeyore= {   character: "You are currently located at Eeyore's house.",
                greet: function() {
                    console.log("Wish I could say yes, but I can't.");
                }
            }

//These are objects for each location on the map, and these objects point to each other.
eeyore.east = heffalumps;
eeyore.south = kanga;

var heffalumps= {   character: "You are currently located at Lumpy's house.",
                    greet: function() {
                        console.log("Hi, I'm Lumpy!");
                    }
                }

heffalumps.west = eeyore;

var kanga=  {   character: "You are currently located at Kanga's house.",
                greet: function() {
                    console.log("I'm Kanga, and somewhere around here is Baby Roo!");
                }
            }

kanga.north = eeyore;
kanga.south = christopherRobin;

var owl=    {   character: "You are currently located at Owl's house.",
                greet: function() {
                    console.log("Who, who, who is it?");
                }   
            }

owl.east = christopherRobin;
owl.south = piglet;

var christopherRobin=   {   character: "You are currently located at Christopher Robin's house.",
                            greet: function() {
                                console.log("You are braver than you believe, stronger than you seem, and smarter than you think.");
                            }   
                        }

christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

var rabbit =    {   character: "You are currently located at Rabbit's house.",
                    greet: function() {
                        console.log("You needn't shout so loud. I heard you quite well the first time.")
                    }   
                }

rabbit.south = bees;
rabbit.west = christopherRobin;
rabbit.east = gopher

var gopher =    {  character: "You are currently located at Gopher's house.",
                    greet: function() {
                        console.log("Say what's wrong, Sonny?")
                    }   
                }

gopher.west = rabbit

var piglet =    {  character: "You are currently located at Piglet's house.",
                    greet: function() {
                        console.log("It's so much more friendly with two.")
                    }   
                }

piglet.north = owl
piglet.east = pooh;

var pooh=   {   character: "You are currently located at Winnie the Pooh's house.",
                greet: function() {
                    console.log("Oh bother.")
                }
            }

pooh.north = christopherRobin;
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;

var bees=   {   character: "You are currently located at Bee's hive.",
                greet: function() {
                    console.log("Bzz");
                }
            }

bees.north = rabbit;
bees.west = pooh;

var tigger = { character: "You are currently located at Tigger's House.",
                greet: function() {
                    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
                }
            }

tigger.north = pooh; 


var player = {
    location: tigger 
    //This is where the player is located initially. The player starts at the very bottom of the map at Tigger's house
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

console.log(player.location["character"])
move("north"), move("north"), move("north"), move("north")
console.log(player.location["character"])
