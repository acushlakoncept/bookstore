import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  return (
    <div className="book main">
      <div className="book main-container">
        <div className="book information">
          <div className="book category">{book.category.name}</div>
          <div className="book title">{book.title}</div>
          <div className="book writer">{book.author}</div>
        </div>

        <div className="book buttons">
          <button type="button" className="book action-buttons">
            Comments
          </button>
          <button
            className="book action-buttons button-remove"
            type="button"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <button className="book action-buttons button-edit" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book percentage-container">
        <div className="book percentage">
          <div className="book oval"> </div>
        </div>
        <div className="book percentage-subcontainer">
          <div className="book percentage-text"> 64% </div>
          <div className="book percentage-status">Completed</div>
        </div>
      </div>
      <div className="book progress">
        <div className="book current-text">CURRENT CHAPTER</div>
        <div className="book current-chapter">Chapter 17</div>
        <button type="button" className="book update-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: { id: 1, title: '', category: '' },
};
export default Book;
