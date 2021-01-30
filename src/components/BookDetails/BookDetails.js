import React from 'react'
import classes from "./BookDetails.module.scss"
import { connect } from "react-redux";

function BookDetails({ setShowPopup, ...props }) {

    React.useEffect(() => {
        console.log(props.bookSelected)
    }, [props])

    return (
        <div className={classes.bookDetails}>
            <div className={classes.details}>

                <div className={classes.details__key__val}>
                    {/* classes.detail__head is common for headings, so it will be easy to style them at once */}
                    <p className={`${classes.details__namehead} ${classes.details__head}`}>Title </p>
                    <h3 className={`${classes.details__name} ${classes.details__det}`}>The Sacrifice</h3>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__pricehead} ${classes.details__head}`}>Price </p>
                    <p className={`${classes.details__price} ${classes.details__det}`}>40$</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__pageshead} ${classes.details__head}`}>Pages </p>
                    <p className={`${classes.details__pages} ${classes.details__det}`}>140</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__categoryhead} ${classes.details__head}`}>Category </p>
                    <p className={`${classes.details__category} ${classes.details__det}`}>Fiction</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__langhead} ${classes.details__head}`}>Language </p>
                    <p className={`${classes.details__lang} ${classes.details__det}`}>English</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__deschead} ${classes.details__head}`}>Description </p>
                    <p className={`${classes.details__desc} ${classes.details__det}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.</p>
                </div>

                <div className={classes.btn__container}>
                    <button className={`${classes.btn} ${classes.btn__edit}`} onClick={() => setShowPopup(false)}>Edit</button>
                    <button className={`${classes.btn} ${classes.btn__close}`} onClick={() => setShowPopup(false)}>Close</button>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({

    bookSelected: state.bookSelected,
})

export default connect(mapStateToProps)(BookDetails);
