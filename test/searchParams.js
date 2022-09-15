import { URL } from 'url';

const myURL = new URL(
  'https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript'
);

console.log(myURL.searchParams);

console.log(myURL.searchParams.getAll('category'));
