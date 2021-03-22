import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
import { books } from './books';
import Book from './Book';

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));
