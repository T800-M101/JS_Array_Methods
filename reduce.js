/////// REDUCE Method //////////////
// Excutes a callback function over the elements of the array 
// and returns one output single value. It receives a callback and an initial value

//EJEMPLO 1 - Sumando numeros
// const numbers = [1,2,3,4,5,6,7,8];

// const total = numbers.reduce(sum,0);

// function sum(accumulator, value){
//    return accumulator + value;
// }

// console.log(total);




//EJEMPLO 2 - Sumando numeros

// const numbers = [2,5,2,4,7,4,67,3,2,5,7,5];

// const total = numbers.reduce((acc,item) => acc + item, 0);

// console.log(total);

// const numbers = [1,2,3,4,6,34,46,66,7,0];





//EJEMPLO 3  - Extrayendo el numero mayor
// const max = numbers.reduce(callback,-Infinity);

// function callback(accumulator, value){
//      if(accumulator > value){
//          return accumulator;
//      }else{
//          return value;
//      }
// }

// console.log(max);





//EJEMPLO 4 - Sumatoria de valores en un array de objetos
// const store = [
//     {
//         product: 'laptop',
//         value: 1000,
//         count: 3
//     },
//     {
//         product: 'desktop',
//         value: 1500,
//         count: 4
//     },
//     {
//         product: 'mobile',
//         value: 500,
//         count: 10
//     },
// ];

// const totalValueStore = store.reduce((acc,item) => acc + item.value * item.count,0);
// console.log(totalValueStore);






//EJEMPLO 5 - Indexando con el metodo reduce

// const mascotas = [
//     {nombre: 'Pelusa', edad: 12, tipo: 'gato'},
//     {nombre: 'Puchini', edad: 12, tipo: 'perro'},
//     {nombre: 'Pulga', edad: 10, tipo: 'perro'},
//     {nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
// ];

// const indexed = mascotas.reduce((acc, mascota) => ({...acc,[mascota.nombre]:mascota,}),{});
// console.log(indexed);{nombre: 'Marcos', edad:10}



//EJEMPLO

// const aninado = [1,[2,3],4,[5]];

// const plano = aninado.reduce((acc, item) => acc.concat(item),[]);
// console.log(plano);


//EJEMPLO 5
// const people = [
//     {nombre: 'Marcos', edad:15},
//     {nombre: 'Lena', edad:10}
// ];

//const res = people.reduce((acc, item)=> acc += item.edad,0);
//const strings = ['Mi', 'nombre', 'es', 'Marcos'];

//const res = strings.reduce((acc, item)=> acc += ' ' + item,'Hola');


//EJEMPLO 6 
//const numbers = [10,0,50,125,75,6,3];

// const res = numbers.reduce((acc,item)=>{
//   return  Math.max(acc, item);
// },0);

//const res = numbers.reduce((acc,item) => Math.max(acc,item));
//const res = numbers.reduce((acc,item) => acc += item);


//EJEMPLO 7
// const almuerzos = [
//     {principal: 'arepa', postre:'helado'},
//     {principal: 'tacos', postre:'torta de queso'},
//     {principal: 'pizza', postre:'galletas'},
//     {principal: 'sushi', postre:'quesillo'},
//     {principal: 'arepa', postre:'golfeados'},
//     {principal: 'arepa', postre:'churros'},
// ];


// const res = almuerzos.reduce((acc,item) => {
//      if(item.principal === 'arepa'){
//         return acc + 1;
//      }else {
//          return acc;
//      }
     
    
// },0);



//EJEMPLO 8
// We nees an array [ first name, last name] of all users only if:
// 1. they are in their tweinties
// 2. Their full names are 10 characters or more.


// const users = [
//     {firstName: 'Bob',
//      lastName:'Doe',
//      age: 37},
//      {firstName: 'Rita',
//      lastName:'Smith',
//      age: 21},
//      {firstName: 'Rick',
//      lastName:'Fish',
//      age: 28},
//      {firstName: 'Betty',
//      lastName:'Bird',
//      age: 44},
//      {firstName: 'Joe',
//      lastName:'Groover',
//      age: 22},
//      {firstName: 'Jill',
//      lastName:'Pill',
//      age: 19},
//      {firstName: 'Sam',
//      lastName:'Smith',
//      age: 22},
// ];

// const res = users.filter(user => user.age >= 20 && user.age < 30)
//                  .map(user => `${user.firstName} ${user.lastName}`)
//                  .filter(fullName => fullName.length >= 10);



  // const isInTwenties = user => user.age >= 20 && user.age < 30;
  // const makeFullName = user => `${user.firstName} ${user.lastName}`;
  // const isAtLeastTenChars = fullName => fullName.length >= 10;
 
//const res = users.filter(isInTwenties).map(makeFullName).filter(isAtLeastTenChars);

// const res = users.reduce((acc,user) => {
//     const fullName = makeFullName(user);
//     if(isInTwenties(user) && isAtLeastTenChars(fullName)){
//          acc.push(fullName);
//     }
//     return acc;
// },[]);


//EJEMPLO 9

// const fruits = [
//     {name:'apples', quantity: 2, id:0},
//     {name:'bananas', quantity: 0, id:1},
//     {name:'cherries', quantity: 5, id:2},
//     //{name:'bananas', quantity: 0, id:3},
// ];

// const thisShitIsBananas = fruits.reduce((acc, fruit) => {
//     if(fruit.name === 'bananas') return fruit;
//     return acc;
// },[]);

// console.log(thisShitIsBananas);


//EJEMPLO 10

// const res = users.reduce((acc,user)=> `${acc}${user.firstName} ${user.lastName}\n`,'');
// console.log(res);


// const numbers = [5,4,3,2,1];
// const factorial = numbers.reduce((acc,number)=> acc += number);
// console.log(factorial);




