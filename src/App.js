


import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import LoadingSpinner from './components/LoadingSpinner'; // Import LoadingSpinner component
import { fetchBooks } from './service/api';
import './css/styles.css';

const App = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [loading, setLoading] = useState(false); // Track loading state

    const handleSearch = async (query) => {
        setLoading(true); // Set loading to true when starting the search
        try {
            const { data } = await fetchBooks(query);
            setBooks(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Set loading to false when done
        }
    };

    const openBookDetails = (book) => {
        setSelectedBook(book);
    };

    const closeBookDetails = () => {
        setSelectedBook(null);
    };

    return (
        <div>
            <h1>Google Books Search</h1>
            <SearchBar onSearch={handleSearch} />
            
            {/* Show Loading Spinner while data is being fetched */}
            {loading && <LoadingSpinner />}

            <BookList books={books} onBookClick={openBookDetails} />
            
            {selectedBook && (
                <div className="modal-overlay" onClick={closeBookDetails}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeBookDetails}>X</button>
                        <h2>{selectedBook.volumeInfo.title}</h2>
                        <h4>by {selectedBook.volumeInfo.authors?.join(', ')}</h4>
                        <img className="modal-image" src={selectedBook.volumeInfo.imageLinks?.thumbnail} alt={selectedBook.volumeInfo.title} />
                        <p>{selectedBook.volumeInfo.description}</p>
                        <a href={selectedBook.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="modal-link">More Info</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
