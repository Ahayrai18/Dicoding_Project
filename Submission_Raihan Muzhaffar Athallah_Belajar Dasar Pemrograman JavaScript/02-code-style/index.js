// In-memory book storage
const books = {};

// Return all saved books
function getBooks() {
  return books;
}

// Return a book by id, or null if not found
function getBookById(id) {
  const book = books[id];

  if (!book) {
    return null;
  }

  return book;
}

// Save a book keyed by its id
function saveBook(book) {
  books[book.id] = book;
}

// Usage example
saveBook({ id: 'book-1', name: 'Book 1' });
const myBooks = getBooks();
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);
