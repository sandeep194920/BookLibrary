import React from 'react'
import classes from "./BookDetails.module.scss"
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions/';

function BookDetails(props) {

    React.useEffect(() => {
        console.log(props.bookSelected)
    }, [props])

    return (
        <div className={classes.bookDetails}>
            <div className={classes.details}>

                <div className={classes.details__key__val}>
                    {/* classes.detail__head is common for headings, so it will be easy to style them at once */}
                    <p className={`${classes.details__namehead} ${classes.details__head}`}>Title </p>
                    <h3 className={`${classes.details__name} ${classes.details__det}`}>{props.bookSelected.name}</h3>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__pricehead} ${classes.details__head}`}>Price </p>
                    <p className={`${classes.details__price} ${classes.details__det}`}>{props.bookSelected.price}$</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__pageshead} ${classes.details__head}`}>Pages </p>
                    <p className={`${classes.details__pages} ${classes.details__det}`}>{props.bookSelected.pages}</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__categoryhead} ${classes.details__head}`}>Category </p>
                    <p className={`${classes.details__category} ${classes.details__det}`}>{props.bookSelected.category}</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__langhead} ${classes.details__head}`}>Language </p>
                    <p className={`${classes.details__lang} ${classes.details__det}`}>{props.bookSelected.language}</p>
                </div>

                <div className={classes.details__key__val}>
                    <p className={`${classes.details__deschead} ${classes.details__head}`}>Description </p>
                    <p className={`${classes.details__desc} ${classes.details__det}`}>{props.bookSelected.desc}</p>
                </div>

                <div className={classes.btn__container}>
                    <button className={`${classes.btn} ${classes.btn__edit}`} onClick={() => props.onTogglePopup(false)}>Edit</button>
                    <button className={`${classes.btn} ${classes.btn__close}`} onClick={() => props.onTogglePopup(false)}>Close</button>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({

    bookSelected: state.bookSelected,
})

// for dispatching the actions into the store
const mapDispatchToProps = dispatch => {
    return {
        onTogglePopup: (showPopup) => dispatch(actionCreators.togglePopup(showPopup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
