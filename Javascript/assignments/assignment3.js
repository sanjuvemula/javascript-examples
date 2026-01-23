//Create a function called handleSignup that takes one object as an argument.
//--Use Destructuring to extract username and email into variables.
//--Use the Rest Operator to capture all other fields (like password, city, zip) into a single object called
//metadata.
//--Return a new Object that contains the username, a new boolean property isAdmin:false, and the metadata
//(using the Spread Operator).

function handleSignup(person){
    const {username,email,...metadata} = person;

    return{
        username,
        isAdmin:false,
        ...metadata
    };
}

const data = {
    username: "grklt",
    email:"4kgnt@gmail.com",
    password: "2354",
    city:"efrjgjb",
    zip:345
};

console.log(handleSignup(data));