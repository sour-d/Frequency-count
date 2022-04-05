const arrayMethods = require('./library.js');

const addCount = function (element, position, groups) {
  if (position === -1) {
    position = groups.length;
    groups.push([element, 0]);
  }
  groups[position][1]++;
  return groups;
};

const countFrequency = function (set) {
  return arrayMethods.group(set, addCount);
};

console.log(countFrequency([1, 2, 3]));
console.log(countFrequency([1, 2, 1]));
console.log(countFrequency([1, 2, 2, 1, 3]));
console.log(countFrequency([[1], 2, 1, [1]]));
console.log(countFrequency([[1, 2], [1, 2], [1], [2], [1]]));
