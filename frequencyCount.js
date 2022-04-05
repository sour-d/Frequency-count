const isArray = function (content) {
  return Array.isArray(content);
};

const isEqual = function (content1, content2) {
  if (content1 === content2) {
    return true;
  }
  if (isArray(content1) && isArray(content2)) {
    return areArraysEqual(content1, content2);
  }
  return false;
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!isEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

const positionOf = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      return index;
    }
  }
  return -1;
};

const countOccurence = function (element, frequencyCounts) {
  let position = positionOf(element, frequencyCounts);
  if (position === -1) {
    frequencyCounts.push([]);
    position = frequencyCounts.length - 1;
    frequencyCounts[position].push(element);
    frequencyCounts[position].push(0);
  }
  count = frequencyCounts[position][1];
  // position += position === -1 ? frequencyCounts.push([]) : 0;
  frequencyCounts[position][1] = count + 1;
  return frequencyCounts;
};

const countFrequency = function (elements) {
  if (elements.length === 0) {
    return [];
  }
  const frequencyCounts = countFrequency(elements.slice(1));
  return countOccurence(elements[0], frequencyCounts);
};

console.log(countFrequency([1, 2, 3]));
console.log(countFrequency([1, 2, 1]));
console.log(countFrequency([1, 2, 2, 1, 3]));
console.log(countFrequency([[1], 2, 1, [1]]));
console.log(countFrequency([[1, 2], [1, 2], [1], [2], [1]]));
