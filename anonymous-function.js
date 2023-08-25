const say = function (name) {
  console.log(`<p> Hello ${name}</p>`);
};

say("Michael");
say("Leonita");

function giveMeName(callback) {
  callback("Michael");
}

giveMeName(say);

giveMeName(function (name) {
  console.log(`<p> hi ${name}</p>`);
});

giveMeName(function (name) {
  console.log(`<p> hi ${name}</p>`);
});

giveMeName(function (name) {
  console.log(`<p> hi ${name}</p>`);
});
