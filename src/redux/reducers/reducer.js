import * as actionTypes from "../actions/actionTypes";


const inititalState = {
    count: 4
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
            break

        default:
            return state;
    }
}

export default reducer;