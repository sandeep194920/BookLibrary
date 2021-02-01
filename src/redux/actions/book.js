import * as actionTypes from "./actionTypes";

export const showBookDetails = (id) => {
    // console.log("Reached action creator showBookDetails with id ", id)
    return {
        type: actionTypes.SHOW_BOOK_DETAILS,
        id: id
    };
};


export const togglePopup = (showPopup) => {
    // console.log("Reached action creator showBookDetails with id ", id)
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
        type: actionTypes.ADD_BOOK,
        addBookMode: addBookMode
    }
}