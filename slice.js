///////SLICE METHOD//////
// This method returns a shallow copy of a portion on an array.
// It does not modify the original array on which is called upon


const numbers = [1,2,3,4,5,6,7,8,9];
// If not indexes are provided, it returns a complete copy of the original array
const numbers2 = numbers.slice(); 

// The initial index is that representing the first element to copy. 
// The last index should be one more than the last element to coopy.

const numbers3 = numbers.slice(3,5); 
console.log(numbers3);

//If we provide a negative number we get tha last elements of the array 
const numbers4 = numbers.slice(-3);

//If we provide a positive number we get all the elements starting at that index
const numbers5 = numbers.slice(1);


//So numbers.slice() is similar to numbers.slice(0);


///EXAMPLE 1//////
 const participants = ['Florin', 'Ivan', 'Lea','Jai','Patrick'];
 //we want to show the winners (the firts three)

 const winners = participants.slice(0,3);

