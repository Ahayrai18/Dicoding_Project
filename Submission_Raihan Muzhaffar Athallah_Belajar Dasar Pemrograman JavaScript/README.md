# JavaScript Final Assessment

Solutions to the final assessment tasks of the Dicoding class **Belajar Dasar Pemrograman JavaScript** (JavaScript Programming Fundamentals). The tasks cover writing comments, consistent code style, unit testing, object-oriented programming, recursion, full-coverage testing, and a small real-world scenario, all in plain JavaScript running on Node.js with no external dependencies.

## Tasks

| Folder | Topic | What it contains |
| --- | --- | --- |
| [`01-writing-comments`](./01-writing-comments) | Comments | A single-line comment and a multi-line comment |
| [`02-code-style`](./02-code-style) | Code style | A small book store written in a consistent style (semicolons, 2-space indentation, `const`, spaced braces) |
| [`03-writing-test`](./03-writing-test) | Unit testing | Tests for a `sum` function using `node:test` and `node:assert` |
| [`optional-04-oop`](./optional-04-oop) | OOP | An inventory system built with `Item` and `Inventory` classes |
| [`optional-05-recursive`](./optional-05-recursive) | Recursion | Recursive `factorial` and `fibonacci` functions |
| [`optional-06-full-coverage-testing`](./optional-06-full-coverage-testing) | Test coverage | Tests that reach 100% line, branch, and function coverage |
| [`optional-07-real-world-scenario`](./optional-07-real-world-scenario) | Real-world scenario | A restaurant order management module (add, update, delete, revenue) |

Each folder also keeps the original task brief (`instruksi.md`, written in Indonesian).

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer (developed and tested with Node.js 22)

No `npm install` is needed because the project has no dependencies.

## Running the tasks

```bash
# Task 02 - code style
cd 02-code-style && node index.js

# Tasks 04, 05, 07 - run the demo scripts
cd optional-04-oop && node main.js
cd optional-05-recursive && node main.js
cd optional-07-real-world-scenario && node main.js

# Tasks 03 and 06 - run the tests
cd 03-writing-test && node --test
cd optional-06-full-coverage-testing && node --test --experimental-test-coverage
```

## Example output

**Task 04 - inventory**

```text
Initial Inventory:
ID: 1, Name: Laptop, Quantity: 10, Price: 1000
ID: 2, Name: Mouse, Quantity: 50, Price: 20

Inventory after update:
ID: 1, Name: Laptop, Quantity: 8, Price: 950
ID: 2, Name: Mouse, Quantity: 50, Price: 20

Inventory after removal:
ID: 1, Name: Laptop, Quantity: 8, Price: 950
```

**Task 05 - recursion** (first lines)

```text
Faktorial dari 5 adalah 120
Deret Fibonacci hingga elemen 10 adalah:
[ 0 ]
[ 0, 1 ]
[ 0, 1, 1 ]
```

**Task 06 - coverage**

```text
# file          | line % | branch % | funcs % | uncovered lines
# index.js      | 100.00 |   100.00 |  100.00 |
# index.test.js | 100.00 |   100.00 |  100.00 |
# all files     | 100.00 |   100.00 |  100.00 |
```

## Project structure

```text
.
├── 01-writing-comments/
├── 02-code-style/
├── 03-writing-test/
│   ├── index.js
│   └── index.test.js
├── optional-04-oop/
│   ├── Item.js
│   ├── Inventory.js
│   └── main.js
├── optional-05-recursive/
│   ├── factorial.js
│   ├── fibonacci.js
│   └── main.js
├── optional-06-full-coverage-testing/
│   ├── index.js
│   └── index.test.js
└── optional-07-real-world-scenario/
    ├── orders.js
    └── main.js
```

## Notes

- Test descriptions, console messages, and sample data in tasks 03, 05, 06, and 07 are in Indonesian, as in the original assessment. Code comments are in English.
- Tasks 03 to 07 ship a `package.json` with `"type": "module"` so their files run as ES modules.

## References

- Dicoding, [Belajar Dasar Pemrograman JavaScript](https://www.dicoding.com/) class: source of the assessment tasks and task briefs.
- Wikipedia (Indonesian), [Bilangan Fibonacci](https://id.wikipedia.org/wiki/Bilangan_Fibonacci) and [Faktorial](https://id.wikipedia.org/wiki/Faktorial): background for the recursion task, as suggested in its brief.
- Node.js documentation: [Test runner (`node:test`)](https://nodejs.org/api/test.html) and [Assert (`node:assert`)](https://nodejs.org/api/assert.html), used for tasks 03 and 06.

## Author

**Raihan Muzhaffar Athallah**: GitHub [@Ahayrai18](https://github.com/Ahayrai18)
