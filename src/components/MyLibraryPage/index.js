import LibraryContext from "../../LibraryContext/libraryContext";
import Header from "../Header";
import { Link } from "react-router-dom";

import "./index.css";

const MyLibraryPage = () => {
  return (
    <LibraryContext.Consumer>
      {(value) => {
        const { myLibrary, removeFromLibrary } = value;

        return (
          <div>
            <Header />
            <div className="my-library-container">
              <h1 className="my-library-heading">My Library</h1>
              {myLibrary.length === 0 ? (
                <div className="no-books-container">
                  <img
                    src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1728017235/ppwm6shybzdudzjkq9zm.png"
                    alt="no-books-image"
                    className="no-books-image"
                  />
                  <h1 className="no-books-found-heading">No Books Found!</h1>
                  <p className="no-books-message">
                    Nothing here yet! Visit the Home Page to stock your library
                    with your favorite titles.
                  </p>
                </div>
              ) : (
                <ul className="my-library-ul-container">
                  {myLibrary.map((each) => {
                    const onClickRemove = () => {
                      removeFromLibrary(each);
                    };
                    return (
                      <li key={each.id} className="my-library-list-item">
                        <h1 className="my-library-title">{each.title}</h1>
                        <p className="my-library-author">
                          Author: <span>{each.author}</span>
                        </p>
                        <p className="my-library-author">
                          Published Year: <span>{each.publication_year}</span>
                        </p>
                        <div className="my-library-buttons-container">
                          <Link to={`/book/${each.id}`}>
                            <button className="view-more-btn">View More</button>
                          </Link>
                          <button
                            className="remove-btn"
                            onClick={onClickRemove}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        );
      }}
    </LibraryContext.Consumer>
  );
};

export default MyLibraryPage;
