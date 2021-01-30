// this is a container that holds popup messages from different components. Backdrop also sits behind this so we can click on that and close modal and backdrop
// using react dom portal here so that popup dom elements falls under portal-root and not the root. This is a good practice as the css in the 'root' dom heirarchy doesn't affect the popup, so there will be no issue with styling of popup
// cloneElement is used to pass the props to children
import React, { cloneElement } from 'react'
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop'

function Modal({ setShowPopup, children }) {

    return ReactDOM.createPortal(
        <div>
            <Backdrop setShowPopup={setShowPopup} />
            {/* {children} */}
            <div>{cloneElement(children, { setShowPopup })}</div>

        </div>,
        document.getElementById('portal-root')
    )
}

export default Modal
