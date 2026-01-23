//Rest operator
function sum(...nums){
    let sum = 0;
    let i = 0;
    while(i<nums.length){
        sum+=nums[i];
        i++;
    }
    return sum;
}

const r1 = sum(10,20,20,934);
console.log(r1);

//Spread oeprator
const animals = ['cow', 'dog', 'cat'];
const birds = ['crow', 'hen', 'sparrow'];

const combo = [...animals, ...birds];
combo.forEach(n=>console.log(n));

const [first, second, ...rest] = combo;
console.log(first);
console.log(second);
console.log(rest);


//Destructuring
const person = {
    name:"webr",
    age:34,
    gender:"M"
};
console.log("Destructuring.....")
const {name,age,gender} = person;
console.log(name);
console.log(age);
console.log(gender);

