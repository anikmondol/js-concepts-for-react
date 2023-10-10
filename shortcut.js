// true => "almas", 5, true, {}, []
// false => '',  0, false, null, undefined



// check truthy
// let myVar = 5;

// if(myVar){
//     myVar = myVar * 100;
// }
// else{
//     myVar = 0;
// }


// check negative or falsy anything
// let myMoney = 50;

// if(!myMoney){

// }



// const money = 80;
// let food;

// if(money < 100){
//     food = "biryani"
// }else{
//     food = 'cha biscuit'
// }


const money = 800;
const myVar = 200;
// ternary operator
let food1 = money > 100? 'biryani' : 'cha biscuit';


// console.log(food1);


let drink = (money > 100 && myVar > 100)? 'coke' : 'filter water';

// console.log(drink);



// number to string conversion
const num1 = 52;
const numString = num1 + '';
// console.log(numString);


// string to number conversion
const string = '52141';
const inputNum = +string;
// console.log(inputNum);


// 
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide User');

// isActive ? showUser() : hideUser(); 
// use && if the left side is true then right side will be executed
isActive && showUser();


// use || if the left side is false then right side will be executed
isActive || showUser();


// toggle boolean
isActive = !isActive;