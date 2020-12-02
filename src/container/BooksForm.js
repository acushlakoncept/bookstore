import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';

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
  // const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Actions');
  const [catIndex, setCatIndex] = useState();
  console.log(catIndex);

  const handleSubmit = e => {
    e.preventDefault();

    // const header = {
    //   'Content-Type': 'multipart/form-data',
    //   'Access-Control-Allow-Origin': '*',
    // };

    if (title && author && category) {
      const bookInfo = {
        title,
        author,
        category_id: category,
      };

      axios.post('http://localhost:3001/api/v1/books',
        { bookInfo })
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
      // dispatch(addBooks(title, author, catIndex));
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
