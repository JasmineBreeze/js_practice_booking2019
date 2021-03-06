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
  const Verbs = words.filter(function (n) {
    return n.startsWith("to ");
  });
  return Verbs
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
       let sqroot = [];
       for(let i = 0; i< nums.length; i ++) {
         let sqroota = Math.sqrt(nums[i]);
         let rounded = Math.round(sqroota * 100) / 100;
         sqroot.push(rounded);
       }
       return sqroot
  
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let sen = [];
  for (let i=0; i< sentences.length; i++){
  
    if(sentences[i].toLowerCase().includes(str)) {
      sen.push(sentences[i]);
    }
  }
  return sen
  
}
  


function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(function(subarray){
    return Math.max.apply(null, subarray);
  });
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
