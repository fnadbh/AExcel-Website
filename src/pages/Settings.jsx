import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Settings.css";

function Settings() {
  return (
    <>
      <Navbar />

      <section className="settings-page">

        <div className="settings-container">

          <span className="settings-label">
            SETTINGS
          </span>

          <h1>
            Account Settings
          </h1>

          <p className="settings-intro">
            Manage your forum profile and preferences.
          </p>

          {/* Profile */}

          <div className="settings-card">

            <h2>Profile Information</h2>

            <label>Full Name</label>
            <input
              type="text"
              defaultValue="Adibah Binti Ali"
            />

            <label>Email</label>
            <input
              type="email"
              defaultValue="adibah@icats.edu.my"
              disabled
            />

            <label>Faculty / Department</label>
            <input
              type="text"
              defaultValue="Faculty of Business Administration"
            />

            <label>About Me</label>
            <textarea
              rows="5"
              defaultValue="Passionate about teaching innovation, curriculum development and AI integration in higher education."
            ></textarea>

          </div>

          {/* Profile Picture */}

          <div className="settings-card">

            <h2>Profile Picture</h2>

            <button className="upload-btn">
              Upload New Photo
            </button>

          </div>

          {/* Preferences */}

          <div className="settings-card">

            <h2>Forum Preferences</h2>

            <div className="preference">

              <span>Dark Mode</span>

              <input type="checkbox" />

            </div>

            <div className="preference">

              <span>Show my profile publicly</span>

              <input type="checkbox" defaultChecked />

            </div>

            <div className="preference">

              <span>Allow others to message me</span>

              <input type="checkbox" defaultChecked />

            </div>

          </div>

          <button className="save-btn">
            Save Changes
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Settings;