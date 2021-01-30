import React from 'react'
import classes from "./BookDetails.module.scss"

function BookDetails(props) {
    return (
        <div className={classes.bookDetails}>
            This is book details
            <button onClick={props.closePopup}>Close</button>
        </div>
    )
}

export default BookDetails
