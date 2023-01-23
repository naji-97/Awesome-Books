// eslint-disable-next-line import/no-cycle
import {
  DisplayBooks,
} from './mainFunctions.js';

class StoreBook {
  constructor() {
    // Array of objects for the book items
    this.BookData = [];
  }

 // Adding new book
 addBook = (newbook) => {
   this.BookData.push(newbook);
   localStorage.setItem('AllBooks', JSON.stringify(this.BookData));
   DisplayBooks(newbook);
 }

 // Removing book from the list
 removeBook = (bookid) => {
   const rmvbook = document.getElementById(bookid);
   rmvbook.remove();
   this.BookData = this.BookData.filter((x) => x.bookid !== bookid);
   localStorage.setItem('AllBooks', JSON.stringify(this.BookData));
 }
}

export default StoreBook;