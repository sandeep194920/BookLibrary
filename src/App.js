import React, { useState } from 'react'
import Books from './components/Books/Books'
import './App.scss'
import Header from './components/Header/Header';
import Backdrop from './components/Popup/Backdrop/Backdrop';
import BookDetails from './components/BookDetails/BookDetails';
import Modal from './components/Popup/Modal/Modal';

function App() {

  // initially popup will not be shown
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {
        showPopup &&

        <Modal setShowPopup={setShowPopup}>
          <BookDetails />
        </Modal>

      }
      <Header showPopup={() => setShowPopup(true)} />
      <Books />
    </div>
  );
}

export default App;
