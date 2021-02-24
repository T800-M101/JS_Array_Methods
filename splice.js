/////SPLICE METHOD////
//This method changes the original array by removing or replacing existing elements from it.

//It can gets optionally new elements which will be place inside o the array
//in the end it will change the array  on which is call upon and will return an array with the 
//remove items



const numbers = [1,2,3,4,5,6,7,8,9];
//It receives an starting index and counts how many  elements you want to remove from the original array
//if the method is applied
numbers.splice(2,3);
console.log(numbers);


//If we apply the method assigning to a constant it will return the elements removed fron the array
const numbers2 =[1,2,3,4,5,6,7,8,9];
const deleted = numbers2.splice(2,3);
console.log(deleted);

//Afte the first 2 parameters the method adds the elements provided
const numbers3 = [1,2,3,4,5];
numbers3.splice(0,3,4,5);
console.log(numbers3);

//if we do not want to remove any element of the array but instead we waht to add new elements
const people = ['memo','mary','mama'];
people.splice(1,0,'toga');
console.log(people);