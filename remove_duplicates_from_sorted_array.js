
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Основной смысл в использовании 2 указателей, первый смотрит на первый элемент(в начале),
// а второй двигаем в поисках следующего уникального элемента, как нашли сдвигаем первый указатель на новую позицию


const assert = require('assert')

assert.ok(find_unique_elements([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5);
assert.ok(find_unique_elements([1,1,2]) === 2);

function find_unique_elements(array) {
  if (!array.length) {
    return 0;
  }

  var start = array[0];
  var unique = 1;
  for (var i = 1, l = array.length; i < l; i++) {
    const el = array[i];
    if (el > start) {
      start = array[i];
      unique++;
    } else {
      array[i] = undefined;
    }
  }
  array.sort((a,b) => a - b);
  return unique;
}
