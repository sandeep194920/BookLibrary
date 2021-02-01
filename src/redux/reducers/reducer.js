import * as actionTypes from "../actions/actionTypes";
import { booksData } from '../../utils/data'


const inititalState = {
    books: booksData,
    bookSelected: booksData[0], // setting this to a random book. This can be any book because initially, when add btn is clicked and if this null, we get an error since it fetches the bookSelected details. Henc setting this to book[0]
    showBookDetails: false,
    addBookMode: false
}
function reducer(state = inititalState, action) {
    switch (action.type) {
        case actionTypes.SHOW_BOOK_DETAILS:
            console.log("REached show book detail reducer with id ", action.id)
            const selectedBook = state.books.filter(book => book.id === action.id); // this gives array containing one filtered object, so we need the first object so we select index 0
            console.log(selectedBook[0])
            console.log(state.books[action.id - 1])
            return {
                ...state,
                bookSelected: selectedBook[0], // we need the first object (filtered and one & only object)
                showBookDetails: true,
                addBookMode: false, // the mode is not add. If it's add then the input tags will be empty in the form
            };
        case actionTypes.SHOW_POPUP:
            return {
                ...state,
                showBookDetails: action.showPopup // showPopup is a boolean. 
            }
        case actionTypes.DELETE_BOOK:
            const updatedBooks = state.books.filter(book => book.id !== action.id); // removing / filtering the deleted book from the array
            console.log("Deleted the book with id ", action.id)
            console.log(updatedBooks)
            return {
                ...state,
                books: updatedBooks,
            }
        case actionTypes.UPDATE_BOOK:

            //updating the books by changing selected book content (by id)
            const books = [
                ...state.books
            ];

            const newBooks = books.filter(book => book.id !== action.updatedBook.id);
            // Finding the index of Object to be updated. This helps to later insert back in the same position
            const indexToInsert = books.findIndex(book => book.id === action.updatedBook.id);
            // newBooks.push(action.updatedBook) // push inserts the element at last, hence the positions of the books changes after the update. So avoiding this and let's insert at the particular index
            newBooks.splice(indexToInsert, 0, action.updatedBook);

            return {
                ...state,
                bookSelected: action.updatedBook,
                books: newBooks
            };

        case actionTypes.ADD_BOOK:
            console.log(action.addBookMode)
            return {
                ...state,
                addBookMode: action.addBookMode,
                showBookDetails: action.addBookMode
            }
        default:
            return state;
    }
}

export default reducer;