import React from 'react'
import Book from '../Book/Book'
import classes from "./Books.module.scss";
// import { booksData } from '../../utils/data'
import { connect } from "react-redux";


function Books(props) {

    // React.useEffect(() => {
    //     console.log(props.books)
    // }, [props])

    return (
        <>
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
        </>
    )
}

const mapStateToProps = state => ({
    books: state.books
})

export default connect(mapStateToProps)(Books);
