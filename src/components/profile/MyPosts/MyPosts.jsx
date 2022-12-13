/* eslint-disable jsx-a11y/alt-text */
import React  from 'react';
import s from './MyPosts.module.css'
import Post1 from './post/Post1';

const MyPosts = () => {  

  let postData = [
    { id:1, massage: 'message', likesCount: 12} ,
    { id:2, massage: 'message', likesCount: 13} ,
    { id:3, massage: 'message', likesCount: 14} ,
    { id:4, massage: 'message', likesCount: 125} ,
    { id:5, massage: 'message', likesCount: 16} ]

    let postElement = postData.map((p => <Post1 id={p.id} massage={p.message} likesCount={p.likesCount} /> ))

return (
  <div className={s.postsBlock}>
   <h3>my post</h3> 
  <div> 
    <div>
    <textarea></textarea>
    </div>
    <div>
    <button>Add post</button>
</div>
  </div>
     <div className={s.posts}>
      {postElement}
    </div>
    </div>
)
        
}

export default MyPosts;
