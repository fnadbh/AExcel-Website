import "./AboutIntro.css";

function AboutIntro() {
  return (
    <>
      {/* ABOUT INTRO */}
      <section className="about-intro">

        <div className="about-container">

          <div className="about-header">

            <span className="about-label">
              ABOUT ÆXCEL
            </span>

            <h1>
              Centre for Academic Excellence
            </h1>

            <p className="about-lead">
              Advancing excellence in teaching, learning, assessment,
              curriculum innovation and academic capability development
              across i-CATS University College.
            </p>

          </div>

          <div className="about-grid">

            {/* LEFT */}

            <div className="about-left">

              <h2>Who We Are</h2>

              <p>
                <strong>ÆXcel (Centre for Academic Excellence)</strong>
                {" "}serves as the University's strategic academic centre
                dedicated to enhancing excellence in teaching, learning,
                assessment and academic capability
                development.
              </p>

              <p>
                Working closely with faculties and centres,
                ÆXcel promotes evidence-informed teaching,
                innovative pedagogical practices,
                professional development and responsible integration
                of Artificial Intelligence to improve educational
                quality throughout the University.
              </p>

            </div>

            {/* RIGHT */}

            <div className="about-right">

              <div className="motto-card">

                <h3>
                  Elevating
                  <br />
                  Educators.
                </h3>

                <div className="card-divider"></div>

                <h3>
                  Empowering
                  <br />
                  Learners.
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VISION & MISSION */}

      <section className="vision-mission">

        <div className="vision-container">

          <div className="vision-card">

            <span>VISION</span>

            <p>
              To be the driving force behind a culture of academix excellence
              in teaching and learning at i-CATS University College.
            </p>

          </div>

          <div className="vision-card">

            <span>MISSION</span>

            <p>
              To continuously elevate the level of academic excellence
              in teaching and learning through capability development, evidence-based
              assessment, adn AI Literacy.
            </p>

          </div>

        </div>

      </section>
    </>
  );
}

export default AboutIntro;