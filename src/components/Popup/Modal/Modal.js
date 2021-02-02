// This is a container that holds popup messages from different components. Backdrop also sits behind this so we can click on that and close modal and backdrop

// Using react dom portal here so that popup dom elements fall under portal-root and not the root. This is a good practice as the css in the 'root' dom heirarchy doesn't affect the popup, so there will be no issue with styling of popup
import React from 'react'
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop'
import { connect } from "react-redux";


function Modal({ children, ...props }) {

    return ReactDOM.createPortal(

        (props.showBookDetails) &&
        <div>
            <Backdrop />
            {children}
            {/* We use the below version to pass the props in case when not using redux */}
            {/* <div>{cloneElement(children, { setShowPopup })}</div> */}

        </div>,
        document.getElementById('portal-root')


    )
}

const mapStateToProps = state => ({

    bookSelected: state.bookSelected,
    showBookDetails: state.showBookDetails

})

export default connect(mapStateToProps)(Modal)
