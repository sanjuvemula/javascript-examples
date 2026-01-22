//Define Three variables: userRole(e.g., "admin", "editor", "guest"), isAuthenticated (Boolean),
//and userAge(Number). Implement below logic:
//--If the user is NOT authenticated, print "Please log in"
///--If they are authenticated and an "admin", print "Welcome to the Dadhboard"
//--If they are authenticated but not an "admin", print "Access Denied"

function auth(userRole, isAuthenticated=false, userAge=0){
    if(!isAuthenticated){
        return "Please log in";
    }
    else if(isAuthenticated && userRole=="admin"){
        return `Welcome to the Dashboard\n Your age is `+ userAge;
    }
    else if(isAuthenticated && userRole!="admin"){
        return "Access Denied";
    }
}

console.log(auth("admin",true,20));
console.log(auth("editor",true));
console.log(auth("guest"));
