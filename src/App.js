import React from 'react'
import Books from './components/Books/Books'
import './App.scss'
import Header from './components/Header/Header';
import BookDetails from './components/BookDetails/BookDetails';
import Modal from './components/Popup/Modal/Modal';

function App() {

  return (
    <div>
      {/* modal (book details) hides / shows as per data in redux store - showBookDetails */}
      <Modal>
        <BookDetails />
      </Modal>
      <Header />
      <Books />
    </div>
  );
}

export default App
