import React, { useState, useEffect } from 'react'
import classes from "./Book.module.scss";
import fantacy from "../../images/love-fantacy.jpeg"
import fiction from "../../images/fiction.jpg";
import mystery from "../../images/mystery.jpg";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions/';


function Book(props) {
    const { category, language, name, pages, price, id } = props;
    const [imgSrc, setImgSrc] = useState(fiction);
    const [style, setStyle] = useState("fiction");


    useEffect(() => {
        switch (category) {
            case "Love Fantacy":
                setImgSrc(fantacy);
                setStyle("fantacy");
                break;
            case "Thriller Mystery":
                setImgSrc(mystery);
                setStyle("mystery");
                break;
            case "Fiction":
                setImgSrc(fiction);
                setStyle("fiction");
                break;
            default:
                setImgSrc(fiction);
                setStyle("fiction");

        }
    }, [category])

    return (
        <div className={`${classes.book} ${classes[style]}`}>
            <div className={`${classes.book__main} ${classes[style + "__main"]}`} onClick={() => props.onShowBookDetails(id)}>
                <div className={classes.header}>
                    <img className={classes.header__img} src={imgSrc} alt="cover_image" />
                    <h3 className={`${classes.header__heading} ${classes[style + "__heading"]}`}>{name}</h3>
                </div>
                <div>
                    <div className={`${classes.book__details} ${classes[style + '__details']}`}>
                        <ul className={`${classes.book__details__ul} ${classes[style + '__details__ul']}`}>
                            <li>Details</li>
                            <li>{price}$</li>
                            <li>{pages} pages</li>
                            <li>{category}</li>
                            <li>{language}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${classes.button__container}`}>
                <button onClick={() => props.onDeleteBook(id)} className={classes.button__container__red}>Delete</button>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowBookDetails: (id) => dispatch(actionCreators.showBookDetails(id)),
        onDeleteBook: (id) => dispatch(actionCreators.deleteBook(id)),
    };
};

// we are not using mapStateToProps (consuming data from store / central-state), hence setting it to null 
export default connect(null, mapDispatchToProps)(Book);