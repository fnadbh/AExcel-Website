import "./LatestSection.css";
import { Link } from "react-router-dom";

import programmes from "../../data/programmes";
import news from "../../data/news";

function LatestSection() {

  const latestProgrammes = programmes.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (

    <section className="latest-section">

      <div className="latest-container">

        {/* ==========================================
            SECTION TITLE
        ========================================== */}

        <div className="latest-main-header">

          <h2>

            Latest from ÆXcel

          </h2>

        </div>

        {/* ==========================================
            TWO COLUMNS
        ========================================== */}

        <div className="latest-grid">

          {/* ==========================================
              PROGRAMMES
          ========================================== */}

          <div className="latest-column">

            <div className="column-header">

              <h3>

                Programmes

              </h3>

              <Link to="/programmes">

                View All →

              </Link>

            </div>

            {latestProgrammes.length > 0 ? (

              latestProgrammes.map((programme) => (

                <Link
                  key={programme.id}
                  to="/programmes"
                  className="latest-item"
                >

                  <div className="date-box">

                    <span>

                      {programme.day}

                    </span>

                    <small>

                      {programme.month}

                    </small>

                  </div>

                  <div className="item-content">

                    <h4>

                      {programme.title}

                    </h4>

                    <p>

                      {programme.time} • {programme.venue}

                    </p>

                  </div>

                </Link>

              ))

            ) : (

              <div className="empty-card">

                <p>

                  No programmes available.

                </p>

              </div>

            )}

          </div>

          {/* ==========================================
              NEWS
          ========================================== */}

          <div className="latest-column">

            <div className="column-header">

              <h3>

                News & Insights

              </h3>

              <Link to="/news-insights">

                View All →

              </Link>

            </div>

            {latestNews.length > 0 ? (

              latestNews.map((article) => (

                <Link
                  key={article.id}
                  to="/news-insights"
                  className="news-item"
                >

                  {article.image ? (

                    <img
                      src={article.image}
                      alt={article.title}
                    />

                  ) : (

                    <div className="news-placeholder">

                      Coming
                      <br />
                      Soon

                    </div>

                  )}

                  <div className="news-content">

                    <h4>

                      {article.title}

                    </h4>

                    <span>

                      {article.displayDate}

                    </span>

                  </div>

                </Link>

              ))

            ) : (

              <div className="empty-card">

                <p>

                  No news available.

                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>

  );

}

export default LatestSection;