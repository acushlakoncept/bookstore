import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  return (
    <div className="book main">
      <div className="book main-container">
        <div className="book information">
          <div className="book category">{book.category}</div>
          <div className="book title">{book.title}</div>
          <div className="book writer">Suzanne Collins</div>
        </div>

        <div className="book buttons">
          <button type="button" className="book action-buttons">
            Comments
          </button>
          <button
            className="book action-buttons"
            type="button"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <button className="book action-buttons" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book percentage-container">
        <div className="book percentage"> </div>
        <div>
          <div className="book percentage-text"> 64% </div>
          <div className="book percentage-status">Completed</div>
        </div>
      </div>
      <div className="book progress">
        <div className="book current-text">Current Chapter</div>
        <div className="book current-chapter">Chapter 17</div>
        <button type="button" className="book update-progress">
          Update progress
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: { id: 1, title: '', category: '' },
};
export default Book;
