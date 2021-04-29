// console.log('Hello Javascript')
//
// {
//     const name = 'Mark';
//     console.log(name);
// }
//
// let age = 37;
//
// console.log(age);
//
// {
//     age++;
//     console.log(age);
// }
//
// var a = 0;
//
// (function () {
//         a++;
//         console.log(a);
//     })();
//
//     console.log(a);
//
// { var adoy = 37;}
// console.log(adoy);
//
//
//     var c = 0;
// {
//     c++;
//     console.log(c);
// }
//
// { var d =0;
// console.log(d);}
//
// console.log(d);
//
//
//     console.log(name);
//
//     name='Mark';
//
//     console.log(name);
//
//     var name='Renjun';
//
//     let whatever = 'Mark';
//     whatever = 37;
//     whatever = true;
//     // 값에 따라서 변수가 가진 자료형이 달라지는데 이를 동적타이핑이라고 함. dynamic type language
//
// const isTrue = true;
// const isFalse = false;
//
// console.log(isTrue, typeof isTrue);
// console.log(isFalse, typeof isFalse);
//
// const allan = null;
// console.log(allan, typeof allan);
//
//
//
//
//
//
// let b;
// console.log(b, typeof b);
//
// b=undefined;
// console.log(b, typeof b);
//
//
//
// if (allan==b) {
//     console.log(allan==b);
// }
//
// // true가 나옴. 즉 null과 undefined는 == 비교시 같은 것으로 여겨짐.
// // 때문에 ===으로 비교해야함. ===은 값뿐만 아니라 type까지 나오기 때문에 정확하게 비교가 가능함.
//
// if (allan===b) {
//     console.log(allan===b);
// }
//
// const r = Number('Mark');
//
// console.log(r, typeof r);
//
//
// const dr = 'Mark';
// const eam = `${dr} Lee`;
//
// console.log(eam);

// if (false) console.log(false);
// if (0) console.log(false);
// if ('') console.log('');
// if (null) console.log(null);
// if (undefined) console.log(undefined);
// if (NaN) console.log(NaN);
//
// if (true) console.log(true);
// if (37) console.log(37);
// if (-37) console.log(-37);
// if ('Mark') console.log('Mark');
// if ({}) console.log({});
// if ([]) console.log([]);
//
// let n = 5;
// n % 5 === 0 && console.log('5로 나눠 떨어질 때만 실행');
// n % 7 === 0 && console.log('5로 나눠 떨어질 때만 실행');

// let n = 5;
// console.log(n%5 === 0 ? '5의 배수입니다' : '5의 배수가 아닙니다');
//
// // 조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
// // 중괄호 사용 불가 문법이므로 하나의 표현식만 사용 가능
//
// const message = n%5 === 0 ? '5의 배수입니다' : '5의 배수가 아닙니다';
// console.log(message);
//
// // 표현식의 결과를 변수에 할당 가능

// let n = 5;
//
// switch (n) {
//     default:
//         console.log(n);
// }
// // default 뒤에 있는 문장은 항상 참이어서 실행되는 블럭
// switch (n%5) {
//     case 0: {
//         console.log('5의 배수입니다.')
//     }
//     default: {
//         console.log(n);
//     }
// }
// // n을 5로 나눈 나머지가 0인경우 실행되는 블럭 추가, case '비교할 값': 을 이용해서 맞을 경우 실행
// // 이때 앞 case가 조건이 맞으므로 언제나 실행되는 default와 동시 실행
// switch (n%5) {
//     case 0: {
//         console.log('5의 배수입니다.')
//         break;
//     }
//     default: {
//         console.log(n);
//     }
// }
// 만약 case가 맞을 경우 default 블럭이 실행되게 하고 싶지 않다면 case문에 break를 달아주면 된다.

// n=10
// switch (n%5) {
//     case 0: {
//         console.log('5의 배수입니다.')
//         break;
//     }
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log('5의 배수가 아닙니다.')
//     default: {
//         console.log(n);
//     }
// }

// // 나의 해석: 0부터 5전, 즉 4까지 ++, 즉 1씩 증가하며 반복한다
// for (let i = 0, j=2; i<6; i++, j=j*j) {
//     console.log('안녕하세요', i, j);
// }
// for (let i =0; i<5; i++) {
//     console.log(i);
//     if (i>2) {
//         break;
//     }
//     console.log('안녕하세요', i);
// }
// // 예상: 00 11 22 3 > 맞음
// for (let i =0; i<5; i++) {
//     console.log(i);
//     if (i<2) {
//         continue;
//     }
//     console.log('안녕하세요', i);
// }

// for (;;) {
//     console.log('안녕하세요');
//     k=Math.random()
//     if (k * 100 >90) {
//         console.log(k)
//         break;
//     }
// }
//
// while (true) {
//     console.log('안녕하세요');
//     if (Math.random()*100>90) {
//         break;
//     }
// }
//
// do {
//     console.log('안녕하지 않습니다');
// } while (Math.random()*100<=90);

// for (const i of [1,2,3]) {
//     console.log(i);
// }
// // i 는 상수가 아니라 [1,2,3] 어레이의 요소 값에 따라 자꾸 변할텐데 왜 let이 아니라 const를 사용하는건지?
//
// Object.prototype.test = function () {};
// for (const i in {a:1, b:2, c:3}) {
//     console.log(i);
// }
// // for in 에서 test가 같이 출력된다는 것만 알겟고 나머지는 다 모르겠음...
// // 더 찾아보기. 강의에서도 제대로 설명 안 해줌.

// function hello1() {
//     console.log('hello1');
// }
//
// console.log(hello1, typeof hello1);
//
// function hello2(name) {
//     console.log('hello2', name);
// }
//
// function hello3(name) {
//     return `hello3 ${name}`;
//     // ''가 아닌 ``사용 이유는 string 자료형 문자열 포매팅 참고
// }
//
// console.log(hello3('Mark'));

// const hello1 = function() {
//     console.log('hello1');
// }
// console.log(hello1, typeof hello1);

// const hello2 = function(name) {
//     console.log('hello2', name);
// };
//
// console.log(hello2());

//
// const hello3 = function (name) {
//     return `hello3 ${name}`
// }

// function hello1() {
//     console.log('hello1');
// }
//
// hello1();
//
// var hello2 = function () {
//     console.log('hello2');
// };
//
// const hello3 = function () {
//     console.log('hello3');
// };

// const sum = new Function('a', 'b', 'c', 'return a + b + c');
//
// console.log(sum(1,2,3));

// global.a = 0;
//
// {
//     const a = 1;
//     // 바로 위 const는 아래 test 함수의 a 값이 되지 못함.
//     // new Function 내 요소 값은 global 전역 속성을 이용해서 정의 가능
//
//     const test = new Function('return a');
//
//     console.log(test());
// }
//
// {
//     const a = 2;
//     // 아래 일반 test 함수의 a 값은 같은 범위 내에 정의된 a값을 사용함.
//
//     const test = function () {
//         return a;
//     }
//
//     console.log(test());
// }

const hello1 = () => {
    console.log('hello1');
};

const hello2 = name => {
    console.log('hello2', name);
};

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};