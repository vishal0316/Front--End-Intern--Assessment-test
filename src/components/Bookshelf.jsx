import { useState, useEffect } from "react";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBooks);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="flexz gap-3">
        {bookshelf.map((book, index) => (
          <div
            className="border p-5 h-60 border-black rounded-lg shadow-lg w-60"
            key={index}
          >
            <h2>{book.title}</h2>
            {book.edition_count && (
              <h3 className="text-md mt-6">
                Edition Count: {book.edition_count}
              </h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
