import React from 'react'
import Book from '../Book/Book'
import classes from "./Books.module.scss";

function Books(props) {

    return (
        <>
            <div className={classes.books}>
                <Book category="Love Fantacy" language="English" name="The Sacrifice" pages="220" price="30" />
                <Book category="Thriller Mystery" language="English" name="Innocent Criminal" pages="150" price="45" />
                <Book category="Fiction" language="Spanish" name="Power of Belief" pages="300" price="50" />
            </div>
        </>
    )
}

export default Books;