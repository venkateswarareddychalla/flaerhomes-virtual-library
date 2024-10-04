import BookCard from "../BookCard";
import LibraryContext from "../../LibraryContext/libraryContext";
import "./index.css";

const BookList = () => {
  return (
    <LibraryContext.Consumer>
      {(value) => {
        const { books } = value;
        return (
          <div className="books-list">
            {books.length === 0 ? (
              <div className="no-search-results-container">
                <img
                  src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1728021112/aqbqhuqrshuhdztdyreh.jpg"
                  alt="no-search-results"
                  className="no-search-results-image"
                />
              </div>
            ) : (
              <ul className="books-ul-container">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </ul>
            )}
          </div>
        );
      }}
    </LibraryContext.Consumer>
  );
};

export default BookList;
