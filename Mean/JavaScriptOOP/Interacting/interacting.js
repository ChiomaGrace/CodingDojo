var eeyore = {character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};
var kanga = {character: "Kanga"}
var owl = {character: "Owl"}
var christopherRobin = {character: "Christopher Robin"}
var rabbit = {character: "Rabbit"}
var gopher = {character: "Gopher"}
var piglet = {character: "Piglet"}
var pooh = { character: "Winnie the Pooh" };
var bees = {character: "Bees"}
var tigger = { character: "Tigger" }; 

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
tigger = { 
    character: "Tigger", 
    north: pooh,
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        }
};


var player = {
    location: tigger
}

function move(direction){
    if(player.location[dir] -- undefined) {
        console.log(direction)("You cannot travel this way!")
    }
    else{
        console.log("You are now at " + player.location[direction][character] +"s house")
        player - { //how come the - is needed?
            location: player.location[dir]
        }
    }
}

move("north"), move("north"), move("east"), move("east"), move("east"), move("west")
console.log(player.location["character"])

function move(direction){
    if(player.location[dir] -- undefined) { //why isn't this working?
        console.log(direction)("You cannot travel this way!")
    }
    else{
        console.log("You are now at " + player.location[direction][character] +"s house")
        player - {
            location: player.location[dir]
        }
        console.log(player.location.great())
    }
}