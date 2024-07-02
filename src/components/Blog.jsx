import React, { useState } from 'react';
import '../css/Blog.css';
import Modal from './Modal'; // Modal component for displaying full story

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Title of Blog Post 1',
    imageUrl: '/assets/blog/post1.jpg', // Replace with actual image paths
    description: 'Short description of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    fullText: 'Full text of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 2,
    title: 'Title of Blog Post 2',
    imageUrl: '/assets/blog/post2.jpg',
    description: 'Short description of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    fullText: 'Full text of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  // Add more blog posts as needed
];

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to handle opening the modal with full story
  const openModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedPost(null);
    setShowModal(false);
  };

  return (
    <div className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="blog-slider">
        {blogPosts.map((post) => (
          <div key={post.id} className="slide">
            <div
              className="slide-content"
              style={{ backgroundImage: `url(${post.imageUrl})` }}
              onClick={() => openModal(post)}
            >
              <div className="slide-overlay">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button onClick={() => openModal(post)}>See More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && <Modal post={selectedPost} closeModal={closeModal} />}
    </div>
  );
};

export default Blog;
