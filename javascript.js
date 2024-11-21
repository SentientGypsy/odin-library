const myLibrary = [];
const book_container = document.getElementById("book-container");
const add_book_button = document.getElementById("add-book-button");
const close_button_form = document.getElementById("close-button");
const dialog = document.querySelector("dialog");

const book_title_input = document.getElementById("BookTitle");
const book_author_input = document.getElementById("BookAuthor");
const book_pages_input = document.getElementById("BookPages");
const book_reading_input = document.getElementById("CurrentlyReading");
let hasReadBefore = false;






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
    if (book_reading === false) {
        hasReadBefore = false;
    } else {
        hasReadBefore = true;
    }
    addBookToLibray(book_title, book_author, book_pages, book_reading);
    
    dialog.close();
});

class Book {
    constructor(title, author, pages, haveReadBookBefore){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveReadBookBefore = haveReadBookBefore;
    }
}



//constructor here
/*
function Book(title, author, pages, haveReadBookBefore) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveReadBookBefore = haveReadBookBefore;

}
*/
function addBookToLibray(bookTitle, bookAuthor, bookPages, haveReadBookBefore) {
    var book = new Book(bookTitle, bookAuthor, bookPages, haveReadBookBefore);

    myLibrary.push(book);

    
    createBookCard(book, myLibrary.length - 1);

}
function createBookCard(book, index) {
    var bookInfo = [book.title, book.author, book.pages, book.haveReadBookBefore];
    var book_card = document.createElement("div");
    var book_card_list = document.createElement("ul");
    var book_card_delete_button = document.createElement("button");
    const delete_icon = document.createElement("img");
   
    delete_icon.src = "./icons/trash-xmark.png";
    delete_icon.alt = "Icon";
    delete_icon.style.width = "25px";
    delete_icon.style.height = "25px";


    book_card_delete_button.classList.add("hover-effect");
    book_card_delete_button.id = "book-card-delete-button";
    book_card_delete_button.textContent = "Delete me!"
    book_card_delete_button.style.borderRadius = "15px";
    book_card_delete_button.style.display = "flex";
    book_card_delete_button.style.justifyContent ="center";
    book_card_delete_button.style.alignItems = "center";
    book_card_delete_button.style.border = "none";
    book_card_delete_button.style.padding = "10px";
    book_card_delete_button.style.gap = "10px";
    book_card_delete_button.style.backgroundColor = "#F4A261";
    book_card_delete_button.style.transition = "transform 0.3s ease, background-color 0.3s ease";

    
    

    bookInfo.forEach((info, index) => {
        var li = document.createElement("li");
        if (index === 0){
            li.textContent = " Title: " + info;
        } else if (index === 1) {
            li.textContent = "Author: " + info;
        } else if (index === 2) {
            li.textContent = "Page number: " + info;
        } else {
            // Create the checkbox element
        var checkmark_box = document.createElement("input");
        checkmark_box.type = "checkbox"; // Make it a checkbox
        if (hasReadBefore === false){
            checkmark_box.checked = false;
        } else {
            checkmark_box.checked = true;
        }
        
        // Set the text content for the list item
        li.textContent = "Read?: ";

        // Append the checkbox after setting the text
        li.appendChild(checkmark_box);




        }
        
        
        book_card_list.appendChild(li);
        
    });
    

    book_card.appendChild(book_card_list);
    book_card.appendChild(book_card_delete_button);
    book_card_delete_button.appendChild(delete_icon);
    
    book_container.appendChild(book_card);
    book_card.style.backgroundColor = "#E9C46A";
    book_card.dataset.index = index;

    book_card_delete_button.addEventListener("click", () => {
        const indexToDelete = Number(book_card.dataset.index); // Get the index from data attribute
        myLibrary.splice(indexToDelete, 1); // Remove the book from the array
        book_card.remove(); // Remove the card from the DOM
        console.log("Updated library:", myLibrary);
    });

    
    
}





