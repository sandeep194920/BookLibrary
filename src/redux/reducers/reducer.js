import * as actionTypes from "../actions/actionTypes";
import { booksData } from '../../utils/data'


const inititalState = {
    books: booksData,
    bookSelected: null,
    showBookDetails: false
}
function reducer(state = inititalState, action) {
    switch (action.type) {
        case actionTypes.SHOW_BOOK_DETAILS:
            console.log("REached show book detail reducer with id ", action.id)
            return {
                ...state,
                bookSelected: state.books[action.id - 1], // -1 because array index starts from 0 and id starts from 1
                showBookDetails: true
            };
        case actionTypes.SHOW_POPUP:
            return {
                ...state,
                showBookDetails: action.showPopup // showPopup is a boolean. 
            }
        case actionTypes.DELETE_BOOK:
            const updatedBooks = state.books.filter(book => book.id !== action.id); // removing / filtering the deleted book from the array
            return {
                ...state,
                books: updatedBooks
            }
        default:
            return state;
    }
}

export default reducer;