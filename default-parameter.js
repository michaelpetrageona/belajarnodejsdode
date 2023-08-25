function register(name, gender = "UNKNOWN") {
  console.info(name);
  console.info(gender);
}

register();
register("Michael");
register("Michael", "MALE");
register("Michael", undefined);
register("Michael", null);
