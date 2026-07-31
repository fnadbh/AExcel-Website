import "./FeaturedInsight.css";

function FeaturedInsight() {
  return (
    <section className="featured-wrapper">

      <div className="featured-card">

        <div className="featured-left">

          <span className="featured-tag">
            FEATURED INSIGHT
          </span>

          <h2>
            AI Literacy:Preparing Educators for the Future of Learning
          </h2>

          <div className="featured-meta">
            <span>ÆXcel Editorial Team</span>
            <span>21 May 2026</span>
          </div>

          <p>
            Artificial intelligence is rapidly reshaping higher
            education. As educators navigate new opportunities
            and challenges, AI literacy has become a critical
            capability for effective, ethical and innovative
            teaching practice.
          </p>

          <button className="article-btn">
            Read Full Article →
          </button>

        </div>

        <div className="featured-right">
          <img
            src="/images/ai-placeholder.jpg"
            alt="AI Literacy"
          />
        </div>

      </div>

    </section>
  );
}

export default FeaturedInsight;