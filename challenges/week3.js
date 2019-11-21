function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const sqNum = nums.map(function (num) {
    return num * num
  });
  return sqNum;
}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var result = "";
  for (let i = 0; i < words.length; i++) {
    var String = words[i].toLowerCase();
    if (i != 0) {
      String = String.substr(0, 1).toUpperCase() + String.substr(1);
    }
    result += String
  }

  return result;
}


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let sum=0;
  for (let i= 0; i < people.length; i++){
    sum +=people[i].subjects.length;
  }
  return sum
}



  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    for (let i = 0; i < menu.length; i++){
      if (menu[i].ingredients.includes(ingredient)){
        return true
      }
    }
    return false
  }


    function duplicateNumbers(arr1, arr2) {
      if (arr1 === undefined) throw new Error("arr1 is required");
      if (arr2 === undefined) throw new Error("arr2 is required");
      let matches = [];
       for (let i =0; i < arr1.length; i++){
         for (let j = 0; j < arr2.length; j++){
           if (arr1[i] === arr2[j]) matches.push(arr1[i])
         }
       }
       let unique = [...new Set(matches)]
       return unique.sort()
    }

    module.exports = {
      getSquares,
      camelCaseWords,
      getTotalSubjects,
      checkIngredients,
      duplicateNumbers
    };