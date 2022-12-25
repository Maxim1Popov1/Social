/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./Post1.module.css";

const Post1 = (props) => {

return (
    <div className={s.item}>
      {props.message} {props.likesCount}
    </div>
  );
};

export default Post1;
