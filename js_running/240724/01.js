// 빈칸 채우기 문제
// 왜 그렇게 생각했는지 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// let은 선언만 하고 값을 할당하지 않았으므로 undefined가 출력됩니다.


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 재 선언과 재 할당이 불가능하므로 재할당을 하였기 떄문에 에러가 난다.

3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열은 0부터 시작하므로 4번째에 있는 19가 출력된다.

4. 
let mySchedule = "";
console.log(mySchedule || false); // < "" >
// mySchedule이 비어있으므로 false가 출력된다.
console.log(!!mySchedule); // < false > 
// 빈 값이 들어있으므로 false 의 부정의 부정은 false이므로 false가 출력된다.