const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar'] 


// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]

const [a , b, c , ...restPlaces] = places 

const [d, ...restMorePlaces] = morePlaces 

const result = [...restMorePlaces, a , b, c ] 

console.log(result)
