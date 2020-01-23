/* Variable Mutation and Type Coercion */

/*
    var firstName = 'billJohn';
    var age = 28;

    //Type coercion
    console.log(firstName + ' ' + age);   // here age is automatically coerced into string to be displayed

    var job,isMarried;      // can define multiple variables in a single line and can define them later in the program
    job = 'teacher';
    isMarried = false;

    console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

    // console output:
    // billJohn is a 28 year old teacher. Is he married? false 
    // Here we see that the number and boolean data types are automatically coerced into string to be displayed. Same is the case when an undefined
    // data type is present, it gets coerced into string and 'undefined' is output instead.

    isMarried = undefined;
    console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

    // console output:
    // billJohn is a 28 year old teacher. Is he married? undefined


    //Variable mutation
    job = 'driver';
    age = 'twenty eight'; // the variable values are changed, data types are also changed

    alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

    var lastName = prompt('What is his last name?');  
    // prompt gives us an input field and the value entered is stored in a variable that it is defined and assigned to,
    // prompt is similar to a alert window but with an input field
    console.log(firstName + ' ' + lastName);
*/

/* Coding Challenge - 1 */

// var massbillJohn, massbillMark, heightbillJohn, heightbillMark, isbillMarkBmiHigher;
// massbillJohn = 77;
// massbillMark = 80;
// heightbillJohn = 1.68;
// heightbillMark = 1.86;

// var billJohnBmi = massbillJohn / (heightbillJohn * heightbillJohn);
// console.log(billJohnBmi);
// var billMarkBmi = massbillMark / (heightbillMark * heightbillMark);
// console.log(billMarkBmi);

// isbillMarkBmiHigher = billMarkBmi > billJohnBmi;

// console.log('Is billMark\'s BMI higher than billJohn\'s? : ' + isbillMarkBmiHigher);

/* Coding Challenge - 1 */

// Falsy Values: undefined, null, 0, ''(empty string), NaN - when evaluated in an if-else condition but not false themselves
// truthy values: that evaluates to true in an if-else statement; basically NOT falsy values

// var height;

// if(height) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is NOT defined');
// }

//console output: Variable is NOT defined
// because the variable is defined but is not given a value; so evaluates to undefined which is a falsy value
// but when height = 10; then the value is true

// one strange condition is when height = 0; which is very much possible,
// in this case the evaluation will be falsy as 0 is a falsy value.
// in such a scenario we need to use if(height || height === 0) to evaluate the condition


// equality operators
// 23 == '23'
// the above does type coercion, so the right side will be type coerced to match the data type on the left side and then compared
// 23 === '23'
// the above is a strict equality where the data type is also considered


/* Coding Challenge - 2 */

// var billJohn.avgTip = (99 + 120 + 123) / 3;
// var avgMike = (116 + 100 + 126) / 3;
// var avgMary = (97 + 134 + 105) / 3;

// if(billJohn.avgTip > avgMike && billJohn.avgTip > avgMary) {
//     console.log('billJohn\'s team won : ' + billJohn.avgTip + ' ,opponent1: ' + avgMike + ' , oppenent2: ' + avgMary);
// } else if (avgMike > billJohn.avgTip && avgMike > avgMary){
//     console.log('Mike\'s team won : ' + avgMike + ' ,opponent1: ' + billJohn.avgTip + ' , oppenent2: ' + avgMary);
// } else if (avgMary > avgMike && avgMary > billJohn.avgTip){
//     console.log('Mary\'s team won : ' + avgMary + ' ,opponent1: ' + billJohn.avgTip + ' , oppenent2: ' + avgMike);
// } else if (billJohn.avgTip === avgMike === avgMary) {
//     console.log('Teams are tied on scores ' + avgMike + ' : ' + billJohn.avgTip + ' : ' + avgMary);
// } else {
//     console.log('To be determined');
// }


/* Coding Challenge - 2 */

/* Coding Challenge - 3 */

// var billAmount = [124, 48, 268];
// console.log(billAmount);

// function calculateTip(billValue) {
//     var tip;
//     if(billValue < 50) {
//         tip = billValue * 0.2;
//     } else if (billValue >= 50 && billValue < 200) {
//         tip = billValue * 0.15;
//     } else {
//         tip = billValue * 0.1;
//     }
//     return (billValue + tip);
// };

// var totalAmount = [calculateTip(billAmount[0]),
//                     calculateTip(billAmount[1]),
//                     calculateTip(billAmount[2])];
// console.log(totalAmount);


/* Coding Challenge - 3 */

// var billJohn = {
//     firstName: 'billJohn',
//     lastName: 'Smith',
//     birthYear: 1980,
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2018 - this.birthYear;
//     }
// };
// billJohn.calcAge();
// console.log(billJohn);

/* Coding Challenge - 4 */

// var billMark = {
//     firstName: 'billMark',
//     lastName: 'Smith',
//     height: 1.78,
//     mass: 64,
//     calcBmi: function(){
//         this.bmi = this.mass/(this.height * this.height);
//         return this.bmi;
//     }
// };

// var billJohn = {
//     firstName: 'billJohn',
//     lastName: 'Miller',
//     height: 1.68,
//     mass: 64,
//     calcBmi: function(){
//         this.bmi = this.mass/(this.height * this.height);
//         return this.bmi;
//     }
// };

// if(billMark.calcBmi() > billJohn.calcBmi()){
//     console.log(billMark.firstName + ' ' + billMark.lastName + ' has a higher BMI: ' + billMark.bmi);
// } else if(billJohn.bmi > billMark.bmi){ // d
//     console.log(billJohn.firstName + ' ' + billJohn.lastName + ' has a higher BMI: ' + billJohn.bmi);
// } else {
//     console.log('Both have equal BMI\'s!');
// };


// We can do one better here, by using the function declarations themselves within the 
// if else statements as the calcBmi functions return the value and then for the further 
// steps use the bmi property of the object as the calculation is made by then.

/* Coding Challenge - 4 */

/**Loops */
// var billJohn = ['billJohn', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i =0; i< billJohn.length; i++){
//     if(typeof billJohn[i] !== 'string') continue;
//     console.log(billJohn[i]);
// };

// for (var i =billJohn.length - 1; i>=0; i--){
//     if(typeof billJohn[i] !== 'string') continue;
//     console.log(billJohn[i]);
// };


/* Coding Challenge - 5 */

// var billJohn = {
//     billAmount: [124, 48, 268, 180, 42],
//     calcTip: function() {
//         this.tipAmount = [];
//         this.totalAmount = [];
//         for(var i = 0; i<this.billAmount.length; i++) {
//             var bills = this.billAmount[i];
//             var tipPercent;
//             if(bills < 50) {
//                 tipPercent = 0.2;
//             } else if (bills >= 50 && bills < 200) {
//                 tipPercent = 0.15;
//             } else {
//                 tipPercent = 0.10;
//             }
//             this.tipAmount[i] = bills * tipPercent;
//             this.totalAmount[i] = bills + this.tipAmount[i];
//         };
//         // return this.tipAmount, this.totalAmount; // we don't need this statement as we are defining also the object properties within the same function
//     }
// };

// var billMark = {
//     billAmount: [77, 375, 100, 155],
//     calcTip: function() {
//         this.tipAmount = [];
//         this.totalAmount = [];
//         for(var i = 0; i<this.billAmount.length; i++) {
//             var bills = this.billAmount[i];
//             var tipPercent;
//             if(bills < 100) {
//                 tipPercent = 0.2;
//             } else if (bills >= 100 && bills < 300) {
//                 tipPercent = 0.1;
//             } else {
//                 tipPercent = 0.25;
//             }
//             this.tipAmount[i] = bills * tipPercent;
//             this.totalAmount[i] = bills + this.tipAmount[i];
//         };
//     }
// };

// billJohn.calcTip();
// billMark.calcTip()
// console.log(billJohn, billMark);

// function avgTip(amount){
//     var sum = 0, avg = 0;
//     for(var i = 0; i < amount.length; i++) {
//         sum += amount[i];   
//     };
//     return avg = sum/(amount.length); 
// }

// billJohn.avgTip = avgTip(billJohn.tipAmount);
// billMark.avgTip = avgTip(billMark.tipAmount);
// console.log(billJohn.avgTip, billMark.avgTip);

// if(billJohn.avgTip > billMark.avgTip){
//     console.log('Family John paid the highest average tip: ' + billJohn.avgTip);
// } else if (billMark.avgTip > billJohn.avgTip) {
//     console.log('Family Mark paid the highest average tip: ' + billMark.avgTip);
// } else {
//     console.log('Both families paid the same average tip: ' + billJohn.avgTip + ',' + billMark.avgTip);
// };

/* Coding Challenge - 5 */







/*********************************************************************************************************************/



