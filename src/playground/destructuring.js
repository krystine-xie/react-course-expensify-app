
// Object Destructuring

// const person = {
//     name: 'Krystine', 
//     age: 28, 
//     location: {
//         city: 'Mountain View',
//         temp: 25
//     }
// }

// const { name, age, location } = person; 

// console.log(`${name} is ${age}. `)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It is ${temperature} degrees in ${city}.`)
// }

// const book = {
//     title: 'The Moment of Lift',
//     author: 'Melinda Gates', 
//     publisher: {
//         name: 'FlatIron Books'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName); 

// 
// Array Destructuring
//

// const address = ['3385 Ivan Way', 'Mountain View', 'California', '94040']
// const [street, city, state, zip] = address; 
// console.log(`You are in ${city}, ${state}.`)

const item = ['coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [menuItem, small, medium, large] = item;

console.log(`A medium ${menuItem} costs ${medium}.`)
