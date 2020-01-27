import React from 'react';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';
import Header from './components/Header';
import Book from './components/Book';

const App = () => {
  return (
    <div>
      <Header />
      <Book bookName='Cleaning the house' author='Binders Munch' />

      <div id='addDiv'>4</div>
    </div>
  );
};

export default App;
