import React from "react";

const LibraryContext = React.createContext({
  books: [],
  myLibrary: [],
  addToLibrary: () => {},
  removeFromLibrary: () => {},
  searchQuery: "",
  getSearchQuery: () => {},
});

export default LibraryContext;
