
// this file contains all the actions passed to the reducer (store to update)

import * as actionTypes from "./actionTypes";

export const showBookDetails = (id) => {
    return {
        type: actionTypes.SHOW_BOOK_DETAILS,
        id: id
    };
};


export const togglePopup = (showPopup) => {
    return {
        type: actionTypes.SHOW_POPUP,
        showPopup: showPopup, //showPopup parameter can be either true or false. True -> Show, False -> Hide
    };
};

export const deleteBook = (id) => {
    return {
        type: actionTypes.DELETE_BOOK,
        id: id
    }
}

export const updateBook = (updatedBook) => {
    return {
        type: actionTypes.UPDATE_BOOK,
        updatedBook: updatedBook
    }
}

export const addBookMode = (addBookMode) => {
    return {
        type: actionTypes.ADD_BOOK_MODE,
        addBookMode: addBookMode
    }
}

export const newBooks = (newBooks, newBook) => {
    return {
        type: actionTypes.ADD_BOOK,
        newBooks: newBooks,
        selectedBook: newBook
    }
}
