import "./Analytics.css";

function Analytics() {
  return (
    <section className="analytics-page">

      <div className="analytics-container">

        <span className="page-label">
          ADMIN PANEL
        </span>

        <h1>
          Forum Analytics
        </h1>

        <p>
          Monitor engagement, participation and activity across the
          ÆXcel Academic Forum.
        </p>

        {/* Overview */}

        <div className="analytics-grid">

          <div className="analytics-card">
            <h2>126</h2>
            <span>Visitors Today</span>
          </div>

          <div className="analytics-card">
            <h2>2,481</h2>
            <span>Visitors This Month</span>
          </div>

          <div className="analytics-card">
            <h2>248</h2>
            <span>Total Discussions</span>
          </div>

          <div className="analytics-card">
            <h2>931</h2>
            <span>Total Comments</span>
          </div>

        </div>

        {/* Top Contributors */}

        <div className="analytics-section">

          <h2>Top Contributors</h2>

          <table>

            <thead>

              <tr>

                <th>Name</th>

                <th>Faculty</th>

                <th>Posts</th>

                <th>Comments</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Dr Ahmad Fauzi</td>

                <td>Faculty of Business</td>

                <td>18</td>

                <td>67</td>

              </tr>

              <tr>

                <td>Dr Nur Syafiqah</td>

                <td>Faculty of Computing</td>

                <td>15</td>

                <td>53</td>

              </tr>

              <tr>

                <td>Mr Daniel Lim</td>

                <td>Centre for Academic Excellence</td>

                <td>9</td>

                <td>28</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Popular Discussions */}

        <div className="analytics-section">

          <h2>Most Popular Discussions</h2>

          <table>

            <thead>

              <tr>

                <th>Discussion</th>

                <th>Likes</th>

                <th>Comments</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Using AI to Improve Assessment</td>

                <td>86</td>

                <td>34</td>

              </tr>

              <tr>

                <td>Curriculum Review</td>

                <td>72</td>

                <td>29</td>

              </tr>

              <tr>

                <td>Teaching Strategies for Gen Z</td>

                <td>64</td>

                <td>25</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Faculty Activity */}

        <div className="analytics-section">

          <h2>Faculty Participation</h2>

          <table>

            <thead>

              <tr>

                <th>Faculty</th>

                <th>Members</th>

                <th>Posts</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Faculty of Business</td>

                <td>18</td>

                <td>73</td>

              </tr>

              <tr>

                <td>Faculty of Computing</td>

                <td>15</td>

                <td>61</td>

              </tr>

              <tr>

                <td>Centre for Academic Excellence</td>

                <td>10</td>

                <td>39</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default Analytics;