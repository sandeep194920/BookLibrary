import React from 'react'
import logo from "../../images/arrow-star.png"
import classes from "./Header.module.scss"

function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.header__logo} src={logo} alt="Logo" />
            <h1 className={classes.header__text}>Star Book Paradise</h1>
            <button className={classes.header__btn}>Add New Book</button>
        </header>
    )
}

export default Header;