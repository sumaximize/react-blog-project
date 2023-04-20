import classes from "./PostsList.module.css"
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

// destructuring assignment of obj: const {isPosting, onStopPosting} = props; 
function PostsList({isPosting, onStopPosting}) {
    return (
        <>
            {/* Modal component is an overlay of the NewPost compt */}
            {/* passing fnName: fn itself vs fnName(): return value of fn */}
            {/* 'Modal' is displayed if state is truthy */}           
            {isPosting && (
                // conditional content to be rendered                
                <Modal onClose={onStopPosting}>
                <NewPost  
                    onCancel={onStopPosting}>
                </NewPost>
                </Modal>
            )}
            <ul className={classes.posts}>
            </ul>
        
        </>
    );
}

export default PostsList;