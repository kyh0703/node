const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};

console.time('전체 시간');
console.log('평범 로그');
console.log(string, number, boolean);
console.error('에러');

console.table([
  { name: '제로', birth: 1994 },
  { name: '제로', birth: 1994 },
]);

console.dir(obj, { colors: true, depth: 1 });

console.time('시간측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정');

const b = () => {
  console.trace('에러 위치 추적');
};

const a = () => {
  b();
};

a();

console.timeEnd('전체 시간');
