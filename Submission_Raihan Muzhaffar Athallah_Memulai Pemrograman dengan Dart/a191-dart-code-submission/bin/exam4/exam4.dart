class DicodingStudent {
  String fullName;
  int age;

  DicodingStudent(this.fullName, this.age);

  int incrementAge() {
    // TODO 1

    // just return age + 1, the age field itself stays the same
    return age + 1;

    // End of TODO 1
  }

  Future<String> getStudentInfo() {
    // TODO 2

    // fake async work, the info string is returned after a 3 second delay
    return Future.delayed(
      const Duration(seconds: 3),
      () => 'Nama Lengkap: $fullName, Umur: $age tahun',
    );

    // End of TODO 2
  }
}

dynamic createStudent() {
  // TODO 3

  // name: letters only, min 3 chars | age: 15 - 99
  final dicodingStudent = DicodingStudent('abc', 17);
  return dicodingStudent;

  // End of TODO 3
}
