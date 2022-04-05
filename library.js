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

const findElement = function (element, groups, operation) {
  let position = positionOf(element, groups);
  return operation(element, position, groups);
};

const countFrequency = function (elements, operation) {
  let groups = [];
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    groups = findElement(element, groups, operation);
  }
  return groups;
};

exports.group = countFrequency;
