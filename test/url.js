import url, { URL } from 'url';

const myURL = new URL(
  'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'
);
console.log('new URL()', myURL);
console.log(url.format(myURL));

const parseURL = url.parse(
  'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'
);
console.log('new URL()', parseURL);
console.log(url.format(parseURL));
