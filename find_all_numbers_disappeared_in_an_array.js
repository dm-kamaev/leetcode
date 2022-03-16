// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var unique_list = Array.from(new Set(nums));

  var first = 1;
  var last = nums.length;
  var n = last;
  var sum_sequence = (first + last) * n / 2 ;

  var sum_with_missing = unique_list.reduce((total, el) => total+el, 0);
  const diff = Math.floor(sum_sequence - sum_with_missing);
  console.log(sum_sequence, sum_with_missing, diff);
  // console.log(unique_list);
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);