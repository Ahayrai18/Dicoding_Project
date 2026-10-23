dynamic studentInfo() {
  // TODO 1

  // student data, these get returned in the list below
  // name must be exactly the same as on the dicoding profile
  String name = 'RAIHAN MUZHAFFAR ATHALLAH';
  int favNumber = 7; // 1 - 10
  bool isDicodingStudent = true;

  // End of TODO 1
  return [name, favNumber, isDicodingStudent];
}

dynamic circleArea(num r) {
  if (r < 0) {
    return 0.0;
  } else {
    const double pi = 3.1415926535897932; //π sama dengan library dart.math;

    // TODO 2

    // area of a circle = pi * r * r (double * num = double)
    return pi * r * r;

    // End of TODO 2
  }
}

int? parseAndAddOne(String? input) {
  // TODO 3

  // null in, null out
  if (input == null) {
    return null;
  }

  try {
    // convert to int then add 1
    return int.parse(input) + 1;
  } on FormatException {
    // not a number (like "abc" or an empty string)
    throw Exception('Input harus berupa angka');
  }

  // End of TODO 3
}
