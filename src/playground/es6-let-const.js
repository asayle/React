var nameVar = 'Andrew';
nameVar = 'mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
console.log('nameLet', nameLet)

const nameConst = 'frank'
console.log('nameConst', nameConst)

// block scoping
const fullName = 'amelia sayle'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)
