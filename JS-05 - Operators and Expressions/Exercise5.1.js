//part-1
var names = ["Pravin", "ram", "rashi", "vina"];

function addNameToEnd(name) {
  names.push(name);
}

addNameToEnd("Rock");

console.log(names); 

//part-2
function checkIfNameExists(name) {
    return names.includes(name);
  }
  
  console.log(checkIfNameExists("Pravin")); 
  console.log(checkIfNameExists("vina"));

  //part-3
  function compareNameLists(newNames) {
    var commonNames = [];
  
    for (var i = 0; i < newNames.length; i++) {
      if (names.includes(newNames[i])) {
        commonNames.push(newNames[i]);
      }
    }
  
    return commonNames;
  }
  
  var newList = ["manav", "Ada", "Sam", "Joal"];
  console.log(compareNameLists(newList)); 

  //part-4
  function getNamesLength(names) {
    var namesLength = [];
  
    for (var i = 0; i < names.length; i++) {
      namesLength.push(names[i].length);
    }
  
    return namesLength;
  }
  
  console.log(getNamesLength(names)); //
