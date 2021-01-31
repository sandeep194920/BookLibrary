import * as actionTypes from "../actions/actionTypes";
import { booksData } from '../../utils/data'


const inititalState = {
    books: booksData,
    bookSelected: null,
    showBookDetails: false
}
function reducer(state = inititalState, action) {
    switch (action.type) {
        case "INCREMENT":
            console.log("REACHED INCREMET")
            return {
                count: state.count + 1
            };
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
        default:
            return state;
    }
}

export default reducer;