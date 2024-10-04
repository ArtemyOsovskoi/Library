let myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  //create DOM book card elements
  createBook(object) {
    let removeButton = document.createElement("button");
    removeButton.addEventListener("click", (book) => {
      //clear DOM
      book.currentTarget.closest("div").remove();
      //remove book from array
      myLibrary.splice(myLibrary.indexOf(object), 1);
    });
    removeButton.textContent = "Remove";
    removeButton.classList.add("removeButton");

    let changeStatusButton = document.createElement("button");
    changeStatusButton.addEventListener("click", () => {
      //change book status
      let cardBookStatus = document.querySelector(".cardBookStatus");
      if (object.status === "Read") {
        cardBookStatus.textContent = "Not read";
        object.status = "Not read";
      } else {
        cardBookStatus.textContent = "Read";
        object.status = "Read";
      }
      //run display function to refresh
      this.displayBook();
    });
    changeStatusButton.textContent = "Change status";
    changeStatusButton.classList.add("changeStatusButton");

    //create card html elements
    let container = document.createElement("div");
    container.classList.add("bookCard");
    //set data attribute corresponding to the library array index
    //container.setAttribute("data-bookIndex", [i]);
    container.style.textAlign = "center";

    let cardTitle = document.createElement("h3");
    let cardAuthor = document.createElement("p");
    let cardPages = document.createElement("p");
    let cardStatus = document.createElement("p");
    cardStatus.classList.add("cardBookStatus");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.style.visibility = "hidden";
    let checkboxLabel = document.createElement("label");
    checkboxLabel.textContent = "Reading now";
    checkboxLabel.style.visibility = "hidden";

    //card content
    let titleContent = document.createTextNode(object.title);
    let authorContent = document.createTextNode(object.author);
    let pagesContent = document.createTextNode(object.pages);
    let statusContent = document.createTextNode(object.status);

    cardTitle.appendChild(titleContent);
    cardAuthor.appendChild(authorContent);
    cardPages.appendChild(pagesContent);
    cardStatus.appendChild(statusContent);

    container.appendChild(cardTitle);
    container.appendChild(cardAuthor);
    container.appendChild(cardPages);
    container.appendChild(checkboxLabel);
    container.appendChild(checkbox);
    container.appendChild(cardStatus);
    container.appendChild(removeButton);
    container.appendChild(changeStatusButton);

    allBooks.appendChild(container);

    if (object.status === "Not read") {
      checkbox.style.visibility = "visible";
      checkboxLabel.style.visibility = "visible";
    } else {
      checkbox.style.visibility = "hidden";
      checkboxLabel.style.visibility = "hidden";
    }
  }
  //loop through the array and display each book as a card on the page
  displayBook() {
    //remove repeating book elements
    const allBooks = document.getElementById("allBooks");
    const bookCards = document.querySelectorAll(".bookCard");
    bookCards.forEach((book) => {
      allBooks.removeChild(book);
    });
    //execute createBook() until less than array length
    for (let i = 0; i < myLibrary.length; i++) {
      //pass array element (book object) as an argument to createBook function
      this.createBook(myLibrary[i]);
    }
  }
}

//take input and store new book object into an array
let addBookButton = document.querySelector("#addBookButton");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let error = document.getElementById("errorMessage");

function errorMessage() {
    if (
        !title.checkValidity() ||
        !author.checkValidity() ||
        !pages.checkValidity()
      ) {
        alert('Please fill in all fields!');
      }
}

addBookButton.addEventListener("click", () => {
  //кнопка должна работать при условии валидности формы книги
  if (
    title.checkValidity() &&
    author.checkValidity() &&
    pages.checkValidity()
  ) {
    //take values from form input fields
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status").value;
    //pass values to the new book function and create new book object
    let newBook = new Book(title, author, pages, status);
    //store new book object to library array
    myLibrary.push(newBook);
    //display new book object on the page
    newBook.displayBook(title, author, pages, status);
  } else {
    errorMessage();
  }
});

//show form window - input the details for the new book
const showFormWindow = document.getElementById("formPopup");
const dialog = document.getElementById("dialog");
showFormWindow.addEventListener("click", () => {
  dialog.showModal();
});

//close form window
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
  dialog.close();
});
