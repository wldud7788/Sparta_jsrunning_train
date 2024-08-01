1. 출력값과 출력되는 값의 이유를 설명해주세요

// 출력값: yuno2 이다.
// 이유: 
// myName함수가 호출되면서
// var name = yuno2가 할당되고
// a() 함수가 호출되면서 name을 출력하기 때문에 yuno2가 출력된다.

2. 출력값과 출력되는 값의 이유를 설명해주세요
function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();
// 출력값 : 2
// 이유
// if 블록 안에서 var x= 2로 다시 선언 및 재할당이 되었고
// var는 함수 스코프를 가지기 떄문에 블록 내에서 재선언 하더라도 
// 외부의 x와 동일한 변수를 가리킨다.arrow
// if에 2가 할당되었기 때문에 2가 출력된다.

3.
함수의 this의 출력할 값이 다른 이유를 설명해주세요.
const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

/* 출력값: 
화살표 함수 : yuno
일반 함수 : undefined

/* 이유: 
함수가 호출되는 방식에 따라 결정된다.
normal()의 this는 
nameObj.method(); 로 호출되는게 아니기 때문에
this는 전역 객체를 참조하게된다.
그래서 this.name은 전역객체의 name속성을 찾게되어 undefined가 출력된다.

arrow()함수는 자신을 포함하고 있는 외부의 함수의 this를 정적으로 바인딩하여
화살표 함수가 정의된 위치의 this를 그대로 사용한다.
함수의 내부에서 정의되었기 때문에, nameObj를 참조하게 된다.
그래서 this.name은 yuno가되어 출력된다. */