/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/index';
import Book from '../components/Book';
import { removeBook } from '../redux/books/bookActions';

function BooksList({ bookData, fetchBooks }) {
  useEffect(() => {
    fetchBooks();
  }, []);

  const dispatch = useDispatch();
  const handleRemoveBook = id => dispatch(removeBook(id));

  // eslint-disable-next-line no-nested-ternary
  return bookData.loading ? (
    <h2>loading...</h2>
  ) : bookData.error ? (
    <h2>{bookData.error}</h2>
  ) : (
    <div>
      {
        bookData
        && bookData.books.map(book => (
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
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
