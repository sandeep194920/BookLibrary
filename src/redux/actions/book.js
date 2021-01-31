import * as actionTypes from "./actionTypes";

export const showBookDetails = (id) => {
    // console.log("Reached action creator showBookDetails with id ", id)
    return {
        type: actionTypes.SHOW_BOOK_DETAILS,
        id: id
    };
};

export const increment = () => {
    // console.log("Reached action creator showBookDetails with id ", id)
    return {
        type: "INCREMENT",
    };
};

export const togglePopup = (showPopup) => {
    // console.log("Reached action creator showBookDetails with id ", id)
    return {
        type: actionTypes.SHOW_POPUP,
        showPopup: showPopup, //showPopup parameter can be either true or false. True -> Show, False -> Hide
    };
};