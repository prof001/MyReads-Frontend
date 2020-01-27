import React from 'react';
import './App.css';
import Header from './components/Header';
import Book from './components/Book';

const App = () => {
  return (
    <div>
      <Header />
      <Book bookName='Cleaning the house' author='Binders Munch' />
    </div>
  );
};

export default App;
