const myLibrary = [];

let newbookform = document.querySelector('#new-book-form');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

let newbookbtn = document.querySelector("#new-book-btn");
newbookbtn.addEventListener('click', function() {
  newbookform.style.display = "flex";
});

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
  newbookform.style.display = "none";
});

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
      <div class="card-header">
        <h3 class="Title">${book.title}</h3>
        <h5 class="Author">${book.author}</h5>
      </div>
      <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
      </div>
    `;
    libraryEl.appendChild(bookEl);
  }
}
