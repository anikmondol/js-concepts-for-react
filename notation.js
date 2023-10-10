const person = {
    name: 'lal nil houlue mia',
    profession : 'traffic surgeon',
    age: 39,
    address: "mirpur",
    25: 'summer',
    'son-name' : "rama"
}

// don notation
const prof1 = person.profession;
// console.log(prof1);

// bracket notation 
const prof2 = person['profession'];
// console.log(prof2) 


// variables notation by me
const pName = "profession";
const prof3 = person[pName];
// console.log(prof3);

const s = person['25'];
// console.log(s)


const e = person['son-name'];
console.log(e);