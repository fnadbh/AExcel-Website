import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./MyPosts.css";

function MyPosts() {
  return (
    <>
      <Navbar />

      <section className="myposts-page">

        <div className="myposts-container">

          <span className="myposts-label">
            MY POSTS
          </span>

          <h1>
            Your Discussions
          </h1>

          <p className="myposts-intro">
            View, edit or delete discussions you have shared with the
            ÆXcel Academic Forum community.
          </p>

          <div className="post-list">

            <div className="my-post">

              <div className="post-top">

                <div>

                  <h2>
                    Using AI to Improve Formative Assessment
                  </h2>

                  <span>
                    Published • 2 hours ago
                  </span>

                </div>

              </div>

              <p>
                Has anyone experimented with AI tools for generating
                formative assessment activities? I'd love to hear your
                experiences and recommendations.
              </p>

              <div className="post-footer">

                <span>❤️ 28 Likes</span>

                <span>💬 9 Comments</span>

                <div className="actions">

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </div>

              </div>

            </div>

            <div className="my-post">

              <div className="post-top">

                <div>

                  <h2>
                    OBE Curriculum Review
                  </h2>

                  <span>
                    Published • Yesterday
                  </span>

                </div>

              </div>

              <p>
                Looking for suggestions to improve curriculum mapping
                and CLO-PLO alignment across programmes.
              </p>

              <div className="post-footer">

                <span>❤️ 12 Likes</span>

                <span>💬 4 Comments</span>

                <div className="actions">

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default MyPosts;