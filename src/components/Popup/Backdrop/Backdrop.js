// this component should fall under portal-root and not root node. Hence using react create portal here
import React from 'react'
import classes from './Backdrop.module.scss'
import { connect } from "react-redux";
import * as actionCreators from '../../../redux/actions';

// no need of return statement as we use single like after fat arrow =>. This is an ES6 feature 
const Backdrop = (props) => (<div onClick={() => props.onTogglePopup(false)} className={classes.backdrop} />)

// for reference - when useState is used instead of redux store
// const Backdrop = ({ setShowPopup }) => (<div onClick={() => setShowPopup(false)} className={classes.backdrop} />)


// consuming the data from redux store
const mapStateToProps = state => ({
    bookSelected: state.bookSelected,
})

// for dispatching the actions into the store
const mapDispatchToProps = dispatch => {
    return {
        onTogglePopup: (showPopup) => dispatch(actionCreators.togglePopup(showPopup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop)

