//store book object inside an array
const myLibrary = [];

//the constructor function
function Book(Title, Author, Pages, Status) {
    this.Title = Title
    this.Author = Author
    this.Pages = Pages
    this.Status = Status
}


//store the new book object into an array
function addBookToLibrary() {
    const newBook = new Book(prompt('Title'), prompt('Author'), prompt('Pages'), prompt('Status'));
    myLibrary.push(newBook);
}


/* const LOTRpOne = new Book('the lord of 
the rings p.1', 'J.R.R. Tolkien','423 pages',
'currently reading');
 */

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