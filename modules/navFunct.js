// a complete website with navigation
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');
const listBook = document.querySelector('.list-container');
const addNewSect = document.querySelector('.new-book-container');
const contactSect = document.getElementById('contact-sect');

const showList = ()=>{
  addNewSect.classList.add('non-display');
  listBook.classList.remove('non-display');
  contactSect.classList.add('non-display');
  list.classList.add('active');
  addNew.classList.remove('active');
  contact.classList.remove('active');
}

// list.addEventListener('click', showList);

const shwoAddNew = ()=>{
 addNewSect.classList.remove('non-display');
  listBook.classList.add('non-display');
  contactSect.classList.add('non-display');
  list.classList.remove('active');
  addNew.classList.add('active');
  contact.classList.remove('active');
}

const showContact = ()=>{
 addNewSect.classList.add('non-display');
 listBook.classList.add('non-display');
 contactSect.classList.remove('non-display');
 list.classList.remove('active');
 contact.classList.add('active');
 addNew.classList.remove('active');
}

// contact.addEventListener('click', () => {
//   addNewSect.classList.add('non-display');
//   listBook.classList.add('non-display');
//   contactSect.classList.remove('non-display');
//   list.classList.remove('active');
//   contact.classList.add('active');
//   addNew.classList.remove('active');
// });

export {showList,shwoAddNew,showContact  }