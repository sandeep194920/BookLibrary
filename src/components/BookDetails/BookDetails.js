import React, { useState, useEffect } from 'react'
import classes from "./BookDetails.module.scss"
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions/';

function BookDetails(props) {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');
    const [desc, setDesc] = useState('');
    const [pages, setPages] = useState('');

    // We have 3 modes - "edit", "add" and "default". edit mode is when User clicks on edit btn. default is when user updates the info and clicks save. add is when new book is added by clicking add btn at the top right corner of the app
    // edit mode / add mode - btn should show - Save
    // default mode - btn should show - Edit
    const [mode, setMode] = useState('default');

    // when user clicks on Edit / Save btn
    const modeClickHandler = (e) => {
        e.preventDefault();
        console.log("Form submit")

        //  below data is required for adding new book or updating the exisiting book
        const bookTitle = title ? title : props.bookSelected.name;
        const bookPrice = price ? price : props.bookSelected.price;
        const bookPages = pages ? pages : props.bookSelected.pages;
        const bookCategory = category ? category : props.bookSelected.category;
        const bookLang = language ? language : props.bookSelected.language;
        const bookDesc = desc ? desc : props.bookSelected.desc;

        setMode(prevMode => {
            if (prevMode === "default") {
                console.log("REached if")
                return "edit"
            }
            else if (prevMode === "add") {
                //creating a new book here. We fetch the existing books thereby their IDs. We will give our book a new id and then send it to the reducer which inturn pushes the new book to the books array
                console.log("REached esle if");
                console.log(props.books)

                // we get the last id in the books so we can create a book with new id which is lastId + 1
                const ids = props.books.map(book => book.id);
                let lastId = null;
                if (props.books.length === 0) {
                    lastId = 0;
                } else {
                    lastId = Math.max(...ids);
                }
                console.log(lastId)


                const newBookId = lastId + 1;
                const newBook = {
                    id: newBookId,
                    name: bookTitle,
                    category: bookCategory,
                    language: bookLang,
                    price: bookPrice,
                    pages: bookPages,
                    desc: bookDesc
                }
                // we could have also done this in reducer, but for now, I'll stick with this process of updating the books right here
                const newBooks = props.books.concat(newBook); // creates new array of books
                props.onNewBooks(newBooks, newBook);
                return "default"
            }
            else {
                // saving the existing book
                console.log("REached else")
                // if existing value is not updated then we take the passed value from props 
                // const bookTitle = title ? title : props.bookSelected.name;
                // const bookPrice = price ? price : props.bookSelected.price;
                // const bookPages = pages ? pages : props.bookSelected.pages;
                // const bookCategory = category ? category : props.bookSelected.category;
                // const bookLang = language ? language : props.bookSelected.language;
                // const bookDesc = desc ? desc : props.bookSelected.desc;


                // updating the existing book. Checking if the book exists. If id is null then book added is new book
                if (props.bookSelected.id) {
                    console.log("Update reached props.id")
                    const updatedBook = {
                        id: props.bookSelected.id,
                        name: bookTitle,
                        category: bookCategory,
                        language: bookLang,
                        price: bookPrice,
                        pages: bookPages,
                        desc: bookDesc
                    }

                    // sending this action to reducer to update the book
                    props.onUpdateBook(updatedBook);
                } else {
                    console.log("No book to update")
                }

                return "default"
            }
        });
    }


    const detailsDefault = (
        <div className={classes.details}>

            <div className={classes.details__key__val}>
                {/* classes.detail__head is common for headings, so it will be easy to style them at once */}
                <p className={`${classes.details__namehead} ${classes.details__head}`}>Title </p>
                <h3 className={`${classes.details__name} ${classes.details__det}`}>{props.bookSelected.name}</h3>
            </div>

            <div className={classes.details__key__val}>
                <p className={`${classes.details__pricehead} ${classes.details__head}`}>Price </p>
                <p className={`${classes.details__price} ${classes.details__det}`}>{props.bookSelected.price}$</p>
            </div>

            <div className={classes.details__key__val}>
                <p className={`${classes.details__pageshead} ${classes.details__head}`}>Pages </p>
                <p className={`${classes.details__pages} ${classes.details__det}`}>{props.bookSelected.pages}</p>
            </div>

            <div className={classes.details__key__val}>
                <p className={`${classes.details__categoryhead} ${classes.details__head}`}>Category </p>
                <p className={`${classes.details__category} ${classes.details__det}`}>{props.bookSelected.category}</p>
            </div>

            <div className={classes.details__key__val}>
                <p className={`${classes.details__langhead} ${classes.details__head}`}>Language </p>
                <p className={`${classes.details__lang} ${classes.details__det}`}>{props.bookSelected.language}</p>
            </div>

            <div className={classes.details__key__val}>
                <p className={`${classes.details__deschead} ${classes.details__head}`}>Description </p>
                <p className={`${classes.details__desc} ${classes.details__det}`}>{props.bookSelected.desc}</p>
            </div>

            <div className={classes.btn__container}>
                <button className={`${classes.btn} ${classes.btn__edit}`} onClick={modeClickHandler}>{(mode === "default") ? "Edit" : "Save"}</button>
                <button className={`${classes.btn} ${classes.btn__close}`} onClick={() => props.onTogglePopup(false)}>Close</button>
            </div>

        </div>
    )

    const detailsEditAdd = (
        <div className={classes.details}>
            <form onSubmit={(e) => modeClickHandler(e)}>
                <div className={classes.details__key__val}>
                    {/* classes.detail__head is common for headings, so it will be easy to style them at once */}
                    <p className={`${classes.details__namehead} ${classes.details__head}`}>Title </p>
                    <input id="bookname" type="text" className={`${classes.edit__name} ${classes.edit__det}`} required onChange={(e) => setTitle(e.target.value)} defaultValue={mode === "add" ? title : props.bookSelected.name} />
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__pricehead} ${classes.details__head}`}>Price </p>
                    <input id="bookprice" type="number" className={`${classes.edit__price} ${classes.edit__det}`} required onChange={(e) => setPrice(e.target.value)} defaultValue={mode === "add" ? price : props.bookSelected.price} />
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__pageshead} ${classes.details__head}`}>Pages </p>
                    <input id="bookpages" type="number" className={`${classes.edit__pages} ${classes.edit__det}`} required onChange={(e) => setPages(e.target.value)} defaultValue={mode === "add" ? pages : props.bookSelected.pages} />

                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__categoryhead} ${classes.details__head}`}>Category </p>
                    {/* <input type="text" className={`${classes.edit__cat} ${classes.edit__det}`} required/> */}
                    <select id="bookcategory" onChange={(e) => setCategory(e.target.value)} className={`${classes.edit__cat} ${classes.edit__det}`} defaultValue={mode === "add" ? category : props.bookSelected.category}>
                        {/* selected tag is the one which shows up before selecting. That should be set to the actual category before user edits or sets to something else */}
                        <option>Fiction</option>
                        <option>Thriller Mystery</option>
                        <option>Love Fantacy</option>
                    </select>

                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__langhead} ${classes.details__head}`}>Language </p>
                    <input id="booklang" type="text" className={`${classes.edit__lang} ${classes.edit__det}`} required onChange={(e) => setLanguage(e.target.value)} defaultValue={mode === "add" ? language : props.bookSelected.language} />

                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__deschead} ${classes.details__head}`}>Description </p>
                    <textarea id="bookdesc" className={`${classes.edit__desc} ${classes.edit__det}`} required onChange={(e) => setDesc(e.target.value)} defaultValue={mode === "add" ? desc : props.bookSelected.desc} />
                </div>

                <div className={classes.btn__container}>
                    <button type="submit" className={`${classes.btn} ${classes.btn__edit}`}>{(mode === "default") ? "Edit" : "Save"}</button>
                    <button className={`${classes.btn} ${classes.btn__close}`} onClick={() => props.onTogglePopup(false)}>Close</button>
                </div>
            </form>
        </div >
    )


    // if add btn at the top right is clicked then the mode changes to add, else it remains in default
    useEffect(() => {
        if (props.addBookMode) {
            setMode("add");
        } else {
            setMode("default")
        }
    }, [props.addBookMode])



    return (
        <div className={classes.bookDetails}>

            {mode === "default" ? detailsDefault : detailsEditAdd}

        </div>
    )

}

const mapStateToProps = state => ({

    bookSelected: state.bookSelected,
    addBookMode: state.addBookMode,
    books: state.books
})

// for dispatching the actions into the store
const mapDispatchToProps = dispatch => {
    return {
        onTogglePopup: (showPopup) => dispatch(actionCreators.togglePopup(showPopup)),
        onUpdateBook: (updatedBook) => dispatch(actionCreators.updateBook(updatedBook)),
        onNewBooks: (newBooks, newBook) => dispatch(actionCreators.newBooks(newBooks, newBook)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
