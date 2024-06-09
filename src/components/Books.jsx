import { useState, useEffect } from "react";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const apiUrl = `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`;

    if (searchQuery.trim() !== "") {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.docs.slice(0, 10));
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const addToBookshelf = (book) => {
    const existingBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    const updatedBooks = [...existingBooks, book];
    localStorage.setItem("bookshelf", JSON.stringify(updatedBooks));
  };

  return (
    <>
      <div>
        <input
          className="outline rounded-md p-2 w-96"
          type="text"
          placeholder="Search by book name..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-wrap gap-4 p-10 items-center justify-center">
        {searchResults.map((book) => (
          <div
            key={book.key}
            className="border p-5 h-60 border-black rounded-lg shadow-lg w-60"
          >
            <h3 className="text-lg font-bold mb-2">Book Title: {book.title}</h3>
            {book.edition_count && (
              <h3 className="text-md mb-4">
                Edition Count: {book.edition_count}
              </h3>
            )}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
              onClick={() => addToBookshelf(book)}
            >
              Add to Bookshelf
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Books;
