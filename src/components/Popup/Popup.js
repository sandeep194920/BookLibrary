// this component should fall under portal-root and not root node. Hence using react create portal here
import React, { cloneElement } from 'react'
import ReactDom from 'react-dom'
import classes from './Popup.module.scss'

function Popup(props) {
    return ReactDom.createPortal(
        <div className={classes.popup}>
            {/* {children} */}
            {/* using cloneElement, we can pass props to children. Hence commenting the above line */}
            {cloneElement(props.children, { ...props.closePopup })}
        </div>,
        document.getElementById("portal-root")
    );
}

export default Popup;
