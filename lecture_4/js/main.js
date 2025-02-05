document.getElementById('app').innerHTML = 'Hello World';

var x = "Gilberto"
var t = "Gilberto";

var y =  `${x} Santos`

var z = { name: "Gilberto", age: 25 }

if(x == y){
    console.log("they are equal")
} else {
    console.log("they are not equal")
}

if(x === t){ // === is used to compare the type of the variable
    console.log("they are equal")
}

const h = 10;   // integer
const i = 10.4; // float

if(h !== i && i > 10 || h == undefined){ // true
    console.log("the numbers are not equals")
} else {
    console.log("the numbers are equals")
}

var name; 

if(!name) {
    console.log("the variable is undefined")
}

console.log("9adfsdfs" == 9)

var month = "December";

switch (month) {
    case "January":
        console.log("calm down, it's just January")
        break;
    case "February":
        console.log("February is time to start the gym")
        break;
    default: 
        console.log("I don't know what month is this")         
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var j = 0; j < array.length; j++) {
    // j values 0 
    // j++

    // j values 1
    // j++
    if( j === 5) {
        console.log("this seat belongs to gilberto")
    }
    console.log(array[j])
}

// while(j < array.length) {
//     console.log("while loop" + array[j])
//     j++;
// }