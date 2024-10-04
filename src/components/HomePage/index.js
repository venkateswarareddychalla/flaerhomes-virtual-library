import LibraryContext from "../../LibraryContext/libraryContext";
import BookList from "../BookList";

import { IoSearchSharp } from "react-icons/io5";
import Header from "../Header";
import "./index.css";

const HomePage = () => {
  return (
    <LibraryContext.Consumer>
      {(value) => {
        const { books, searchQuery, getSearchQuery } = value;
        const onChangeSearch = (event) => {
          getSearchQuery(event);
        };
        return (
          <div className="home-page-main-container">
            <Header />
            <div className="searchbar-search-icon-container">
              <input
                type="search"
                placeholder="Search books..."
                onChange={onChangeSearch}
                className="input-searchbar"
                value={searchQuery}
              />
              <div className="search-icon">
                <IoSearchSharp size={20} />
              </div>
            </div>

            <BookList books={books} />
          </div>
        );
      }}
    </LibraryContext.Consumer>
  );
};

export default HomePage;
