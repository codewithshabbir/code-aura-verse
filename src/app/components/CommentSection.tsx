"use client";
import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (error) {
        console.error("Failed to parse comments from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      const newComments = [...comments, { name: name.trim(), text: comment.trim() }];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setName("");
      setComment("");
    } else {
      alert("Please fill in both fields before submitting.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto py-12 px-6 mt-20 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Comments</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">Your Comment</label>
        <textarea
          id="comment"
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block w-full border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={4}
        ></textarea>

        <button
          onClick={handleAddComment}
          className="w-full py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Add Comment
        </button>
      </div>

      <div className="space-y-6">
        {comments.map((c, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white border border-gray-200 p-4 rounded-lg shadow-sm"
          >
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              {c.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{c.name}</p>
              <p className="text-gray-600 mt-1">{c.text}</p>
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-gray-500 text-center italic">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
