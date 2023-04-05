// // find function
// function find(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i])) {
//         return array[i];
//       }
//     }
//     return undefined;
//   }
  
  // findIndex function
//   function findIndex(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i])) {
//         return i;
//       }
//     }
//     return -1;
//   }




// const numbers = [2, 4, 6, 8, 10];
// const words = ["apple", "banana", "cherry", "date", "elderberry" , "blue"];

// // // // // Find the first even number in the numbers array
// // // const evenNumber = numbers.find(num => num % 2 === 0);
// // // console.log(evenNumber); 

// // // Find the index of the first word starting with the letter "b" in the words array
// const index = words.findIndex(word => word.startsWith("b"));
// console.log(index); 


// ----------------------------------------------------------


// requirement one
//  * increment each number by one and output the resultant array using a higher order method and for loop
//  * HINT: use nesting
//  * solution =  [[15,22,24,65], [34,47,52,66]]
//  * 
//  * 
//  * requirement two
//  * from the above array, create an array of array of even numbers using a higher order method and for loop
//  * solution = [[14,64], [46]]




// const practiceData = [   [14,21,23,64], [33,46,51,65]   ];

// // Using map method
// const resultWithMap = practiceData.map(subArray => {
//   return subArray.map(number => number + 1);
// });
// console.log(resultWithMap); 


// // Using for loop
// const resultWithForLoop = [];
// for (let i = 0; i < practiceData.length; i++) {
//   const subArray = practiceData[i];
//   const resultSubArray = [];
//   for (let j = 0; j < subArray.length; j++) {
//     resultSubArray.push(subArray[j] + 1);
//   }
//   resultWithForLoop.push(resultSubArray);
// }
// console.log(resultWithForLoop); 






// const practiceData = [[14,21,23,64], [33,46,51,65]];

// // Using filter method
// const evenNumbersWithFilter = practiceData.map(subArray => {
//   return subArray.filter(number => number % 2 === 0);
// });
// console.log(evenNumbersWithFilter); // Output: [[14, 64], [46]]

// // Using for loop
// const evenNumbersWithForLoop = [];
// for (let i = 0; i < practiceData.length; i++) {
//   const subArray = practiceData[i];
//   const evenNumbersSubArray = [];
//   for (let j = 0; j < subArray.length; j++) {
//     if (subArray[j] % 2 === 0) {
//       evenNumbersSubArray.push(subArray[j]);
//     }
//   }
//   evenNumbersWithForLoop.push(evenNumbersSubArray);
// }
// console.log(evenNumbersWithForLoop); 


// ----------------------------------------------------------

// problem => return an array such that numbers at odd index are multiplied by 2
//     // and numbers at even index are multiplied by 10


// const array = [23, 45, 467, 789, 34, 989, 56];

// const resultArray = array.map((number, index) => {
//   if (index % 2 === 0) {
//     return number * 10;
//   } else {
//     return number * 2;
//   }
// });

// console.log(resultArray); // Output: [230, 90, 9340, 1578, 340, 1978, 560]




// ----------------------------------------------------------


// using a higher order method, create a carObject variable such that 

 
//  * {
//  * honda:city,
//  * toyota:innova,
//  * maruti:alto,
//  * tata:nano
//  * }




// const carBrands = ["honda", "toyota", "maruti", "tata"];
// const carModel = ["city", "innova", "alto", "nano"];

// const carObject = carBrands.reduce((obj, brand, index) => {
//   obj[brand] = carModel[index];
//   return obj;
// }, {});

// console.log(carObject); 




// ----------------------------------------------------------



// Use the reduce method 
//  to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 

// const arrays = [ [1, 2, 3], [4, 5], [6]  ];

// const flattenedArray = arrays.reduce((accumulator, currentValue) => {
//   return accumulator.concat(currentValue);
// }, []);

// console.log(flattenedArray); 

// [1,2,3,4,5,6]


// ----------------------------------------------------------

// return an array with all words converted into uppercase using higher order function



// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

// const countriesUpperCase = countries.map(country => country.toUpperCase());

// console.log(countriesUpperCase); // Output: ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']




