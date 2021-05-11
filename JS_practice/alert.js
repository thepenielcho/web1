// alert('Hello World!');
// console.log('this you?');

// let admin='Peniel';
// let name='John';
// admin=name;
// alert(admin);

// let ourPlanetName='Earth';
// let currentUserName;

// let name = 'Ilya';
// alert(`hello ${1}`); //hello 1
// alert(`hello ${"name"}`); // hello name  // hello "name"이 아님!
// alert(`hello ${name}`); //hello Ilya

// let age = prompt('나이를 입력해주세요', 100);
// alert(`당신의 나이는 ${age}살 입니다.`)

// let isBoss = confirm("당신이 주인인가요?");
// alert(isBoss);

// let userName = prompt("당신의 이름은 무엇인가요?", '홍길동');
// alert(userName);

// let value = true; //value 타입은 당연히 boolean
// alert(typeof value); //글자의 내용은 boolean이지만, boolean이라는 단어 자체는 string

// value = String(value); //value의 타입은 string
// alert(typeof value); //string.

// alert('6'/'2'); //alert(3); String인데도 수학 연산을 하니까 자동으로 숫자형으로 인식하고 연산함.

// let str = "123";
// alert(typeof str); //당연히 string
// let num = Number(str); //num의 typeof는 당연히 number
// alert(typeof num); //number

// let age = Number('임의의 문자열 123');
// alert(age); //NaN(Not a Number)

let officialJsName = prompt('what is official name of JS?', '');
if (officialJsName=='ECMAScript') {
    alert('right!');
} else {
    alert('It is ECMAScript, U DumbAss!')
}