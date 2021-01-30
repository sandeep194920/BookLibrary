import React, { useState } from 'react'
import Books from './components/Books/Books'
import './App.scss'
import Header from './components/Header/Header';
import BookDetails from './components/BookDetails/BookDetails';
import Modal from './components/Popup/Modal/Modal';
import { connect } from "react-redux";

function App() {

  // initially popup will not be shown
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {
        (showPopup) &&

        <Modal showPopup={showPopup} setShowPopup={setShowPopup}>
          <BookDetails />
        </Modal>

      }
      <Header showPopup={() => setShowPopup(true)} />
      <Books />
    </div>
  );
}

const mapStateToProps = state => ({
  showBookDetails: state.showBookDetails,
})

export default connect(mapStateToProps)(App);
