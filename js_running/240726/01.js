
1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);   
// arr2 = arr1; 형태로 복사하였기 때문에 주소를 복사한것
// arr2[0]이 바뀌면 arr[0]도 바뀜
// console.log(arr1)을 출력해보면 arr1[a]이 10으로 바뀐것을 확인할 수 있음

2.
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = obj1; // obj1을 얕은 복사하는 코드로 작성해주세요

obj2.d = 4; /* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */

console.log("obj1 =>",obj1,"obj2 =>",obj2);/* 해당값 obj1, obj2의 값을 출력해주세요 */