import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">

          <p className="hero-tag">
            Ideas. Evidence. Impact.
          </p>

          <h2 className="hero-title">
              Shaping the Future of
              <br />
              Teaching and Learning.
          </h2>

          <p className="hero-description">
            Thought leadership and practical insights to elevate
            academic excellence.
          </p>

          <button className="hero-btn">
            Read the Latest Insight →
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;