// Описание и решение: https://www.youtube.com/watch?v=JtMuXmmDl9s
/*
  Дан отсортированный массив чисел и целевое число,
  надо найти пару чисел которые равны целевому числу и
  вернуть массив индексов этих чисел
*/
/* Решение:
  через 2 указателя, которые будем двигать
  с начала массива и с конца
*/
const assert = require('assert');

function find_via_pointers(nums, target) {
  let pointer_left = 0;
  let pointer_right = nums.length - 1;

  do {
    let result = nums[pointer_left] + nums[pointer_right];
    if (result === target) {
      break;
    } else if (result > target) {
      pointer_right--;
    } else {
      pointer_left++;
    }
  } while (pointer_left !== pointer_right);

  // not found
  if (pointer_left === pointer_right) {
    return [];
  } else {
    return [pointer_left, pointer_right];
  }
};

assert.deepStrictEqual(find_via_pointers([2, 3, 4], 6), [0, 2]);
assert.deepStrictEqual(find_via_pointers([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(find_via_pointers([3, 3], 6), [0, 1]);

/*
  Есть так же решение через бинарный поиск:
  берем каждый элемент массива
  и ищем для него пару среди остальных элементов посредством бинарного поиска
*/
function find_via_binary_search(nums, target) {

  for (let i = 0, l = nums.length; i < l; i++) {
    const el = nums[i];
    const diff = target - el;
    if ((i+1) in nums) {
      let left = i + 1;
      let right = nums.length - 1;
      do {
        let len = right - left;
        // if the borders converge
        if (len === 1 || len === 0) {
          if (nums[left] === diff) {
            return [i, left];
          } else if (nums[right] === diff) {
            return [i, right];
          } else {
            break;
          }
        }

        const middle = Math.floor(len / 2) + (i+1);
        const value = nums[middle];
        // console.log({ nums, i, left, right, middle, value, diff});
        if (value === diff) {
          return [i, middle];
        } else if (value < diff) {
          left = middle+1;
        } else if (value > diff) {
          right = middle-1;
          // console.log('SELECT LEFT PART ', { left, right });
        }
      } while (left <= right);
    }
  }
  return [];
};
assert.deepStrictEqual(find_via_binary_search([2, 3, 4], 6), [0, 2]);
assert.deepStrictEqual(find_via_binary_search([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(find_via_binary_search([3, 3], 6), [0, 1]);

/*
  Кроме того, есть решение с использование Hash:
  Будем хранить Hash для хранения уже пройденных элементов в массиве
*/
function find_via_hash(nums, target) {
  let hash = {};

  for (let i = 0, l = nums.length; i < l; i++) {
    const el = nums[i];
    const diff = target - el;
    if (diff in hash) {
      return i < hash[diff] ? [i, hash[diff]] : [hash[diff], i];
    } else {
      hash[el] = i;
    }
  }
};

assert.deepStrictEqual(find_via_hash([2, 3, 4], 6), [0, 2]);
assert.deepStrictEqual(find_via_hash([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(find_via_hash([3, 3], 6), [0, 1]);