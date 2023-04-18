import classes from './Modal.module.css'

// special 'children' prop
function Modal({ children }) {
    return (
        <>
            <div className={classes.backdrop}></div>       
            {/*  'open' prop is needed to display dialog box*/}     
            <dialog open={true} className={classes.modal}>
                {children}
            </dialog>
        </>
    )        
}

export default Modal;