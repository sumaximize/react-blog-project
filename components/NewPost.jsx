import { useState } from "react";
import classes from "./NewPost.module.css"


function NewPost({onCancel, onAddPost}) {
    // enteredBody & enteredAuthor are state variable(s)
    // setEnteredBody & setEnteredAuthor are state updating functions
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');        

    // functions that get triggered onChange in the form component
    // 'event' object parameter for event handler fn
    // body + ChangeHandler
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    // author + ChangeHandler
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }
    
    // to submit form data
    function submitHandler(event) {
        // prevents request to server, i.e form
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        
        // hideModalHandler() on submitting
        onAddPost(postData);
        onCancel();
            
    }
    
    return (
        // onSubmit is triggered when form submit event occurs, sends server request
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                {/* browser form validation using 'required' */}
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}></textarea>
            </p>            

            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>

            {/* jsx:className::html:class */}
            {/* classes.actions = '.actions' */}
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                {/* default button type is 'submit' */}
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}

export default NewPost;