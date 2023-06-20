function pow(num, degree) {
  if (isNaN(num)) {
    console.log("error");
    return;
  }
  if (isNaN(degree)) {
    console.error("error");
    return;
  }
  if (typeof num !== "number" || !Number.isInteger(num)) {
    console.error("num должно быть целым числом");
    return;
  }
  if (degree < 0) {
    console.error("error");
    return;
  }
  if (degree === 0) {
    return 1;
  } else {
    return num * pow(num, degree - 1);
  }
}
console.log(pow(3, "d"));
