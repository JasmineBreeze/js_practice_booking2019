const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (n === nums[nums.length - 1]) {
    return null
  } else if (nums.includes(n)) {
    return nums[nums.indexOf(n) + 1]
  }
  else {
    return null
  }
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var count = {};
  str.split('').forEach(function (s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
};


const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split('').reverse().join(''));
};


const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var newArr = arrs.toString().split(',').map(Number);
  const add = (a, b) =>
    a + b
  const sum = newArr.reduce(add)
  return sum
}

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  var temp = 0;

  if (arr.length < 2) {
    return arr;
  } else {
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
