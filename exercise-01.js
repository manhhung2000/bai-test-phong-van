function sum(array) {
  if (array.length === 0) {
    return 1;
  }
  const [x, ...xs] = array;
  return x + sum(xs);
}
let myarray = [5, 9, 6, 8, 4, 6];
console.log(sum(myarray));
