                  //////// FILTER Method///////////
// returns a new array after passing a callback function on each element of an array. 
// If the function gets a true the element of the array is pushed into the new array.



//EXAMPLO 1 -  Extracting even or odd numbers
// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = numbers.filter( value => value % 2 === 0);

// console.log(evenNumbers);




//EXAMPLE 2 - Filterinf people by age
// const people = [
//     {
//         name:'Florin',
//         age:26
//     },
//     {
//         name:'Ivan',
//         age:18
//     },
//     {
//         name:'Jai',
//         age:15
//     },
// ]

// const isAdult = people.filter(person => person.age >= 18);

// console.log(isAdult);



//EXAMPLE 3 - Getting those items that are similar

// const moreNumbers = [1,2,3,2,1,3,3,5,4,6];

// const isUnique = moreNumbers.filter((number, index,arr) => {
//     return arr.indexOf(number) == index;
    
// });

// console.log(isUnique);


//EXAMPLE 4 - Filtrar un array de objetos por alguna propiedad espeficifica

// const json = {
//     'homes':[ 
//      {
//          "home_id":"1",
//          "price": "925",
//          "sqft":"1100",
//          "num_of_beds":"2",
//          "num_of_baths":"2.0"
//      },
//      {
//         "home_id":"2",
//         "price": "1425",
//         "sqft":"1900",
//         "num_of_beds":"4",
//         "num_of_baths":"2.5"
//     },
// ]
// };

// const homes = json.homes;


// console.log(homes.filter(home => home.price === '925' ));