/////// REDUCE Method //////////////
// Excutes a callback function over the elements of the array 
// and returns one output single value. It receives a callback and an initial value
// the initial value might be wahtever we need 

//EJEMPLO 1 - Sumando numeros
// const numbers = [1,2,3,4,5,6,7,8];

// const total = numbers.reduce(sum,0);

// function sum(accumulator, value){
//    return accumulator + value;
// }

// console.log(total);

// FORMA ALTERNATIVA DE SUMAR NUMEROS
//const numbers = [10,0,50,125,75,6,3];

// const suma = numbers.reduce((acc,item) => acc += item);
// console.log(suma);




//EJEMPLO 2  - Extrayendo el numero mayor

//   //El acumulador inicia en 0 y se compara como el primer numero del array
//   //si el acumulador es mayor se retorna a la const 'max'
//    //si el numero es mayor se retorna a la const 'max

// const numbers = [1,3,2,4,6,34,46,66,7,0];


// const max = numbers.reduce((acc,number) => {

//        if(acc > number){
       
//         return acc;
          
//       }else {
       
//         return number;
//       }
      
//    },0);
//    console.log(max);
  
 


// FORMA ALTERNATIVA

// const max = numbers.reduce((acc,item)=>{
//   return  Math.max(acc, item);
// },0);
//console.log(max);

// FORMA SIMPLIFICADA
//const max = numbers.reduce((acc,item) => Math.max(acc,item));





//EJEMPLO 3 - Sumatoria de valores en un array de objetos
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






//EJEMPLO 4 - Indexando con el metodo reduce

// const mascotas = [
//     {nombre: 'Pelusa', edad: 12, tipo: 'gato'},
//     {nombre: 'Puchini', edad: 12, tipo: 'perro'},
//     {nombre: 'Pulga', edad: 10, tipo: 'perro'},
//     {nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
// ];

// const indexed = mascotas.reduce((acc, mascota) => ({...acc,[mascota.nombre]:mascota}),{});
// console.log(indexed);




//EJEMPLO 5

// const aninado = [1,[2,3],4,[5]];

// const plano = aninado.reduce((acc, item) => acc.concat(item),[]);
// console.log(plano);



//EJEMPLO 6 - sumando dades de personas
// const people = [
//     {nombre: 'Marcos', edad:15},
//     {nombre: 'Lena', edad:10}
// ];

// const sumaEdades = people.reduce((acc, person)=> acc += person.edad,0);
// console.log(sumaEdades);




// EJEMPLO 7 - concatenando strings
// const strings = ['Mi', 'nombre', 'es', 'Marcos'];

// //El acumulador es el string inicial 'Hola'

// const saludo = strings.reduce((acc, palabra)=> acc += ' ' + palabra,'Hola');
// console.log(saludo);





//EJEMPLO 8
// const almuerzos = [
//     {principal: 'arepa', postre:'helado'},
//     {principal: 'tacos', postre:'torta de queso'},
//     {principal: 'pizza', postre:'galletas'},
//     {principal: 'sushi', postre:'quesillo'},
//     {principal: 'arepa', postre:'golfeados'},
//     {principal: 'arepa', postre:'churros'},
// ];


// const arepas = almuerzos.reduce((acc,almuerzo) => {
//      if(almuerzo.principal === 'arepa'){
//         return acc + 1;
//      }else {
//          return acc;
//      }
     
    
// },0);

// console.log(arepas);



//EJEMPLO 9
// We need an array [ first name, last name] of all users only if:
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

// USANDO CHAINING METHODS
// const res = users.filter(user => user.age >= 20 && user.age < 30)
//                  .map(user => `${user.firstName} ${user.lastName}`)
//                  .filter(fullName => fullName.length >= 10);



  // const isInTwenties = user => user.age >= 20 && user.age < 30;
  // const makeFullName = user => `${user.firstName} ${user.lastName}`;
  // const isAtLeastTenChars = fullName => fullName.length >= 10;
 
//const res = users.filter(isInTwenties).map(makeFullName).filter(isAtLeastTenChars);


// USANDO REDUCE 
// const res = users.reduce((acc,user) => {
//     const fullName = makeFullName(user);
//     if(isInTwenties(user) && isAtLeastTenChars(fullName)){
//          acc.push(fullName);
//     }
//     return acc;
// },[]);


//EJEMPLO 10 - Buscando una palabra en un array de objetos

// const fruits = [
//     {name:'apples', quantity: 2, id:0},
//     {name:'bananas', quantity: 0, id:1},
//     {name:'cherries', quantity: 5, id:2},
//     {name:'bananas', quantity: 0, id:3},
// ];

// const thisShitIsBananas = fruits.reduce((acc, fruit) => {
//     if(fruit.name === 'bananas') return fruit;
//     return acc;
// },[]);

// console.log(thisShitIsBananas);


//EJEMPLO 11 - Concatenando strings usando template strings

// const res = users.reduce((acc,user)=> `${acc}${user.firstName} ${user.lastName}\n`,'');
// console.log(res);


//EJEMPLO 12 / Calculando el factorial

// const numbers = [5,4,3,2,1];
// const factorial = numbers.reduce((acc,number)=> acc += number);
// console.log(factorial);


//EJEMPLO 13 - Filtrar individuos por ciertas condiciones

/*
Estudiantes de una universidad de cuyo nombre no quiero acordarme, realizo un estudio para determinar
"cuanto pesa ir a la escuela". El estudio consistio en determinar si el peso que carga un estudiante es su bolso cuando
va a la escuela puede influir en su desempe;o, !y que creen?, encontraros que si un estudiante carga mas de 2 kilos en su 
bolso, este tiende a tener mal desempe;o.

Segun estre estudio identificar quienes de los sigueintes alumnos podrian desempe;arse mal en el estudio, suponiendo
que los siguientes elementos pesan lo mismo en cada uno de sus bolsos:

Cuaderno: 0.2 kilos
Cartilla: 0.6 kilos
Trabajo de ciencias: 0.8 kilos
Lapiz: 0.1 kilos
Lonchera: 1 kilo (Comen mucho) :v
*/

//Datos de ejercisio
// const alumnos = [
//   {
//     nombre: 'Oscar',
//     bolso: ['Cuaderno','Cuaderno','Cuaderno','Cuaderno','Lapiz','Lapiz']
//   },
//   {
//     nombre: 'Maria',
//     bolso: ['Cuaderno','Cuaderno','Cartilla','Lapiz','Lapiz']
//   },
//   {
//     nombre: 'Miguel',
//     bolso: ['Cartilla','Cartilla','Lapiz','Lonchera']
//   },
//   {
//     nombre: 'Sandra',
//     bolso: ['Cuaderno','Lapiz','Lonchera']
//   },
//   {
//     nombre: 'David',
//     bolso: ['Cuaderno','Trabajo de ciencias','Lapiz']
//   },
//   {
//     nombre: 'Tatiana',
//     bolso: ['Trabajo de ciencias','Lapiz']
//   },
//   {
//     nombre: 'Fernando',
//     bolso: ['Lapiz','Lonchera','Lonchera'],
//   }
// ];




// const malDesempeno = alumnos.reduce((acc,alumno) => {

    // const cuaderno = 0.2;
    // const cartilla = 0.6; 
    // const trabajoDeCiencias = 0.8;
    // const lapiz =  0.1;
    // const lonchera = 1;
    // const bolsoAlumno = alumno.bolso;
    
//      const pesoEnBolsa = bolsoAlumno.reduce((acc,item) => {
 
//       if(item === 'Cuaderno'){
//          acc+=cuaderno;
//      }
//      if(item === 'Cartilla'){
//          acc+= cartilla;
//      }
//      if(item === 'Trabajo de ciencias'){
//         acc+= trabajoDeCiencias;
//      }
//      if(item === 'Lapiz'){
//         acc+= lapiz;
//      }
     
//      if(item === 'Lonchera'){
//       acc+= lonchera;
//      }
//      return acc;
     
//     },0);


//     if(pesoEnBolsa > 2){
//       return acc += alumno.nombre + ',';
//     }
//     return acc;
//      },[]);

//    console.log(malDesempeno);



//Different approach utilizing for of array

//     const cuaderno = 0.2;
//     const cartilla = 0.6; 
//     const trabajoDeCiencias = 0.8;
//     const lapiz =  0.1;
//     const lonchera = 1;
  

// const malDesempeno = alumnos.reduce((acc,alumno)=>{
//      let pesoEnBolsa = 0;
//      for(const item of alumno.bolso ) {
//       if(item === 'Cuaderno'){
//           pesoEnBolsa += cuaderno;
//         }
//         if(item === 'Cartilla'){
//           pesoEnBolsa += cartilla;
//         }
//         if(item === 'Trabajo de ciencias'){
//           pesoEnBolsa += trabajoDeCiencias;
//         }
//         if(item === 'Lapiz'){
//           pesoEnBolsa += lapiz;
//         }
        
//         if(item === 'Lonchera'){
//           pesoEnBolsa += lonchera;
//         }
//      }
//      if(pesoEnBolsa > 2) acc.push(alumno.nombre);
//      return acc;
// },[]);
   

// console.log(malDesempeno);
 
 
      
  





