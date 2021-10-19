// let m = require('./math-tools.js');

// console.log(m.PI);
// console.log(m.author);
// // console.log(m.add(1, 2));
// console.log(m.plus(1, 2));
// console.log(m.test.date);
// console.log(m.test.types);
// m.test.printTypes();

// console.log(m.PI);
// console.log(m.add(2,4));
// console.log(m.subtract(1,2));
// console.log(m.multiply(1,2));
// console.log(m.divide(1,2));

// const fs = require('fs');

// 특정 디렉토리 안에 있는 파일 목록 배열 형식 리턴
// let fileList = fs.readdirSync('.');
// console.log(fileList);

// new라는 파일에 파일 내용 씀
// fs.writeFileSync('new', 'Hello Node.js!');

// const os = require('os');

// console.log(os.cpus()); // cpu 정보 출력

// const cowsay = require('cowsay');

// console.log(cowsay.say({
//   text : 'I love js',
// }));

// const fs = require('fs');

// console.log('Start');

// 동기 실행
// let content = fs.readFileSync('./new', 'utf8');
// console.log(content);

// console.log('Finish');

// console.log('Start');

// // 비동기 실행
// fs.readFile('./new', 'utf8', (error, data) => {
//   console.log(data);
// });

// console.log('Finish');

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();
// const myEmitter2 = new EventEmitter();

// myEmitter.on('test', () => {
//   console.log('Success!');
// });

// myEmitter.on('test', () => {
//   console.log('1');
// });

// myEmitter.on('test', () => {
//   console.log('2');
// });

// myEmitter.on('test', () => {
//   console.log('3');
// });

// myEmitter2.on('test', () => {
//   console.log('4');
// })

// console.log(myEmitter.listeners('test'));

// myEmitter.emit('test');

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// myEmitter.on('test', (arg1, arg2, arg3, arg4) => {
//   // console.log(arg1, arg2, arg3);
//   // console.log(arg1, arg2);
//   console.log(arg1, arg2, arg3, arg4);
// });

// myEmitter.emit('test', 'apple', 'banana', 'pear');

const obj = {
  type: 'text',
  data: 'Hello CodeIt',
  date: '2021-10-19',
};

myEmitter.on('test', (info) => {
  console.log(info);
});

myEmitter.emit('test', obj);