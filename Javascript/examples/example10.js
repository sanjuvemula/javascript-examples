function addNumbers(a=0,b=0){
    return Number(a) + Number(b);
}

let a = 10;
let res = addNumbers(a);
console.log(res);

//another way
const sub = function subtract(a,b){
    return a-b;
}
const s = sub(234,123);
console.log(s);

//array function
const multiply = (a,b)=>a*b;
const r = multiply(34958,95874);
console.log(r);