import React, { useState } from 'react'
import Books from './components/Books/Books'
import './App.scss'
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import BookDetails from './components/BookDetails/BookDetails';

function App() {

  // initially popup will not be shown
  const [showPopup, setShowPopup] = useState(false);

  const togglePopupHandler = (state) => {
    setShowPopup(state); // shows if state is true. Hides if false
  }

  return (
    <div>
      {
        showPopup
        &&
        <Popup>
          <BookDetails closePopup={() => togglePopupHandler(false)} />
        </Popup>
      }

      <Header showPopup={() => togglePopupHandler(true)} />
      <Books />
    </div>
  );
}

export default App;
