const bookInput = document.getElementById("bookInput");
const addBookButton = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");

addBookButton.addEventListener("click", function () {

    const bookName = bookInput.value.trim();

    if (bookName === "") {
        alert("Please enter a book name.");
        return;
    }

    const listItem = document.createElement("li");

    const bookText = document.createElement("span");
    bookText.textContent = bookName;

    const readButton = document.createElement("button");
    readButton.textContent = "Mark as Read";

    readButton.addEventListener("click", function () {
        bookText.style.textDecoration = "line-through";
        readButton.textContent = "Read";
        readButton.disabled = true;
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    const buttonContainer = document.createElement("div");

    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(removeButton);

    listItem.appendChild(bookText);
    listItem.appendChild(buttonContainer);

    bookList.appendChild(listItem);

    bookInput.value = "";
});