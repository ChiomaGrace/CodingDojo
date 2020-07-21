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

// for (let key in dict) {
//   console.log(key, ':', dict[key].temp);
// }

// var str = "Hello World!";
// var res = str.toUpperCase();
// var n = str.length;

function Staff(object) {
    var typeOfUser = "Employees"
    var allCapsOfTypeOfUser = typeOfUser.toUpperCase()
    var idOfEmployee = 0
    console.log(allCapsOfTypeOfUser)
    for(let x in object) {
        console.log(x)
        for(let user of object[x]){
            // console.log(user)
            console.log(idOfEmployee+=1, "-", user.last_name, ",", user.first_name, "-", user.first_name.length + user.last_name.length )
        }
        // console.log(x)
        // console.log(object[x])
    }
    // var typeOfUserTwo = "Managers"
    // var allCapsOfTypeOfUserTwo = typeOfUserTwo.toUpperCase()
    // var idOfManager = 0
    // console.log(allCapsOfTypeOfUserTwo)
    // for(let managers in users) {
    //     console.log(idOfManager+=1, "-", users[managers].last_name, ",", users[mangers].first_name)
    // }
}

Staff(users)