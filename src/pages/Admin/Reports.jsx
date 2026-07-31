import "./Reports.css";

function Reports() {
  return (
    <section className="reports-page">

      <div className="reports-container">

        <span className="page-label">
          ADMIN PANEL
        </span>

        <h1>
          Reported Posts
        </h1>

        <p>
          Review discussions reported by forum members and determine
          the appropriate moderation action.
        </p>

        <div className="reports-table">

          <table>

            <thead>

              <tr>

                <th>Discussion</th>

                <th>Reported By</th>

                <th>Reason</th>

                <th>Date</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Teaching with AI</td>

                <td>Dr Nur Syafiqah</td>

                <td>Inappropriate Language</td>

                <td>Today</td>

                <td>

                  <button className="view-btn">
                    View
                  </button>

                  <button className="dismiss-btn">
                    Dismiss
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

                <td>Assessment Rubrics</td>

                <td>Dr Ahmad Fauzi</td>

                <td>Misinformation</td>

                <td>Yesterday</td>

                <td>

                  <button className="view-btn">
                    View
                  </button>

                  <button className="dismiss-btn">
                    Dismiss
                  </button>

                  <button className="hide-btn">
                    Hide
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default Reports;