function outer() {
  function inner() {
    console.info("Inner");
  }

  inner();
  inner();
}

outer();
inner();
