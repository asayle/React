// const square = function (x) {
//    return x * x
// };

// const squareArrow = (x) => x * x;

// console.log(square(8))
// console.log(squareArrow(9))


// use arrow functions
// getFirstName('Mike Smith') -> 'Mike
// create regular arrow function
// create arrow function using shorthand syntax

const fullName = 'Mike Smith';

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

// console.log(getFirstName(fullName))

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName)) 
