// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// function studentInfo(arr){
//     console.log(students)
// }

function studentInfo(arr){
    for(let i=0; i<arr.length; i++)
        console.log(arr[i])
}

// studentInfo(students)

// Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};


function Staff(object) {
    var typeOfUserOne = "Employees"
    var allCapsOfTypeOfUserOne = typeOfUserOne.toUpperCase()
    var idOfEmployee = 0
    console.log(allCapsOfTypeOfUserOne)
    for(let typeOfUser in object) { //This loops through all the arrays( so the two: employees and managers)
        // console.log(typeOfUser) //This logs the key (title) of each array of objects
        for(let specificUser of object[typeOfUser]){ //This loop within the loop gives us access to the specific objects/users within the arrays
            // console.log(specificUser) This logs all the users both employees and managers in the array of objects
            console.log(idOfEmployee+=1, "-", specificUser.last_name, ",", specificUser.first_name, "-", specificUser.first_name.length + specificUser.last_name.length )
        }
        // console.log(x)
        // console.log(object[x])
    }
}

Staff(users)