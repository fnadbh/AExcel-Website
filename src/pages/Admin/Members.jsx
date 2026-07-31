import "./Members.css";

function Members() {
  return (
    <section className="members-page">

      <div className="members-container">

        <span className="page-label">
          ADMIN PANEL
        </span>

        <h1>
          Members
        </h1>

        <p>
          View forum members and monitor their activity within the
          ÆXcel Academic Forum.
        </p>

        <div className="members-toolbar">

          <input
            type="text"
            placeholder="Search member..."
          />

        </div>

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Faculty</th>

              <th>Posts</th>

              <th>Comments</th>

              <th>Last Active</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Dr Ahmad Fauzi</td>

              <td>Faculty of Business</td>

              <td>18</td>

              <td>67</td>

              <td>Today</td>

              <td>
                <span className="status active">
                  Active
                </span>
              </td>

            </tr>

            <tr>

              <td>Dr Nur Syafiqah</td>

              <td>Faculty of Computing</td>

              <td>9</td>

              <td>24</td>

              <td>Yesterday</td>

              <td>
                <span className="status active">
                  Active
                </span>
              </td>

            </tr>

            <tr>

              <td>Mr Daniel Lim</td>

              <td>Centre for Academic Excellence</td>

              <td>3</td>

              <td>8</td>

              <td>5 days ago</td>

              <td>
                <span className="status inactive">
                  Inactive
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default Members;