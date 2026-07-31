import "./ManagePosts.css";

function ManagePosts() {
  return (
    <section className="manage-posts">

      <div className="manage-container">

        <span className="page-label">
          ADMIN PANEL
        </span>

        <h1>
          Manage Posts
        </h1>

        <p>
          Review, moderate and manage discussions published in the
          ÆXcel Academic Forum.
        </p>

        <div className="search-row">

          <input
            type="text"
            placeholder="Search discussions..."
          />

        </div>

        <table>

          <thead>

            <tr>

              <th>Discussion</th>

              <th>Author</th>

              <th>Date</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Using AI to Improve Assessment</td>

              <td>Dr Ahmad Fauzi</td>

              <td>Today</td>

              <td>
                <span className="status active">
                  Active
                </span>
              </td>

              <td>

                <button className="view-btn">
                  View
                </button>

                <button className="hide-btn">
                  Hide
                </button>

                <button className="delete-btn">
                  Delete
                </button>

              </td>

            </tr>

            <tr>

              <td>OBE Curriculum Review</td>

              <td>Dr Nur Syafiqah</td>

              <td>Yesterday</td>

              <td>
                <span className="status hidden">
                  Hidden
                </span>
              </td>

              <td>

                <button className="view-btn">
                  View
                </button>

                <button className="hide-btn">
                  Restore
                </button>

                <button className="delete-btn">
                  Delete
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default ManagePosts;