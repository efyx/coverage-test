module.exports = {
  add(x, y) {
    if (isNaN(x)) {
      throw new Error("x is not a number");
    } else if (isNaN(y)) {
      throw new Error("y is not a number");
    }
    return x + y;
  }
}

