import React from 'react';
import './../css/styles.css';

const Modal = ({ book, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="close-button">X</button>
                <h2>{book.volumeInfo.title}</h2>
                <h4>By: {book.volumeInfo.authors?.join(', ')}</h4>
                <p><strong>Description:</strong> {book.volumeInfo.description}</p>
                {book.volumeInfo.imageLinks?.thumbnail && (
                    <img className="modal-image" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                )}
                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="modal-link">View on Google Books</a>
            </div>
        </div>
    );
};

export default Modal;
