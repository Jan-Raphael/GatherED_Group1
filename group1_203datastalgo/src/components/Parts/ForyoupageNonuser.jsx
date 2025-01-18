import React from 'react';
import '../CSS/foryoupage.css';
import HeaderNonUser from './Header';
import Footer from './Footer';
import posts from '../Data/PostedbyUsers';

const Post = ({ post }) => {
  return (
    <div className={`post ${post.isPremium ? "premium" : ""}`}>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-tags">Tags: {post.tags.join(", ")}</p>
      <p className="post-author">
        Posted by
        <span className="icon">
          <img src="none" alt="User" />
        </span>
        <span>{post.author}</span>
      </p>
      {post.isPremium && <p className="post-price">{post.price}</p>}
      <div className="post-actions">
        {post.actions.map((action, index) => (
          <button key={index} className={`btn btn-${action.type}`}>
            {action.icon && <img src={action.icon} alt={action.label} />}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

function ForyoupageNonuser() {
  return (
    <>
      <HeaderNonUser />
      <main className="content">
        <section className="hero">
          <h1>Welcome to EduHub!</h1>
          <p>
            Your go-to platform for sharing and discovering educational
            resources.
          </p>
        </section>

        <section className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ForyoupageNonuser;
