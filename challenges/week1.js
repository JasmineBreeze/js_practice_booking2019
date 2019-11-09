function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var FirstChar = word[0].toUpperCase();
  var RestOfWord = word.slice(1);
  var WholeWord = FirstChar + RestOfWord;
  return WholeWord
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  var FirstInitial = firstName[0];
  var LastInitial = lastName[0];
  var Initials = FirstInitial + "." + LastInitial;
  return Initials
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  var Calc = (originalPrice / 100 * vatRate) + originalPrice;
  var Decimals = Calc.toFixed(2);
  var num = Decimals.toString(); 
  var nums = num.slice(0, (num.indexOf("."))+3); 
  var Number1 = Number(nums)
  return Number1
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
