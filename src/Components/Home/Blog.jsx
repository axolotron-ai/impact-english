"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const host = 'https://impack-english-backend.onrender.com';

  useEffect(() => {
    let mounted = true;
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${host}/api/blogs`);
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Failed to load blogs");
        // Filter only published blogs (extra safety check)
        const publishedBlogs = Array.isArray(data) ? data.filter(blog => blog.published === true) : [];
        if (mounted) setBlogs(publishedBlogs);
      } catch (err) {
        if (mounted) setError(err.message || "Error fetching blogs");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchBlogs();
    return () => (mounted = false);
  }, []);

  const toggleReadMore = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const stripHtml = (html) => {
    if (!html) return "";
    // Remove HTML tags for plain text (used for truncation logic only)
    const text = html.replace(/<[^>]*>/g, '');
    // Decode HTML entities
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  const truncateHtml = (html, lines = 4) => {
    if (!html) return "";
    const plainText = stripHtml(html);
    const words = plainText.split(" ");
    const maxWords = lines * 12;
    
    if (words.length <= maxWords) return html;
    
    // Truncate by counting words and cutting HTML
    let wordCount = 0;
    let truncated = "";
    const div = document.createElement("div");
    div.innerHTML = html;
    
    const textContent = div.textContent || div.innerText || "";
    const textWords = textContent.split(" ");
    
    if (textWords.length <= maxWords) return html;
    
    // Simple truncation: take first portion of HTML
    const targetLength = Math.floor((maxWords / textWords.length) * html.length);
    truncated = html.substring(0, targetLength);
    
    // Close any open tags
    const openTags = [];
    const tagRegex = /<(\w+)[^>]*>/g;
    const closeTagRegex = /<\/(\w+)>/g;
    
    let match;
    while ((match = tagRegex.exec(truncated)) !== null) {
      openTags.push(match[1]);
    }
    while ((match = closeTagRegex.exec(truncated)) !== null) {
      const index = openTags.lastIndexOf(match[1]);
      if (index !== -1) openTags.splice(index, 1);
    }
    
    // Close remaining open tags
    openTags.reverse().forEach(tag => {
      truncated += `</${tag}>`;
    });
    
    return truncated + "...";
  };

  if (loading) return <div className="p-10 text-center">Loading blogs...</div>;
  if (error) return <div className="p-10 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="lg:px-20 px-10 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 montserrat"
      >
        Latest Insights
      </motion.h1>

      {blogs.length === 0 && (
        <p className="text-center text-gray-500">No blogs available at the moment.</p>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => {
          const isExpanded = expandedCards[blog.id];
          const plainContent = stripHtml(blog.content);
          const contentToShow = isExpanded
            ? blog.content
            : truncateHtml(blog.content, 4);

          return (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {blog.cover_image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 montserrat text-gray-900">
                  {blog.title}
                </h2>

                {blog.author && (
                  <p className="text-sm text-gray-500 mb-3">By {blog.author}</p>
                )}

                <div 
                  className="text-gray-700 leading-relaxed mb-4 prose prose-sm max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-strong:font-bold prose-em:italic"
                  dangerouslySetInnerHTML={{ __html: contentToShow }}
                  style={{
                    listStylePosition: 'inside'
                  }}
                />

                {plainContent.split(" ").length > 48 && (
                  <button
                    onClick={() => toggleReadMore(blog.id)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm mb-4 transition-colors"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}

                {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
