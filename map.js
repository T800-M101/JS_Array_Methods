                  /////////////  MAP Method //////////////////////
// Executes a callback function for each element of the array and return a new
// array with the expected results. Transform the original array.


//EXAMPLE 1 - Totalizing an inventory of products
// const products = [
//     {
//         name: 'laptop',
//         price: 1000,
//         count: 5
//     },
//     {
//         name: 'desktop',
//         price: 1500,
//         count: 2
//     },
//     {
//         name: 'phone',
//         price:500,
//         count: 10
//     }
// ];


// const totalProductValue = products.map(item => (
//     {
//        name: item.name,
//        total: item.price * item.count
//     }));

// console.log(totalProductValue);

//EXAMPLE 2 - Parsing numbers to string and the other way around
// const numbers = [1,2,3,4,5];

// const stringNumbers = numbers.map(item => item.toString());
// const stringNumbers = numbers.map(String);

// const strings = [1,2,3,4,5];


// const numbers = strings.map(Number);



// console.log(numbers);