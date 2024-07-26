//해당 문제를 forEach로 변경하여 풀어주세요
var arr =  [10, 20, 30] ;
let arr2 = [];

arr.forEach(function(num){
    arr2.push(num*10);
});
console.log(arr2);

//2. 
let arr =  [10, 22, 33]
let arr2 = [];

arr.forEach(function(num){
    if(num%5 == 0){
        arr2.push(num);
    }
});
console.log(arr2);