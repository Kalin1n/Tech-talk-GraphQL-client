import React from "react";

const Post = ({ title, text }) => {
  return (
    <div className="data">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default Post;
