import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg"
        alt=""
      />
      <h1>I Love You to the Moon and Back</h1>
      <p style={{ color: '#617d98', fontSize: '0.75rem' }}>Amelia Hepworth, Tim Warnes</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));
