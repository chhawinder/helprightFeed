import React from 'react';
import './post.css';

function Post({ imageUrl, username, caption }) {
  return (
    <div className="post">
      <div className="post-header">
        <img
          className="post-avatar"
          src="https://picsum.photos/50"
          alt={username}
        />
        <h3>{username}</h3>
      </div>
      <img className="post-image" src={imageUrl} alt="" />
      <h4 className="post-text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;