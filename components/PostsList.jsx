import classes from "./PostsList.module.css"
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import { useState } from "react";

// destructuring assignment of obj: const {isPosting, onStopPosting} = props; 
function PostsList({isPosting, onStopPosting}) {
    // 'posts' i.e PostsList is an array of posts
    // NewPost data stored in --> PostsList
    const [posts, setPosts] = useState([]);

    // Stores post data when form is submitted
    function addPostHandler(postData) {
        // use fn execution to update state if new state is based
        //  on existing states: postsN = postsN-1 + post
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {/* Modal component is an overlay of the NewPost compt */}
            {/* passing fnName: fn itself vs fnName(): return value of fn */}
            {/* 'Modal' is displayed if state is truthy */}           
            {isPosting && (
                // conditional content to be rendered                
                <Modal onClose={onStopPosting}>
                <NewPost  
                    onCancel={onStopPosting} 
                    onAddPost={addPostHandler}>
                </NewPost>
                </Modal>
            )}            
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {/* returns an array of Post compts */}
                    {/* post obj --> JSX elements */}
                    {/* React requires a 'key' prop to correctly render an array of compts; 
                    'key' should be unique; 
                    'key' is not used in compts */}
                    {posts.map((post) => (
                    <Post key={post.body} author={post.author} body={post.body} /> 
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding some!</p>
                </div>
                    
            )}
        
        </>
    );
}

export default PostsList; 