
// import React from 'react';
// import './../css/styles.css';

// const BookList = ({ books }) => {
//     return (
//         <div className="book-list">
//             {books.map((book) => (
//                 <div key={book.id} className="book">
//                     <h3 className="book-title">{book.volumeInfo.title}</h3>
//                     <p className="book-authors">{book.volumeInfo.authors?.join(', ')}</p>
//                     <p className="book-description">{book.volumeInfo.description}</p>
//                     {book.volumeInfo.imageLinks?.thumbnail && (
//                         <img className="book-image" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default BookList;
// import React, { useState } from 'react';
// import './../css/styles.css';
// import Modal from './Modal';

// const BookList = ({ books }) => {
//     const [selectedBook, setSelectedBook] = useState(null);

//     const handleBookClick = (book) => {
//         setSelectedBook(book);
//     };

//     const handleCloseModal = () => {
//         setSelectedBook(null);
//     };

//     return (
//         <div className="book-list">
//             {selectedBook && <Modal book={selectedBook} onClose={handleCloseModal} />}
//             {books.map((book) => (
//                 <div key={book.id} className="book" onClick={() => handleBookClick(book)}>
//                     <h3 className="book-title">{book.volumeInfo.title}</h3>
//                     <p className="book-authors">{book.volumeInfo.authors?.join(', ')}</p>
//                     <p className="book-description">{book.volumeInfo.description?.slice(0, 100)}...</p>
//                     {book.volumeInfo.imageLinks?.thumbnail && (
//                         <img className="book-image" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default BookList;


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
