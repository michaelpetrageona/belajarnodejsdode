function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    todal += item;
  }
  console.log(`<p> Total $ {name} is ${total}</p>`);
}

sum("Orange", 10, 20, 30, 40, 50, 60);
sum("Apple", 10, 20, 30, 40, 50, 60);
sum("Banana", 10, 20, 30, 40, 50, 60);

const values = [10, 10, 10, 10, 10];
sum("Test", ...values);

function oldsum() {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  console.log(`<p>Total is ${total}</p>`);
}
