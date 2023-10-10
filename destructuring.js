// //1. array destructuring
// const number = [42, 65];

// // const x = number[0];
// // const y = number[1];
// // console.log(x, y)

// // const [x, y] = [42, 65];
// const [x, y] = number;
// // console.log(x, y);

// // 2. function destructuring

// // function setArray(num1, num2){
// //     const num = [num1, num2];
// //     return num;
// // }

// // const [first, second] = [44, 58]
// // const [yo, op] =setArray(5000, 60);

// // console.log(setArray(50, 60))
// // console.log(yo)



// // objects destructuring
// const student = {
//     name: 'sakib khan',
//     age: 32,
//     movies: ['dhaka gonda', 'King khan']
// }

// // const [firstMovies, secondMovies] = ['dhaka gonda', 'King khan'];
// const [firstMovies, secondMovies] = student.movies;

// // console.log(secondMovies)

// const {age, name} = {name: "alu", age: 14}
// // const {age, name} = {id: 22,  name: "alu", age: 14}

// const {class1 , name1, id} = {name: 'anik', age: 22, id: 558363, class1: 2}


const employee = {
    ide: "vs code",
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'khuarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 700,
            bread: 'wow'
        } 
    }
};

const {ide, machine} = employee;
const {address, drink} = employee?.specification;
const [thread,...other] = employee.language;
const {bread, color} = employee?.specification?.watch;
console.log(color,bread)
