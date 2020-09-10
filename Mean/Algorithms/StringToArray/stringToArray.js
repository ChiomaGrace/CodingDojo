//string to word array
// "I solemly swear i am upto no good!" => ["I","solemly", "swear", "i","am","upto","no","good!"]

function stringToArray(string) {
    emptyArray = []
    emptyString = ""
    for(var i=0; i < string.length; i++) {
        // console.log(string.length)
        // console.log(string)
        if(string[i] != " "){
            // console.log(string[i])
            emptyString +=  string[i]
            console.log(emptyString)
        }
    }
}

string = "I Am"

stringToArray(string)

// 1. we get passed a string
// 2.loop through each Character 
// 3. check for " "
// 4. if not " " pop
// 5. keep checking/loop