import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./Profile.css";

function Profile() {
  return (
    <>
      <Navbar />

      <section className="profile-page">

        <div className="profile-container">

          <div className="profile-header">

            <div className="profile-avatar">
              A
            </div>

            <h1>Adibah</h1>

            <p>Intern GETS - AExcel</p>

            <span>adibah@icats.edu.my</span>

          </div>

          <div className="profile-stats">

            <div>
              <h2>12</h2>
              <p>Posts</p>
            </div>

            <div>
              <h2>8</h2>
              <p>Saved</p>
            </div>

            <div>
              <h2>134</h2>
              <p>Likes</p>
            </div>

          </div>


          <div className="recent-activity">

            <h2>Recent Activity</h2>

            <ul>

              <li>Published "Using AI in Assessment"</li>

              <li>Commented on "OBE Curriculum Review"</li>

              <li>Saved "Teaching Excellence"</li>

            </ul>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Profile;