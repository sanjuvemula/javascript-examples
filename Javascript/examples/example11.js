const person = [
    {
        name:"Sanju",
        age:20,
    },
    {
        name: "sarayu",
        age:18
    }
];

console.log(person.name + " " + person.age);
console.log(person);
const jsonPerson = JSON.stringify(person,null,2);
console.log(jsonPerson);
console.log(JSON.parse(jsonPerson));

person.forEach(p=>console.log(p));

const names = person.map((p,i)=>{
    return i + ". " + p.name;
}).forEach(n=> console.log(n));

console.log(names.toString());