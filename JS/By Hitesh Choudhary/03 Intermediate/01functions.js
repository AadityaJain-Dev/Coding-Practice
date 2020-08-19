let sayHello = function(name){
    console.log('Greeting message for user');
    console.log(`hey ${name}`);
}

// sayHello('John')



let fullNameMaker = function(firstname, lastname) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you, ${firstname} ${lastname}`);

}

// fullNameMaker('John', 'Doe')




let myAdder = function (num1, num2) {
    let added = num1 + num2;
    return added;
    
}

myAdder(3,5);
console.log(myAdder(3,5));
