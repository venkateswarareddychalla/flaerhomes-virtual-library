import LibraryContext from "../../LibraryContext/libraryContext";
import Header from "../Header";
import { withRouter } from "react-router-dom";

import "./index.css";

const BookDetailsPage = (props) => {
  return (
    <LibraryContext.Consumer>
      {(value) => {
        const { books, addToLibrary } = value;
        const bookId = parseInt(props.match.params.id, 10);
        const activeBook = books.find((each) => each.id === bookId);
        const handleAddToLibrary = () => {
          addToLibrary(activeBook);
        };
        return (
          <>
            <Header />
            <div className="book-details-page-container">
              <h1 className="book-details-title">{activeBook.title}</h1>
              <div className="book-details-image-container">
                <img
                  className="book-details-image"
                  src={activeBook.imageUrl}
                  alt={activeBook.title}
                />
              </div>
              <ul className="ul-container">
                <li className="book-details-author">
                  Author: <span>{activeBook.author}</span>
                </li>
                <li className="book-details-genre">
                  Genre: <span>{activeBook.genre}</span>
                </li>
                <li className="book-details-rating">
                  Rating: <span>{activeBook.rating}</span>
                </li>
                <li className="book-details-year">
                  Published Year: <span>{activeBook.publication_year}</span>
                </li>
                <li className="book-details-description">
                  {activeBook.description}
                </li>
              </ul>

              <div className="btn-container">
                <button
                  className="book-details-btn"
                  onClick={handleAddToLibrary}
                >
                  Add to My Library
                </button>
              </div>
            </div>
          </>
        );
      }}
    </LibraryContext.Consumer>
  );
};

export default withRouter(BookDetailsPage);
