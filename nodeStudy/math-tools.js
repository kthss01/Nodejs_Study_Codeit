// const PI = 3.14;
// let author = "codeIt teacher";

// function add(a, b) {
//   return a + b;
// }

// let test = {
//   date: '2021-10-19',
//   types: ['safetyTest', 'performanceTest'],
//   printTypes() {
//     for (const i in this.types) {
//       console.log(this.types[i]);
//     }
//   }
// }

// exports.PI = PI;
// exports.author = author;
// exports.plus = add;
// // exports.add = add;
// exports.test = test;

// 하나의 객체로 모아서 외부에 공개
let calculator = {
  PI: 3.14,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

module.exports = calculator;

console.log('exports--------------->');
console.dir(exports);
console.log('require--------------->');
console.dir(require);
console.log('module--------------->');
console.dir(module);
console.log('__filename--------------->');
console.dir(__filename);
console.log('__dirname--------------->');
console.dir(__dirname);