import React from 'react'
import classes from "./Book.module.scss";
// import fantacy from "../images/love-fantacy.jpeg"

const Book = props => {
    return (
        <div className={classes.book}>
            <div className={classes.book__main} onClick={() => alert("Clicked Book")}>
                <div className={classes.header}>
                    {/* <img className={classes.header__img} src={fantacy} alt="Love" /> */}
                    <h3 className={classes.header__heading}>The Sacrifice</h3>
                </div>
                <div>
                    <div className={classes.book__details}>
                        <ul className={classes.book__details__ul}>
                            <li>Details</li>
                            <li>30$</li>
                            <li>220 pages</li>
                            <li>Love-fantacy</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.button__container}>
                <button onClick={() => alert("Clicked delete")} className={classes.button__container__red}>Delete</button>
            </div>
        </div >
    )
}
export default Book;