///////////////////////////////////////
// Lecture: Hoisting
// Function declarations are



// // functions
// calculateAge(1965); 

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// // retirement(1956);
// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }


// variables

// console.log(age);
// var age = 23;

// function foo() {
//     // var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);
















///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword
// console.log(this); // returns the global window object

//Function "this" keyword
// calculateAge(1990);

// function calculateAge(year) {
//     console.log(2019 - year);
//     console.log(this); // which also returns the global window object
//     // because it is a normal function call and a this should return the global object by default
//     // this function is attached to the global object and hence becomes one of the properties of the global object 
// }

//object "this" keyword
var john = {
    name: 'john',
    year: 1990,
    calculateAge: function(){
        console.log(this); // returns the JOhn object along with all its properties

        function innerFunction(){
            console.log(this); 
            // this will return the global object i.e the window object because this is a regular function
            // and a regular function by default will always reference the global object
        }
        innerFunction();
    }
};

john.calculateAge();


var mike = {
    name: 'mike',
    year: 1996
}

//Method Borrowing

mike.calculateAge = john.calculateAge; 
//this is called method borrowing. Notice that we aren't calling the method of the object with calculateAge()
// but rather borrowing the method
mike.calculateAge();

//now we call the method of the object, and with this step the "this" keyword will now be assigned a value
// and that will be the mike object instead of the john object even though the method is being borrowed.





