const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function add(scores) {
  for (let i = 0; i < scores.length; i++) {
    scores[i] = operator(scores[i], "+", 3);
  }
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
}

function operator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else {
    return num1 * num2;
  }
}

add(scores);
console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
