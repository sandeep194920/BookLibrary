import React, { useRef, useEffect } from 'react'
import Book from '../Book/Book'
import classes from "./Books.module.scss";
import { connect } from "react-redux";


function Books(props) {

    const divRef = useRef(null);

    // when new book is added, the page scrolls down to place of new book which is done by useRef
    useEffect(() => {
        console.log(props.newBookAdded)
        if (props.newBookAdded) {
            window.scrollTo({
                behavior: "smooth",
                top: divRef.current.offsetTop
            });
        }
    }, [props.newBookAdded]);

    return (
        <>
            {/* warning message dispayed when there are no books */}
            {props.books.length === 0 && <h1 className={classes.nobooks}>Aw snap, my book library went bankrupt. There are no more books to display. Please reload the page to save my business.</h1>}
            <div className={classes.books}>
                {/*Static Data for testing */}
                {/* <Book category="Love Fantacy" language="English" name="The Sacrifice" pages="220" price="30" />
                <Book category="Thriller Mystery" language="English" name="Innocent Criminal" pages="150" price="45" />
                <Book category="Fiction" language="Spanish" name="Power of Belief" pages="300" price="50" /> */}
                {props.books.map(book => {
                    return (
                        <Book key={book.id} {...book} />
                    )
                })}

            </div>
            {/* to scroll to this div after a book gets added */}
            <div ref={divRef} ></div>
        </>
    )
}

const mapStateToProps = state => ({
    books: state.books,
    newBookAdded: state.newBookAdded
})

export default connect(mapStateToProps)(Books);
