

import React from 'react';
import './../css/styles.css';

const BookList = ({ books, onBookClick }) => {
    return (
        <div className="book-list">
            {books.map((book) => (
                <div key={book.id} className="book" onClick={() => onBookClick(book)}>
                    <h3 className="book-title">{book.volumeInfo.title}</h3>
                    <p className="book-authors">{book.volumeInfo.authors?.join(', ')}</p>
                    <p className="book-description">{book.volumeInfo.description}</p>
                    {book.volumeInfo.imageLinks?.thumbnail && (
                        <img className="book-image" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default BookList;
