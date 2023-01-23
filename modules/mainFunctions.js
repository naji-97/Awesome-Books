import Book from './Books.js';
import { showList } from './navFunct.js';
// eslint-disable-next-line import/no-cycle
import StoreBook from './storeBook.js';

const listOfbooks = document.querySelector('.book-list');

const savebook = new StoreBook();
// Get input value
const getformInput = () => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const insertbook = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  return insertbook;
};

// Display the list of books on the web page
const DisplayBooks = (index) => {
  let bgcolor = '';
  if (savebook.BookData.indexOf(index) % 2 !== 0) {
    bgcolor = 'dark';
  } else {
    bgcolor = 'light';
  }
  const displaybook = document.createElement('div');
  displaybook.classList.add('book-item');
  displaybook.classList.add(bgcolor);
  displaybook.setAttribute('id', index.bookid);
  displaybook.innerHTML = `<p>${index.title} by ${index.author}</p>`;
  const removeBook = document.createElement('button');
  removeBook.classList.add('remove');
  removeBook.innerHTML = 'Remove';
  removeBook.addEventListener('click', () => savebook.removeBook(index.bookid));
  displaybook.appendChild(removeBook);
  listOfbooks.appendChild(displaybook);
};

// Add Button
const addnewBook = document.querySelector('.add-btn');
addnewBook.addEventListener('click', () => {
  const item = getformInput();
  savebook.addBook(item);
  showList();
});

window.onload = () => {
  savebook.BookData = JSON.parse(localStorage.getItem('AllBooks' || '[]'));
  if (savebook.BookData === null) {
    savebook.BookData = [];
    return;
  }
  savebook.BookData.forEach((item) => DisplayBooks(item));
};

export {
  StoreBook, savebook, getformInput, DisplayBooks, addnewBook,
};
