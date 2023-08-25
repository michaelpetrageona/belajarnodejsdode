function sayHello(name) {
  console.log(`<p> Hello ${name}</p>`);
}

sayHello("Michael");

const say = sayHello;

say("Budi");

function giveMeName(callback) {
  callback("Michael"); // sayHello("Michael");
}

giveMeName(sayHello);
giveMeName(say); // giveMeName(sayhello)
