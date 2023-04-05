
// *****************THIS ASSIGNEMNT HAS BEEN DONE BY BRIJESH SINGH *******************



// DESTRUCTURE EXERCISE 

// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar'] 


// Q1 

// places.shift() 
// console.log(places)



// Q2. 

// morePlaces.unshift("delhi") 
// console.log(morePlaces)




// Q3. 

// Using the rest operator to remove the last  element from Places array
// const [first, second, third, ...restPlaces] = places;

// // Using the rest operator to remove the last three elements from morePlaces array
// const [fourth, ...restMorePlaces] = morePlaces

// const combinedPlaces = [...restMorePlaces,first, second, third ];

// console.log(combinedPlaces);





// Q.4 
// const myData = {
//     name: "Rahul",
//     age: 20,
//     gender: "male",
//     address: {
//       pinCode: 123455,
//       city:"delhi"
//     },
//     likes:["music", "movies"]
//   }


//   const { address: 
//     { 
//         pinCode: myPincode 
//     } 
// } = myData;

//   console.log(myPincode); 



// const { likes: [a, myLike] } = myData;

// console.log(myLike);