

const numList = [5, 6, 7, 8, 9];

function sumFor(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

console.log(sumFor(numList));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }

  return total;
}

console.log(sumWhile(numList));

function sumRecursion(list, listLength) {
  const counter = listLength;

  if (counter === 0) {
    return 0;
  }
  return list[counter - 1] + sumRecursion(list, listLength - 1);
}
console.log(sumRecursion(numList, 5));

function sumTheSimpleWay(list) {

  return _.reduce(list, function(memo, num) { return memo + num; }, 0);

}
console.log(sumTheSimpleWay(numList));
