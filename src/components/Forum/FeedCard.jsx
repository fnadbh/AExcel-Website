import {
  Heart,
  MessageCircle,
  Bookmark,
  Clock3,
} from "lucide-react";

import "./FeedCard.css";

function FeedCard({ post }) {

  return (

    <article className="feed-card">

      {/* ==========================
          Header
      ========================== */}

      <div className="feed-card-header">

        <div className="feed-card-avatar">

          {post.author.charAt(0)}

        </div>

        <div className="feed-card-user">

          <h3>{post.author}</h3>

          <span>{post.faculty}</span>

        </div>

        <div className="feed-card-time">

          <Clock3 size={15} />

          <span>{post.time}</span>

        </div>

      </div>

      {/* ==========================
          Body
      ========================== */}

      <div className="feed-card-body">

        <h4>{post.title}</h4>

        <p>{post.content}</p>

      </div>

      {/* ==========================
          Footer
      ========================== */}

      <div className="feed-card-footer">

        <button className="feed-action">

          <Heart size={18} />

          <span>{post.likes}</span>

        </button>

        <button className="feed-action">

          <MessageCircle size={18} />

          <span>{post.comments}</span>

        </button>

        <button className="feed-action">

          <Bookmark size={18} />

          <span>Save</span>

        </button>

      </div>

    </article>

  );

}

export default FeedCard;