// 계산기 문제


function operator(num1, operator, num2) {
    if (operator === "+")
        console.log(num1 + num2);
    else if (operator === "-")
        console.log(num1 - num2);
    else
        console.log(num1 * num2);
}