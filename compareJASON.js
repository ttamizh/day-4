//How to compare two JSON have the same properties without order?

// theory : 
//Lodash isEqual() method is the best way to compare two JSON object.
//This will not consider the order of the keys in object and check for the equality of object. Example

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
//Answer
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var flag=true;
console.log(Object.keys(obj1));
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);