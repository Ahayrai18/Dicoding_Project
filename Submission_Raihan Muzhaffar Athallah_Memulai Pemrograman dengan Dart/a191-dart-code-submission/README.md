# Getting Started with Dart Programming — Submission

This directory contains my submission for Dicoding's **Getting Started with Dart Programming** course (*Memulai Pemrograman dengan Dart*). The submission is a command-line Dart project containing four exam sections. Each exam focuses on a different set of fundamental programming concepts.

## Table of Contents

- [Overview](#overview)
- [Learning Topics](#learning-topics)
- [Project Structure](#project-structure)
- [Submission Requirements](#submission-requirements)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running an Exam](#running-an-exam)
- [Running Tests](#running-tests)
- [Exam Guide](#exam-guide)
- [Implementation Notes](#implementation-notes)
- [Troubleshooting](#troubleshooting)
- [Author and Learning Resource](#author-and-learning-resource)

## Overview

The project is named `proyek_submission_mpd` and uses the Dart SDK. The exercises are grouped into four exams:

1. **Dart Fundamentals** — variables, primitive types, calculations, nullable values, parsing, and exception handling.
2. **Control Flow** — conditional logic, loops, list generation, and string patterns.
3. **Collections** — sets, maps, uniqueness, and updating map values.
4. **Object-Oriented Programming (OOP)** — classes, object instances, methods, and asynchronous operations with `Future`.

Each exam has a task instruction file, a solution file, and a main file used to demonstrate the exercise. Tests are provided in the `test/` directory.

## Learning Topics

### Dart fundamentals

Practice declaring and using `String`, `int`, `bool`, numeric values, and nullable types. The exercises also cover calculating a circle's area, parsing strings into integers, and handling invalid input.

### Control flow

Practice using conditions and loops to classify numbers as odd or even, generate a list of integers, and build a descending triangle pattern using asterisks.

### Collections

Practice converting a list into a set to retain unique elements, creating a `Map<String, String>` of futsal positions and player names, and updating an existing map entry.

### Object-oriented programming and asynchronous code

Practice defining and creating a `DicodingStudent` object, implementing an age-increment method, and returning student information asynchronously after a simulated delay using `Future.delayed`.

## Project Structure

```text
Submission_Raihan Muzhaffar Athallah_Memulai Pemrograman dengan Dart/
└── a191-dart-code-submission/
    ├── bin/
    │   ├── exam1/
    │   │   ├── exam1.dart
    │   │   ├── exam1_main.dart
    │   │   └── README - Exam 1.md
    │   ├── exam2/
    │   │   ├── exam2.dart
    │   │   ├── exam2_main.dart
    │   │   └── README - Exam 2.md
    │   ├── exam3/
    │   │   ├── exam3.dart
    │   │   ├── exam3_main.dart
    │   │   └── README - Exam 3.md
    │   └── exam4/
    │       ├── exam4.dart
    │       ├── exam4_main.dart
    │       └── README - Exam 4.md
    ├── test/
    │   ├── exam1_test.dart
    │   ├── exam2_test.dart
    │   ├── exam3_test.dart
    │   └── exam4_test.dart
    ├── analysis_options.yaml
    ├── pubspec.yaml
    ├── pubspec.lock
    └── README.md
```

Editor configuration directories such as `.idea/` and `.vscode/`, if present, are omitted from this simplified tree.

## Submission Requirements

The course instructions define four exams. Each exam has three TODO tasks. At least one task must be completed in **each exam** to satisfy the stated minimum requirement.

The exam instructions also ask students to preserve the provided exercise structure. In particular:

- Do not change the supplied `main()` function in an exam's `*_main.dart` file.
- Do not remove or rename existing functions, classes, or variables required by the exercise.
- Do not add unrelated functions in place of the requested tasks.
- Do not delete, move, or restructure provided packages and project files.

Refer to the README inside each exam directory for the full task specification and examples.

## Prerequisites

- [Dart SDK](https://dart.dev/get-dart), using a version that satisfies the project's SDK constraint.
- A terminal such as CMD, PowerShell, or a terminal inside an IDE.
- An editor such as Visual Studio Code or Android Studio is optional but useful.

The project's `pubspec.yaml` currently specifies the Dart SDK constraint `^3.10.4`. Use a compatible SDK version.

Check the installation:

```bash
dart --version
```

## Setup

Open a terminal and navigate to the `a191-dart-code-submission` directory, where `pubspec.yaml` is located.

For example, if the repository is cloned to the default Windows Downloads folder:

```bat
cd "%USERPROFILE%\Downloads\Dicoding_Project\Submission_Raihan Muzhaffar Athallah_Memulai Pemrograman dengan Dart\a191-dart-code-submission"
```

Adjust the path if your repository is stored elsewhere or if the submission directory has a different name.

Fetch the project's packages:

```bash
dart pub get
```

## Running an Exam

Run commands from the `a191-dart-code-submission` project root.

Run Exam 1:

```bash
dart run bin/exam1/exam1_main.dart
```

Run Exam 2:

```bash
dart run bin/exam2/exam2_main.dart
```

Run Exam 3:

```bash
dart run bin/exam3/exam3_main.dart
```

Run Exam 4:

```bash
dart run bin/exam4/exam4_main.dart
```

Exam 1 accepts a name argument in the example shown in its instructions. For example:

```bash
dart run bin/exam1/exam1_main.dart "RAIHAN MUZHAFFAR ATHALLAH"
```

The output depends on the implementation and the supplied exercise data. For exact expected output, check the README in the corresponding exam folder.

## Running Tests

The project includes test files for the four exams. From the project root, run the full test suite with:

```bash
dart test
```

To run a specific exam's tests:

```bash
dart test test/exam1_test.dart
dart test test/exam2_test.dart
dart test test/exam3_test.dart
dart test test/exam4_test.dart
```

If tests cannot run, check that `dart pub get` completed successfully and that the installed Dart SDK satisfies the constraint in `pubspec.yaml`.

## Exam Guide

### Exam 1 — Dart Fundamentals

Instruction: [`bin/exam1/README - Exam 1.md`](bin/exam1/README%20-%20Exam%201.md)

Topics covered:

- Declare student information using a name, a favorite number, and a boolean student-status value.
- Implement `circleArea` to calculate the area of a circle. Negative radius values should return `0.0`.
- Implement `parseAndAddOne` to handle `null`, parse numeric strings, add one to valid integer input, and throw an exception with the required message for invalid input.

Main source files:

- [`exam1.dart`](bin/exam1/exam1.dart)
- [`exam1_main.dart`](bin/exam1/exam1_main.dart)

### Exam 2 — Control Flow

Instruction: [`bin/exam2/README - Exam 2.md`](bin/exam2/README%20-%20Exam%202.md)

Topics covered:

- Determine whether a number is odd or even.
- Generate a list of integers from `1` to `x`, returning an empty list when `x` is less than `1`.
- Generate a descending triangle of asterisks using a loop.

Main source files:

- [`exam2.dart`](bin/exam2/exam2.dart)
- [`exam2_main.dart`](bin/exam2/exam2_main.dart)

### Exam 3 — Collections

Instruction: [`bin/exam3/README - Exam 3.md`](bin/exam3/README%20-%20Exam%203.md)

Topics covered:

- Convert a list of integers to a set to remove duplicate values.
- Build a map associating futsal positions with player names.
- Update the player assigned to the `Pivot` position.

Main source files:

- [`exam3.dart`](bin/exam3/exam3.dart)
- [`exam3_main.dart`](bin/exam3/exam3_main.dart)

### Exam 4 — Object-Oriented Programming (OOP)

Instruction: [`bin/exam4/README - Exam 4.md`](bin/exam4/README%20-%20Exam%204.md)

Topics covered:

- Implement a method that returns a student's age plus one.
- Use `Future.delayed` to return student information after a three-second delay.
- Create a `DicodingStudent` instance using a valid name and age according to the exercise rules.

Main source files:

- [`exam4.dart`](bin/exam4/exam4.dart)
- [`exam4_main.dart`](bin/exam4/exam4_main.dart)

## Implementation Notes

- `pubspec.yaml` declares the package name, Dart SDK constraint, and dependencies.
- `pubspec.lock` records resolved dependency versions.
- `analysis_options.yaml` configures Dart static analysis and lint rules.
- `test/` contains automated tests for the exam exercises.
- `bin/` contains the exercise source files and demonstration entry points.

## Troubleshooting

### `dart` is not recognized

Install the Dart SDK and make sure the Dart executable is available on your system `PATH`. Restart the terminal after changing environment variables.

### Packages are missing

Run this command from the project root:

```bash
dart pub get
```

### A test fails

Read the assertion and expected-versus-actual values in the test output. Compare them with the corresponding exam instructions and confirm that required function names, return types, and output formats have not been changed.

### GitHub does not show recent changes

From the root of your Git repository, check:

```bash
git status
```

Then add, commit, and push the README or source changes:

```bash
git add .
git commit -m "Update Dart submission documentation"
git push
```

Only commit files that belong in the submission. Do not upload passwords, access tokens, or private credentials.

## Author and Learning Resource

**Author:** Raihan Muzhaffar Athallah

**Learning platform:** [Dicoding](https://www.dicoding.com/)

This project is intended for educational practice and demonstrates the concepts covered by the course submission.
