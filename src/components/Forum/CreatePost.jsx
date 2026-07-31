import { useState } from "react";
import "./CreatePost.css";

import {
  User,
  Pencil,
  MessageSquare,
  Paperclip,
  Send,
} from "lucide-react";

function CreatePost({ addPost }) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {

    if (!title.trim() || !content.trim()) {

      alert("Please fill in both the title and discussion.");

      return;

    }

    addPost({

      author: "Adibah",
      faculty: "Centre for Academic Excellence",
      title,
      content,

    });

    setTitle("");
    setContent("");

  };

  return (

    <section className="create-post">

      <div className="create-header">

        <h2>Create a Discussion</h2>

      </div>

      <div className="create-card">

        {/* User */}

        <div className="create-user">

          <div className="create-avatar">

            <User size={36} />

          </div>

          <div className="create-user-info">

            <h3>Adibah</h3>

            <span>

              Share your thoughts with the community

            </span>

          </div>

        </div>

        {/* Title */}

        <div className="create-input">

          <Pencil size={20} />

          <input
            type="text"
            placeholder="Discussion title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>

        {/* Discussion */}

        <div className="create-textarea">

          <MessageSquare size={22} />

          <textarea
            rows="7"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

        </div>

        {/* Buttons */}

        <div className="create-actions">

          <button className="attach-button">

            <Paperclip size={18} />

            Attach File

          </button>

          <button
            className="publish-button"
            onClick={handlePublish}
          >

            <Send size={18} />

            Publish

          </button>

        </div>

      </div>

    </section>

  );

}

export default CreatePost;