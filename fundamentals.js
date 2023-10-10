//1. how to declare a variable using let and const

const fatherName = "Arnold";
let season = "rainy";
season = "winter";

//2. 6 basic conditions: >, <, ===, !==, >=, <=
// multiple conditions : &&, ||

// if(fatherName === "arnold" || season === "rainy"){
//     console.log('yes something')
// }
// else if(fatherName === "Arnold"){
//     console.log('yes father na same')
// }
// else{
//     console.log('No')
// }


// 3. array declare
// array index
// length, push, pop

const number = [55, 77, 12, 33];
// console.log(number.indexOf(554))
// console.log(number.pop(33))
// console.log(number.push(33))
number[0] = 555;
// console.log(number);

// 4. for loop

// for(let i = 0; i<number.length; i++){
//     const nu = number[i];
//     console.log(nu);
// }

// 5. function

// function multiple(num1 ,num2){
//     const result = num1 * num2;
//     return result;
// }
// const output = multiple(10, 10)

// console.log(output);

// 6. object
// 3 way  access property by value



const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['dhaka gonda', 'King khan'],
}
const ageVale = "movies";
console.log(student.age) // direct by property 
console.log(student['age']) // access via property name string
console.log(student[ageVale]) // access via property name in a variable