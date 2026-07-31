import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import programmes from "../data/programmes";
import "./Programmes.css";

function Programmes() {

  // ==========================================
  // FEATURED PROGRAMME
  // ==========================================

  const featuredProgramme = programmes[0];

  return (

    <>

      <Navbar />

      <main className="programmes-page">

        <div className="programmes-content">

          {/* ==========================================
              HERO
          ========================================== */}

          <section className="programmes-hero">

            <span className="section-subtitle">

              PROGRAMMES

            </span>

            <p>

              Explore workshops, seminars and professional
              development programmes organised by the Centre
              for Academic Excellence. Registration details
              and event information will be updated regularly.

            </p>

          </section>

          {/* ==========================================
              FEATURED PROGRAMME
          ========================================== */}

          <section className="featured-programme">

            <h2>

              Featured Programme

            </h2>

            <div className="programme-card">

              {/* Poster */}

              <div className="programme-image">

                <img
                  src={featuredProgramme.poster}
                  alt={featuredProgramme.title}
                />

              </div>

              {/* Details */}

              <div className="programme-info">

                <h3>

                  {featuredProgramme.title}

                </h3>

                <p>

                  {featuredProgramme.description}

                </p>

                <div className="programme-meta">

                  <p>

                    <strong>Date:</strong>{" "}
                    {featuredProgramme.date}

                  </p>

                  <p>

                    <strong>Time:</strong>{" "}
                    {featuredProgramme.time}

                  </p>

                  <p>

                    <strong>Venue:</strong>{" "}
                    {featuredProgramme.venue}

                  </p>

                  <p>

                    <strong>Target Participants:</strong>{" "}
                    {featuredProgramme.participants}

                  </p>

                </div>

               <div className="register-section">

  <strong>

    Registration Link:

  </strong>

  <a
    href={featuredProgramme.register}
    target="_blank"
    rel="noopener noreferrer"
    className="register-link"
  >

    {featuredProgramme.register}

  </a>

</div>
              </div>

            </div>

          </section>

          {/* ==========================================
              COMING SOON
          ========================================== */}

          <section className="coming-soon">

            <div className="coming-icon">

              📢

            </div>

            <h2>

              More Programmes Coming Soon

            </h2>

            <p>

              Stay tuned for more workshops,
              seminars and professional development
              programmes organised by the Centre
              for Academic Excellence.

            </p>

          </section>

        </div>

      </main>

      <Footer />

    </>

  );

}

export default Programmes;