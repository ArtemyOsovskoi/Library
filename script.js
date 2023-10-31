//book objects array
let myLibrary = [];

//the constructor function
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

//take input and store new book object into an array
let addBookButton = document.querySelector("#addBookButton");
addBookButton.addEventListener("click", () => {
    //take values from form input fields
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status").value;
    //pass values to the new book function and create new book object
    let newBook = new Book(title, author, pages, status)
    //store new book object to library array
    myLibrary.push(newBook);
    //display new book object on the page
    displayBook(title, author, pages, status); 
}); 

//loop through the array and display each book in table on the page
function displayBook(title, author, pages, status) {
    for(i = 0; i < myLibrary.length; i++) {
        let container = document.createElement("div");
        document.body.appendChild(container);
        container.style.textAlign = "center";

        //create card html elements
        let card = document.createElement("div");  
        let cardTitle = document.createElement("h3");
        let cardAuthor = document.createElement("p");
        let cardPages = document.createElement("p");
        let cardStatus = document.createElement("p");

        //card content
        let titleContent = document.createTextNode(title);
        let authorContent = document.createTextNode(author);
        let pagesContent = document.createTextNode(pages);
        let statusContent = document.createTextNode(status);

        cardTitle.appendChild(titleContent);
        cardAuthor.appendChild(authorContent);
        cardPages.appendChild(pagesContent);
        cardStatus.appendChild(statusContent);

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardStatus);
        container.appendChild(card);
    }
}



/* function displayBook() { //(table)working solution WITHOUT suing loop
    //access table
    let table = document.querySelector("#table");
    //create new row in table 
    let newRow = table.insertRow(-1);
    //get last element (object) from array
    let lastArrayElement = myLibrary.slice(-1)[0];

    //add new cells to the newRow 
    cellOne = newRow.insertCell(0);
    cellTwo = newRow.insertCell(1);
    cellThree = newRow.insertCell(2);
    cellFour = newRow.insertCell(3);
    //cells for delete and change status buttons
    cellFive = newRow.insertCell(4);
    cellSix = newRow.insertCell(5);

    //add values of last object from array to created cells and display them on the page
    cellOne.appendChild(document.createTextNode(lastArrayElement.title));
    cellTwo.appendChild(document.createTextNode(lastArrayElement.author));
    cellThree.appendChild(document.createTextNode(lastArrayElement.pages));
    cellFour.appendChild(document.createTextNode(lastArrayElement.status));
    cellFive.appendChild(removeButton);
    cellSix.appendChild(changeStatusButton);
} */


//show popup form window - input the details for the new book
const showFormWindow = document.getElementById("formPopup");
const dialog = document.getElementById("dialog");
showFormWindow.addEventListener("click", () => {
  dialog.showModal();
});

//close popup form window
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
    dialog.close();
});

//button on each book’s display to remove the book from the library
let removeButton = document.createElement("button");
    removeButton.addEventListener("click", () => {
        //clear DOM
    });
removeButton.textContent = "Remove";

//button on each book’s display to change its read status
let changeStatusButton = document.createElement("button");
    changeStatusButton.addEventListener("click", () => {
        //change book status
    });
changeStatusButton.textContent = "Change status";




/* 27.10.23 - сделал много и вполне рабочее приложение, но надо переделать с использованием циклов
т.к. это в целом удобнее и будет легче удалять строку книги из таблицы - плюс просто надо лучше знать циклы
этим и займусь дальше */

/* other logic used -> may use later: */

    //loop through array
/*     for(i = 0; i < myLibrary.length; i++) {
        let newRow = table.insertRow(-1);
        let lastArray = myLibrary.slice(-1)[0];
        //add new cells to the row
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        //add object values from array to created cells in table
        if (myLibrary.length === 1) {
            cell1.appendChild(document.createTextNode(myLibrary[i].title));
            cell2.appendChild(document.createTextNode(myLibrary[i].author));
            cell3.appendChild(document.createTextNode(myLibrary[i].pages));
            cell4.appendChild(document.createTextNode(myLibrary[i].status));
        } else {
            cell1.appendChild(document.createTextNode(lastArray.title));
            cell2.appendChild(document.createTextNode(lastArray.author));
            cell3.appendChild(document.createTextNode(lastArray.pages));
            cell4.appendChild(document.createTextNode(lastArray.status));
        }
    } */


/*     let container = document.createElement("div");
    document.body.appendChild(container);

    let card = document.createElement("div");
    let cardTitle = document.createElement("h3");
    let cardAuthor = document.createElement("p");
    let cardPages = document.createElement("p");
    let cardStatus = document.createElement("p");

    let titleContent = document.createTextNode(title);
    let authorContent = document.createTextNode(author);
    let pagesContent = document.createTextNode(pages);
    let statusContent = document.createTextNode(status);

    let finTitle = cardTitle.appendChild(titleContent);
    let finAuthor = cardAuthor.appendChild(authorContent);
    let finPages = cardPages.appendChild(pagesContent);
    let finStatus = cardStatus.appendChild(statusContent);

    container.appendChild(card);
    card.appendChild(finTitle);
    card.appendChild(finAuthor);  
    card.appendChild(finPages);  
    card.appendChild(finStatus);
    
    card.style.width = "2rem";
    card.style.background = "red";
    card.style.padding = "2rem"; */














/* 25.10.23 смог сделать функцию чтобы принимала инпут - все решила заплатка 
в виде onsubmit = false в теге формы html, иначе массив постоянно обновлялся как пустой. 
Теперь нужно написать функцию которая просматривает массив и отображает каждую книгу на странице.
 */

/* 23.10.23 после пары часов работы, понял что надо снова почитать теорию и вернутся
    1) Перечитать урок про объекты и конструкторы, конспект см. и вспомнить как хранить и создавать объекты.
    2) Перечитать урок про формы и вспомнить как использовать их чтобы взять данные пользователя.
 */

//comment from Discord: 
/* I suggest couple of things, read the lessons for objects and constructors, 
this is not good way of storing an object/creating an object, using prompt.

Also an advice, don't start with DOM immediately, think how you can make this work in the console 
and after it's working start using DOM.

Secondly re-read the lesson with forms, this way you will know how to use forms to take user input.

After you created the objects, think of way to show the books, 
i think in the assignment there as an hint to show each book in a card or table, 
if you know DOM you can easily do this, and it might seem repetitive, 
so maybe it could be good way to use something, that could do that for each book.

And if have any questions, ask regarding the project, but re-reading these lessons, 
could help you from being stuck. */

/* Алгоритм 

1) Пользователь нажимает на кнопку добавить книгу
  1.1.) кнопка с ивент лисенером
  1.2.) функция добавления книги
add a function to the script (not the constructor) 
that can take user’s input and 
store the new book objects into an array.

2) Выходит окно формы заполнения карточки книги
3) Ввод данных
4) Нажимает на кнопку формы добавить книгу
5) Книга появляется на сайте в виде карточки

 */