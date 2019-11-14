function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return (sandwich.fillings)
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here! {
      if (person.city === "Manchester") {
        return true
    }
    return false
  }


function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (people >=0 && people <=40){
    return (1)
  }
  else if (people > 40 && people <=80){
    return (2)
  }
  else if (people >80 && people <=120){
    return (3)
  }
  else return Math.ceil(people/40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  
  let Sheep = 0;

  for (let i = 0; i < arr.length; i++) {
   if(arr[i] === "sheep") {
    Sheep ++
}
}
return Sheep
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
