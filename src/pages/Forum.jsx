import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import ForumHero from "../components/Forum/ForumHero";
import ForumSearch from "../components/Forum/ForumSearch";
import CreatePost from "../components/Forum/CreatePost";
import Feed from "../components/Forum/Feed";
import Footer from "../components/Footer/Footer";
import SideMenu from "../components/Forum/SideMenu";

import "./Forum.css";

function Forum() {

  // ==========================================
  // Discussion Data
  // ==========================================

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Dr. Ahmad Fauzi",
      faculty: "Faculty of Business",
      time: "2 hours ago",
      title: "Using AI to Improve Formative Assessment",
      content:
        "Has anyone experimented with AI tools for generating formative quizzes? I'd love to hear your experiences and recommendations.",
      likes: 28,
      comments: 9,
      saved: false,
    },
    {
      id: 2,
      author: "Dr. Nur Syafiqah",
      faculty: "Faculty of Computing",
      time: "Yesterday",
      title: "Engaging Students During Lectures",
      content:
        "What strategies have worked well to increase classroom participation among first-year students?",
      likes: 17,
      comments: 5,
      saved: false,
    },
  ]);

  // ==========================================
  // Search
  // ==========================================

  const [search, setSearch] = useState("");

  const keyword = search.trim().toLowerCase();

  const filteredPosts =
    keyword === ""
      ? []
      : posts.filter((post) => {
          return (
            post.title.toLowerCase().includes(keyword) ||
            post.content.toLowerCase().includes(keyword) ||
            post.author.toLowerCase().includes(keyword) ||
            post.faculty.toLowerCase().includes(keyword)
          );
        });

  // ==========================================
  // Add Discussion
  // ==========================================

  const addPost = (newPost) => {

    const post = {
      id: Date.now(),
      author: newPost.author,
      faculty: newPost.faculty,
      title: newPost.title,
      content: newPost.content,
      time: "Just now",
      likes: 0,
      comments: 0,
      saved: false,
    };

    setPosts((prevPosts) => [post, ...prevPosts]);

  };

  // ==========================================
  // Render
  // ==========================================

  return (
    <>
      <Navbar />

      <main className="forum-page">

        <div className="forum-content">

          <div className="forum-layout">

            <SideMenu />

            <div className="forum-main">

              <ForumHero />

              <ForumSearch
                search={search}
                setSearch={setSearch}
                posts={filteredPosts}
              />

              <CreatePost
                addPost={addPost}
              />

              <Feed
                posts={posts}
              />

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Forum;