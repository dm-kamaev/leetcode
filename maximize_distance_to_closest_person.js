
// https://leetcode.com/problems/maximize-distance-to-closest-person/


const assert = require('assert')

function maxDistToClosest(seats) {
  var distance = 0;
  var parts = seats.join('').split(/1+/);

  // при split, если в начале/конце были единицы возникнут пустые строки
  if (parts[0] === '') {
    parts[0] = '1';
  }

  const last_index = parts.length-1;
  if (parts[last_index] === '') {
    parts[last_index] = '1';
  }

  for (var i = 0, l = parts.length; i < l; i++) {
    var el = parts[i];
    if (!el.startsWith('0')) {
      continue;
    }
    var len = el.length;
    var temp = Math.floor((len+1) / 2);
    // если существует следующий/предыдущий элемент(другими словами значит там была единица), то берем середину,
    // а иначе всю длину промежутка
    distance = Math.max(distance, Math.max(parts[i-1] ? temp : len, parts[i+1] ? temp : len));
  }

  return distance;
}

assert.ok(maxDistToClosest([1,0,0,0,1,0,1]) === 2);
assert.ok(maxDistToClosest([0,1,1,1,0,0,1,0,0]) === 2);
assert.ok(maxDistToClosest([1,0,0,1]) === 1);
assert.ok(maxDistToClosest([1,0,0,0]) === 3);
assert.ok(maxDistToClosest([0,0,1,1,0,0]) === 2);
assert.ok(maxDistToClosest([1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0]) === 5);
assert.ok(maxDistToClosest([0,1,0,0,0,0,0,0,1,1,0,1,1]) === 3);
