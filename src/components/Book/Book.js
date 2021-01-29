import React, { useState, useEffect } from 'react'
import classes from "./Book.module.scss";
import fantacy from "../../images/love-fantacy.jpeg"
import fiction from "../../images/fiction.jpg";
import mystery from "../../images/mystery.jpg";

function Book(props) {
    const { category, language, name, pages, price } = props;
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
            <div className={`${classes.book__main} ${classes[style + "__main"]}`} onClick={() => alert("Clicked Book")}>
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
                <button onClick={() => alert("Clicked delete")} className={classes.button__container__red}>Delete</button>
            </div>
        </div >
    )
}
export default Book;