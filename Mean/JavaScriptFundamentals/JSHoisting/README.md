# JavaScript Hoisting

This project performs the following tasks:

1. Practice reading JavaScript the same way as the interpreter reads it.

2. Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

```javascript
// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";
```
3. Problem One:

```javascript
console.log(hello);                                   
var hello = 'world';    
```

4. Problem Two:

```javascript
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}  
```

5. Problem Three:

```javascript
var brendan = 'super cool';
function print(){
	brendan = 'only okay'copy;
	console.log(brendan);
}
console.log(brendan);
```

6. Problem Four:

```javascript
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
```

7. Problem Five:

```javascript
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
```

8. Problem Six:

```javascript
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
```

9. Problem Seven:

```javascript
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
```

10. Problem Eight Bonus:

```javascript
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
```

Created On: July 14, 2020\
Pushed to Github: July 21, 2020