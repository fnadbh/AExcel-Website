import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { Link } from "react-router-dom";

import news from "../data/news";

import "./NewsInsights.css";

function NewsInsights() {

  const featuredNews = news
    .filter((article) => article.featured)
    .slice(0, 2);

  return (

    <>

      <Navbar />

      <main className="news-page">

        <div className="news-content">

          {/* ==========================================
              HERO
          ========================================== */}

          <section className="news-hero">

            <span className="section-subtitle">

              NEWS & INSIGHTS

            </span>

            <h1>

              Latest Updates

            </h1>

            <p>

              Stay informed with the latest workshops,
              achievements, educational innovations and
              activities organised by the Centre for
              Academic Excellence.

            </p>

          </section>

          {/* ==========================================
              FEATURED NEWS
          ========================================== */}

          <section className="featured-news">

            {featuredNews.map((article) => (

              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="news-tile"
              >

                <img
                  src={article.image}
                  alt={article.title}
                />

                <div className="news-body">

                  <span className="news-date">

                    {article.displayDate}

                  </span>

                  <h2>

                    {article.title}

                  </h2>

                  <p>

                    {article.excerpt}

                  </p>

                  <span className="read-more">

                    Continue Reading →

                  </span>

                </div>

              </Link>

            ))}

          </section>

        </div>

      </main>

      <Footer />

    </>

  );

}

export default NewsInsights;