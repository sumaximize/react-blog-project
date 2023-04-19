import classes from "./PostsList.module.css"
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import { useState } from "react";

function PostsList(props) {
    // 'state' is lifted up to be used in another sibling Post
    // state controls visibility of modal overlay
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    
    // prop fn of the Modal compt
    function hideModalHandler() {
    // set's modal visibility to false on clicking outside modal
        setModalIsVisible(false)
    }

    // functions that get triggered onChange in the form component
    // body + ChangeHandler
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    // author + ChangeHandler
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }    

    return (
        <>
            {/* Modal component is an overlay of the NewPost compt */}
            {/* passing fnName: fn itself vs fnName(): return value of fn */}
            {/* 'Modal' is displayed if state is truthy */}            
            {modalIsVisible && (
                // conditional content to be rendered                
                <Modal onClose={hideModalHandler}>
                <NewPost  
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler}>
                </NewPost>
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} book={enteredBody}></Post>
                <Post author="Jeffrey Archer" book="Kane & Abel"/>
            </ul>
        
        </>
    );
}

export default PostsList;