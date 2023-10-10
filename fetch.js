// 1. JSON (stringify, pares)
// json => means javascript object notation

const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['dhaka gonda', 'King khan'],
}


const studentJson = JSON.stringify(student);
const studentObj = JSON.parse(studentJson);
// console.log(student);
// console.log(studentJson);
// console.log(studentObj);



// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// const keys = Object.keys(student);
// const value = Object.values(student);


// for
const numbers = [44,44, 85, 521, 82];
// numbers.forEach(num => console.log(num))
// numbers.forEach(num =>{

// })

const double = numbers.map(nu => nu*2);

// for of on array like object
// loop in on an object using for in



// add or remove from an array
const products = [
    {name: 'laptop', price : 3200, brand : 'len', color: 'silver'},
    {name: 'phone', price : 7000, brand : 'HTC', color: 'golden'},
    {name: 'watch', price : 3000, brand : 'casio', color: 'yellow'},
    {name: 'sungalss', price : 3000, brand : 'ray', color: 'silver'},
    {name: 'camera', price : 9000, brand : 'canon', color: 'gray'}
];



const newProduct = {name: 'webcam', 'price': 700, brands: 'lal'}

// copy products array and then add newProduct
const newProducts = [...products,newProduct];
// console.log(newProducts);

// create a new array without one specific item 
// remove phone means create a new array whitout the phone

// const remaining = products.filter(products => products.name !== 'phone');
// console.log(remaining);

const remainingWatch = products.filter(products => products.name !== 'watch');
console.log(remainingWatch);