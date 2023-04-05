
const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];


// function findCard(value, suit) {

// }

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/







// function findCard(value, suit) {
//   return cardData.some((card) => card.value === value && card.suit === suit);
// }
// console.log(findCard(5, 'heart')); // false
// console.log(findCard(10, 'club')); // true


// -----------------------------------------------------------------------------


// function getSuits(cardData) { 
    // write your code here
// }
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/






// function getSuits(cardData) { 
//     const suits = cardData.reduce((suitsArr, card) => {
//       if (!suitsArr.includes(card.suit)) {
//         suitsArr.push(card.suit);
//       }
//       return suitsArr;
//     }, []);
//     return suits;
//   }
//   const suits = getSuits(cardData);
//   console.log(suits); // ["heart", "club", "diamond"]
    



// ------------------------------------------------------------------------------------




// function getSuitCount(cardData) {
//     // write your code here
// }
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/


// function getSuitCount(cardData) {
//     const suitsCount = {};
//     for (let i = 0; i < cardData.length; i++) {
//       const card = cardData[i];
//       if (suitsCount[card.suit]) {
//         suitsCount[card.suit]++;
//       } else {
//         suitsCount[card.suit] = 1;
//       }
//     }
//     return suitsCount;
//   }
//   console.log(getSuitCount(cardData));  


// -----------------------------------------------------------------------


// function getSuitValues(cardData) {
//     // write your code here
// }

 
//  *  4. write a function which returns an object with the suits as its key and its available values as value
//  *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
//  *   



// function getSuitValues(cardData) {
//     const suits = getSuits(cardData);
//     const suitValues = {};
//     for (let suit of suits) {
//       suitValues[suit] = [];
//       for (let card of cardData) {
//         if (card.suit === suit) {
//           suitValues[suit].push(card.value);
//         }
//       }
//     }
//     return suitValues;
//   }
  
//   console.log(getSuitValues(cardData));
  // Output: { heart: [ 7 ], club: [ 8, 2, 10 ], diamond: [ 2, 5 ] 



