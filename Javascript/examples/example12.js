const persons = [
    [
        {
            name:"mercury",
            age: 1
        },
        {
            name: "venus",
            age:2
        }
    ],
    [
        {
            name:"earth",
            age:3
        },
        {
            name:"mars",
            age:4
        }
    ]
]

// persons.map((p,i)=>{
//     console.log((i+1)+ " "+ p.name);
// }) this will not work for nested arrays

persons.flatMap((arr,i)=>{
    return arr.map(p=>p.name);
}).forEach(n=>console.log(n));