let arr1 = "name";
// for (var i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }
// arr1.forEach(item => {
//   console.log(item);
// });
let arr2 = [1, 2, [5, 2, 3], [[[3], 4, 5], 6], 7, 8, 1, 2];
arr2 = Object.values([...new Set(arr2.flat(Infinity))]);
console.log(arr2);
arr2.forEach(item => console.log(item));
