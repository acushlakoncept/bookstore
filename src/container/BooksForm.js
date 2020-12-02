import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookActions';

const CATEGORIES = [
  'Actions',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
function BooksForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [, setCategory] = useState('Actions');
  const [catIndex, setCatIndex] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();

    if (title && author && catIndex) {
      dispatch(addBook(title, author, catIndex));

      setTitle('');
      setAuthor('');
      setCategory('Actions');
      e.target.reset();
    }
  };

  const handleChange = e => {
    if (e.target.name === 'title') setTitle(e.target.value);
    if (e.target.name === 'category') {
      setCategory(e.target.value);
      setCatIndex(e.target.selectedIndex);
    }
    if (e.target.name === 'author') setAuthor(e.target.value);
  };

  return (
    <div className="books-form main">
      <div className="books-form add-text ">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit} className="books-form form-main ">
        <input
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Book title"
          className="books-form input "
          required
        />

        <input
          name="author"
          onChange={handleChange}
          type="text"
          placeholder="Book Author"
          className="books-form input "
          required
        />

        <select
          className="books-form select-category "
          onChange={handleChange}
          name="category"
          required
        >
          <option disabled value>
            Select a category
          </option>
          {CATEGORIES.map((category, index) => (
            <option key={category} name={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="books-form add-book ">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default BooksForm;
