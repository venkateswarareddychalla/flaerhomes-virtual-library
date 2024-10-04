import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LibraryContext from "./LibraryContext/libraryContext";
import HomePage from "./components/HomePage";
import BookDetailsPage from "./components/BookDetailsPage";
import MyLibraryPage from "./components/MyLibraryPage";

const booksList = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.7,
    description:
      "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    publication_year: 1925,
    imageUrl:
      "https://res.cloudinary.com/dykjwqjqi/image/upload/v1727962729/dau3dlv9fpw7bbjy34h0.png",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    description:
      "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    publication_year: 1960,
    imageUrl:
      "https://res.cloudinary.com/dykjwqjqi/image/upload/v1727966299/u8ud2ipchumxck1fpndm.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    description:
      "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    publication_year: 1949,
    imageUrl:
      "https://res.cloudinary.com/dykjwqjqi/image/upload/v1727966441/spwicmiucbpkitk7jpqd.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.9,
    description:
      "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    publication_year: 1813,
    imageUrl:
      "https://res.cloudinary.com/dykjwqjqi/image/upload/v1727966512/mbior2dlnl45plmiymvk.jpg",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    description:
      "A story about a young boy’s journey through the challenges of adolescence.",
    publication_year: 1951,
    imageUrl:
      "https://res.cloudinary.com/dykjwqjqi/image/upload/v1727966588/c8wecc7tmyblecqo6exm.jpg",
  },
  // Add other books here...
];

class App extends React.Component {
  state = { myLibrary: [], books: booksList, searchQuery: "" };

  addToLibrary = (book) => {
    const { myLibrary } = this.state;
    const activeBookPresent = myLibrary.find((each) => each.id === book.id);
    if (activeBookPresent === undefined) {
      this.setState((prevState) => ({
        myLibrary: [...prevState.myLibrary, book],
      }));
    }
  };

  removeFromLibrary = (book) => {
    const { myLibrary } = this.state;
    const filteredMyLibrary = myLibrary.filter((each) => each.id !== book.id);
    this.setState({ myLibrary: filteredMyLibrary });
  };

  getSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { myLibrary, books, searchQuery } = this.state;
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <LibraryContext.Provider
        value={{
          myLibrary: myLibrary,
          books: filteredBooks,
          searchQuery: searchQuery,
          addToLibrary: this.addToLibrary,
          removeFromLibrary: this.removeFromLibrary,
          getSearchQuery: this.getSearchQuery,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/book/:id" component={BookDetailsPage} />
            <Route exact path="/my-library" component={MyLibraryPage} />
          </Switch>
        </Router>
      </LibraryContext.Provider>
    );
  }
}

export default App;
