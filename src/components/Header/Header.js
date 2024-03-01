import React from 'react'
import logo from '../../images/arrow-star.png'
import classes from './Header.module.scss'
import { connect } from 'react-redux'
import * as actionCreators from '../../redux/actions/'

function Header(props) {
  return (
    <header className={classes.header}>
      <img className={classes.header__logo} src={logo} alt="Logo" />
      <h1 className={classes.header__text}>Star Book Paradize </h1>
      {/* the css for addicon doesn't apply if className is given. Hence changing it to class */}
      <ion-icon
        class={classes.header__addicon}
        onClick={() => props.onAddBookMode(true)}
        name="add-circle-outline"
      ></ion-icon>
      <button
        className={classes.header__btn}
        onClick={() => props.onAddBookMode(true)}
      >
        Add a Book
      </button>
    </header>
  )
}

// for dispatching the actions into the store
const mapDispatchToProps = (dispatch) => {
  return {
    onAddBookMode: (addMode) => dispatch(actionCreators.addBookMode(addMode)),
  }
}

// connect is a higher order function that connects this component to store
export default connect(null, mapDispatchToProps)(Header)
