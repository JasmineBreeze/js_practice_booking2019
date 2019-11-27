function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required")

const SmallNum = nums.filter(function (n) {
  return n <1;
});

return SmallNum
}

 

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const NamesChar = names.filter(function (n, c) {
    return n[0] === c;
  });
  return NamesChar
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = nums.filter(function (n)
  {
    return  n % 1 === 0;
  });
  return integers
}

function getCities(users) {
  if (!users) throw new Error("users is required");
 
  let finalUsers = [];

  for (let i = 0; i <users.length; i++) {
    finalUsers.push(users[i].data.city.displayName);
  }
  return finalUsers
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
