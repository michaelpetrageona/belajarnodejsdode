let result = 1 + 2; //3
console.log("<p>1+2=" + result + "</p>");
let originalResult = result; //3

result = result - 1; //2
console.log("<p>" + originalResult + "-1" + result + "</p>");
originalResult = result; //2

result = result * 2;
console.log("<p>" + originalResult + "*2 =" + result + "</p>");
originalResult = result;
