//Create a javascript object named user that meets the following requirements:
//--PRoperty 1(age):a number representing an age (eg. 25)
//--property 2(name): func(method) that takes no Parameter
//--task: inside the name func, write a statement that accesses and prints the age property 
// of the object to the console

const user = {
    age:20,
    name: function(){
        console.log(this.age);
    }
}

user.name;
