# Expense Tracker App (Tracker.io)

A simple income and expense tracker built with vanilla HTML, CSS, and JavaScript. Transactions are saved in the browser with `localStorage`, so they are still there after a page reload. No frameworks, no build step, no dependencies.

This project is the submission for the Dicoding class **Belajar Membuat Front-End Web untuk Pemula** (Front-End Web for Beginners). The HTML and CSS come from the class starter project, and the application logic in `main.js` was implemented by the author.

> The user interface text is in Indonesian (`<html lang="id">`).

## Features

- Add a transaction with a description, amount, date, and type (income or expense). The date defaults to today when left empty.
- Live summary of the current balance, total income, and total expenses (formatted as Indonesian Rupiah).
- Separate income and expense lists, newest first.
- Edit a transaction. The form switches to edit mode and shows a Cancel button.
- Toggle a transaction between income and expense, or delete it.
- Search transactions by title (case-insensitive, filters while typing).
- Form validation: the title is required and the amount must be at least 1.
- Persistent data in `localStorage` under the key `expenseTrackerTransactions`. Corrupted stored data falls back to an empty list.
- Responsive layout for desktop, tablet (max 1024px), and mobile (max 768px and 640px).
- Accessible markup: semantic landmarks, labelled inputs, a search landmark, and visually hidden headings.

## Tech stack

- HTML5
- CSS3: custom properties, Flexbox, Grid, [BEM](https://getbem.com/naming/) class naming with a `tracker` namespace
- Vanilla JavaScript: DOM API and Web Storage API
- [Outfit](https://fonts.google.com/specimen/Outfit) font from Google Fonts

## Getting started

No installation is needed because the project is plain static HTML.

**Option 1:** open `index.html` directly in a browser.

**Option 2:** serve the folder with any static server, for example the **Live Server** extension in VS Code (right-click `index.html`, then **Open with Live Server**), or:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Usage

1. Fill in the form (description, amount, date, type) and press **Simpan** (Save).
2. Use the buttons on each transaction card: **Edit**, **Ubah Tipe** (change type), and **Hapus** (delete).
3. Type in the search box to filter transactions by title.

## Data model

Transactions are stored as a JSON array:

```json
[
  {
    "id": 1761120000000,
    "title": "Lunch",
    "amount": 35000,
    "date": "2026-10-02",
    "type": "expense"
  }
]
```

`type` is either `"income"` or `"expense"`. The `id` is a timestamp-based number.

## Project structure

```text
expense-tracker-app/
├── index.html   # Page structure
├── style.css    # Styles (BEM naming, responsive breakpoints)
├── main.js      # Application logic: state, rendering, form, search, storage
└── README.md
```

## Notes

- The `data-testid` attributes in `index.html` and in the cards created by `main.js` are used by the class's grading system. Keep them (and the element `id` values such as `incomeList`, `expenseList`, and `transactionForm`) unchanged if you modify the markup.
- The header greeting is set in two places: the initial text in `index.html` and a line in `main.js` that sets it again on load. Edit both to change it.

## References

- Dicoding, [Belajar Membuat Front-End Web untuk Pemula](https://www.dicoding.com/academies/315): class and starter project this submission is based on.
- [BEM naming convention](https://getbem.com/naming/): used for the CSS class names.
- [Outfit](https://fonts.google.com/specimen/Outfit) on Google Fonts: typeface used in the interface.
- MDN Web Docs, [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API): used to persist transactions with `localStorage`.

## Author

**Raihan Muzhaffar Athallah**: GitHub [@Ahayrai18](https://github.com/Ahayrai18)
