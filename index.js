// Function to fetch books from the Game of Thrones API
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch data from API
      .then((response) => response.json()) // Convert response to JSON
      .then((books) => {
          renderBooks(books); // Call renderBooks with the JSON data
      })
      .catch((error) => console.error("Error fetching books:", error)); // Handle errors
}

// Function to render books on the page
function renderBooks(books) {
  const booksList = document.getElementById("books"); // Target the <ul> element with id "books"

  books.forEach((book) => {
      const listItem = document.createElement("li"); // Create a <li> element for each book
      listItem.textContent = book.name; // Set the text content to the book's title
      booksList.appendChild(listItem); // Append the <li> to the <ul>
  });
}

// Call fetchBooks() when the page loads
fetchBooks();
