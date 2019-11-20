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
for (let i=0; i<words.length; i++){
  var String = words[i].toLowerCase();
  if (i !=0) {
    String = String.substr(0,1).toUpperCase() + String.substr(1);
  }
 result +=String }

 return result;
}

//if index is zero reurn work lower case, else upeprcase first character and then join
  

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};