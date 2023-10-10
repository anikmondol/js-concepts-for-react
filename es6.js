const number = [55, 77, 12, 33];
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['dhaka "gonda"', 'King khan'],
}


// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${number[0]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEvent = s => s % 2 ==0;
const addThree = (a,b,c) => a + b + c;
const multiple = (a,b) =>{
    const result = a * b;
    return result;
}

//3. spread operator
// create a new array from an older array and add an element
const currentNumber = [...number, 200]

const newNumber = [...number];
number.push(99);
number.push(99);
number.push(99);


console.log(number);
console.log(newNumber);
console.log(currentNumber);
