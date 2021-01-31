// this component should fall under portal-root and not root node. Hence using react create portal here
import React from 'react'
import classes from './Backdrop.module.scss'
import { connect } from "react-redux";
import * as actionCreators from '../../../redux/actions';


const Backdrop = (props) => (<div onClick={() => props.onTogglePopup(false)} className={classes.backdrop} />)
// const Backdrop = ({ setShowPopup }) => (<div onClick={() => setShowPopup(false)} className={classes.backdrop} />)


const mapStateToProps = state => ({

    bookSelected: state.bookSelected,
    // showBookDetails: state.showBookDetails

})
// for dispatching the actions into the store
const mapDispatchToProps = dispatch => {
    return {
        onTogglePopup: (showPopup) => dispatch(actionCreators.togglePopup(showPopup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop)

