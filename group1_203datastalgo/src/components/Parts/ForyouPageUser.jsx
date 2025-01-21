import React, { useState, useEffect } from "react";
import Footer from "../Parts/Footer";
import HeaderNonUser from "../Parts/Header";
import axios from "axios";

function ForyouPageUser() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <HeaderNonUser />
      <main className="content">
        <section className="hero">
          <h1>Welcome Back!</h1>
          <p>Here are some posts tailored just for you.</p>
        </section>
        <section className="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className={`post ${post.isPremium ? "premium" : ""}`}
              >
                <h3 className="post-title">{post.title}</h3>
                <p className="post-tags">{post.tags.join(" ")}</p>
                <p className="post-author">
                  <span className="icon">
                    <img src={post.author.profilePicture} alt={post.author.name} />
                  </span>
                  {post.author.name}
                </p>
                <p className="post-price">${post.price}</p>
                <div className="post-actions">
                  <button className="btn">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available at the moment.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ForyouPageUser;
