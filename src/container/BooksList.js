/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/index';
import Book from '../components/Book';
import { removeBook } from '../redux/books/bookActions';

function BooksList({ bookData, fetchBooks, filter }) {
  useEffect(() => {
    fetchBooks();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const filterBooks = allBooks => (filter === 'All'
    ? allBooks
    : allBooks.filter(book => book.category.name === filter));

  const dispatch = useDispatch();
  const handleRemoveBook = id => dispatch(removeBook(id));

  // eslint-disable-next-line no-nested-ternary
  return bookData.loading ? (
    <h2 className="center">loading...</h2>
  ) : bookData.error ? (
    <h2 className="center">{bookData.error}</h2>
  ) : (
    <div>
      {
        bookData
        && filterBooks(bookData.books).map(book => (
          <Book
            key={book.id}
            book={book}
            handleRemoveBook={() => handleRemoveBook(book.id)}
          />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => ({
  bookData: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
