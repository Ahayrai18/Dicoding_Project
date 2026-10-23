dynamic oddOrEven(int number) {
  // TODO 1

  // even = no remainder when divided by 2
  // dart's % never returns a negative value, so negative numbers work too
  if (number % 2 == 0) {
    return 'Genap';
  } else {
    return 'Ganjil';
  }

  // End of TODO 1
}

dynamic createListOneToX(int x) {
  final List<int> list = [];

  // TODO 2

  // fill the list with 1..x
  // if x < 1 the loop never runs, so the list stays empty
  for (var i = 1; i <= x; i++) {
    list.add(i);
  }

  // End of TODO 2

  return list;
}

String getStars(int n) {
  var result = '';

  // TODO 3

  // start at n and count down to 1, row i has i stars (upside down triangle)
  for (var i = n; i >= 1; i--) {
    result += '*' * i; // '*' * i repeats the star i times
    result += '\n'; // new line after each row
  }

  // End of TODO 3

  return result;
}
