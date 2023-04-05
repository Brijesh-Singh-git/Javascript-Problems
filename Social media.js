const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];



// function profileLookup(name, property) {
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       if (facebookProfiles[i].firstName === name) {
//         if (facebookProfiles[i].hasOwnProperty(property)) {
//           return facebookProfiles[i][property];
//         } else {
//           return "no such property";
//         }
//       }
//     }
//     return "person does not exist";
//   }

//  console.log(profileLookup("Pritesh", "number")); 
// console.log(profileLookup("Jay", "likes")); 
// console.log(profileLookup("Suyash", "address")); 
// console.log(profileLookup("Akash", "dob")); 
// console.log(profileLookup("Kamal", "likes")); 



// ---------------------------------------------------------------

// function findFullName(stateName) {
//     const profile = facebookProfiles.find((p) => p.address && p.address.state === stateName);
  
//     if (profile) {
//       return `${profile.firstName} ${profile.lastName}`;
//     } else {
//       return "No resident found in that state";
//     }
//   }

//   console.log(findFullName("up"));


// function findFullName(stateName) {
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       if (
//         facebookProfiles[i].address &&
//         facebookProfiles[i].address.state === stateName
//       ) {
//         return `${facebookProfiles[i].firstName} ${facebookProfiles[i].lastName}`;
//       }
//     }
//     return "No resident found";
//   }

//   console.log(findFullName("haryana"));



// ----------------------------------------------------------------------


// function getDLStatus(facebookProfiles) {
//     let names = [];
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       if (
//         facebookProfiles[i].address &&
//         facebookProfiles[i].address.location === "gurgaon"
//       ) {
//         let dlStatus = facebookProfiles[i].hasDrivingLicense ? "D/L" : "N D/L";
//         names.push(
//           `${facebookProfiles[i].firstName} ${facebookProfiles[i].lastName} - ${dlStatus}`
//         );
//       }
//     }
//     return names;
//   }

//   console.log(getDLStatus(facebookProfiles));




// function getDLStatus(facebookProfiles) {
//     return facebookProfiles.filter(profile => profile.address?.location === "gurgaon")
//       .map(profile => `${profile.firstName} ${profile.lastName} - ${profile.hasDrivingLicense ? 'D/L' : 'N D/L'}`);
//   }
  
//   const dlStatuses = getDLStatus(facebookProfiles);
// console.log(dlStatuses); // ["Pritesh Kumar - N D/L", "Jay - D/L"]



// ------------------------------------------------------------------------------------------

// function getFullName(facebookProfiles) {
//     return facebookProfiles.map(profile => `${profile.firstName} ${profile.lastName}`);
//   }
//   console.log(getFullName(facebookProfiles));  


// function getFullName(facebookProfiles) {
//     const names = [];
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       const profile = facebookProfiles[i];
//       const fullName = `${profile.firstName} ${profile.lastName}`;
//       names.push(fullName);
//     }
//     return names;
//   }
//   console.log(getFullName(facebookProfiles));
  



// ---------------------------------------------------------------------------



// function getLikes(facebookProfiles) {
//     return facebookProfiles.reduce((allLikes, profile) => {
//       if (profile.likes) {
//         allLikes.push(...profile.likes);
//       }
//       return allLikes;
//     }, []);
//   }
//   const likes = getLikes(facebookProfiles);
//   console.log(likes);   


// function getLikes(facebookProfiles) {
//     let likes = [];
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       if (facebookProfiles[i].likes) {
//         likes.push(...facebookProfiles[i].likes);
//       }
//     }
//     return likes;
//   }
//   const likes = getLikes(facebookProfiles);
//   console.log(likes);  





// ----------------------------------------------------------------------------------



// function getNameFromDelhiWithDL(facebookProfiles) {
//     const person = facebookProfiles.find(({ address, hasDrivingLicense }) => (
//       address && address.location === "delhi" && hasDrivingLicense
//     ));
//     return person ? `${person.firstName} ${person.lastName}` : "no such person";
//   }
//   console.log(getNameFromDelhiWithDL(facebookProfiles));   



// function getNameFromDelhiWithDL(facebookProfiles) {
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       if (
//         facebookProfiles[i].address &&
//         facebookProfiles[i].address.location === "delhi" &&
//         facebookProfiles[i].hasDrivingLicense
//       ) {
//         return `${facebookProfiles[i].firstName} ${facebookProfiles[i].lastName}`;
//       }
//     }
//     return "no such person";
//   }
//   console.log(getNameFromDelhiWithDL(facebookProfiles));







// -------------------------------------------------------------------------------------------------


// function getNameOfDriverWithoutDL(facebookProfiles) {
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       const profile = facebookProfiles[i];
//       if (profile.likes && profile.likes.includes("driving") && !profile.hasDrivingLicense) {
//         return `${profile.firstName} ${profile.lastName}`;
//       }
//     }
//     return "no such person";
//   }
//   console.log(getNameOfDriverWithoutDL(facebookProfiles));  




// function getNameOfDriverWithoutDL(facebookProfiles) {
//     const driverWithoutDL = facebookProfiles.find(profile => 
//       profile.likes.includes('driving') && !profile.hasDrivingLicense
//     );
//     return driverWithoutDL ? `${driverWithoutDL.firstName} ${driverWithoutDL.lastName}` : 'no such person';
//   }
//   console.log(getNameOfDriverWithoutDL(facebookProfiles));    