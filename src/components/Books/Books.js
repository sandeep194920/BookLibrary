import React from 'react'
import Book from '../Book/Book'
import classes from "./Books.module.scss";
import { booksData } from '../../utils/data'

function Books(props) {

    return (
        <>
            <div className={classes.books}>
                {/* <Book category="Love Fantacy" language="English" name="The Sacrifice" pages="220" price="30" />
                <Book category="Thriller Mystery" language="English" name="Innocent Criminal" pages="150" price="45" />
                <Book category="Fiction" language="Spanish" name="Power of Belief" pages="300" price="50" /> */}
                {booksData.map(book => {
                    return (
                        // book id is enough to make this unique, but adding name as well to the key to confirm the data doesn't get repeated and also to avoid the warning that shows in dev tools
                        <Book key={book.id + book.name} {...book} />
                    )
                })}

            </div>
        </>
    )
}

export default Books;