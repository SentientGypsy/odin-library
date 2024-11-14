const myLibrary = [];
const book_container = document.getElementById("book-container");
const add_book_button = document.getElementById("add-book-button");
const close_button_form = document.getElementById("close-button");
const dialog = document.querySelector("dialog");

const book_title_input = document.getElementById("BookTitle");
const book_author_input = document.getElementById("BookAuthor");
const book_pages_input = document.getElementById("BookPages");
const book_reading_input = document.getElementById("CurrentlyReading");






add_book_button.addEventListener("click", () => {
    dialog.style.display = 'flex';
    dialog.style.flexDirection = 'column';

    dialog.showModal();


});

close_button_form.addEventListener("click", () => {

    dialog.style.display = 'none';
    var book_title = book_title_input.value;
    var book_author = book_author_input.value;
    var book_pages = book_pages_input.value;
    var book_reading = book_reading_input.value;
    
    addBookToLibray(book_title, book_author, book_pages, book_reading);
    
    dialog.close();
});



//constructor here
function Book(title, author, pages, haveReadBookBefore) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveReadBookBefore = haveReadBookBefore;

}

function addBookToLibray(bookTitle, bookAuthor, bookPages, haveReadBookBefore) {
    var book = new Book(bookTitle, bookAuthor, bookPages, haveReadBookBefore);

    myLibrary.push(book);
    createBookCard(book)

}
function createBookCard(book) {
    var bookInfo = [book.title, book.author, book.pages, book.haveReadBookBefore];
    var book_card = document.createElement("div");
    var book_card_list = document.createElement("ul");

    bookInfo.forEach(info => {
        var li = document.createElement("li");
        li.textContent = info;
        book_card_list.appendChild(li);
    });
    

    book_card.appendChild(book_card_list);
    book_container.appendChild(book_card);
    book_card.style.backgroundColor = "gray";
    
}





