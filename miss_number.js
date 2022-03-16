// https://leetcode.com/problems/missing-number/

// S = (a1 + an) * n / 2 - сумма арифмитической прогрессии,
// a1 - первый член, an - последний член, n - кол-во членов прогрессии
// https://izamorfix.ru/matematika/algebra/arif_prog_summa.html
// Просто для справки
// Любой(n - й) член прогрессии может быть вычислен по формуле общего члена:
// a(n) = a(1) + (n - 1) * d, d - шаг прогрессии, n - номер

const assert = require('assert');

/**
 * вычитаем из сумму арифмитической прогрессии сумму чисел и тем самым находим недостающее число
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var first = 0;
  var last = nums.length;
  var n = last+1;
  var sum_sequence = (first + last) * n / 2 ;

  return sum_sequence - nums.reduce((total, current) => total + current, 0);
};

assert.ok(missingNumber([3, 0, 1]) === 2);
assert.ok(missingNumber([0, 1]) === 2);
assert.ok(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8);
assert.ok(missingNumber([0]) === 1);


