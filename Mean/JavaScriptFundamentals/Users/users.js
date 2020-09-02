// Notice that in the code snippet below, we have an array of users. Each user is an object. Each user has the key languages, which is associated with an array of strings. Each user also has the key interests, which is associated with an object. There are varying keys within this interests object, and each of those keys is associated with an array of strings.

users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },

    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },

    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }

]

function userLanguages(object) {
    knowledgeSentence = ""
    for(let i = 0; i < object.length; i++) {
        // console.log(object[i].fname + object[i].lname +' knows ' + object[i].languages + '.')
        knowledgeSentence = (`${object[i].fname} ${object[i].lname} knows ${object[i].languages}.`)
        // if(object[i].languages = arr.length-1){
        //     console.log(and)
        // }
    }
    console.log(knowledgeSentence)
}

userLanguages(users)

function updatedUserLanguages(object) {
    for(i = 0; i < object.length; i++){
        // if(object[i] = object[i].languages.length -1) {
            // console.log(`${object[i].fname} ${object[i].lname} knows ${object[i].languages}.`)
        // }
        console.log(`${object[i].fname} ${object[i].lname} knows ${object[i].languages}.`)
        interestsSentence = ''
        for(key in object[i].interests) {
        // for( j = 0; i < object[i].interests.length; i++){
            interestsSentence = object[i].interests[key]
            // interestsSentence =(`${object[i].fname} is also interested in ${object[i].interests}.`)

            // console.log(`${object[i].fname} is also interested in ${specificInterest}.`)
        }
        console.log(interestsSentence)
    }
}

updatedUserLanguages(users)


