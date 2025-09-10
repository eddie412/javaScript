// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수
let temp1 = () => {
  // funciont 대신 화살표로 표현 가능
  return 2;
};
console.log(temp1());

let temp2 = () => 22; // return 없이 사용 가능
console.log(temp2());

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
