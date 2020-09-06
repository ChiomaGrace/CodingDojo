// 1. Create a database called 'my_first_db'.
    - type into terminal
        - mongo
    - type into the terminal
        - use myFirstDB (this will create the database)

// 2. Create students collection.
    - type into terminal
        - db.createCollection("students")

// 3. Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
    - type into terminal
        - db.students.insert({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

// 4. Create 5 students with the appropriate info.
    - type into terminal
        - db.students.insert({name: "Steph", home_state: "North Carolina", lucky_number: 30, birthday: {month: 3, day: 14, year: 1988}})

// 5. Get all students.
    - type into terminal
        - db.students.find({}).pretty()

// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
    - type into terminal
        - db.students.find({home_state: "California"})
        - db.students.find({home_state: "Washington"})

// 7. Get all students whose lucky number is:
//     * greater than 3
            - type into terminal
                - db.students.find({lucky_number: {$gt: 3}})
//     * less than or equal to 10
            - type into terminal
                - db.students.find({lucky_number: {$lte: 10}})
//     * between 1 and 9 (inclusive)
            - type into terminal
                - db.students.find({lucky_number: {$in: [1,9]}})

// 8. Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
    - type into terminal
        - db.students.insert({interests: ['coding', 'brunch', 'MongoDB']})

// 9. Add some unique interests for each particular student into each of their interest arrays.
    - type into terminal
        - db.students.update({_id: ObjectID("456")}, {$push: {interests: 'coding'}})
        - db.students.update({_id: ObjectID("789")}, {$push: {interests: 'cooking'}})

// 10. Add the interest 'taxes' into someone's interest array.
    - type into terminal
        - db.students.update({_id: ObjectID("123")}, {$push: {interests: 'taxes'}})

// 11. Remove the 'taxes' interest you just added.
    - type into terminal
        - db.students.update({_id: ObjectID("123")}, {$pop: {array_key: (1)}})

// 12. Remove all students who are from California.
    - type into terminal
        - db.students.remove({home_state: "California"})

// 13. Remove a student by name. 
    - type into terminal
        - db.students.remove({name: "Steph"})

// 14. Remove a student whose lucky number is greater than 5 (JUST ONE)
    - type into terminal
        - db.students.remove({lucky_number: {$gt: 5}}, false) //CHECK IF THIS IS RIGHT

// 15. Add a field to each student collection called 'number_of_belts' and set it to 0.
    - type into terminal
        - db.students.update({},{$set: {"number_of_belts":0}},false,true)

// 16. Increment this field by 1 for all students in Washington (Seattle Dojo).
    - type into terminal
        - db.students.update({home_state: "Washington"}, {$set: {number_of_belts: "1"}})

// 17. Rename the 'number_of_belts' field to 'belts_earned'
    - type into terminal
        - db.students.updateMany( {}, { $rename: { "number_of_belts": "belts_earned" }})

// 18. Remove the 'lucky_number' field.
    -type into terminal
        - db.students.update({}, {$unset: {lucky_number:1}}, false, true); //can also use "" instead of the 1

// 19. Add a 'updated_on' field, and set the value as the current date.
    -tyoe into terminal
        - db.students.update({}, { $set: { "current date": new Date() }}) //CHECK IF THIS IS RIGHT