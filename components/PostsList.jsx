import classes from "./PostsList.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import { useState, useEffect } from "react";

// destructuring assignment of obj: const {isPosting, onStopPosting} = props;
function PostsList({ isPosting, onStopPosting }) {
  // 'posts' i.e PostsList is an array of posts
  // NewPost data stored in --> PostsList
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // side-effect i.e making HTTP request to read db data
  useEffect(() => {
    // async fn is fetchPosts which will return a Promise
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts')
      // post data is read
      const resData = await response.json();
      // updates state
      setPosts(resData.posts);
      setIsFetching(false);
    }    
    // calling the async fn within useEffect
    fetchPosts();
    // [dependency] controls execution of useEffect
    // empty array implies single execution upon rendering PostsList
  }, []);

  // Stores post data when form is submitted
  function addPostHandler(postData) {
    // to fetch & send data, i.e request api
    fetch("http://localhost:8080/posts", {
      method: "POST",
      // converts to JSON string
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // use fn execution to update state if new state is based on existing states
    // [postData, ...posts] == (existingPosts) => [postData, ...existingPosts]
    // react passes current state var value as parameter to updating fn
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {/* Modal component is an overlay of the NewPost compt */}
      {/* passing fnName: fn itself vs fnName(): return value of fn */}
      {/* 'Modal' is displayed if state is truthy */}
      {/* Case 1: New Post */}
      {!isFetching && isPosting && (
        // conditional content to be rendered
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          ></NewPost>
        </Modal>
      )}
      {/* Case 2: Display Existing Posts */}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {/* returns an array of Post compts */}
          {/* post obj --> JSX elements */}
          {/* React requires a 'key' prop to correctly render an array of compts; 
                    'key' should be unique; 
                    'key' is not used in compts */}
          {posts.map((post) => {
            <Post key={post.body} author={post.author} body={post.body} />
          })}
        </ul>
      )}
      {/* Case 3: No Posts to display */}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* Case 4: Loading state */}
      {isFetching && (
        // inline jsx styles
        <div style={{textAlign: 'center', color: 'tomato'}}>
          <p>Loading...</p>          
        </div>
      )}
    </>
  );
}

export default PostsList;
