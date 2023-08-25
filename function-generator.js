function* createNames() {
  yield "Michael";
  yield "Petra";
  yield "Geona";
}

const names = createNames();
for (const name of names) {
  console.infp(name);
}

function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Yie;d $ {i}`);
      yield i;
    }
  }
}

function buatGanjilArray(value) {
  const result = [];
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Yield $ {i}`);
      result.push(i);
    }
  }
  return result;
}

const numbers = buatGanjilArray(100);
// for (const number of numbers) {
//     console.info(number);
// }
console.info(numbers.next().value);
console.info(numbers.next().value);
console.info(numbers.next().value);
