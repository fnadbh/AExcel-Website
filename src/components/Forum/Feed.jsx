import "./Feed.css";
import FeedCard from "./FeedCard";

function Feed({ posts }) {

  return (

    <section className="feed">

      <div className="feed-header">

        <h2>Recent Discussions</h2>

        <span>

          {posts.length} Discussion{posts.length !== 1 ? "s" : ""}

        </span>

      </div>

      <div className="feed-list">

        {posts.map((post) => (

          <FeedCard
            key={post.id}
            post={post}
          />

        ))}

      </div>

    </section>

  );

}

export default Feed;