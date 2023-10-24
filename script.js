//book objects array
const myLibrary = [];

//the constructor function
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

let newBook = new Book('1', '2', '3', '4');

//take input and store new book object into an array
function addBookToLibrary() {
    myLibrary.push(newBook);
}
addBookToLibrary();



















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