let x = 10;
switch(x){
    case 10:
        console.log("Value of X is 10");
        break;
    case 20:
        console.log("Value of X is 20");
        break;
    default:
        console.log("Unknown value");
}

function addNumbers(a,b){
    a+=2;
    b+=2;
    return Number(a) + Number(b);
}
let a = 10, b=20;
addNumbers(a,b);
console.log(a + " " +b);
console.log(addNumbers(2,"5"));
