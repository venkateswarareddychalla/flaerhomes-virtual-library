import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class BookCard extends Component {
  render() {
    const { book } = this.props;
    return (
      <li className="book-card-list">
        <h1 className="book-card-title">{book.title}</h1>
        <p className="book-card-author">Author: {book.author}</p>
        <p className="book-card-genre">Genre: {book.genre}</p>
        <p className="book-card-rating">Rating: {book.rating}</p>
        <Link className="book-card-link" to={`/book/${book.id}`}>
          View Details
        </Link>
      </li>
    );
  }
}

export default BookCard;
