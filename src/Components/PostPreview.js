import React from "react";

const PostPreview = ({ id, title, handleSelect }) => {
  return (
    <div className="postCard" onClick={() => handleSelect(title, id)}>
      <p>{title}</p>
    </div>
  );
};

export default PostPreview;
