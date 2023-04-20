import classes from "./PostsList.module.css"
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import { useState } from "react";

// destructuring assignment of obj: const {isPosting, onStopPosting} = props; 
function PostsList({isPosting, onStopPosting}) {
    // 'state' is lifted up to be used in another sibling Post    
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    

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
            {console.log('isPosting', isPosting)}            
            {isPosting && (
                // conditional content to be rendered                
                <Modal onClose={onStopPosting}>
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