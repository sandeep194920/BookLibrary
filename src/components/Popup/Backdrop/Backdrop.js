// this component should fall under portal-root and not root node. Hence using react create portal here
import React from 'react'
import classes from './Backdrop.module.scss'

const Backdrop = ({ setShowPopup }) => (<div onClick={() => setShowPopup(false)} className={classes.backdrop} />)

export default Backdrop;
