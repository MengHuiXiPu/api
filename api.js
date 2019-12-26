// let name = "name";
// name = name
//   .split("")
//   .join(' ')
//   .replace(/ /g, "#");
// console.log(name);
let inputTypea = "";
let inputTypeb = 1;
let inputTypec = NaN;
let inputTypeh = undefined;
let inputTypei = null;
let inputTypej = Symbol();
let inputTyped = false;
let inputTypee = [];
let inputTypef = { name: "jia", age: 12 };
let inputTypeg = () => {};
function types(ele) {
  return Object.prototype.toString
    .call(ele)
    .split(" ")[1]
    .split("]")[0];
}
console.log(types(inputTypea));
console.log(types(inputTypeb));
console.log(types(inputTypec));
console.log(types(inputTypeh));
console.log(types(inputTypei));
console.log(types(inputTypej));
console.log(types(inputTyped));
console.log(types(inputTypee));
console.log(types(inputTypef));
console.log(types(inputTypeg));

let arr1 = [1, [2, 3], 4, [[[5, 6], 7], 8], 9, 10].flat(Infinity);
console.log(arr1);
let newarr1 = arr1.forEach((item, index) => console.log(`${index}____${item}`));
function curry(n) {
  return m => {
    return n + m;
  };
}
let c1 = curry(10);
console.log(c1(20));
