import classes from "./Post.module.css"

function Post({ author, book}) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{book}</p>
        </li>
    );
}

export default Post;