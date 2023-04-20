import classes from './Modal.module.css'

// special 'children' prop
// 'onClose' is the fn prop passed by PostsList
function Modal({ children, onClose }) {
    return (
        <>
            {/* 'div' for the black backdrop */}
            {/* onClose -> onStopPosting -> hideModalHandler -> setModalIsVisible(false) */}
            <div className={classes.backdrop} onClick={onClose}></div>       
            {/*  'open' prop is needed to display dialog box*/}     
            <dialog open={true} className={classes.modal}>
                {/* 'children' is the NewPost form compt */}
                {children}
            </dialog>
        </>
    )        
}

export default Modal;