import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./SavedPosts.css";

function SavedPosts() {
  return (
    <>
      <Navbar />

      <section className="saved-page">

        <div className="saved-container">

          <span className="saved-label">
            SAVED POSTS
          </span>

          <h1>
            Saved Discussions
          </h1>

          <p className="saved-intro">
            Your collection of bookmarked discussions for future
            reference.
          </p>

          <div className="saved-post">

            <h2>
              Using AI to Improve Formative Assessment
            </h2>

            <span>
              Dr. Ahmad Fauzi • Faculty of Business • 2 hours ago
            </span>

            <p>
              Has anyone experimented with AI tools for generating
              formative assessment activities? I'd love to hear your
              experiences and recommendations.
            </p>

            <div className="saved-footer">

              <span>❤️ 28 Likes</span>

              <span>💬 9 Comments</span>

              <button>
                Remove Bookmark
              </button>

            </div>

          </div>

          <div className="saved-post">

            <h2>
              Engaging Students During Lectures
            </h2>

            <span>
              Dr. Nur Syafiqah • Faculty of Computing • Yesterday
            </span>

            <p>
              What strategies have worked well to increase classroom
              participation among first-year students?
            </p>

            <div className="saved-footer">

              <span>❤️ 17 Likes</span>

              <span>💬 5 Comments</span>

              <button>
                Remove Bookmark
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default SavedPosts;