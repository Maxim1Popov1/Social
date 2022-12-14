/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./MyPosts.module.css";
import Post1 from "./post/Post1";

import { addPostActionCreator, updateNewPostTextActionCreator } from "./../../../redux/profile-reduser";



const MyPosts = (props) => {
  
  let postsElement = 
props.posts.map( p => <Post1 message={p.message} likesCount={p.likesCount} />)
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
  let action =  updateNewPostTextActionCreator(text)
  props.dispatch(action)
}


  

  return (
    <div className={s.postsBlock}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange }
           ref={ newPostElement } 
           value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
