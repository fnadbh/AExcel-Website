import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Notifications.css";

function Notifications() {
  return (
    <>
      <Navbar />

      <section className="notifications-page">

        <div className="notifications-container">

          <span className="notifications-label">
            NOTIFICATIONS
          </span>

          <h1>
            Notifications
          </h1>

          <p className="notifications-intro">
            Stay informed about activity on your discussions and
            manage which notifications you would like to receive.
          </p>

          {/* Notification Settings */}

          <div className="notification-settings">

            <h2>Notification Preferences</h2>

            <div className="setting-item">
              <span>Someone liked my post</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="setting-item">
              <span>Someone commented on my post</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="setting-item">
              <span>Someone replied to my comment</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="setting-item">
              <span>Weekly discussion summary</span>
              <input type="checkbox" />
            </div>

          </div>

          {/* Recent Notifications */}

          <div className="notification-list">

            <h2>Recent Notifications</h2>

            <div className="notification-card">

              <h3>❤️ Dr. Ahmad Fauzi liked your discussion.</h3>

              <p>
                "Using AI to Improve Formative Assessment"
              </p>

              <span>2 hours ago</span>

            </div>

            <div className="notification-card">

              <h3>💬 Dr. Nur Syafiqah commented on your discussion.</h3>

              <p>
                "I have tried using AI-generated rubrics with my students..."
              </p>

              <span>Yesterday</span>

            </div>

            <div className="notification-card">

              <h3>💬 Mr. Daniel Lim replied to your comment.</h3>

              <p>
                "That's a very interesting perspective."
              </p>

              <span>3 days ago</span>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Notifications;