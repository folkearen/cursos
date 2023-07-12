// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  

function lookUpProfile(name, prop) {
    // Only change code below this line
      let isContact = contacts.some(item => item['firstName'] == name);
      let isProperty = contacts.some(item => item[prop]);
      let isAll = contacts.filter(item => item['firstName'] == name && item[prop])
      console.log(isAll)
      console.log(isContact)
      console.log(isProperty)

      if(isAll) {
        return isAll[0][prop]
    }


      if(isContact && !isProperty) return 'No such property'

      if(!isContact) return 'No such contact' 
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "likess"));

