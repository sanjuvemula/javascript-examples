const person = {
    name: "John",
    age:87,
    gender:"m"
}
console.log(person);

let cp = person; //directly assigning the array. 
// Now both cp and person have same memory location. changing anything in cp will change in person and viseversa
cp.age = 23;
console.log(person);
console.log(cp);

//To prevent this, make a copy using spread operator
let arr = {...person};
arr.age = 55;
//we can change it like this too - let arr = {...person, age=67};
console.log(arr);
console.log(person);