import React from "react";
import Footer from "../Parts/Footer";
import HeaderNonUser from "../Parts/Header";

function Profile({ user }) {
  const { username, email, profilePicture } = user || {
    username: "JohnDoe",
    email: "john@gmail.com",
    profilePicture: "https://via.placeholder.com/150",
  };

  return (
    <>
      <HeaderNonUser />
      <main className="content">
        <section className="hero">
          <img
            src={profilePicture}
            alt={`${username}'s profile`}
            className="small-profile-pic"
            style={{ width: "80px", height: "80px", marginBottom: "10px" }}
          />
          <h1>{username}</h1>
          <p>{email}</p>
        </section>
        <section className="posts">
          <h2>Your Posts</h2>
          <div className="post">
            <h3 className="post-title">Post Title</h3>
            <p className="post-tags">#tag1 #tag2</p>
            <p className="post-author">
              <span className="icon">
                <img src={profilePicture} alt="Author" />
              </span>
              {username}
            </p>
            <p className="post-price">$100</p>
            <div className="post-actions">
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
