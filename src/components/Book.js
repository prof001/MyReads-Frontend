import React from 'react';
import '../styles/page-style.css';

class Book extends React.Component {
  render() {
    return (
      <div id='bookDiv'>
        <img src={require('../img/book2.jpg')} height='300' width='200' />
        <div id='bookTitle'>{this.props.bookName}</div>
        <div id='author'>{this.props.author}</div>

        <div id='bookController'>
          <span>2</span>
        </div>
      </div>
    );
  }
}

export default Book;
