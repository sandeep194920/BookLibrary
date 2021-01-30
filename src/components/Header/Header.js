import React from 'react'
import logo from "../../images/arrow-star.png"
import classes from "./Header.module.scss"
import { connect } from 'react-redux';
// import * as actionCreators from '../../redux/actions/';

function Header(props) {
    return (
        <header className={classes.header}>
            <img className={classes.header__logo} src={logo} alt="Logo" />
            <h1 className={classes.header__text}>Star Book Paradise  </h1>
            <button className={classes.header__btn} onClick={props.showPopup}>Add New Book</button>
            {/* <button className={classes.header__btn} onClick={() => props.dispatch({ type: "INCREMENT" })}>Add New Book</button> */}
        </header>
    )
}

// this is for getting most updated state from redux store
const mapStateToProps = state => ({
    // count: state.count
})

// for dispatching the actions into the store
const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch(actionCreators.increment())
    }
}

// connect is a higher order function that connects this component to store
export default connect(mapStateToProps, mapDispatchToProps)(Header);