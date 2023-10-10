const products = [
    {name: 'laptop', price : 3200, brand : 'lenovo', color: 'silver'},
    {name: 'phone', price : 7000, brand : 'iphone', color: 'golden'},
    {name: 'watch', price : 3000, brand : 'casio', color: 'yellow'},
    {name: 'sungalss', price : 3000, brand : 'ray', color: 'silver'},
    {name: 'camera', price : 9000, brand : 'canon', color: 'gray'}
];

// array Map function
const brands = products.map(products => products.brand);
// console.log(brands);

const prices = products.map(products => products.price);
// console.log(prices);


// array foreach function
// products.forEach(products => console.log(products));
// products.forEach(products => console.log(products.brand));

// array filter function
const cheap =  products.filter(products => products.price <= 5000);
// console.log(cheap);

const specificName = products.filter(products => products.name.includes("h"))
// console.log(specificName);


const s = products.find(products => products.name.includes("o"));
// console.log(s)


// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);


// const sum = products.reduce((a, b) => a + b.price, 0);
// console.log(sum);

// const c = products.forEach(products => console.log(products));

// console.log(c)

// const name = 'hero';
// const age = 34;
// const person = {name, age};
// console.log(person);


// const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
// const ratName = adventurer?.rat?.name;
// console.log(ratName);

let person = null;
console.log(person ? person : "person is null");

const obj = {a: 1};
console.log(Object.keys(obj).length === 0);